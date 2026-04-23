/**
 * Auth for admin-only quote routes. Matches the /api/publish convention —
 * client sends adminPassword in the JSON body (or for GET, in ?adminPassword=
 * query param).
 */
export async function requireAdmin(request) {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) {
    return { ok: false, status: 500, error: 'Server misconfigured: ADMIN_PASSWORD not set' };
  }

  let provided = null;

  if (request.method === 'GET') {
    const { searchParams } = new URL(request.url);
    provided = searchParams.get('adminPassword');
  } else {
    try {
      const cloned = request.clone();
      const body = await cloned.json();
      provided = body?.adminPassword;
    } catch {
      provided = null;
    }
  }

  if (!provided || provided !== expected) {
    return { ok: false, status: 401, error: 'Unauthorized' };
  }
  return { ok: true };
}
