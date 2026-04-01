import nodemailer from 'nodemailer';
import dns from 'dns/promises';

// ── Disposable / throwaway email domain blocklist ──
const DISPOSABLE_DOMAINS = new Set([
  '10minutemail.com', '10minutemail.net', '20minutemail.com',
  'discard.email', 'discardmail.com', 'dispostable.com',
  'fakeinbox.com', 'fakeinbox.net', 'fakemail.net',
  'getnada.com', 'guerrillamail.com', 'guerrillamail.net',
  'guerrillamail.org', 'guerrillamailblock.com',
  'maildrop.cc', 'mailinator.com', 'mailinator.net',
  'mailnull.com', 'mailtemp.info', 'mytemp.email',
  'sharklasers.com', 'spam4.me', 'spamex.com',
  'spamgourmet.com', 'spamgourmet.net', 'spamgourmet.org',
  'temp-mail.io', 'temp-mail.org', 'tempr.email',
  'throwaway.email', 'trashmail.at', 'trashmail.com',
  'trashmail.io', 'trashmail.me', 'trashmail.net',
  'trashmail.org', 'yopmail.com', 'yopmail.fr',
  'getairmail.com', 'filzmail.com', 'throwam.com',
  'spamhereplease.com', 'mailnesia.com', 'mailnull.com',
  'spamspot.com', 'binkmail.com', 'safetymail.info',
]);

// ── Check domain has real MX records ──
async function isEmailDomainValid(email) {
  const domain = email.split('@')[1]?.toLowerCase();
  if (!domain) return false;

  // Block known disposable domains immediately
  if (DISPOSABLE_DOMAINS.has(domain)) return false;

  // Check if domain has actual mail servers (MX records)
  try {
    const records = await dns.resolveMx(domain);
    return records && records.length > 0;
  } catch {
    return false; // No MX records = not a real mail domain
  }
}

// ── Nodemailer transporter ──
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
    const { name, email, subject, message } = body;

    // ── Basic field validation ──
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return Response.json(
        { success: false, error: 'Name, email and message are required.' },
        { status: 400 }
      );
    }

    // ── Email format check ──
    if (!/\S+@\S+\.\S+/.test(email)) {
      return Response.json(
        { success: false, error: 'Invalid email address.' },
        { status: 400 }
      );
    }

    // ── Disposable / fake domain check ──
    const domainValid = await isEmailDomainValid(email.trim().toLowerCase());
    if (!domainValid) {
      return Response.json(
        {
          success: false,
          error: 'Please use a valid business or personal email address (e.g. Gmail, Outlook, company email).',
        },
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
        <title>Contact Message — Patel Enterprise</title>
      </head>
      <body style="margin:0;padding:0;background:#f3f4f6;font-family:'Inter',Arial,sans-serif;">
        <table width="100%" cellpadding="0" cellspacing="0" style="padding:32px 16px;">
          <tr>
            <td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

                <!-- Header -->
                <tr>
                  <td style="background:#1a1a1a;padding:32px 40px;">
                    <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:700;letter-spacing:-0.02em;">
                      ✉️ New Contact Message
                    </h1>
                    <p style="margin:6px 0 0;color:rgba(255,255,255,0.6);font-size:14px;">
                      Received via patelenterprise.co
                    </p>
                  </td>
                </tr>

                <!-- Contact Details -->
                <tr>
                  <td style="padding:32px 40px 0;">
                    <h2 style="margin:0 0 16px;font-size:13px;font-weight:700;color:#6b7280;letter-spacing:0.08em;text-transform:uppercase;">
                      Sender Details
                    </h2>
                    <table width="100%" cellpadding="0" cellspacing="0">
                      ${row('Name', name)}
                      ${row('Email', `<a href="mailto:${email}" style="color:#2683C6;">${email}</a>`)}
                      ${row('Subject', subject?.trim() || '—')}
                    </table>
                  </td>
                </tr>

                <!-- Divider -->
                <tr><td style="padding:24px 40px 0;"><hr style="border:none;border-top:1px solid #e5e7eb;margin:0;" /></td></tr>

                <!-- Message -->
                <tr>
                  <td style="padding:24px 40px 0;">
                    <h2 style="margin:0 0 12px;font-size:13px;font-weight:700;color:#6b7280;letter-spacing:0.08em;text-transform:uppercase;">Message</h2>
                    <p style="margin:0;font-size:14px;color:#374151;line-height:1.7;background:#f9fafb;padding:16px;border-radius:8px;border-left:3px solid #1a1a1a;">
                      ${message.replace(/\n/g, '<br/>')}
                    </p>
                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="padding:32px 40px;">
                    <p style="margin:0;font-size:12px;color:#9ca3af;text-align:center;">
                      This email was sent from the contact form on patelenterprise.co
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
      subject: `Contact: ${subject?.trim() || 'New Message'} — ${name}`,
      html,
    });

    return Response.json({ success: true });

  } catch (error) {
    console.error('[send-contact] Error:', error);
    return Response.json(
      { success: false, error: 'Failed to send message. Please try again.' },
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