import { prisma } from '../../../../../lib/prisma.js';
import { requireAdmin } from '../../../../../lib/requireAdmin.js';

export const runtime = 'nodejs';

export async function POST(request, { params }) {
  const auth = await requireAdmin(request);
  if (!auth.ok) return Response.json({ success: false, error: auth.error }, { status: auth.status });

  const { id } = await params;

  const source = await prisma.quote.findUnique({
    where: { id },
    include: { items: { orderBy: { position: 'asc' } } },
  });
  if (!source) return Response.json({ success: false, error: 'Not found' }, { status: 404 });
  if (source.status !== 'SENT') {
    return Response.json({ success: false, error: 'Only sent quotes can be revised.' }, { status: 400 });
  }

  // The "root" is either this quote (if it's v1) or its parent
  const rootId = source.parentId ?? source.id;

  // Find the highest existing revision number under this root (including root itself)
  const existingRevisions = await prisma.quote.findMany({
    where: {
      OR: [{ id: rootId }, { parentId: rootId }],
    },
    select: { revision: true },
  });
  const nextRevision = Math.max(...existingRevisions.map((r) => r.revision), 1) + 1;

  const newId = `${rootId}-R${nextRevision}`;

  const created = await prisma.$transaction(async (tx) => {
    const q = await tx.quote.create({
      data: {
        id: newId,
        status: 'DRAFT',
        revision: nextRevision,
        parentId: rootId,

        customerName: source.customerName,
        customerCompany: source.customerCompany,
        customerEmail: source.customerEmail,
        customerPhone: source.customerPhone,
        customerGstin: source.customerGstin,

        deliveryCity: source.deliveryCity,
        deliveryState: source.deliveryState,
        deliveryPincode: source.deliveryPincode,
        requiredBy: source.requiredBy,
        notes: source.notes,

        subject: source.subject,
        supplierGstin: source.supplierGstin,
        validityDays: source.validityDays,
        validTill: source.validTill,
        paymentTerms: source.paymentTerms,
        deliveryTerms: source.deliveryTerms,
        remarks: source.remarks,

        preparedByName: source.preparedByName,
        preparedByRole: source.preparedByRole,
        preparedByPhone: source.preparedByPhone,

        items: {
          create: source.items.map((it) => ({
            productSlug: it.productSlug,
            productName: it.productName,
            description: it.description,
            itemCode: it.itemCode,
            hsnCode: it.hsnCode,
            grade: it.grade,
            packaging: it.packaging,
            quantity: it.quantity,
            unit: it.unit,
            unitPrice: it.unitPrice,
            discountPct: it.discountPct,
            taxPct: it.taxPct,
            position: it.position,
          })),
        },
      },
      include: { items: { orderBy: { position: 'asc' } } },
    });
    return q;
  });

  return Response.json({ success: true, quote: created });
}
