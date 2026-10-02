import type { Metadata } from "next";
import Link from "next/link";
import MediaImage from "@/components/MediaImage";
import { SITE } from "@/lib/projects";

export const metadata: Metadata = {
  alternates: { canonical: "/about" },
  title: "About",
  description:
    "About Abhishek Joseph — website developer and digital marketer in Mount Abu, Rajasthan. The path from business to marketing to development, and the skills across all three.",
};

const JOURNEY = [
  {
    num: "01",
    phase: "Foundation",
    title: "A business-first lens",
    text: "A BBA and a base in Rajasthan's tourism belt taught me to look at a website the way an owner does — not as a design exercise, but as something that has to bring in business.",
  },
  {
    num: "02",
    phase: "Marketing",
    title: "Learning what moves the needle",
    text: "Digital marketing came next — SEO, Google and Meta ads, analytics and tracking. The discipline of getting found, getting results, and being able to prove which was which.",
  },
  {
    num: "03",
    phase: "Development",
    title: "Building it myself",
    text: "Then development, and it clicked. React, Next.js, performance — the ability to build the thing exactly the way the strategy needed, instead of describing it to someone else.",
  },
  {
    num: "04",
    phase: "Today",
    title: "Complete digital experiences",
    text: "Now I hold all of it at once — build, launch, discover, convert, grow — so nothing gets lost in the handoff between a developer and a marketer. Because there isn't one.",
  },
];

const SKILLS: [string, string[]][] = [
  ["Development", ["React", "Next.js", "JavaScript", "TypeScript", "Node.js", "MongoDB", "HTML5", "CSS3", "Tailwind CSS", "REST APIs", "WordPress", "Elementor"]],
  ["Marketing & analytics", ["Technical SEO", "On-page SEO", "Keyword research", "Google Ads", "Meta Ads", "Social media", "GA4", "Google Tag Manager", "Meta Pixel", "Search Console", "Conversion tracking", "CRO"]],
  ["Performance & delivery", ["Core Web Vitals", "Responsive design", "Landing pages", "Git & GitHub", "Vercel", "Netlify", "DNS & domains"]],
  ["Design & content", ["Canva", "Ad & landing-page copy", "AI-assisted build"]],
];

const EXP = [
  {
    when: "2024 — Present",
    title: "Freelance Web Developer & Digital Marketer",
    text: "Self-employed. Custom-coded, responsive sites in React, Next.js and Tailwind; conversion-focused landing pages; on-page and technical SEO; GA4, GTM and Meta Pixel tracking. Managed clients end to end — scoping to handover — deploying via Vercel and Netlify.",
  },
  {
    when: "Feb — Mar 2025",
    title: "Digital Marketing Intern — ASDM, Ahmedabad",
    text: "SEO, social media and web development. Ran a Google Ads Search campaign end to end (6.07% CTR at ₹4.56 CPC across 3,000+ impressions), configured GA4 / GTM / Meta Pixel tracking, and built and edited WordPress sites in hands-on training.",
  },
  {
    when: "Sep 2024 — 2025",
    title: "Diploma in Digital Marketing & Web Development",
    text: "Ahmedabad School of Digital Marketing (9 months). Plus a BBA from Dr. Babasaheb Ambedkar Open University. Google Ads Search certified (Skillshop); Generative AI intensive (Outskill).",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="phead wrap">
        <span className="ey rv">// About</span>
        <h1 className="rv d1">
          I build the website &mdash;
          <br />
          and I know how
          <br />
          to grow it.
        </h1>
        <p className="lead rv d2">
          Abhishek Joseph &mdash; a website developer and digital marketer based in Mount Abu,
          Rajasthan. I work with hospitality brands and growth-focused teams that want one person
          across the whole journey.
        </p>
        <div className="hero-ctas rv d3" style={{ marginTop: "2rem" }}>
          <a className="btn btn-primary magnetic" data-mag=".2" href={SITE.cv} download data-cursor="Download">
            Download CV <span className="arw">&darr;</span>
          </a>
          <a className="btn btn-ghost" href={SITE.capabilities} download data-cursor="Download">
            Capabilities (PDF)
          </a>
        </div>
      </section>

      <section className="wrap sec" style={{ paddingTop: "clamp(30px,5vh,60px)" }}>
        <div className="ab-grid">
          <aside className="ab-sticky rv">
            <MediaImage
              wrapClass="ab-portrait"
              src="/images/portrait.webp"
              alt="Abhishek Joseph — illustrated avatar"
              caption="Abhishek Joseph"
              sub="Artist's impression"
              sizes="(max-width:900px) 100vw, 34vw"
            />
            <p className="avatar-quip">
              Yes, that&rsquo;s my headshot. I build serious websites &mdash; I just take my own photo a
              lot less seriously. A real one&rsquo;s coming; the hair, unfortunately, is accurate.
            </p>
            <div className="ab-quick">
              <div className="q"><span>Based in</span><span>Mount Abu, RJ</span></div>
              <div className="q"><span>Focus</span><span>Dev + Marketing</span></div>
              <div className="q"><span>Stack</span><span>React · Next.js</span></div>
              <div className="q"><span>Languages</span><span>EN · HI · GU</span></div>
              <div className="q"><span>Work</span><span>Remote · Hybrid</span></div>
            </div>
          </aside>
          <div className="prose rv d1">
            <p className="big">
              I came into development the long way round &mdash; through marketing. That order
              changed how I build.
            </p>
            <p>
              Before I shipped a line of production code, I was already thinking about how people
              find a site, what makes them stay, and what makes them act. So when I build now, I&rsquo;m
              never just building &mdash; I&rsquo;m asking the only question that pays:{" "}
              <em>will this actually bring in business?</em>
            </p>
            <p>
              Today I sit genuinely in the middle. I custom-code fast, responsive sites in React,
              Next.js and Tailwind, with performance and technical SEO in the foundation. Then I do
              the half most developers hand off &mdash; the SEO, the Google and Meta ads, the
              analytics and conversion tracking that turn a good-looking site into a measurable
              result.
            </p>
            <p>
              Most of that work has been with hospitality brands &mdash; hotels, resorts and travel,
              where a fast, findable, beautiful site shows up directly in bookings. Three
              custom-coded client sites within 15+ builds so far, and I&rsquo;ve seen what holding both
              disciplines does: one client site to Google position 1.9, a Search campaign at roughly
              double the benchmark CTR.
            </p>
          </div>
        </div>
      </section>

      <section className="wrap sec" style={{ paddingTop: 0 }}>
        <div className="sh">
          <div className="rv">
            <span className="ey">// The path here</span>
            <h2>
              How the pieces
              <br />
              connect.
            </h2>
          </div>
          <p className="rv d1">
            Four steps that ended up in the same place &mdash; someone who can build the experience
            and make it perform.
          </p>
        </div>
        <div className="jrny">
          {JOURNEY.map((j) => (
            <div className="jstep rv" key={j.num}>
              <div>
                <div className="jnum">{j.num}</div>
                <span className="jphase">{j.phase}</span>
              </div>
              <div>
                <h3>{j.title}</h3>
                <p>{j.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap sec" style={{ paddingTop: 0 }}>
        <div className="sh">
          <div className="rv">
            <span className="ey">// Capabilities</span>
            <h2>What I work with.</h2>
          </div>
        </div>
        {SKILLS.map(([title, items]) => (
          <div className="sk rv" key={title}>
            <h4>{title}</h4>
            <div className="chips">
              {items.map((t) => (
                <span className="chip" key={t}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="wrap sec" style={{ paddingTop: 0 }}>
        <div className="sh">
          <div className="rv">
            <span className="ey">// Experience &amp; education</span>
            <h2>The record.</h2>
          </div>
        </div>
        {EXP.map((e) => (
          <div className="exp rv" key={e.title}>
            <div className="when">{e.when}</div>
            <div>
              <h4>{e.title}</h4>
              <p>{e.text}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="wrap sec" style={{ paddingTop: 0 }}>
        <div className="sh">
          <div className="rv">
            <span className="ey">// Certifications</span>
            <h2>Credentials.</h2>
          </div>
        </div>
        <div className="cert-grid">
          {[
            { issuer: "Google Skillshop", title: "Google Ads Search Certification", meta: "Certified" },
            { issuer: "Outskill", title: "Generative AI Mastermind", meta: "16-hour intensive" },
            { issuer: "ASDM, Ahmedabad", title: "Diploma — Digital Marketing & Web Development", meta: "9 months · 2024–25" },
            { issuer: "Dr. B.R. Ambedkar Open University", title: "Bachelor of Business Administration", meta: "BBA" },
            { issuer: "ASDM internship", title: "Google Ads · SEO · Social Media", meta: "Certified" },
            { issuer: "ASDM internship", title: "WordPress Development · Graphic Design", meta: "Certified" },
          ].map((c) => (
            <div className="cert rv" key={c.title}>
              <span className="cert-mark" aria-hidden="true">✓</span>
              <div>
                <div className="cert-issuer">{c.issuer}</div>
                <div className="cert-title">{c.title}</div>
                <div className="cert-meta">{c.meta}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap sec" style={{ paddingTop: 0 }}>
        <span className="ey rv" style={{ display: "block", marginBottom: "1.6rem" }}>
          // How I work
        </span>
        <p className="philo rv d1">
          Start from the business goal, not the layout. Ship something fast and <em>measurable</em>{" "}
          over something merely pretty.
        </p>
      </section>

      <section className="cta-band wrap">
        <span className="ey rv">// Work with me</span>
        <h2 className="rv d1">
          Two skill sets, <em>one</em> point of contact.
        </h2>
        <Link className="btn btn-primary magnetic rv d2" data-mag=".2" href="/contact" data-cursor="Say hi">
          Get in touch <span className="arw">&rarr;</span>
        </Link>
      </section>
    </>
  );
}
