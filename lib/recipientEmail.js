/**
 * Primary inbox that receives website notifications (forms, quote submissions).
 * Controlled by the RECIPIENT_EMAIL env var.
 */
export function getRecipientEmail() {
  return process.env.RECIPIENT_EMAIL;
}
