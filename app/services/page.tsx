import type { Metadata } from "next";
import Link from "next/link";
import BeforeAfter from "@/components/BeforeAfter";

export const metadata: Metadata = {
  alternates: { canonical: "/services" },
  title: "Services",
  description:
    "What Abhishek Joseph does: custom website design & build, technical + on-page SEO, Google & Meta ads, and analytics & conversion tracking — build and growth from one person.",
};

const SERVICES = [
  {
    idx: "01",
    title: "Website design & build",
    text: "Custom-coded, fast, responsive sites and landing pages — designed to look premium and built with performance and SEO in the foundation.",
    chips: ["React / Next.js", "Tailwind", "Responsive", "Core Web Vitals", "Landing pages"],
  },
  {
    idx: "02",
    title: "SEO",
    text: "Technical and on-page SEO that gets you found — clean structure, metadata, keyword mapping and internal linking, tracked in Search Console.",
    chips: ["Technical SEO", "On-page SEO", "Keyword research", "Search Console"],
  },
  {
    idx: "03",
    title: "Paid advertising",
    text: "Google Search and Meta campaigns that spend efficiently — set up, tracked, and optimised toward real enquiries, not vanity clicks.",
    chips: ["Google Ads", "Meta Ads", "Campaign tracking", "Optimisation"],
  },
  {
    idx: "04",
    title: "Analytics & conversion",
    text: "The measurement most sites skip: GA4, Tag Manager and Meta Pixel wired up, plus conversion-rate work so you know what's actually working.",
    chips: ["GA4", "Google Tag Manager", "Meta Pixel", "CRO"],
  },
];

const WAYS = [
  {
    k: "Option A",
    title: "A project",
    text: "A defined build with a clear start and finish — a new website, a rebuild, or a focused landing page. Fixed scope, honest timeline, delivered and yours.",
    chips: ["New site", "Rebuild", "Landing page", "Fixed scope"],
    best: "you know roughly what you need and want it built properly, once.",
    cta: "Start a project",
    href: "/contact?need=new-site",
    featured: false,
    badge: "",
  },
  {
    k: "Option B",
    title: "Ongoing growth",
    text: "Monthly SEO, paid media and iteration after launch — the work that compounds. For businesses that want to keep climbing, not just go live and stop.",
    chips: ["SEO", "Google & Meta ads", "Reporting", "Monthly"],
    best: "you're already live and want a steady hand on growth and tracking.",
    cta: "Talk about growth",
    href: "/contact?need=seo",
    featured: true,
    badge: "Most popular",
  },
  {
    k: "Option C",
    title: "A free audit",
    text: "A no-cost look at your current site — speed, SEO, mobile, and the path from visitor to enquiry. You get the findings whether or not we work together.",
    chips: ["Speed", "SEO", "Mobile", "Zero obligation"],
    best: "you're not sure what's wrong yet and want a clear, honest starting point.",
    cta: "Get a free audit",
    href: "/contact?need=rebuild",
    featured: false,
    badge: "",
  },
];

const PROCESS = [
  { num: "01", title: "Discover", text: "Understand the business, the audience, and what a win actually looks like — before a pixel is drawn." },
  { num: "02", title: "Design", text: "Shape the structure and look around that goal: clear, premium, and built to convert." },
  { num: "03", title: "Build", text: "Custom-code it fast and clean, with performance and technical SEO baked in from the start." },
  { num: "04", title: "Launch", text: "Ship it properly — tracking, Search Console, and the checks that make sure it's found." },
  { num: "05", title: "Grow", text: "SEO and paid media to bring the right people in, measured so we know what moved the needle." },
];

export default function ServicesPage() {
  return (
    <>
      <section className="phead wrap">
        <span className="ey rv">// Services</span>
        <h1 className="rv d1">
          Build and growth,
          <br />
          from one person.
        </h1>
        <p className="lead rv d2">
          Most projects need a developer <em>and</em> a marketer. I&rsquo;m both &mdash; so the site gets
          built right and set up to perform, without anything lost in the handoff.
        </p>
      </section>

      <section className="wrap sec" style={{ paddingTop: "clamp(20px,3vh,40px)" }}>
        <div className="svc-grid">
          {SERVICES.map((s) => (
            <div className="svc-card rv" key={s.idx}>
              <div className="svc-i">{s.idx}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <div className="chips">
                {s.chips.map((c) => (
                  <span className="chip" key={c}>{c}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <BeforeAfter />
      </section>

      <section className="wrap sec" style={{ paddingTop: 0 }}>
        <div className="sh">
          <div className="rv">
            <span className="ey">// How it goes</span>
            <h2>
              A simple, honest
              <br />
              process.
            </h2>
          </div>
          <p className="rv d1">
            Five steps from first conversation to a site that&rsquo;s live, found, and improving.
          </p>
        </div>
        <div className="jrny">
          {PROCESS.map((p) => (
            <div className="jstep rv" key={p.num}>
              <div>
                <div className="jnum">{p.num}</div>
              </div>
              <div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap sec" style={{ paddingTop: 0 }}>
        <div className="sh">
          <div className="rv">
            <span className="ey">// Ways to work</span>
            <h2>
              Three ways
              <br />
              to start.
            </h2>
          </div>
          <p className="rv d1">
            Every project starts with a conversation, not a price list &mdash; because a landing
            page and a full build with ongoing growth are very different things. Here&rsquo;s the
            shape most work takes.
          </p>
        </div>
        <div className="ways-grid">
          {WAYS.map((w) => (
            <div className={`way-card rv${w.featured ? " way-feat" : ""}`} key={w.title}>
              {w.badge ? <span className="way-badge">{w.badge}</span> : null}
              <span className="way-k">{w.k}</span>
              <h3>{w.title}</h3>
              <p>{w.text}</p>
              <div className="chips">
                {w.chips.map((c) => (
                  <span className="chip" key={c}>{c}</span>
                ))}
              </div>
              <p className="way-best"><b>Best if:</b> {w.best}</p>
              <Link className="ul way-cta" href={w.href} data-cursor="Start">
                {w.cta} <span className="arw">&rarr;</span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap sec" style={{ paddingTop: 0 }}>
        <div className="sh">
          <div className="rv">
            <span className="ey">// Who it&rsquo;s for</span>
            <h2>Good fit if&hellip;</h2>
          </div>
          <p className="rv d1">
            I do my best work with people who care that the website actually earns its place.
          </p>
        </div>
        <div className="sk rv">
          <h4>Ideal clients</h4>
          <div className="chips">
            <span className="chip">Hotels &amp; resorts</span>
            <span className="chip">Travel &amp; hospitality</span>
            <span className="chip">Local businesses</span>
            <span className="chip">Founders &amp; small teams</span>
            <span className="chip">Anyone rebuilding a slow site</span>
          </div>
        </div>
      </section>

      <section className="cta-band wrap">
        <span className="ey rv">// Let&rsquo;s talk</span>
        <h2 className="rv d1">
          Tell me what you&rsquo;re trying to <em>grow</em>.
        </h2>
        <Link className="btn btn-primary magnetic rv d2" data-mag=".2" href="/contact" data-cursor="Say hi">
          Start a conversation <span className="arw">&rarr;</span>
        </Link>
      </section>
    </>
  );
}
