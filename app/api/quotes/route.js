import { prisma } from '../../../lib/prisma.js';
import { requireAdmin } from '../../../lib/requireAdmin.js';

export async function GET(request) {
  const auth = await requireAdmin(request);
  if (!auth.ok) return Response.json({ success: false, error: auth.error }, { status: auth.status });

  const { searchParams } = new URL(request.url);
  const status = searchParams.get('status');

  const quotes = await prisma.quote.findMany({
    where: status ? { status } : undefined,
    orderBy: { createdAt: 'desc' },
    include: { _count: { select: { items: true } } },
  });

  return Response.json({ success: true, quotes });
}
