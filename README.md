# Abhishek Joseph — Portfolio

Personal portfolio for **Abhishek Joseph — Website Developer × Digital Marketer**.
Editorial, light, minimalist. Built to be the proof of the work it describes: fast, findable, and conversion-aware.

## Stack

- **Next.js 15** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS v4** (with a custom design-system layer in `app/globals.css`)
- **next/font** — Fraunces (display serif), Inter (body), Space Mono (metadata)
- **next/image** for optimised imagery
- Contact form → **Next.js API route** (`/api/contact`) sending email via **Resend**

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in the values
npm run dev                  # http://localhost:3000
```

Build for production:

```bash
npm run build && npm start
```

## Deploy (Vercel — recommended)

1. Push this repo to GitHub.
2. Import it in Vercel.
3. Add the environment variables from `.env.example` in **Project → Settings → Environment Variables**.
4. Deploy. `next/image`, sitemap and robots work out of the box.

## Contact form

The form posts to `app/api/contact/route.ts`, which sends email with [Resend](https://resend.com).
Set these env vars (see `.env.example`):

- `RESEND_API_KEY` — from your Resend dashboard
- `CONTACT_TO_EMAIL` — where enquiries are delivered
- `CONTACT_FROM_EMAIL` — a sender on a domain you've verified in Resend (optional; falls back to Resend's sandbox sender)

Without these, the form returns a clear "email isn't configured yet" message instead of failing silently.

## Where to plug in real content

Everything below is placeholder-safe and clearly marked:

- **Your links & email** — `lib/projects.ts` → `SITE` (email, linkedin, github, url).
- **Portrait** — `public/images/portrait.webp` is a tasteful placeholder. Replace with a real photo (4:5).
- **Project imagery** — real photos are already wired in `public/images/*` (MIJMAAN, Pushkar Rajwada, Jawai). Swap or add live-site screenshots any time; update paths in `lib/projects.ts`.
- **Project copy & results** — all in `lib/projects.ts`.

## Structure

```
app/
  layout.tsx            fonts, metadata, Nav/Footer/Interactions
  template.tsx          per-route fade transition
  page.tsx              Home
  work/page.tsx         Work index
  work/[slug]/page.tsx  Case study (static-generated per project)
  about/page.tsx        About — visual journey
  contact/page.tsx      Contact
  api/contact/route.ts  Email endpoint
  globals.css           Design system
components/             Nav, Footer, Interactions, MediaImage, HeroVisual, ContactForm
lib/projects.ts         Project data + site constants
public/images/          Optimised imagery
```

## Notes on content integrity

All copy and metrics come from Abhishek's real CV and client work
(position 1.9, 10.2% organic CTR, 6.07% Ads CTR, 15+ builds, 3 custom client sites).
No invented clients, testimonials, awards, or statistics. The portrait is a placeholder until a real photo is added.

## New sections & config knobs

- **Services** — `app/services/page.tsx` (edit the `SERVICES` and `PROCESS` arrays).
- **Notes / blog** — add posts by appending to the `notes` array in `lib/notes.ts` (typed blocks: `p`, `h2`, `ul`, `quote`). Each becomes a static, SEO-ready page at `/notes/<slug>` and is added to the sitemap automatically.
- **Free-audit lead form** — `components/AuditCTA.tsx` on the home page; submissions post to `/api/contact` with `type: "audit"` and email you the URL.
- **WhatsApp button** — floating, set `SITE.whatsapp` (digits only) in `lib/projects.ts`; remove that value to hide it.
- **Book-a-call** — set `SITE.calendly` to your booking URL to enable "Book a call" buttons (hidden while empty).
- **Proof chart** — the MIJMAAN case study renders a live chart from real Search Console data in `lib/projects.ts` (`gsc` array).
- **Live-site links** — set `liveUrl` on any project in `lib/projects.ts` to show a "Visit live site" button.
