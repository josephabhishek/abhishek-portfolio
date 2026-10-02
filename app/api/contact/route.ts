import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

function esc(s: string) {
  return s.replace(/[<>&]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;" }[c] as string));
}

export async function POST(req: Request) {
  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const type = (body.type || "enquiry").trim();
  const isAudit = type === "audit";
  const isSubscribe = type === "subscribe";
  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const company = (body.company || "").trim();
  const scope = (body.scope || "").trim();
  const website = (body.website || "").trim();
  const message = (body.message || "").trim();
  const honeypot = (body.company_website || "").trim();

  // Bot trap — silently accept, don't send.
  if (honeypot) return NextResponse.json({ ok: true });

  // Subscribe needs email only; audit needs website + email; enquiry needs name + message.
  if (isSubscribe) {
    if (!email) {
      return NextResponse.json({ ok: false, error: "Please add your email." }, { status: 400 });
    }
  } else if (isAudit) {
    if (!email || !website) {
      return NextResponse.json({ ok: false, error: "Please add your website and email." }, { status: 400 });
    }
  } else if (!name || !email || !message) {
    return NextResponse.json({ ok: false, error: "Please fill in your name, email and message." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "That email address doesn't look right." }, { status: 400 });
  }
  if (message.length > 5000) {
    return NextResponse.json({ ok: false, error: "That message is a little long — please trim it." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  // FROM must be a domain you've verified in Resend; falls back to Resend's shared sandbox sender.
  const from = process.env.CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>";

  if (!apiKey || !to) {
    console.warn("[contact] Missing RESEND_API_KEY or CONTACT_TO_EMAIL — email not sent.");
    return NextResponse.json(
      { ok: false, error: "Email isn't configured yet. Add RESEND_API_KEY and CONTACT_TO_EMAIL." },
      { status: 503 }
    );
  }

  try {
    const resend = new Resend(apiKey);
    const html = isSubscribe
      ? `
      <h2>New newsletter subscriber</h2>
      <p><strong>Email:</strong> ${esc(email)}</p>
    `
      : isAudit
      ? `
      <h2>Free website audit request</h2>
      <p><strong>Website:</strong> ${esc(website)}</p>
      <p><strong>Email:</strong> ${esc(email)}</p>
      ${name ? `<p><strong>Name:</strong> ${esc(name)}</p>` : ""}
      ${message ? `<p><strong>Notes:</strong></p><p style="white-space:pre-wrap">${esc(message)}</p>` : ""}
    `
      : `
      <h2>New enquiry from your portfolio</h2>
      <p><strong>Name:</strong> ${esc(name)}</p>
      <p><strong>Email:</strong> ${esc(email)}</p>
      ${company ? `<p><strong>Company / Project:</strong> ${esc(company)}</p>` : ""}
      ${scope ? `<p><strong>Looking to build:</strong> ${esc(scope)}</p>` : ""}
      <p><strong>Message:</strong></p>
      <p style="white-space:pre-wrap">${esc(message)}</p>
    `;
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: isSubscribe
        ? `New newsletter subscriber — ${email}`
        : isAudit
        ? `Website audit request — ${website}`
        : `Portfolio enquiry — ${name}`,
      html,
    });
    if (error) {
      console.error("[contact] Resend error:", error);
      return NextResponse.json({ ok: false, error: "Couldn't send right now — please email me directly." }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return NextResponse.json({ ok: false, error: "Something went wrong sending your message." }, { status: 500 });
  }
}
