import nodemailer from 'nodemailer';
import { getRecipientEmail } from '../../../lib/recipientEmail.js';
import { getCcEmails } from '../../../lib/ccEmails.js';

// ── Gmail SMTP transporter ──
// Uses an App Password (NOT your real Gmail password)
// Generate one at: https://myaccount.google.com/apppasswords
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,       // your Gmail address
    pass: process.env.GMAIL_APP_PASS,   // 16-char App Password from Google
  },
});

export async function POST(request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      phone,
      companyName,
      category,
      state,
      city,
      projectLocation,
      areaOfBuilding,
      selectedCompany,
      selectedProducts,
      projectDescription,
    } = body;

    // ── Basic server-side validation ──
    if (!name?.trim() || !email?.trim() || !companyName?.trim()) {
      return Response.json(
        { success: false, error: 'Name, email and company name are required.' },
        { status: 400 }
      );
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      return Response.json(
        { success: false, error: 'Invalid email address.' },
        { status: 400 }
      );
    }

    // ── Build the HTML email ──
    const html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Quote Request — Patel Enterprise</title>
      </head>
      <body style="margin:0;padding:0;background:#f3f4f6;font-family:'Inter',Arial,sans-serif;">
        <table width="100%" cellpadding="0" cellspacing="0" style="padding:32px 16px;">
          <tr>
            <td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

                <!-- Header -->
                <tr>
                  <td style="background:#2683C6;padding:32px 40px;">
                    <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:700;letter-spacing:-0.02em;">
                      📋 New Quote Request
                    </h1>
                    <p style="margin:6px 0 0;color:rgba(255,255,255,0.8);font-size:14px;">
                      Received via patelenterprise.co
                    </p>
                  </td>
                </tr>

                <!-- Contact Details -->
                <tr>
                  <td style="padding:32px 40px 0;">
                    <h2 style="margin:0 0 16px;font-size:13px;font-weight:700;color:#6b7280;letter-spacing:0.08em;text-transform:uppercase;">
                      Contact Details
                    </h2>
                    <table width="100%" cellpadding="0" cellspacing="0">
                      ${row('Name', name)}
                      ${row('Email', `<a href="mailto:${email}" style="color:#2683C6;">${email}</a>`)}
                      ${row('Phone', phone || '—')}
                      ${row('Company', companyName)}
                    </table>
                  </td>
                </tr>

                <!-- Divider -->
                <tr><td style="padding:24px 40px 0;"><hr style="border:none;border-top:1px solid #e5e7eb;margin:0;" /></td></tr>

                <!-- Project Details -->
                <tr>
                  <td style="padding:24px 40px 0;">
                    <h2 style="margin:0 0 16px;font-size:13px;font-weight:700;color:#6b7280;letter-spacing:0.08em;text-transform:uppercase;">
                      Project Details
                    </h2>
                    <table width="100%" cellpadding="0" cellspacing="0">
                      ${row('Category', category || '—')}
                      ${row('State', state || '—')}
                      ${row('City', city || '—')}
                      ${row('Project Location', projectLocation || '—')}
                      ${row('Area of Building', areaOfBuilding || '—')}
                    </table>
                  </td>
                </tr>

                <!-- Divider -->
                <tr><td style="padding:24px 40px 0;"><hr style="border:none;border-top:1px solid #e5e7eb;margin:0;" /></td></tr>

                <!-- Products -->
                <tr>
                  <td style="padding:24px 40px 0;">
                    <h2 style="margin:0 0 16px;font-size:13px;font-weight:700;color:#6b7280;letter-spacing:0.08em;text-transform:uppercase;">
                      Product Enquiry
                    </h2>
                    <table width="100%" cellpadding="0" cellspacing="0">
                      ${row('Brand', selectedCompany || '—')}
                      <tr>
                        <td style="padding:6px 0;width:140px;vertical-align:top;">
                          <span style="font-size:13px;font-weight:600;color:#374151;">Products</span>
                        </td>
                        <td style="padding:6px 0;">
                          ${selectedProducts?.length
        ? selectedProducts
          .map(
            (p) =>
              `<span style="display:inline-block;margin:2px 4px 2px 0;padding:3px 10px;background:#eff6ff;border-radius:99px;font-size:12px;font-weight:500;color:#2683C6;">${p}</span>`
          )
          .join('')
        : '<span style="color:#9ca3af;font-size:13px;">—</span>'
      }
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Project Description -->
                ${projectDescription?.trim()
        ? `
                  <tr><td style="padding:24px 40px 0;"><hr style="border:none;border-top:1px solid #e5e7eb;margin:0;" /></td></tr>
                  <tr>
                    <td style="padding:24px 40px 0;">
                      <h2 style="margin:0 0 12px;font-size:13px;font-weight:700;color:#6b7280;letter-spacing:0.08em;text-transform:uppercase;">Project Description</h2>
                      <p style="margin:0;font-size:14px;color:#374151;line-height:1.7;background:#f9fafb;padding:16px;border-radius:8px;border-left:3px solid #2683C6;">
                        ${projectDescription.replace(/\n/g, '<br/>')}
                      </p>
                    </td>
                  </tr>`
        : ''
      }

                <!-- Footer -->
                <tr>
                  <td style="padding:32px 40px;margin-top:24px;">
                    <p style="margin:0;font-size:12px;color:#9ca3af;text-align:center;">
                      This email was sent from the quote request form on patelenterprise.co
                    </p>
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    // ── Send email ──
    await transporter.sendMail({
      from: `"Patel Enterprise Website" <${process.env.GMAIL_USER}>`,
      to: getRecipientEmail(),
      cc: getCcEmails(),
      replyTo: email,   // so you can reply directly to the customer
      subject: `Quote Request — ${name} (${companyName})`,
      html,
    });

    return Response.json({ success: true });

  } catch (error) {
    console.error('[send-quote] Error:', error);
    return Response.json(
      { success: false, error: 'Failed to send email. Please try again.' },
      { status: 500 }
    );
  }
}

// ── Helper: table row ──
function row(label, value) {
  return `
    <tr>
      <td style="padding:6px 0;width:140px;vertical-align:top;">
        <span style="font-size:13px;font-weight:600;color:#374151;">${label}</span>
      </td>
      <td style="padding:6px 0;">
        <span style="font-size:13px;color:#6b7280;">${value}</span>
      </td>
    </tr>
  `;
}