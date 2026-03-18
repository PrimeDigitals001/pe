import nodemailer from 'nodemailer';

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
      // Contact fields
      name,
      email,
      phone,
      companyName,
      projectLocation,
      message,
      // Pre-filled product fields
      productName,
      productCategory,
      productBrand,
      productProperties,
      productSpecs,
    } = body;

    // ── Basic validation ──
    if (!name?.trim() || !email?.trim()) {
      return Response.json(
        { success: false, error: 'Name and email are required.' },
        { status: 400 }
      );
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      return Response.json(
        { success: false, error: 'Invalid email address.' },
        { status: 400 }
      );
    }

    // ── Build HTML email ──
    const html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Product Enquiry — Patel Enterprise</title>
      </head>
      <body style="margin:0;padding:0;background:#f3f4f6;font-family:'Inter',Arial,sans-serif;">
        <table width="100%" cellpadding="0" cellspacing="0" style="padding:32px 16px;">
          <tr>
            <td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

                <!-- Header — red accent to distinguish from quote requests -->
                <tr>
                  <td style="background:#D1203E;padding:32px 40px;">
                    <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:700;letter-spacing:-0.02em;">
                      🔩 Product Enquiry
                    </h1>
                    <p style="margin:6px 0 0;color:rgba(255,255,255,0.8);font-size:14px;">
                      Received via patelenterprise.co
                    </p>
                  </td>
                </tr>

                <!-- Product Info (pre-filled, highlighted) -->
                <tr>
                  <td style="padding:32px 40px 0;">
                    <h2 style="margin:0 0 16px;font-size:13px;font-weight:700;color:#6b7280;letter-spacing:0.08em;text-transform:uppercase;">
                      Product Details
                    </h2>
                    <table width="100%" cellpadding="0" cellspacing="0" style="background:#fff5f5;border-radius:8px;border-left:3px solid #D1203E;padding:0;">
                      <tr><td style="padding:16px 20px;">
                        <table width="100%" cellpadding="0" cellspacing="0">
                          ${row('#D1203E', 'Brand', productBrand || '—')}
                          ${row('#D1203E', 'Product', `<strong>${productName || '—'}</strong>`)}
                          ${row('#D1203E', 'Category', productCategory || '—')}
                        </table>
                      </td></tr>
                    </table>
                  </td>
                </tr>

                <!-- Properties -->
                ${productProperties?.length
        ? `
                  <tr>
                    <td style="padding:20px 40px 0;">
                      <h2 style="margin:0 0 10px;font-size:13px;font-weight:700;color:#6b7280;letter-spacing:0.08em;text-transform:uppercase;">Properties</h2>
                      ${productProperties
          .map(
            (p) =>
              `<p style="margin:0 0 4px;font-size:13px;color:#374151;padding-left:12px;border-left:2px solid #e5e7eb;">• ${p}</p>`
          )
          .join('')}
                    </td>
                  </tr>`
        : ''
      }

                <!-- Technical Specs -->
                ${productSpecs?.length
        ? `
                  <tr>
                    <td style="padding:20px 40px 0;">
                      <h2 style="margin:0 0 10px;font-size:13px;font-weight:700;color:#6b7280;letter-spacing:0.08em;text-transform:uppercase;">Technical Specifications</h2>
                      <table width="100%" cellpadding="0" cellspacing="0" style="background:#f9fafb;border-radius:8px;">
                        <tr><td style="padding:14px 16px;">
                          ${productSpecs
          .map(
            (s) =>
              `<p style="margin:0 0 5px;font-size:13px;color:#374151;">• ${s}</p>`
          )
          .join('')}
                        </td></tr>
                      </table>
                    </td>
                  </tr>`
        : ''
      }

                <!-- Divider -->
                <tr><td style="padding:24px 40px 0;"><hr style="border:none;border-top:1px solid #e5e7eb;margin:0;" /></td></tr>

                <!-- Contact Details -->
                <tr>
                  <td style="padding:24px 40px 0;">
                    <h2 style="margin:0 0 16px;font-size:13px;font-weight:700;color:#6b7280;letter-spacing:0.08em;text-transform:uppercase;">
                      Contact Details
                    </h2>
                    <table width="100%" cellpadding="0" cellspacing="0">
                      ${row('#2683C6', 'Name', name)}
                      ${row('#2683C6', 'Email', `<a href="mailto:${email}" style="color:#2683C6;">${email}</a>`)}
                      ${row('#2683C6', 'Phone', phone || '—')}
                      ${row('#2683C6', 'Company', companyName || '—')}
                      ${row('#2683C6', 'Location', projectLocation || '—')}
                    </table>
                  </td>
                </tr>

                <!-- Message -->
                ${message?.trim()
        ? `
                  <tr><td style="padding:24px 40px 0;"><hr style="border:none;border-top:1px solid #e5e7eb;margin:0;" /></td></tr>
                  <tr>
                    <td style="padding:24px 40px 0;">
                      <h2 style="margin:0 0 12px;font-size:13px;font-weight:700;color:#6b7280;letter-spacing:0.08em;text-transform:uppercase;">Message</h2>
                      <p style="margin:0;font-size:14px;color:#374151;line-height:1.7;background:#f9fafb;padding:16px;border-radius:8px;border-left:3px solid #D1203E;">
                        ${message.replace(/\n/g, '<br/>')}
                      </p>
                    </td>
                  </tr>`
        : ''
      }

                <!-- Footer -->
                <tr>
                  <td style="padding:32px 40px;">
                    <p style="margin:0;font-size:12px;color:#9ca3af;text-align:center;">
                      This email was sent from the product enquiry form on patelenterprise.co
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

    await transporter.sendMail({
      from: `"Patel Enterprise Website" <${process.env.GMAIL_USER}>`,
      to: process.env.RECIPIENT_EMAIL,
      replyTo: email,
      subject: `Product Enquiry — ${productName} | ${name} (${companyName || email})`,
      html,
    });

    return Response.json({ success: true });

  } catch (error) {
    console.error('[send-enquiry] Error:', error);
    return Response.json(
      { success: false, error: 'Failed to send enquiry. Please try again.' },
      { status: 500 }
    );
  }
}

// ── Helper: table row with accent color ──
function row(accent, label, value) {
  return `
    <tr>
      <td style="padding:5px 0;width:140px;vertical-align:top;">
        <span style="font-size:13px;font-weight:600;color:#374151;">${label}</span>
      </td>
      <td style="padding:5px 0;">
        <span style="font-size:13px;color:#6b7280;">${value}</span>
      </td>
    </tr>
  `;
}