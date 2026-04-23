/** Display form: QUO-26-27-0042 -> QUO/26-27/0042 (optionally with " - N" for revisions). Safe for client imports. */
export function formatQuoteIdForDisplay(id, revision) {
  if (!id) return '';
  const m = id.match(/^QUO-(\d{2}-\d{2})-(\d+)$/);
  const base = m ? `QUO/${m[1]}/${m[2]}` : id;
  if (revision && revision > 1) return `${base} - ${revision}`;
  return base;
}
