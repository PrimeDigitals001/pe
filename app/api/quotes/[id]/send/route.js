import React from 'react';
import nodemailer from 'nodemailer';
import { renderToBuffer } from '@react-pdf/renderer';
import { prisma } from '../../../../../lib/prisma.js';
import { requireAdmin } from '../../../../../lib/requireAdmin.js';
import { getCcEmails } from '../../../../../lib/ccEmails.js';
import QuoteDocument from '../../../../../lib/pdf/QuoteDocument.jsx';

export const runtime = 'nodejs';
export const maxDuration = 30;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASS,
  },
});

export async function POST(request, { params }) {
 try {
  const auth = await requireAdmin(request);
  if (!auth.ok) return Response.json({ success: false, error: auth.error }, { status: auth.status });

  const { id } = await params;

  const quote = await prisma.quote.findUnique({
    where: { id },
    include: { items: { orderBy: { position: 'asc' } } },
  });
  if (!quote) return Response.json({ success: false, error: 'Not found' }, { status: 404 });
  if (quote.status === 'SENT') {
    return Response.json({ success: false, error: 'Quote already sent.' }, { status: 400 });
  }

  const missingPrice = quote.items.find((it) => it.unitPrice == null);
  if (missingPrice) {
    return Response.json({ success: false, error: 'All items must have a rate before sending.' }, { status: 400 });
  }

  const serializable = {
    ...quote,
    items: quote.items.map((it) => ({
      ...it,
      quantity: it.quantity.toString(),
      unitPrice: it.unitPrice?.toString() ?? null,
      discountPct: it.discountPct.toString(),
      taxPct: it.taxPct.toString(),
    })),
  };

  const pdfBuffer = await renderToBuffer(React.createElement(QuoteDocument, { quote: serializable }));

  let grandTotal = 0;
  for (const it of quote.items) {
    const qty = Number(it.quantity);
    const rate = Number(it.unitPrice);
    const disc = Number(it.discountPct) || 0;
    const tax = Number(it.taxPct) || 0;
    const gross = qty * rate;
    const afterDisc = gross * (1 - disc / 100);
    grandTotal += afterDisc * (1 + tax / 100);
  }

  const totalINR = grandTotal.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const html = `
    <!DOCTYPE html><html><body style="font-family:Arial,sans-serif;background:#f5f5f5;padding:24px">
      <div style="max-width:640px;margin:0 auto;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 1px 4px rgba(0,0,0,.08)">
        <div style="background:#1c1c2e;color:#fff;padding:24px">
          <h2 style="margin:0">Quotation ${quote.id}</h2>
          <p style="margin:6px 0 0;opacity:.8;font-size:13px">From Patel Enterprise</p>
        </div>
        <div style="padding:28px;color:#1f2937;line-height:1.55">
          <p>Dear ${quote.customerName},</p>
          <p>Thank you for your enquiry with Patel Enterprise. Please find attached our formal quotation <strong>${quote.id}</strong> for your requirement.</p>
          <table style="margin:20px 0;font-size:14px">
            <tr><td style="padding:4px 12px 4px 0;color:#6b7280">Total:</td><td><strong>₹ ${totalINR}</strong></td></tr>
            <tr><td style="padding:4px 12px 4px 0;color:#6b7280">Validity:</td><td>${quote.validityDays} days</td></tr>
            <tr><td style="padding:4px 12px 4px 0;color:#6b7280">Payment Terms:</td><td>${quote.paymentTerms}</td></tr>
          </table>
          <p>For any clarifications, please reply to this email or reach us at <a href="tel:+917359951901">+91 73599 51901</a>.</p>
          <p style="margin-top:28px">Best regards,<br/><strong>Patel Enterprise</strong><br/><a href="https://www.patelenterprise.co">www.patelenterprise.co</a></p>
        </div>
      </div>
    </body></html>`;

  try {
    await transporter.sendMail({
      from: `"Patel Enterprise" <${process.env.GMAIL_USER}>`,
      to: quote.customerEmail,
      cc: getCcEmails(),
      replyTo: process.env.GMAIL_USER,
      subject: `Quotation ${quote.id} from Patel Enterprise`,
      html,
      attachments: [
        {
          filename: `${quote.id}.pdf`,
          content: pdfBuffer,
          contentType: 'application/pdf',
        },
      ],
    });
  } catch (err) {
    console.error('[quotes/send] mail error', err);
    return Response.json({ success: false, error: 'Failed to send email.' }, { status: 500 });
  }

  const updated = await prisma.quote.update({
    where: { id },
    data: {
      status: 'SENT',
      sentAt: new Date(),
    },
    include: { items: { orderBy: { position: 'asc' } } },
  });

  return Response.json({ success: true, quote: updated });
 } catch (err) {
  console.error('[quotes/send] fatal', err);
  return Response.json({ success: false, error: err?.message || 'Send failed' }, { status: 500 });
 }
}
