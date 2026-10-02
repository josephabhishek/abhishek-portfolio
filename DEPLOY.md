# Deploy guide — get the site live

Follow these once. Total time: ~15 minutes. You need a free **GitHub** account and a free **Vercel** account.

---

## 1. Put the code on GitHub

Open a terminal in the project folder (`abhishek-portfolio`) and run:

```bash
git init
git add .
git commit -m "Abhishek Joseph portfolio"
```

Then create an empty repo on GitHub (github.com → New repository → name it `portfolio` → **don't** add a README) and copy the commands GitHub shows under "…or push an existing repository". They look like:

```bash
git remote add origin https://github.com/josephabhishek/portfolio.git
git branch -M main
git push -u origin main
```

Your code is now on GitHub.

---

## 2. Deploy on Vercel

1. Go to **vercel.com** → sign in with GitHub.
2. **Add New… → Project** → import your `portfolio` repo.
3. Vercel auto-detects Next.js — leave all build settings default.
4. Before deploying, open **Environment Variables** and add these three (from `.env.example`) so the contact form works:
   - `RESEND_API_KEY` — from resend.com (free)
   - `CONTACT_TO_EMAIL` — your inbox
   - `CONTACT_FROM_EMAIL` — optional (a sender on a domain you verify in Resend)
5. Click **Deploy**. In ~1 minute you'll have a live URL like `portfolio-xxxx.vercel.app`.

Analytics (already wired) starts collecting automatically on Vercel.

---

## 3. Add your domain (optional but recommended)

1. Buy a domain (Namecheap, GoDaddy, Google Domains…). Something like `abhishekjoseph.com`.
2. In Vercel → your project → **Settings → Domains** → add the domain, and follow the DNS records it gives you (add them at your registrar).
3. Once it verifies, update `SITE.url` in `lib/projects.ts` to your final domain and push again — this makes the sitemap, RSS and share images use the real address.

---

## 4. Get found (do this the day it's live)

1. **Google Search Console** (search.google.com/search-console) → add your domain → verify (Vercel/registrar DNS makes this easy).
2. Submit your sitemap: enter `sitemap.xml` under **Sitemaps**.
3. That's it — Google will start indexing. Your blog posts and pages will begin showing up over the following weeks.

---

## Updating the site later

Any change you push to GitHub `main` redeploys automatically. To add a blog post, edit `lib/notes.ts` and push — the new post, its page, the sitemap and RSS update themselves.

---

## Quick checklist

- [ ] Pushed to GitHub
- [ ] Deployed on Vercel
- [ ] Added `RESEND_API_KEY` + `CONTACT_TO_EMAIL` (contact form works)
- [ ] Added custom domain + updated `SITE.url`
- [ ] Verified in Google Search Console + submitted sitemap
- [ ] Swapped the placeholder portrait (`public/images/portrait.webp`) for a real photo
- [ ] Added a real testimonial or two in `lib/testimonials.ts`
