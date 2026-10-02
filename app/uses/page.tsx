import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/uses" },
  title: "Uses",
  description:
    "The tools, stack and services Abhishek Joseph uses to build and grow websites — development, marketing, analytics and deployment.",
};

const GROUPS: { label: string; items: { name: string; note: string }[] }[] = [
  {
    label: "Build",
    items: [
      { name: "Next.js + React", note: "My default for custom, fast, SEO-friendly sites." },
      { name: "TypeScript", note: "Fewer bugs, easier to maintain." },
      { name: "Tailwind CSS", note: "Design system speed without the bloat." },
      { name: "Node.js + REST APIs", note: "When a site needs a backend." },
      { name: "WordPress + Elementor", note: "When a builder is genuinely the right fit." },
    ],
  },
  {
    label: "Grow",
    items: [
      { name: "Google Search Console", note: "Where I watch rankings and coverage." },
      { name: "Google Ads (Search)", note: "Tight, measured campaigns." },
      { name: "Meta Ads", note: "Social reach and retargeting." },
      { name: "GA4 + Tag Manager", note: "Analytics and event tracking." },
      { name: "Meta Pixel", note: "Conversion tracking and audiences." },
    ],
  },
  {
    label: "Ship & tools",
    items: [
      { name: "Vercel + Netlify", note: "Fast, reliable deploys." },
      { name: "Git + GitHub", note: "Version control on everything." },
      { name: "Canva", note: "Quick graphics and ad creative." },
      { name: "Claude, ChatGPT, Cursor", note: "AI to accelerate build and copy." },
      { name: "Lighthouse", note: "Keeping Core Web Vitals honest." },
    ],
  },
];

export default function UsesPage() {
  return (
    <>
      <section className="phead wrap">
        <span className="ey rv">// Uses</span>
        <h1 className="rv d1">
          What I build
          <br />
          and grow with.
        </h1>
        <p className="lead rv d2">
          The stack and tools behind the work &mdash; kept deliberately lean, and chosen because they
          ship fast, findable sites.
        </p>
      </section>

      <section className="wrap sec" style={{ paddingTop: "clamp(20px,3vh,40px)" }}>
        {GROUPS.map((g) => (
          <div className="uses-group rv" key={g.label}>
            <h2 className="uses-label">{g.label}</h2>
            <div className="uses-items">
              {g.items.map((it) => (
                <div className="uses-item" key={it.name}>
                  <span className="uses-name">{it.name}</span>
                  <span className="uses-note">{it.note}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
