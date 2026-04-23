import { prisma } from './prisma.js';

export { formatQuoteIdForDisplay } from './formatQuoteId.js';

/**
 * Indian financial year runs Apr 1 → Mar 31.
 * For Apr 2026 → Mar 2027, fiscal year code is "26-27".
 */
function currentFiscalYearCode(now = new Date()) {
  const y = now.getFullYear();
  const month = now.getMonth(); // 0 = Jan
  const startYear = month >= 3 ? y : y - 1; // Apr (index 3) onwards belongs to this FY
  const endYear = startYear + 1;
  const pad = (n) => String(n).slice(-2).padStart(2, '0');
  return `${pad(startYear)}-${pad(endYear)}`;
}

export async function generateQuoteId() {
  const fiscalYear = currentFiscalYearCode();

  const counter = await prisma.quoteCounter.upsert({
    where: { fiscalYear },
    update: { value: { increment: 1 } },
    create: { fiscalYear, value: 1 },
  });

  return `QUO-${fiscalYear}-${String(counter.value).padStart(4, '0')}`;
}

