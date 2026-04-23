'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useAuth } from '../hooks/useAuth';
import { formatQuoteIdForDisplay } from '@/lib/formatQuoteId.js';
import styles from '../styles.module.css';
import qStyles from './quotes.module.css';

const STATUS_LABELS = {
  DRAFT: { label: 'Draft', color: '#64748b' },
  PRICED: { label: 'Priced', color: '#2683C6' },
  SENT: { label: 'Sent', color: '#16a34a' },
};

export default function AdminQuotesListPage() {
  const { getPassword } = useAuth();
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filter, setFilter] = useState('');
  const [query, setQuery] = useState('');

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        const pw = getPassword();
        const qs = new URLSearchParams({ adminPassword: pw });
        if (filter) qs.set('status', filter);
        const res = await fetch(`/api/quotes?${qs.toString()}`);
        const data = await res.json();
        if (cancelled) return;
        if (!data.success) throw new Error(data.error || 'Failed to load');
        setQuotes(data.quotes);
      } catch (err) {
        if (!cancelled) setError(err.message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return quotes;
    return quotes.filter((quote) => {
      const haystack = [
        quote.id,
        formatQuoteIdForDisplay(quote.id, quote.revision),
        quote.customerName,
        quote.customerCompany,
        quote.customerEmail,
        quote.customerPhone,
        quote.customerGstin,
        quote.deliveryCity,
        quote.deliveryState,
        quote.deliveryPincode,
      ].filter(Boolean).join(' ').toLowerCase();
      return haystack.includes(q);
    });
  }, [quotes, query]);

  // Group revisions under their parent quote.
  // A "root" is any quote without a parentId. Each root gets its revisions as children.
  const grouped = useMemo(() => {
    const byParent = new Map();
    const roots = [];

    for (const q of filtered) {
      if (q.parentId) {
        if (!byParent.has(q.parentId)) byParent.set(q.parentId, []);
        byParent.get(q.parentId).push(q);
      } else {
        roots.push(q);
      }
    }

    // Also surface orphan revisions whose parent got filtered out by search, so they remain visible
    if (query) {
      const rootIds = new Set(roots.map((r) => r.id));
      for (const [parentId, revs] of byParent) {
        if (!rootIds.has(parentId)) roots.push(...revs);
      }
    }

    return roots.map((r) => ({
      root: r,
      revisions: (byParent.get(r.id) || []).sort((a, b) => a.revision - b.revision),
    }));
  }, [filtered, query]);

  const [expanded, setExpanded] = useState(new Set());
  const toggleRow = (id) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  };

  return (
    <>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Quotes</h1>
        <p className={styles.pageSubtitle}>Manage customer quote requests — price them, send the final PDF.</p>
      </div>

      <div className={qStyles.toolbar}>
        <div className={qStyles.searchWrap}>
          <svg className={qStyles.searchIcon} viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
            <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <input
            type="search"
            className={qStyles.searchInput}
            placeholder="Search by ref, customer, company, email, phone, city…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query && (
            <button
              type="button"
              className={qStyles.searchClear}
              onClick={() => setQuery('')}
              aria-label="Clear search"
            >
              ×
            </button>
          )}
        </div>

        <div className={qStyles.filterBar}>
          <button className={`${qStyles.filterBtn} ${filter === '' ? qStyles.filterBtnActive : ''}`} onClick={() => setFilter('')}>All</button>
          <button className={`${qStyles.filterBtn} ${filter === 'DRAFT' ? qStyles.filterBtnActive : ''}`} onClick={() => setFilter('DRAFT')}>Draft</button>
          <button className={`${qStyles.filterBtn} ${filter === 'PRICED' ? qStyles.filterBtnActive : ''}`} onClick={() => setFilter('PRICED')}>Priced</button>
          <button className={`${qStyles.filterBtn} ${filter === 'SENT' ? qStyles.filterBtnActive : ''}`} onClick={() => setFilter('SENT')}>Sent</button>
        </div>
      </div>

      {query && !loading && !error && (
        <div className={qStyles.resultCount}>
          {filtered.length} of {quotes.length} match &ldquo;{query}&rdquo;
        </div>
      )}

      <div className={styles.tableWrapper}>
        {loading ? (
          <div className={qStyles.emptyState}>Loading quotes…</div>
        ) : error ? (
          <div className={qStyles.emptyState}>{error}</div>
        ) : quotes.length === 0 ? (
          <div className={qStyles.emptyState}>No quotes yet.</div>
        ) : filtered.length === 0 ? (
          <div className={qStyles.emptyState}>No quotes match &ldquo;{query}&rdquo;.</div>
        ) : (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Ref</th>
                <th>Customer</th>
                <th>Company</th>
                <th>Items</th>
                <th>Status</th>
                <th>Received</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {grouped.map(({ root, revisions }) => {
                const meta = STATUS_LABELS[root.status] || STATUS_LABELS.DRAFT;
                const hasRevisions = revisions.length > 0;
                const isOpen = expanded.has(root.id);
                return (
                  <React.Fragment key={root.id}>
                    <tr>
                      <td>
                        {hasRevisions ? (
                          <button
                            type="button"
                            onClick={() => toggleRow(root.id)}
                            className={qStyles.expandBtn}
                            aria-label={isOpen ? 'Collapse revisions' : 'Expand revisions'}
                          >
                            {isOpen ? '▼' : '▶'}
                          </button>
                        ) : null}
                        <strong>{formatQuoteIdForDisplay(root.id, root.revision)}</strong>
                        {hasRevisions && (
                          <span className={qStyles.revCount}> +{revisions.length}</span>
                        )}
                      </td>
                      <td>{root.customerName}</td>
                      <td>{root.customerCompany}</td>
                      <td>{root._count?.items ?? 0}</td>
                      <td>
                        <span className={qStyles.statusPill} style={{ color: meta.color, borderColor: meta.color }}>
                          {meta.label}
                        </span>
                      </td>
                      <td>{new Date(root.createdAt).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}</td>
                      <td>
                        <Link href={`/admin/quotes/${encodeURIComponent(root.id)}`} className={styles.addButton}>Open</Link>
                      </td>
                    </tr>
                    {isOpen && revisions.map((r) => {
                      const rMeta = STATUS_LABELS[r.status] || STATUS_LABELS.DRAFT;
                      return (
                        <tr key={r.id} className={qStyles.revisionRow}>
                          <td>
                            <span className={qStyles.revisionIndent}>↳</span>{' '}
                            <strong>{formatQuoteIdForDisplay(root.id, r.revision)}</strong>
                          </td>
                          <td>{r.customerName}</td>
                          <td>{r.customerCompany}</td>
                          <td>{r._count?.items ?? 0}</td>
                          <td>
                            <span className={qStyles.statusPill} style={{ color: rMeta.color, borderColor: rMeta.color }}>
                              {rMeta.label}
                            </span>
                          </td>
                          <td>{new Date(r.createdAt).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}</td>
                          <td>
                            <Link href={`/admin/quotes/${encodeURIComponent(r.id)}`} className={styles.addButton}>Open</Link>
                          </td>
                        </tr>
                      );
                    })}
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}
