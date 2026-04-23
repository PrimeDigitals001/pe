import React from 'react';
import { renderToBuffer } from '@react-pdf/renderer';
import { prisma } from '../../../../../lib/prisma.js';
import { requireAdmin } from '../../../../../lib/requireAdmin.js';
import QuoteDocument from '../../../../../lib/pdf/QuoteDocument.jsx';

export const runtime = 'nodejs';
export const maxDuration = 30;

export async function GET(request, { params }) {
  const auth = await requireAdmin(request);
  if (!auth.ok) return Response.json({ success: false, error: auth.error }, { status: auth.status });

  const { id } = await params;

  const quote = await prisma.quote.findUnique({
    where: { id },
    include: { items: { orderBy: { position: 'asc' } } },
  });
  if (!quote) return Response.json({ success: false, error: 'Not found' }, { status: 404 });

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

  return new Response(pdfBuffer, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `inline; filename="${id}.pdf"`,
      'Cache-Control': 'no-store',
    },
  });
}
