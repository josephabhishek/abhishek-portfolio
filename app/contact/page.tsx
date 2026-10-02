import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { SITE } from "@/lib/projects";

export const metadata: Metadata = {
  alternates: { canonical: "/contact" },
  title: "Contact",
  description:
    "Get in touch with Abhishek Joseph — website developer and digital marketer. Start a new build, a rebuild, or a growth project.",
};

export default function ContactPage() {
  const hasEmail = SITE.email && SITE.email !== "hello@example.com";
  const hasLinked = SITE.linkedin && SITE.linkedin !== "#";
  const hasGit = SITE.github && SITE.github !== "#";
  return (
    <>
      <section className="phead wrap" style={{ paddingBottom: "clamp(10px,2vh,24px)" }}>
        <span className="ey rv">// Contact</span>
      </section>
      <section className="wrap sec" style={{ paddingTop: 0 }}>
        <div className="ct-grid">
          <div className="ct-left rv">
            <h1>
              Have something
              <br />
              worth <em>building</em>?
            </h1>
            <p className="lead">
              A new build, a rebuild, or a site that should be ranking and converting better than it
              is. Tell me a little about it &mdash; I&rsquo;ll reply personally.
            </p>
            <div className="ct-detail">
              <a href={hasEmail ? `mailto:${SITE.email}` : "#"}>
                <span className="k">Email</span>
                <span className="v">{hasEmail ? SITE.email : "Add email ↗"}</span>
              </a>
              <a href={SITE.linkedin} target="_blank" rel="noreferrer">
                <span className="k">LinkedIn</span>
                <span className="v">{hasLinked ? "View profile ↗" : "Add profile ↗"}</span>
              </a>
              <a href={SITE.github} target="_blank" rel="noreferrer">
                <span className="k">GitHub</span>
                <span className="v">{hasGit ? "View profile ↗" : "Add profile ↗"}</span>
              </a>
              <div className="row">
                <span className="k">Location</span>
                <span className="v">Mount Abu, Rajasthan &mdash; remote &amp; hybrid</span>
              </div>
              <div className="row">
                <span className="k">Availability</span>
                <span className="v">Open to select freelance &amp; contract work</span>
              </div>
              <div className="row">
                <span className="k">Reply time</span>
                <span className="v">Usually within a day &mdash; IST (GMT+5:30)</span>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <section className="wrap sec" style={{ paddingTop: 0 }}>
        <div className="sh">
          <div className="rv">
            <span className="ey">// What happens next</span>
            <h2>No black box.</h2>
          </div>
          <p className="rv d1">
            Sending a message doesn&rsquo;t commit you to anything. Here&rsquo;s exactly how it
            goes from your first note to a plan you can say yes or no to.
          </p>
        </div>
        <div className="next-steps">
          {[
            { n: "01", t: "You send a note", d: "A sentence or two about what you need. Two minutes, no forms-within-forms." },
            { n: "02", t: "I reply personally", d: "Usually within a day, often sooner. A real reply from me — not an autoresponder." },
            { n: "03", t: "We scope it together", d: "A quick call or email thread to work out what you actually need. No pressure, no obligation." },
            { n: "04", t: "You get a clear plan", d: "Approach, timeline and honest next steps — so you can decide with everything in front of you." },
          ].map((s) => (
            <div className="ns-step rv" key={s.n}>
              <span className="ns-n">{s.n}</span>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
