import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import { formatQuoteIdForDisplay } from '../formatQuoteId.js';

const isServer = typeof window === 'undefined';

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

const BORDER = '#000';
const MUTED = '#444';

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#ffffff',
    paddingTop: 32,
    paddingBottom: 56,
    paddingHorizontal: 32,
    fontFamily: 'Helvetica',
    fontSize: 9,
    color: '#000',
  },

  logoWrap: { marginBottom: 20, alignItems: 'flex-start' },
  logo: { width: 150, height: 40, objectFit: 'contain' },

  /* Header grid (2-col table) */
  headerTable: {
    borderTop: `1 solid ${BORDER}`,
    borderLeft: `1 solid ${BORDER}`,
    borderRight: `1 solid ${BORDER}`,
  },
  headerRow: { flexDirection: 'row' },
  headerColLeft: {
    width: '62%',
    borderRight: `1 solid ${BORDER}`,
    borderBottom: `1 solid ${BORDER}`,
    padding: 6,
  },
  headerColRight: {
    width: '38%',
    borderBottom: `1 solid ${BORDER}`,
    padding: 6,
    flexDirection: 'row',
  },
  customerLabel: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 10,
    marginBottom: 4,
    textDecoration: 'underline',
  },
  kvLine: { fontSize: 9, marginBottom: 2 },
  kvBold: { fontFamily: 'Helvetica-Bold' },

  rightKvTable: { width: '100%', flexDirection: 'column' },
  rightKvRow: { flexDirection: 'row', marginBottom: 3 },
  rightKvLabel: { fontFamily: 'Helvetica-Bold', width: 85 },
  rightKvValue: { flex: 1 },

  subjectRow: {
    borderLeft: `1 solid ${BORDER}`,
    borderRight: `1 solid ${BORDER}`,
    borderBottom: `1 solid ${BORDER}`,
    padding: 6,
    fontSize: 9,
    textAlign: 'center',
    fontStyle: 'italic',
    color: MUTED,
  },

  /* Items table */
  itemsTable: {
    borderLeft: `1 solid ${BORDER}`,
    borderRight: `1 solid ${BORDER}`,
    borderBottom: `1 solid ${BORDER}`,
  },
  itemHeaderRow: {
    flexDirection: 'row',
    backgroundColor: '#f4f4f4',
    borderBottom: `1 solid ${BORDER}`,
    fontFamily: 'Helvetica-Bold',
    fontSize: 9,
  },
  itemBodyRow: {
    flexDirection: 'row',
    borderBottom: `1 solid ${BORDER}`,
    fontSize: 9,
  },
  cellBase: { paddingVertical: 5, paddingHorizontal: 6, borderRight: `1 solid ${BORDER}` },
  cellLast: { paddingVertical: 5, paddingHorizontal: 6 },
  colSr:   { width: '5%', textAlign: 'left' },
  colDesc: { width: '30%', textAlign: 'left' },
  colQty:  { width: '10%', textAlign: 'left' },
  colRate: { width: '10%', textAlign: 'left' },
  colAmt:  { width: '12%', textAlign: 'left' },
  colTax:  { width: '12%', textAlign: 'left' },
  colTaxAmt: { width: '10%', textAlign: 'left' },
  colTotal: { width: '11%', textAlign: 'left' },

  itemTitle: { fontFamily: 'Helvetica-Bold', fontSize: 9 },
  itemSub: { fontSize: 8, color: MUTED, marginTop: 1 },
  hsn: { fontFamily: 'Helvetica-Bold', fontSize: 8, marginTop: 2 },

  /* Totals stack (right aligned) */
  subtotalRow: {
    flexDirection: 'row',
    borderLeft: `1 solid ${BORDER}`,
    borderRight: `1 solid ${BORDER}`,
    borderBottom: `1 solid ${BORDER}`,
    fontSize: 9,
    fontFamily: 'Helvetica-Bold',
  },
  subtotalLabel: {
    width: '45%',
    paddingVertical: 5,
    paddingHorizontal: 6,
    borderRight: `1 solid ${BORDER}`,
    textAlign: 'left',
  },
  subtotalQty: { width: '10%', paddingVertical: 5, paddingHorizontal: 6, borderRight: `1 solid ${BORDER}` },
  subtotalRate: { width: '10%', paddingVertical: 5, paddingHorizontal: 6, borderRight: `1 solid ${BORDER}` },
  subtotalAmt: { width: '12%', paddingVertical: 5, paddingHorizontal: 6, textAlign: 'left', borderRight: `1 solid ${BORDER}` },
  subtotalTax: { width: '12%', paddingVertical: 5, paddingHorizontal: 6, borderRight: `1 solid ${BORDER}` },
  subtotalTaxAmt: { width: '10%', paddingVertical: 5, paddingHorizontal: 6, textAlign: 'left', borderRight: `1 solid ${BORDER}` },
  subtotalTotal: { width: '11%', paddingVertical: 5, paddingHorizontal: 6, textAlign: 'left' },

  totalsStack: {
    marginTop: 8,
    alignSelf: 'flex-end',
    width: '48%',
  },
  totalLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 4,
    fontSize: 9,
  },
  totalLineBold: { fontFamily: 'Helvetica-Bold' },
  totalLineNet: {
    borderTop: `1 solid ${BORDER}`,
    borderBottom: `2 solid ${BORDER}`,
    fontFamily: 'Helvetica-Bold',
    fontSize: 10,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 2,
  },

  wordsRow: {
    marginTop: 10,
    fontSize: 9,
  },
  wordsLabel: { fontFamily: 'Helvetica-Bold' },

  /* Terms */
  termsSection: { marginTop: 14 },
  termsTitle: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 10,
    textDecoration: 'underline',
    marginBottom: 4,
  },
  termsTable: {
    border: `1 solid ${BORDER}`,
  },
  termsRow: {
    flexDirection: 'row',
    borderBottom: `1 solid ${BORDER}`,
  },
  termsRowLast: {
    flexDirection: 'row',
  },
  termsNum: {
    width: '5%',
    padding: 5,
    borderRight: `1 solid ${BORDER}`,
    textAlign: 'center',
    fontFamily: 'Helvetica-Bold',
  },
  termsKey: {
    width: '20%',
    padding: 5,
    borderRight: `1 solid ${BORDER}`,
    fontFamily: 'Helvetica-Bold',
  },
  termsVal: {
    width: '75%',
    padding: 5,
    fontSize: 9,
    lineHeight: 1.35,
  },

  /* Signatory block — kept together via wrap={false}, sits after terms on page 1 if it fits */
  signatoryBlock: {
    marginTop: 28,
    paddingTop: 14,
    borderTop: '1 solid #d1d5db',
  },
  thanking: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 10,
    marginBottom: 2,
  },
  forCompany: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 10,
    marginBottom: 30,
  },
  sigName: { fontFamily: 'Helvetica-Bold', fontSize: 10 },
  sigRole: { fontSize: 9 },
  sigPhone: { fontSize: 9, marginTop: 2 },

  /* Footer */
  pageFooter: {
    position: 'absolute',
    bottom: 24,
    right: 32,
    fontSize: 8,
    color: MUTED,
  },
});

function formatINR(n) {
  if (n == null || Number.isNaN(n)) return '';
  return Number(n).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function formatDate(d) {
  if (!d) return '';
  return new Date(d).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
}

/* Indian numbering words — matches "INR Three Lakh Eight Hundred Seventy" style (no "Rupees", no "Only") */
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

/**
 * Resolve logo source.
 * - Server (PDF generation for email): read file from disk, embed as data URL.
 * - Client (PDFViewer live preview): use the public URL so browser fetches it.
 */
function loadLogoDataUrl() {
  if (!isServer) {
    return '/images/logo.png';
  }
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const fs = require('node:fs');
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const path = require('node:path');
    const p = path.join(process.cwd(), 'public', 'images', 'logo.png');
    const buf = fs.readFileSync(p);
    return `data:image/png;base64,${buf.toString('base64')}`;
  } catch {
    return null;
  }
}

export default function QuoteDocument({ quote }) {
  if (!quote) return null;

  const logoSrc = loadLogoDataUrl();
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
  const netAmount = Math.round(totalAmount); // rounded per template

  const validTillText = quote.validTill
    ? formatDate(quote.validTill)
    : (quote.validityDays
        ? formatDate(new Date(new Date(quote.createdAt || Date.now()).getTime() + quote.validityDays * 864e5))
        : '');

  return (
    <Document>
      {/* ============================ PAGE 1 ============================ */}
      <Page size="A4" style={styles.page}>

        {/* Logo */}
        {logoSrc ? (
          <View style={styles.logoWrap}>
            <Image src={logoSrc} style={styles.logo} />
          </View>
        ) : null}

        {/* Header 2-col grid */}
        <View style={styles.headerTable}>
          <View style={styles.headerRow}>
            <View style={styles.headerColLeft}>
              <Text style={styles.customerLabel}>Customer :-</Text>
              <Text style={[styles.kvLine, styles.kvBold]}>{quote.customerCompany}</Text>
              <Text style={styles.kvLine}>
                {quote.deliveryCity}, {quote.deliveryState} — {quote.deliveryPincode}
              </Text>
              <Text style={styles.kvLine}>
                <Text style={styles.kvBold}>Kind Atten. :- </Text>{quote.customerName}
              </Text>
              <Text style={styles.kvLine}>
                <Text style={styles.kvBold}>Email :- </Text>{quote.customerEmail}
              </Text>
              <Text style={styles.kvLine}>
                <Text style={styles.kvBold}>Contact No. :- </Text>{quote.customerPhone}
              </Text>
              {quote.customerGstin ? (
                <Text style={styles.kvLine}>
                  <Text style={styles.kvBold}>GSTIN :- </Text>{quote.customerGstin}
                </Text>
              ) : null}
            </View>

            <View style={styles.headerColRight}>
              <View style={styles.rightKvTable}>
                <View style={styles.rightKvRow}>
                  <Text style={styles.rightKvLabel}>Date</Text>
                  <Text style={styles.rightKvValue}>: {formatDate(quote.createdAt || new Date())}</Text>
                </View>
                <View style={styles.rightKvRow}>
                  <Text style={styles.rightKvLabel}>Quotation No.</Text>
                  <Text style={styles.rightKvValue}>: {displayId}</Text>
                </View>
                <View style={styles.rightKvRow}>
                  <Text style={styles.rightKvLabel}>Valid Till</Text>
                  <Text style={styles.rightKvValue}>: {validTillText}</Text>
                </View>
                <View style={styles.rightKvRow}>
                  <Text style={styles.rightKvLabel}>Prepared By</Text>
                  <Text style={styles.rightKvValue}>: {quote.preparedByName || 'Puja Parmar'}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Subject */}
        <Text style={styles.subjectRow}>
          {quote.subject?.trim() || 'Quotation for requested materials'}
        </Text>

        {/* Items table */}
        <View style={styles.itemsTable}>
          <View style={styles.itemHeaderRow}>
            <Text style={[styles.cellBase, styles.colSr]}>Sr No.</Text>
            <Text style={[styles.cellBase, styles.colDesc]}>Item Code / Description</Text>
            <Text style={[styles.cellBase, styles.colQty]}>Quantity</Text>
            <Text style={[styles.cellBase, styles.colRate]}>Rate</Text>
            <Text style={[styles.cellBase, styles.colAmt]}>Amount (INR)</Text>
            <Text style={[styles.cellBase, styles.colTax]}>Tax</Text>
            <Text style={[styles.cellBase, styles.colTaxAmt]}>Tax Amount</Text>
            <Text style={[styles.cellLast, styles.colTotal]}>Total</Text>
          </View>

          {rows.map((r, i) => (
            <View style={styles.itemBodyRow} key={r.id || i}>
              <Text style={[styles.cellBase, styles.colSr]}>{i + 1}</Text>

              <View style={[styles.cellBase, styles.colDesc]}>
                <Text style={styles.itemTitle}>{r.productName}</Text>
                {r.description ? (
                  <Text style={styles.itemSub}>{r.description}</Text>
                ) : null}
                {(r.grade || r.packaging) ? (
                  <Text style={styles.itemSub}>
                    {[r.grade, r.packaging].filter(Boolean).join(' · ')}
                  </Text>
                ) : null}
                {r.hsnCode ? (
                  <Text style={styles.hsn}>HSN Code: {r.hsnCode}</Text>
                ) : null}
              </View>

              <Text style={[styles.cellBase, styles.colQty]}>
                {r.qty} {r.unit}
              </Text>
              <Text style={[styles.cellBase, styles.colRate]}>
                {r.rate != null ? formatINR(r.rate) : ''}
              </Text>
              <Text style={[styles.cellBase, styles.colAmt]}>
                {r.afterDisc != null ? formatINR(r.afterDisc) : ''}
              </Text>
              <Text style={[styles.cellBase, styles.colTax]}>
                GST@{r.taxPct}%
              </Text>
              <Text style={[styles.cellBase, styles.colTaxAmt]}>
                {formatINR(r.taxAmt)}
              </Text>
              <Text style={[styles.cellLast, styles.colTotal]}>
                {r.total != null ? formatINR(r.total) : ''}
              </Text>
            </View>
          ))}
        </View>

        {/* Subtotal row (mirrors the template's bottom-of-table Total row) */}
        <View style={styles.subtotalRow}>
          <Text style={styles.subtotalLabel}>Total</Text>
          <Text style={styles.subtotalQty}></Text>
          <Text style={styles.subtotalRate}></Text>
          <Text style={styles.subtotalAmt}>{formatINR(subtotalAmount)}</Text>
          <Text style={styles.subtotalTax}></Text>
          <Text style={styles.subtotalTaxAmt}>{formatINR(totalTax)}</Text>
          <Text style={styles.subtotalTotal}>{formatINR(totalAmount)}</Text>
        </View>

        {/* Right-aligned totals stack */}
        <View style={styles.totalsStack}>
          <View style={styles.totalLine}>
            <Text>Total</Text>
            <Text>{formatINR(subtotalAmount)}</Text>
          </View>
          <View style={styles.totalLine}>
            <Text>Tax Amount</Text>
            <Text>{formatINR(totalTax)}</Text>
          </View>
          <View style={styles.totalLine}>
            <Text style={styles.totalLineBold}>Total Amount</Text>
            <Text style={styles.totalLineBold}>{formatINR(totalAmount)}</Text>
          </View>
          <View style={styles.totalLineNet}>
            <Text>Net Amount (INR)</Text>
            <Text>{formatINR(netAmount)}</Text>
          </View>
        </View>

        <View style={styles.wordsRow}>
          <Text>
            <Text style={styles.wordsLabel}>Amount In Words: </Text>
            {amountToWords(netAmount)}
          </Text>
        </View>

        {/* Terms & Conditions table */}
        <View style={styles.termsSection}>
          <Text style={styles.termsTitle}>Terms &amp; Conditions</Text>
          <View style={styles.termsTable}>
            <View style={styles.termsRow}>
              <Text style={styles.termsNum}>1</Text>
              <Text style={styles.termsKey}>Payment Terms</Text>
              <Text style={styles.termsVal}>: {quote.paymentTerms}</Text>
            </View>
            <View style={styles.termsRow}>
              <Text style={styles.termsNum}>2</Text>
              <Text style={styles.termsKey}>Taxes and Duties</Text>
              <Text style={styles.termsVal}>
                : Basic Ex works Rate indicated above is Basic supply prices. Applicable Goods and Service Tax (GST) (CGST+SGST/IGST) as indicated per line item will be charged as applicable, dependent on Place of Delivery.
              </Text>
            </View>
            <View style={styles.termsRow}>
              <Text style={styles.termsNum}>3</Text>
              <Text style={styles.termsKey}>Delivery Terms</Text>
              <Text style={styles.termsVal}>: {quote.deliveryTerms}</Text>
            </View>
            <View style={styles.termsRow}>
              <Text style={styles.termsNum}>4</Text>
              <Text style={styles.termsKey}>Validity</Text>
              <Text style={styles.termsVal}>
                : This quotation is valid {validTillText ? `till ${validTillText}` : `for ${quote.validityDays} days from the date of issue`}. Prices are subject to change without prior notice beyond validity.
              </Text>
            </View>
            {quote.remarks ? (
              <View style={styles.termsRowLast}>
                <Text style={styles.termsNum}>5</Text>
                <Text style={styles.termsKey}>Note</Text>
                <Text style={styles.termsVal}>: {quote.remarks}</Text>
              </View>
            ) : null}
          </View>
        </View>

        {/* Signatory — stays with terms on page 1 if space; else floats as one block to next page */}
        <View style={styles.signatoryBlock} wrap={false}>
          <Text style={styles.thanking}>Thanking You,</Text>
          <Text style={styles.forCompany}>For, PATEL ENTERPRISE</Text>

          <Text style={styles.sigName}>{quote.preparedByName || 'Puja Parmar'}</Text>
          <Text style={styles.sigRole}>({quote.preparedByRole || 'Sales'})</Text>
          <Text style={styles.sigPhone}>[ M.No. {quote.preparedByPhone || '63581 85076'} ]</Text>
        </View>

        <Text style={styles.pageFooter} render={({ pageNumber, totalPages }) => `Page ${pageNumber} - ${totalPages}`} fixed />
      </Page>
    </Document>
  );
}
