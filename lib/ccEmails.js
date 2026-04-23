/**
 * Returns the array of CC recipients applied to every website email.
 * Controlled by the CC_EMAILS env var as a comma-separated list.
 */
export function getCcEmails() {
  const raw = process.env.CC_EMAILS || '';
  return raw
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
}
