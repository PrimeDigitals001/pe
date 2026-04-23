import { prisma } from '../../../../lib/prisma.js';
import { requireAdmin } from '../../../../lib/requireAdmin.js';

export async function GET(request, { params }) {
  const auth = await requireAdmin(request);
  if (!auth.ok) return Response.json({ success: false, error: auth.error }, { status: auth.status });

  const { id } = await params;
  const quote = await prisma.quote.findUnique({
    where: { id },
    include: { items: { orderBy: { position: 'asc' } } },
  });
  if (!quote) return Response.json({ success: false, error: 'Not found' }, { status: 404 });

  return Response.json({ success: true, quote });
}

export async function PATCH(request, { params }) {
  const auth = await requireAdmin(request);
  if (!auth.ok) return Response.json({ success: false, error: auth.error }, { status: auth.status });

  const { id } = await params;
  const body = await request.json();

  const existing = await prisma.quote.findUnique({ where: { id }, include: { items: true } });
  if (!existing) return Response.json({ success: false, error: 'Not found' }, { status: 404 });
  if (existing.status === 'SENT') {
    return Response.json({ success: false, error: 'Quote already sent — cannot edit.' }, { status: 400 });
  }

  const {
    subject,
    supplierGstin,
    validityDays,
    validTill,
    paymentTerms,
    deliveryTerms,
    remarks,
    preparedByName,
    preparedByRole,
    preparedByPhone,
    items,
  } = body;

  const hasPrices = Array.isArray(items) && items.some((it) => it.unitPrice != null && it.unitPrice !== '');

  const updated = await prisma.$transaction(async (tx) => {
    await tx.quote.update({
      where: { id },
      data: {
        subject: subject ?? existing.subject,
        supplierGstin: supplierGstin ?? existing.supplierGstin,
        validityDays: validityDays ?? existing.validityDays,
        validTill: validTill != null
          ? (validTill ? new Date(validTill) : null)
          : existing.validTill,
        paymentTerms: paymentTerms ?? existing.paymentTerms,
        deliveryTerms: deliveryTerms ?? existing.deliveryTerms,
        remarks: remarks ?? existing.remarks,
        preparedByName: preparedByName ?? existing.preparedByName,
        preparedByRole: preparedByRole ?? existing.preparedByRole,
        preparedByPhone: preparedByPhone ?? existing.preparedByPhone,
        status: hasPrices ? 'PRICED' : existing.status,
      },
    });

    if (Array.isArray(items)) {
      for (const it of items) {
        if (!it.id) continue;
        await tx.quoteItem.update({
          where: { id: it.id },
          data: {
            description: it.description ?? undefined,
            itemCode: it.itemCode ?? undefined,
            hsnCode: it.hsnCode ?? undefined,
            quantity: it.quantity != null ? String(it.quantity) : undefined,
            unit: it.unit ?? undefined,
            grade: it.grade ?? undefined,
            packaging: it.packaging ?? undefined,
            unitPrice: it.unitPrice != null && it.unitPrice !== '' ? String(it.unitPrice) : null,
            discountPct: it.discountPct != null ? String(it.discountPct) : undefined,
            taxPct: it.taxPct != null ? String(it.taxPct) : undefined,
          },
        });
      }
    }

    return tx.quote.findUnique({
      where: { id },
      include: { items: { orderBy: { position: 'asc' } } },
    });
  });

  return Response.json({ success: true, quote: updated });
}
