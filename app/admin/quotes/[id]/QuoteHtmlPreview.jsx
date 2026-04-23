'use client';

import React from 'react';
import { formatQuoteIdForDisplay } from '@/lib/formatQuoteId.js';
import styles from './quoteHtmlPreview.module.css';

const SUPPLIER = {
  name: 'PATEL ENTERPRISE',
  addressLines: [
    'Plot No - 107, GIDC - Narmada Nagar,',
    'Behind Apex Hotel, Bharuch — 392015,',
    'Gujarat, India',
  ],
  phone: '+91 73599 51901',
  email: 'meet.patel@patelenterprise.co',
  website: 'www.patelenterprise.co',
};

function formatINR(n) {
  if (n == null || Number.isNaN(n)) return '';
  return Number(n).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function formatDate(d) {
  if (!d) return '';
  return new Date(d).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
}

function amountToWords(n) {
  if (!n) return '';
  const rupees = Math.round(Number(n));
  if (rupees === 0) return 'INR Zero';
  return 'INR ' + numToWords(rupees);
}

function numToWords(num) {
  if (num === 0) return 'Zero';
  const ones = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten',
    'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
  const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

  function under1000(n) {
    if (n < 20) return ones[n];
    if (n < 100) return tens[Math.floor(n / 10)] + (n % 10 ? ' ' + ones[n % 10] : '');
    return ones[Math.floor(n / 100)] + ' Hundred' + (n % 100 ? ' ' + under1000(n % 100) : '');
  }

  const crore = Math.floor(num / 10000000);
  num %= 10000000;
  const lakh = Math.floor(num / 100000);
  num %= 100000;
  const thousand = Math.floor(num / 1000);
  const rest = num % 1000;

  let str = '';
  if (crore) str += under1000(crore) + ' Crore ';
  if (lakh) str += under1000(lakh) + ' Lakh ';
  if (thousand) str += under1000(thousand) + ' Thousand ';
  if (rest) str += under1000(rest);
  return str.trim();
}

export default function QuoteHtmlPreview({ quote }) {
  if (!quote) return null;

  const displayId = formatQuoteIdForDisplay(quote.parentId || quote.id, quote.revision);

  const items = quote.items || [];
  const rows = items.map((it) => {
    const qty = Number(it.quantity) || 0;
    const rate = it.unitPrice != null && it.unitPrice !== '' ? Number(it.unitPrice) : null;
    const disc = Number(it.discountPct) || 0;
    const taxPct = Number(it.taxPct) || 0;
    const gross = rate != null ? qty * rate : null;
    const afterDisc = gross != null ? gross * (1 - disc / 100) : null;
    const taxAmt = afterDisc != null ? afterDisc * (taxPct / 100) : 0;
    const total = afterDisc != null ? afterDisc + taxAmt : null;
    return { ...it, qty, rate, disc, taxPct, gross, afterDisc, taxAmt, total };
  });

  const subtotalAmount = rows.reduce((s, r) => s + (r.afterDisc || 0), 0);
  const totalTax = rows.reduce((s, r) => s + (r.taxAmt || 0), 0);
  const totalAmount = subtotalAmount + totalTax;
  const netAmount = Math.round(totalAmount);

  const validTillText = quote.validTill
    ? formatDate(quote.validTill)
    : (quote.validityDays
        ? formatDate(new Date(new Date(quote.createdAt || Date.now()).getTime() + quote.validityDays * 864e5))
        : '');

  return (
    <div className={styles.sheet}>
      {/* Logo */}
      <div className={styles.logoWrap}>
        <img src="/images/logo.png" alt="Patel Enterprise" className={styles.logo} />
      </div>

      {/* Header 2-col grid */}
      <div className={styles.headerTable}>
        <div className={styles.headerLeft}>
          <div className={styles.customerLabel}>Customer :-</div>
          <div className={`${styles.kvLine} ${styles.kvBold}`}>{quote.customerCompany}</div>
          <div className={styles.kvLine}>
            {quote.deliveryCity}, {quote.deliveryState} — {quote.deliveryPincode}
          </div>
          <div className={styles.kvLine}>
            <span className={styles.kvBold}>Kind Atten. :- </span>{quote.customerName}
          </div>
          <div className={styles.kvLine}>
            <span className={styles.kvBold}>Email :- </span>{quote.customerEmail}
          </div>
          <div className={styles.kvLine}>
            <span className={styles.kvBold}>Contact No. :- </span>{quote.customerPhone}
          </div>
          {quote.customerGstin ? (
            <div className={styles.kvLine}>
              <span className={styles.kvBold}>GSTIN :- </span>{quote.customerGstin}
            </div>
          ) : null}
        </div>

        <div className={styles.headerRight}>
          <div className={styles.kvRow}>
            <span className={styles.kvLabel}>Date</span>
            <span className={styles.kvValue}>: {formatDate(quote.createdAt || new Date())}</span>
          </div>
          <div className={styles.kvRow}>
            <span className={styles.kvLabel}>Quotation No.</span>
            <span className={styles.kvValue}>: {displayId}</span>
          </div>
          <div className={styles.kvRow}>
            <span className={styles.kvLabel}>Valid Till</span>
            <span className={styles.kvValue}>: {validTillText}</span>
          </div>
          <div className={styles.kvRow}>
            <span className={styles.kvLabel}>Prepared By</span>
            <span className={styles.kvValue}>: {quote.preparedByName || 'Puja Parmar'}</span>
          </div>
        </div>
      </div>

      {/* Subject */}
      <div className={styles.subjectRow}>
        {quote.subject?.trim() || 'Quotation for requested materials'}
      </div>

      {/* Items table */}
      <div className={styles.itemsTableWrap}>
        <table className={styles.itemsTable}>
          <thead>
            <tr>
              <th>Sr No.</th>
              <th>Item Code / Description</th>
              <th>Quantity</th>
              <th>Rate</th>
              <th>Amount (INR)</th>
              <th>Tax</th>
              <th>Tax Amount</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={r.id || i}>
                <td>{i + 1}</td>
                <td>
                  <div className={styles.itemTitle}>{r.productName}</div>
                  {r.description ? <div className={styles.itemSub}>{r.description}</div> : null}
                  {(r.grade || r.packaging) ? (
                    <div className={styles.itemSub}>
                      {[r.grade, r.packaging].filter(Boolean).join(' · ')}
                    </div>
                  ) : null}
                  {r.hsnCode ? <div className={styles.hsn}>HSN Code: {r.hsnCode}</div> : null}
                </td>
                <td>{r.qty} {r.unit}</td>
                <td>{r.rate != null ? formatINR(r.rate) : ''}</td>
                <td>{r.afterDisc != null ? formatINR(r.afterDisc) : ''}</td>
                <td>GST@{r.taxPct}%</td>
                <td>{formatINR(r.taxAmt)}</td>
                <td>{r.total != null ? formatINR(r.total) : ''}</td>
              </tr>
            ))}
            <tr className={styles.subtotalTableRow}>
              <td colSpan={4} style={{ textAlign: 'left' }}>Total</td>
              <td>{formatINR(subtotalAmount)}</td>
              <td></td>
              <td>{formatINR(totalTax)}</td>
              <td>{formatINR(totalAmount)}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Totals stack */}
      <div className={styles.totalsStack}>
        <div className={styles.totalLine}>
          <span>Total</span>
          <span>{formatINR(subtotalAmount)}</span>
        </div>
        <div className={styles.totalLine}>
          <span>Tax Amount</span>
          <span>{formatINR(totalTax)}</span>
        </div>
        <div className={`${styles.totalLine} ${styles.totalLineBold}`}>
          <span>Total Amount</span>
          <span>{formatINR(totalAmount)}</span>
        </div>
        <div className={styles.totalLineNet}>
          <span>Net Amount (INR)</span>
          <span>{formatINR(netAmount)}</span>
        </div>
      </div>

      <div className={styles.wordsRow}>
        <span className={styles.wordsLabel}>Amount In Words: </span>
        {amountToWords(netAmount)}
      </div>

      {/* Terms */}
      <div className={styles.termsSection}>
        <div className={styles.termsTitle}>Terms &amp; Conditions</div>
        <div className={styles.termsTable}>
          <div className={styles.termsRow}>
            <div className={styles.termsNum}>1</div>
            <div className={styles.termsKey}>Payment Terms</div>
            <div className={styles.termsVal}>: {quote.paymentTerms}</div>
          </div>
          <div className={styles.termsRow}>
            <div className={styles.termsNum}>2</div>
            <div className={styles.termsKey}>Taxes and Duties</div>
            <div className={styles.termsVal}>
              : Basic Ex works Rate indicated above is Basic supply prices. Applicable Goods and Service Tax (GST) (CGST+SGST/IGST) as indicated per line item will be charged as applicable, dependent on Place of Delivery.
            </div>
          </div>
          <div className={styles.termsRow}>
            <div className={styles.termsNum}>3</div>
            <div className={styles.termsKey}>Delivery Terms</div>
            <div className={styles.termsVal}>: {quote.deliveryTerms}</div>
          </div>
          <div className={styles.termsRow}>
            <div className={styles.termsNum}>4</div>
            <div className={styles.termsKey}>Validity</div>
            <div className={styles.termsVal}>
              : This quotation is valid {validTillText ? `till ${validTillText}` : `for ${quote.validityDays} days from the date of issue`}. Prices are subject to change without prior notice beyond validity.
            </div>
          </div>
          {quote.remarks ? (
            <div className={styles.termsRow}>
              <div className={styles.termsNum}>5</div>
              <div className={styles.termsKey}>Note</div>
              <div className={styles.termsVal}>: {quote.remarks}</div>
            </div>
          ) : null}
        </div>
      </div>

      {/* Signatory */}
      <div className={styles.signature}>
        <div className={styles.signLine}>Thanking You,</div>
        <div className={styles.signCompany}>For, PATEL ENTERPRISE</div>
        <div className={styles.signSpacer} />
        <div className={styles.signName}>{quote.preparedByName || 'Puja Parmar'}</div>
        <div className={styles.signRole}>({quote.preparedByRole || 'Sales'})</div>
        <div className={styles.signPhone}>[ M.No. {quote.preparedByPhone || '63581 85076'} ]</div>
      </div>

      <div className={styles.footer}>
        {SUPPLIER.name} · {SUPPLIER.phone} · {SUPPLIER.email} · {SUPPLIER.website}
      </div>
    </div>
  );
}
