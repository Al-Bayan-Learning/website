/**
 * Cloudflare Pages Function: POST /api/contact
 *
 * Server-side code (forms now, payments later) lives here under /functions and
 * is deployed automatically by Cloudflare Pages alongside the static Astro
 * build. This is a minimal stub — wire up real handling (validation, email,
 * storage) when the contact form is built.
 */
export const onRequestPost: PagesFunction = async (context) => {
  let data: Record<string, unknown>;
  try {
    data = await context.request.json();
  } catch {
    return Response.json({ ok: false, error: 'Invalid JSON body' }, { status: 400 });
  }

  // TODO: validate input and forward the message (email / queue / storage).
  console.log('Contact form submission received', data);

  return Response.json({ ok: true });
};
