import Link from "next/link";
import HeroVisual from "@/components/HeroVisual";
import MediaImage from "@/components/MediaImage";
import AuditCTA from "@/components/AuditCTA";
import NeedChooser from "@/components/NeedChooser";
import Testimonials from "@/components/Testimonials";
import { projects } from "@/lib/projects";
import { notes } from "@/lib/notes";

const STACK = ["React", "Next.js", "TypeScript", "Tailwind", "Node.js", "WordPress", "SEO", "Google Ads", "Meta Ads", "GA4", "GTM", "Vercel"];

const BUILD = [
  "Custom-coded websites",
  "React & Next.js",
  "TypeScript · Tailwind",
  "Responsive, mobile-first",
  "Core Web Vitals",
  "Technical SEO foundations",
];
const GROW = [
  "Search engine optimisation",
  "Google Ads (Search)",
  "Meta Ads",
  "Social media",
  "Conversion optimisation",
  "GA4 · GTM · tracking",
];

function Marq() {
  const items = (
    <>
      <b>15+ Websites built</b><i>&times;</i>
      <b>3 Custom-coded client sites</b><i>&times;</i>
      <b>Google position 1.9</b><i>&times;</i>
      <b>10.2% organic CTR</b><i>&times;</i>
      <b>6.07% Ads CTR</b><i>&times;</i>
      <b>~2&times; benchmark</b><s>&mdash;</s>
    </>
  );
  return (
    <div className="marq">
      <div className="marq-t">
        {items}
        {items}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <section className="hero wrap">
        <div className="hero-bg" aria-hidden="true" />
        <div className="hero-grid">
          <div>
            <div className="ey rv">
              <span className="ln" /> Website Developer <span className="sq">&times;</span> Digital Marketer
            </div>
            <h1 className="hero-title" aria-label="I build digital experiences that look good — and perform.">
              <span className="line"><span>I build digital</span></span>
              <span className="line"><span>experiences that</span></span>
              <span className="line"><span>look good &mdash; and</span></span>
              <span className="line"><span><em>perform</em>.</span></span>
            </h1>
            <p className="lead sub rv d2">
              I&rsquo;m Abhishek Joseph. I design and code the website, then run the SEO and paid
              media that turn it into measurable business results. One person, both halves.
            </p>
            <div className="hero-ctas rv d3">
              <Link className="btn btn-primary magnetic" data-mag=".22" href="/work" data-cursor="Explore">
                View selected work <span className="arw">&rarr;</span>
              </Link>
              <Link className="btn btn-ghost" href="/contact">
                Start a project
              </Link>
            </div>
            <div className="hero-person rv d4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="hero-avatar" src="/images/portrait.webp" alt="Abhishek Joseph — avatar" width={44} height={44} />
              <div className="avail-pills">
                <span className="pill"><span className="pl" /> Booking 1&ndash;2 projects a month</span>
                <span className="pill">&#9889; Replies within a day</span>
              </div>
            </div>
          </div>
          <HeroVisual />
        </div>
        <div className="scroll-cue" aria-hidden="true">
          <span>Scroll</span>
          <span className="sc-line" />
        </div>
      </section>

      <Marq />

      <section className="sec wrap">
        <div className="ey rv" style={{ marginBottom: "1.4rem" }}>// The idea</div>
        <div className="bgst rv d1">
          A website shouldn&rsquo;t just <em>exist</em>. It should be found, and it should{" "}
          <em>perform</em>.
        </div>
        <div className="bg">
          <div className="bg-col rv d1">
            <div className="bi">01 &mdash; Build</div>
            <h3>Build</h3>
            <p>
              The craft of making it: fast, considered, custom-coded &mdash; with the technical
              foundations for growth baked in.
            </p>
            <div className="bg-list">
              {BUILD.map((t, i) => (
                <div className="li" key={t}>
                  <span className="n">{String(i + 1).padStart(2, "0")}</span>
                  {t}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-x rv d2">&times;</div>
          <div className="bg-col rv d3">
            <div className="bi">02 &mdash; Grow</div>
            <h3>Grow</h3>
            <p>
              The work of making it count: getting it found, getting it converting, and proving what
              actually moved the needle.
            </p>
            <div className="bg-list">
              {GROW.map((t, i) => (
                <div className="li" key={t}>
                  <span className="n">{String(i + 1).padStart(2, "0")}</span>
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-note rv">
          Most people hand one half to someone else. I hold <b>both</b>.
        </div>
      </section>

      <section className="stack-strip wrap rv">
        <span className="ey">// The stack</span>
        <div className="stack-row">
          {STACK.map((t) => (
            <span className="stack-item" key={t}>{t}</span>
          ))}
        </div>
      </section>

      <NeedChooser />

      <section className="sec wrap" style={{ paddingBottom: "clamp(30px,5vw,60px)" }}>
        <div className="sh">
          <div className="rv">
            <span className="ey">// Selected work &mdash; 2024&ndash;25</span>
            <h2>
              The work is
              <br />
              the argument.
            </h2>
          </div>
          <p className="rv d1">
            Three custom-coded hospitality projects. Each one designed to load fast, get found, and
            turn visitors into enquiries.
          </p>
        </div>
        <div className="work-list">
          {projects.map((p, i) => (
            <Link className="wrow wlink rv" href={`/work/${p.slug}`} key={p.slug} data-cursor="Open">
              <MediaImage
                wrapClass="wmedia"
                src={p.card}
                alt={`${p.name} — ${p.category}`}
                caption={p.name}
                sub={p.category}
                tag={p.tags[0]}
                sizes="(max-width:900px) 100vw, 50vw"
                priority={i === 0}
              />
              <div className="wbody">
                <div className="wm">
                  <span className="wi">{String(i + 1).padStart(2, "0")}</span>
                  <span>{p.category}</span>
                  <span>&middot;</span>
                  <span>{p.location.split(",")[0]}</span>
                </div>
                <h3>{p.name}</h3>
                <p className="role">{p.tagline}</p>
                <div className="wtags">
                  {p.tags.map((t) => (
                    <span className="chip" key={t}>{t}</span>
                  ))}
                </div>
                <div className="wres">
                  <span className="sq" />
                  {p.result}
                </div>
                <span className="ul">
                  View case study <span className="arw">&rarr;</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="results">
        <div className="wrap">
          <span className="ey rv">// The evidence</span>
          <h2 className="rv d1" style={{ marginTop: "1.1rem" }}>
            Results, measured &mdash; not claimed.
          </h2>
          <div className="res-slim rv d2">
            <span><b>15+</b> websites built</span>
            <span><b>3</b> custom client builds</span>
            <span><b>3,000+</b> ad impressions managed</span>
          </div>
          <div className="res-grid">
            <div className="rv">
              <div className="res-h">Organic &mdash; Google Search</div>
              <div className="res-m">
                <span className="rn" data-count="1.9" data-dec="1">1.9</span>
                <span className="rl">Avg. Google position for a client site</span>
              </div>
              <div className="res-m">
                <span className="rn" data-count="10.2" data-dec="1" data-suf="%">10.2%</span>
                <span className="rl">Organic click-through &mdash; first week live</span>
              </div>
            </div>
            <div className="rv d1">
              <div className="res-h">Paid &mdash; Google Ads (Search)</div>
              <div className="res-m">
                <span className="rn" data-count="6.07" data-dec="2" data-suf="%">6.07%</span>
                <span className="rl">Search campaign CTR, 3,000+ impressions</span>
              </div>
              <div className="res-m">
                <span className="rn"><em>≈2&times;</em></span>
                <span className="rl">Roughly double the ~3% industry benchmark</span>
              </div>
            </div>
          </div>
          <p className="res-note rv">
            Figures reflect real freelance and internship outcomes. Results depend on market, budget
            and timeframe &mdash; these are examples of what happened, not a promise of what will.
          </p>
        </div>
      </section>

      <section className="sec wrap">
        <div className="apv">
          <MediaImage
            wrapClass="apv-media"
            src="/images/portrait.webp"
            alt="Abhishek Joseph"
            caption="Abhishek Joseph"
            sub="Artist's impression"
            sizes="(max-width:900px) 100vw, 40vw"
          />
          <div className="rv d1">
            <span className="ey">// About</span>
            <h2 style={{ marginTop: "1.1rem" }}>
              A developer who thinks
              <br />
              like a marketer &mdash; and back again.
            </h2>
            <p className="lead">
              I came into development through marketing, so I never stopped asking the only question
              that matters while I build: <em>will this actually bring in business?</em>
            </p>
            <p>
              Based in Mount Abu, Rajasthan, I work with hospitality brands and growth-focused teams
              who need one person across the whole journey &mdash; build, launch, discover, convert,
              grow.
            </p>
            <Link className="ul" href="/about" style={{ marginTop: "1.7rem" }}>
              Read the full story <span className="arw">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="sec wrap" style={{ paddingTop: 0 }}>
        <div className="sh">
          <div className="rv">
            <span className="ey">// Latest</span>
            <h2>From the journal.</h2>
          </div>
          <p className="rv d1">
            Notes on AI search, performance and the craft &mdash; written by someone who ships it,
            not just writes about it.
          </p>
        </div>
        <Link className="note-feat rv" href={`/notes/${notes[0].slug}`} data-cursor="Read">
          <div className="note-feat-in">
            <div className="note-feat-meta">
              <span className="nf-cat">{notes[0].category}</span>
              <span>{notes[0].date}</span>
              <span>&middot;</span>
              <span>{notes[0].readMins} min read</span>
            </div>
            <h2 className="note-feat-title">{notes[0].title}</h2>
            <p className="note-feat-ex">{notes[0].excerpt}</p>
            <span className="ul">Read the post <span className="arw">&rarr;</span></span>
          </div>
          <div className="note-feat-glow" aria-hidden="true" />
        </Link>
      </section>

      <Testimonials />

      <AuditCTA />
    </>
  );
}
