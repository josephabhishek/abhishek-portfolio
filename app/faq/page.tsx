import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/faq" },
  title: "FAQ",
  description:
    "Common questions about working with Abhishek Joseph — web development, SEO, Google & Meta ads, timelines, remote work, and rebuilds.",
};

const FAQ = [
  {
    q: "Do you build the website and do the marketing, or just one?",
    a: "Both. I custom-code the site and handle the growth side — SEO, Google and Meta ads, analytics and conversion tracking. That's the whole point: nothing gets lost in a handoff between a developer and a marketer.",
  },
  {
    q: "What do you build websites with?",
    a: "Mostly React, Next.js and Tailwind CSS for custom builds, with performance and technical SEO built into the foundation. I also work with WordPress when it's the right fit for the project.",
  },
  {
    q: "Can you improve my existing site instead of rebuilding it?",
    a: "Often, yes — and it's usually cheaper than a rebuild. I start with a quick audit of speed, SEO, mobile and the path to enquiry. Frequently two or three fixes do more than a full redesign would.",
  },
  {
    q: "Do you work remotely and with clients outside Rajasthan?",
    a: "Yes. I'm based in Mount Abu, Rajasthan and work remotely and hybrid, and I'm open to relocation for the right role. Most projects run entirely online from scoping to handover.",
  },
  {
    q: "How long does a website take?",
    a: "It depends on scope, but a focused, conversion-ready site is typically a few weeks. I'll give you a clear timeline after we talk through what you actually need.",
  },
  {
    q: "Do you offer ongoing SEO and ads, or just the build?",
    a: "Both. Some clients want a one-time build; others want ongoing SEO and paid-media work after launch. We can structure it either way.",
  },
  {
    q: "How much does it cost?",
    a: "It depends on scope — a landing page and a full multi-page site with ongoing marketing are very different. Tell me what you're trying to achieve and I'll give you an honest number.",
  },
  {
    q: "Will my site be fast and mobile-friendly?",
    a: "That's the baseline, not an upsell. Every build is mobile-first and tuned for Core Web Vitals, because that's where your traffic and your rankings actually live.",
  },
  {
    q: "Who owns the website and the code when it's done?",
    a: "You do — completely. The site is yours, hosted wherever you like, with no proprietary page builder and no lock-in. If we ever stop working together, you keep everything and can hand it to any developer.",
  },
  {
    q: "What do you need from me to get started?",
    a: "Access to your domain and hosting (or I'll help you set them up), any brand assets or content you already have, and an hour or two of your time to answer questions about the business. I handle the rest.",
  },
  {
    q: "Do you guarantee first-page rankings or a specific ROI?",
    a: "No honest marketer can — rankings and ad returns depend on your market, budget and competition, and anyone promising guaranteed #1 is selling you something. What I do guarantee is the technical foundation done right and honest reporting of what's actually happening, so you're never guessing.",
  },
  {
    q: "Can you take over a site someone else started?",
    a: "Usually, yes. I'll review what's there, tell you honestly what's worth keeping and what isn't, and pick up from a sensible point rather than charging you to redo work that's already fine.",
  },
  {
    q: "Which industries do you work with?",
    a: "Hospitality is where I've done my strongest work — hotels, resorts and travel brands — but the approach is the same for most local and service businesses: build it right, get it found, turn visitors into enquiries.",
  },
  {
    q: "How do we stay in touch during a project?",
    a: "Whatever's easiest for you — WhatsApp, email, or a quick call. You'll always know what stage we're at and what's coming next; no going quiet for weeks and hoping.",
  },
];

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="phead wrap">
        <span className="ey rv">// FAQ</span>
        <h1 className="rv d1">
          Questions,
          <br />
          answered.
        </h1>
        <p className="lead rv d2">
          The things people usually want to know before we start. Not here? <Link href="/contact" className="ul">Ask me</Link>.
        </p>
      </section>

      <section className="wrap" style={{ paddingBottom: "clamp(50px,8vw,100px)" }}>
        <div className="faq-list">
          {FAQ.map((f, i) => (
            <div className="faq-item rv" key={f.q}>
              <div className="faq-q">
                <span className="faq-i">{String(i + 1).padStart(2, "0")}</span>
                <h2>{f.q}</h2>
              </div>
              <p className="faq-a">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-band wrap">
        <span className="ey rv">// Still deciding?</span>
        <h2 className="rv d1">
          Easiest way to find out: <em>ask</em>.
        </h2>
        <Link className="btn btn-primary magnetic rv d2" data-mag=".2" href="/contact" data-cursor="Say hi">
          Start a conversation <span className="arw">&rarr;</span>
        </Link>
      </section>
    </>
  );
}
