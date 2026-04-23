import nodemailer from 'nodemailer';
import { prisma } from '../../../../lib/prisma.js';
import { generateQuoteId, formatQuoteIdForDisplay } from '../../../../lib/quoteId.js';
import { getRecipientEmail } from '../../../../lib/recipientEmail.js';
import { getCcEmails } from '../../../../lib/ccEmails.js';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASS,
  },
});

export async function POST(request) {
  try {
    const body = await request.json();

    const {
      customerName,
      customerCompany,
      customerEmail,
      customerPhone,
      customerGstin,
      deliveryCity,
      deliveryState,
      deliveryPincode,
      requiredBy,
      notes,
      items,
    } = body;

    if (!customerName?.trim() || !customerEmail?.trim() || !customerCompany?.trim() || !customerPhone?.trim()) {
      return Response.json({ success: false, error: 'Name, company, email and phone are required.' }, { status: 400 });
    }
    if (!/\S+@\S+\.\S+/.test(customerEmail)) {
      return Response.json({ success: false, error: 'Invalid email address.' }, { status: 400 });
    }
    if (!deliveryCity?.trim() || !deliveryState?.trim() || !deliveryPincode?.trim()) {
      return Response.json({ success: false, error: 'Delivery city, state and pincode are required.' }, { status: 400 });
    }
    if (!Array.isArray(items) || items.length === 0) {
      return Response.json({ success: false, error: 'At least one product is required.' }, { status: 400 });
    }
    for (const it of items) {
      if (!it.productSlug || !it.productName || !it.quantity || !it.unit) {
        return Response.json({ success: false, error: 'Each item needs product, quantity and unit.' }, { status: 400 });
      }
      if (Number(it.quantity) <= 0) {
        return Response.json({ success: false, error: 'Quantity must be greater than zero.' }, { status: 400 });
      }
    }

    const quoteId = await generateQuoteId();

    const quote = await prisma.quote.create({
      data: {
        id: quoteId,
        customerName: customerName.trim(),
        customerCompany: customerCompany.trim(),
        customerEmail: customerEmail.trim().toLowerCase(),
        customerPhone: customerPhone.trim(),
        customerGstin: customerGstin?.trim() || null,
        deliveryCity: deliveryCity.trim(),
        deliveryState: deliveryState.trim(),
        deliveryPincode: deliveryPincode.trim(),
        requiredBy: requiredBy ? new Date(requiredBy) : null,
        notes: notes?.trim() || null,
        items: {
          create: items.map((it, idx) => ({
            productSlug: it.productSlug,
            productName: it.productName,
            grade: it.grade?.trim() || null,
            packaging: it.packaging?.trim() || null,
            quantity: String(it.quantity),
            unit: it.unit,
            position: idx,
          })),
        },
      },
      include: { items: true },
    });

    const adminUrl = `https://patelenterprise.co/admin/quotes/${encodeURIComponent(quoteId)}`;
    const displayId = formatQuoteIdForDisplay(quoteId);
    const itemRows = quote.items
      .map(
        (it) => `
        <tr>
          <td style="padding:8px 12px;border-bottom:1px solid #eee">${it.productName}${it.grade ? ` <span style="color:#888">(${it.grade})</span>` : ''}</td>
          <td style="padding:8px 12px;border-bottom:1px solid #eee">${it.quantity} ${it.unit}</td>
          <td style="padding:8px 12px;border-bottom:1px solid #eee">${it.packaging || '—'}</td>
        </tr>`
      )
      .join('');

    const html = `
      <!DOCTYPE html><html><body style="font-family:Arial,sans-serif;background:#f5f5f5;padding:24px">
        <div style="max-width:640px;margin:0 auto;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 1px 4px rgba(0,0,0,.08)">
          <div style="background:#1c1c2e;color:#fff;padding:20px 24px">
            <h2 style="margin:0;font-size:18px">🟢 New Quote Request — ${displayId}</h2>
            <p style="margin:4px 0 0;opacity:.75;font-size:13px">Received via patelenterprise.co</p>
          </div>
          <div style="padding:24px">
            <p style="margin:0 0 8px"><strong>Customer:</strong> ${quote.customerName} — ${quote.customerCompany}</p>
            <p style="margin:0 0 8px"><strong>Email:</strong> <a href="mailto:${quote.customerEmail}">${quote.customerEmail}</a></p>
            <p style="margin:0 0 8px"><strong>Phone:</strong> ${quote.customerPhone}</p>
            ${quote.customerGstin ? `<p style="margin:0 0 8px"><strong>GSTIN:</strong> ${quote.customerGstin}</p>` : ''}
            <p style="margin:0 0 8px"><strong>Delivery:</strong> ${quote.deliveryCity}, ${quote.deliveryState} — ${quote.deliveryPincode}</p>
            ${quote.requiredBy ? `<p style="margin:0 0 8px"><strong>Required by:</strong> ${new Date(quote.requiredBy).toLocaleDateString('en-IN')}</p>` : ''}

            <h3 style="margin:20px 0 8px;font-size:15px">Items</h3>
            <table style="width:100%;border-collapse:collapse;font-size:14px">
              <thead><tr style="background:#f0f0f5">
                <th style="text-align:left;padding:8px 12px;border-bottom:1px solid #ddd">Product</th>
                <th style="text-align:left;padding:8px 12px;border-bottom:1px solid #ddd">Qty</th>
                <th style="text-align:left;padding:8px 12px;border-bottom:1px solid #ddd">Packaging</th>
              </tr></thead>
              <tbody>${itemRows}</tbody>
            </table>

            ${quote.notes ? `<div style="margin-top:20px;padding:12px;background:#f9f9fc;border-left:3px solid #1c1c2e"><strong>Notes:</strong><br>${quote.notes}</div>` : ''}

            <div style="margin-top:28px;text-align:center">
              <a href="${adminUrl}" style="display:inline-block;background:#1c1c2e;color:#fff;padding:12px 28px;border-radius:6px;text-decoration:none;font-weight:600">Price &amp; Send Quote →</a>
            </div>
            <p style="margin:24px 0 0;font-size:12px;color:#888;text-align:center">Quote ref ${displayId} · Received ${new Date().toLocaleString('en-IN')}</p>
          </div>
        </div>
      </body></html>`;

    await transporter.sendMail({
      from: `"Patel Enterprise Website" <${process.env.GMAIL_USER}>`,
      to: getRecipientEmail(),
      cc: getCcEmails(),
      replyTo: quote.customerEmail,
      subject: `🟢 New Quote Request — ${displayId} — ${quote.customerCompany}`,
      html,
    });

    return Response.json({ success: true, quoteId, displayId });
  } catch (err) {
    console.error('[quotes/create]', err);
    return Response.json({ success: false, error: 'Failed to submit quote request.' }, { status: 500 });
  }
}
