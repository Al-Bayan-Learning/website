import type { APIRoute } from 'astro';

/**
 * POST /api/contact
 *
 * Server-side code (forms now, payments later) lives in the Astro site as
 * routes/endpoints that opt out of prerendering. The Cloudflare adapter bundles
 * these into the Worker, which serves them alongside the static assets — there
 * is no separate /functions folder. This is a minimal stub: wire up real
 * handling (validation, email, storage) when the contact form is built.
 */
export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return Response.json({ ok: false, error: 'Invalid JSON body' }, { status: 400 });
  }

  // TODO: validate input and forward the message (email / queue / storage).
  console.log('Contact form submission received', data);

  return Response.json({ ok: true });
};
