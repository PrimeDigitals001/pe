'use client';

import React, { useEffect, useMemo, useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useAuth } from '../../hooks/useAuth';
import styles from '../../styles.module.css';
import qStyles from '../quotes.module.css';
import QuoteDocument from '@/lib/pdf/QuoteDocument.jsx';
import { formatQuoteIdForDisplay } from '@/lib/formatQuoteId.js';

const PDFViewer = dynamic(
  () => import('@react-pdf/renderer').then((m) => m.PDFViewer),
  { ssr: false, loading: () => <div className={qStyles.pdfPlaceholder}>Loading preview…</div> }
);

function rupees(n) {
  return `₹${Number(n || 0).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

export default function AdminQuoteEditorPage() {
  const { id } = useParams();
  const router = useRouter();
  const { getPassword } = useAuth();

  const [quote, setQuote] = useState(null);
  const [previewQuote, setPreviewQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [toast, setToast] = useState(null);
  const [saving, setSaving] = useState(false);
  const [sending, setSending] = useState(false);
  const [revising, setRevising] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        const pw = getPassword();
        const res = await fetch(`/api/quotes/${id}?adminPassword=${encodeURIComponent(pw)}`);
        const data = await res.json();
        if (cancelled) return;
        if (!data.success) throw new Error(data.error || 'Failed to load');
        setQuote(data.quote);
        setPreviewQuote(data.quote);
      } catch (e) {
        if (!cancelled) setError(e.message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  function refreshPreview() {
    setPreviewQuote(quote);
    setShowPreview(true);
  }

  const totals = useMemo(() => {
    if (!quote) return { subTotal: 0, discount: 0, tax: 0, grand: 0 };
    let subTotal = 0, discount = 0, tax = 0;
    for (const it of quote.items || []) {
      const qty = Number(it.quantity) || 0;
      const rate = it.unitPrice != null && it.unitPrice !== '' ? Number(it.unitPrice) : 0;
      const disc = Number(it.discountPct) || 0;
      const taxPct = Number(it.taxPct) || 0;
      const gross = qty * rate;
      const discAmt = gross * (disc / 100);
      const afterDisc = gross - discAmt;
      const taxAmt = afterDisc * (taxPct / 100);
      subTotal += gross;
      discount += discAmt;
      tax += taxAmt;
    }
    return { subTotal, discount, tax, grand: subTotal - discount + tax };
  }, [quote]);

  const updateItem = (idx, key, value) => {
    setQuote((prev) => {
      const items = [...prev.items];
      items[idx] = { ...items[idx], [key]: value };
      return { ...prev, items };
    });
  };

  const updateField = (key, value) => {
    setQuote((p) => ({ ...p, [key]: value }));
  };

  async function handleSave() {
    setSaving(true);
    setToast(null);
    try {
      const pw = getPassword();
      const res = await fetch(`/api/quotes/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          adminPassword: pw,
          subject: quote.subject,
          supplierGstin: quote.supplierGstin,
          validityDays: Number(quote.validityDays) || 15,
          validTill: quote.validTill || null,
          paymentTerms: quote.paymentTerms,
          deliveryTerms: quote.deliveryTerms,
          remarks: quote.remarks,
          preparedByName: quote.preparedByName,
          preparedByRole: quote.preparedByRole,
          preparedByPhone: quote.preparedByPhone,
          items: quote.items.map((it) => ({
            id: it.id,
            description: it.description,
            itemCode: it.itemCode,
            hsnCode: it.hsnCode,
            quantity: it.quantity,
            unit: it.unit,
            grade: it.grade,
            packaging: it.packaging,
            unitPrice: it.unitPrice,
            discountPct: it.discountPct,
            taxPct: it.taxPct,
          })),
        }),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.error || 'Save failed');
      setQuote(data.quote);
      setToast({ type: 'success', msg: 'Draft saved.' });
    } catch (e) {
      setToast({ type: 'error', msg: e.message });
    } finally {
      setSaving(false);
    }
  }

  async function handleSend() {
    if (!confirm(`Send final quote ${id} to ${quote.customerEmail}? This cannot be undone.`)) return;
    setSending(true);
    setToast(null);
    try {
      const pw = getPassword();
      const saveRes = await fetch(`/api/quotes/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          adminPassword: pw,
          subject: quote.subject,
          supplierGstin: quote.supplierGstin,
          validityDays: Number(quote.validityDays) || 15,
          validTill: quote.validTill || null,
          paymentTerms: quote.paymentTerms,
          deliveryTerms: quote.deliveryTerms,
          remarks: quote.remarks,
          preparedByName: quote.preparedByName,
          preparedByRole: quote.preparedByRole,
          preparedByPhone: quote.preparedByPhone,
          items: quote.items.map((it) => ({
            id: it.id,
            description: it.description,
            itemCode: it.itemCode,
            hsnCode: it.hsnCode,
            quantity: it.quantity,
            unit: it.unit,
            grade: it.grade,
            packaging: it.packaging,
            unitPrice: it.unitPrice,
            discountPct: it.discountPct,
            taxPct: it.taxPct,
          })),
        }),
      });
      const saveData = await saveRes.json();
      if (!saveData.success) throw new Error(saveData.error || 'Save failed before send');

      const res = await fetch(`/api/quotes/${id}/send`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ adminPassword: pw }),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.error || 'Send failed');

      setQuote(data.quote);
      setToast({ type: 'success', msg: 'Quote sent to customer.' });
    } catch (e) {
      setToast({ type: 'error', msg: e.message });
    } finally {
      setSending(false);
    }
  }

  async function handleRevise() {
    if (!confirm('Create a new editable revision of this quote? The original will stay as-is.')) return;
    setRevising(true);
    setToast(null);
    try {
      const pw = getPassword();
      const res = await fetch(`/api/quotes/${encodeURIComponent(id)}/revise`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ adminPassword: pw }),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.error || 'Revise failed');
      router.push(`/admin/quotes/${encodeURIComponent(data.quote.id)}`);
    } catch (e) {
      setToast({ type: 'error', msg: e.message });
      setRevising(false);
    }
  }

  if (loading) {
    return <div className={qStyles.emptyState}>Loading {id}…</div>;
  }
  if (error || !quote) {
    return (
      <div className={qStyles.emptyState}>
        {error || 'Not found'}<br />
        <Link href="/admin/quotes">← Back to Quotes</Link>
      </div>
    );
  }

  const isSent = quote.status === 'SENT';

  return (
    <>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>
          {formatQuoteIdForDisplay(quote.parentId || quote.id, quote.revision)}
        </h1>
        <div className={qStyles.metaRow}>
          <span><strong>Status:</strong> {quote.status}</span>
          <span><strong>Customer:</strong> {quote.customerName} — {quote.customerCompany}</span>
          <span><strong>Received:</strong> {new Date(quote.createdAt).toLocaleString('en-IN')}</span>
          {quote.sentAt ? (
            <span><strong>Sent:</strong> {new Date(quote.sentAt).toLocaleString('en-IN')}</span>
          ) : null}
        </div>
      </div>

      {toast ? (
        <div className={`${qStyles.toast} ${toast.type === 'success' ? qStyles.toastSuccess : qStyles.toastError}`}>
          {toast.msg}
        </div>
      ) : null}

      <div className={qStyles.editorShell}>
        {/* Left: editable fields */}
        <div className={qStyles.editorPane}>
          <div className={qStyles.sectionLabel}>Customer</div>
          <div className={qStyles.infoRow}><strong>Name</strong><span>{quote.customerName}</span></div>
          <div className={qStyles.infoRow}><strong>Company</strong><span>{quote.customerCompany}</span></div>
          <div className={qStyles.infoRow}><strong>Email</strong><span>{quote.customerEmail}</span></div>
          <div className={qStyles.infoRow}><strong>Phone</strong><span>{quote.customerPhone}</span></div>
          {quote.customerGstin ? (
            <div className={qStyles.infoRow}><strong>GSTIN</strong><span>{quote.customerGstin}</span></div>
          ) : null}
          <div className={qStyles.infoRow}>
            <strong>Delivery</strong>
            <span>{quote.deliveryCity}, {quote.deliveryState} — {quote.deliveryPincode}</span>
          </div>
          {quote.requiredBy ? (
            <div className={qStyles.infoRow}><strong>Required by</strong><span>{new Date(quote.requiredBy).toLocaleDateString('en-IN')}</span></div>
          ) : null}
          {quote.notes ? (
            <div className={qStyles.infoRow}><strong>Notes</strong><span>{quote.notes}</span></div>
          ) : null}

          <div className={qStyles.sectionLabel}>Quote Meta</div>
          <div>
            <label className={qStyles.fieldLabel}>Subject line (shown below customer details)</label>
            <input type="text" disabled={isSent}
              className={qStyles.input}
              value={quote.subject ?? ''}
              onChange={(e) => updateField('subject', e.target.value)}
              placeholder="e.g. quotation for chemical supply" />
          </div>
          <div className={qStyles.itemFields} style={{ marginTop: 12 }}>
            <div>
              <label className={qStyles.fieldLabel}>Prepared By — Name</label>
              <input type="text" disabled={isSent}
                className={qStyles.input}
                value={quote.preparedByName ?? ''}
                onChange={(e) => updateField('preparedByName', e.target.value)} />
            </div>
            <div>
              <label className={qStyles.fieldLabel}>Role</label>
              <input type="text" disabled={isSent}
                className={qStyles.input}
                value={quote.preparedByRole ?? ''}
                onChange={(e) => updateField('preparedByRole', e.target.value)}
                placeholder="Sales" />
            </div>
            <div>
              <label className={qStyles.fieldLabel}>Mobile No.</label>
              <input type="text" disabled={isSent}
                className={qStyles.input}
                value={quote.preparedByPhone ?? ''}
                onChange={(e) => updateField('preparedByPhone', e.target.value)}
                placeholder="63581 85076" />
            </div>
          </div>
          <div style={{ marginTop: 12 }}>
            <label className={qStyles.fieldLabel}>Valid Till (optional — overrides "Validity days")</label>
            <input type="date" disabled={isSent}
              className={qStyles.input}
              value={quote.validTill ? new Date(quote.validTill).toISOString().slice(0, 10) : ''}
              onChange={(e) => updateField('validTill', e.target.value || null)} />
          </div>

          <div className={qStyles.sectionLabel}>Items & Pricing</div>
          {quote.items.map((it, idx) => (
            <div key={it.id} className={qStyles.itemRow}>
              <div className={qStyles.itemHeader}>
                <span className={qStyles.itemName}>{it.productName}</span>
                <span className={qStyles.itemQty}>
                  {it.quantity} {it.unit}{it.grade ? ` · ${it.grade}` : ''}{it.packaging ? ` · ${it.packaging}` : ''}
                </span>
              </div>

              <div style={{ marginBottom: 10 }}>
                <label className={qStyles.fieldLabel}>Description (shown under product name in PDF)</label>
                <input type="text" disabled={isSent}
                  className={qStyles.input}
                  value={it.description ?? ''}
                  onChange={(e) => updateItem(idx, 'description', e.target.value)}
                  placeholder="e.g. supply and fixing of chemical XYZ" />
              </div>

              <div className={qStyles.itemFields} style={{ marginBottom: 10 }}>
                <div>
                  <label className={qStyles.fieldLabel}>Item Code (optional)</label>
                  <input type="text" disabled={isSent}
                    className={qStyles.input}
                    value={it.itemCode ?? ''}
                    onChange={(e) => updateItem(idx, 'itemCode', e.target.value)} />
                </div>
                <div>
                  <label className={qStyles.fieldLabel}>HSN Code</label>
                  <input type="text" disabled={isSent}
                    className={qStyles.input}
                    value={it.hsnCode ?? ''}
                    onChange={(e) => updateItem(idx, 'hsnCode', e.target.value)}
                    placeholder="e.g. 28092010" />
                </div>
                <div></div>
              </div>

              <div className={qStyles.itemFields}>
                <div>
                  <label className={qStyles.fieldLabel}>Rate (₹ per {it.unit})</label>
                  <input type="number" min="0" step="0.01" disabled={isSent}
                    className={qStyles.input}
                    value={it.unitPrice ?? ''}
                    onChange={(e) => updateItem(idx, 'unitPrice', e.target.value)}
                    placeholder="0.00" />
                </div>
                <div>
                  <label className={qStyles.fieldLabel}>Discount (%)</label>
                  <input type="number" min="0" max="100" step="0.01" disabled={isSent}
                    className={qStyles.input}
                    value={it.discountPct ?? 0}
                    onChange={(e) => updateItem(idx, 'discountPct', e.target.value)} />
                </div>
                <div>
                  <label className={qStyles.fieldLabel}>GST (%)</label>
                  <input type="number" min="0" max="50" step="0.01" disabled={isSent}
                    className={qStyles.input}
                    value={it.taxPct ?? 18}
                    onChange={(e) => updateItem(idx, 'taxPct', e.target.value)} />
                </div>
              </div>
            </div>
          ))}

          <div className={qStyles.sectionLabel}>Commercial Terms</div>
          <div className={qStyles.itemFields}>
            <div>
              <label className={qStyles.fieldLabel}>Supplier GSTIN</label>
              <input type="text" disabled={isSent}
                className={qStyles.input}
                value={quote.supplierGstin ?? ''}
                onChange={(e) => updateField('supplierGstin', e.target.value)}
                placeholder="24AAAAA0000A1Z5" />
            </div>
            <div>
              <label className={qStyles.fieldLabel}>Validity (days)</label>
              <input type="number" min="1" disabled={isSent}
                className={qStyles.input}
                value={quote.validityDays ?? 15}
                onChange={(e) => updateField('validityDays', e.target.value)} />
            </div>
          </div>
          <div style={{ marginTop: 12 }}>
            <label className={qStyles.fieldLabel}>Payment Terms</label>
            <input type="text" disabled={isSent}
              className={qStyles.input}
              value={quote.paymentTerms ?? ''}
              onChange={(e) => updateField('paymentTerms', e.target.value)} />
          </div>
          <div style={{ marginTop: 12 }}>
            <label className={qStyles.fieldLabel}>Delivery Terms</label>
            <input type="text" disabled={isSent}
              className={qStyles.input}
              value={quote.deliveryTerms ?? ''}
              onChange={(e) => updateField('deliveryTerms', e.target.value)} />
          </div>
          <div style={{ marginTop: 12 }}>
            <label className={qStyles.fieldLabel}>Remarks / Additional Notes</label>
            <textarea rows={3} disabled={isSent}
              className={qStyles.textarea}
              value={quote.remarks ?? ''}
              onChange={(e) => updateField('remarks', e.target.value)}
              placeholder="Any additional notes for the customer..." />
          </div>

          <div className={qStyles.totalsBox}>
            <div className={qStyles.totalRow}><span>Sub Total</span><span>{rupees(totals.subTotal)}</span></div>
            {totals.discount > 0 ? (
              <div className={qStyles.totalRow}><span>Discount</span><span>- {rupees(totals.discount)}</span></div>
            ) : null}
            {totals.tax > 0 ? (
              <div className={qStyles.totalRow}><span>GST</span><span>{rupees(totals.tax)}</span></div>
            ) : null}
            <div className={`${qStyles.totalRow} ${qStyles.totalRowFinal}`}>
              <span>Total</span><span>{rupees(totals.grand)}</span>
            </div>
          </div>

          <div className={qStyles.actionBar}>
            <Link href="/admin/quotes" className={qStyles.btnSecondary}>← Back</Link>
            <button className={qStyles.btnSecondary} onClick={refreshPreview} disabled={saving || sending}>
              {showPreview ? 'Refresh Preview' : 'Preview PDF'}
            </button>
            <a
              className={qStyles.btnSecondary}
              href={`/api/quotes/${encodeURIComponent(id)}/pdf?adminPassword=${encodeURIComponent(getPassword())}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download PDF
            </a>
            {!isSent ? (
              <>
                <button className={qStyles.btnPrimary} onClick={handleSave} disabled={saving || sending}>
                  {saving ? 'Saving…' : 'Save Draft'}
                </button>
                <button className={qStyles.btnSuccess} onClick={handleSend} disabled={saving || sending || totals.grand <= 0}>
                  {sending ? 'Sending…' : 'Send to Customer'}
                </button>
              </>
            ) : (
              <>
                <span style={{ color: '#16a34a', fontWeight: 600, fontSize: 14, alignSelf: 'center', marginRight: 12 }}>
                  ✓ Sent
                </span>
                <button className={qStyles.btnPrimary} onClick={handleRevise} disabled={revising}>
                  {revising ? 'Creating…' : 'Create Revision'}
                </button>
              </>
            )}
          </div>
        </div>

        {/* Right: PDF preview (on demand) */}
        <div className={qStyles.pdfPane}>
          {showPreview && previewQuote ? (
            <PDFViewer showToolbar={false} style={{ width: '100%', height: 780, border: 0 }}>
              <QuoteDocument quote={previewQuote} />
            </PDFViewer>
          ) : (
            <div className={qStyles.pdfPlaceholder}>
              Fill in the prices and terms, then click<br />
              <strong>&ldquo;Preview PDF&rdquo;</strong> to see how the quote will look.
            </div>
          )}
        </div>
      </div>
    </>
  );
}
