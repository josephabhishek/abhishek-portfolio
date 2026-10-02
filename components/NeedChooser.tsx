import Link from "next/link";

const OPTIONS = [
  { key: "new-site", n: "01", label: "A new website", sub: "From scratch, custom-coded" },
  { key: "rebuild", n: "02", label: "A rebuild", sub: "Make my current site faster & better" },
  { key: "seo", n: "03", label: "SEO & growth", sub: "Get found and convert" },
  { key: "ads", n: "04", label: "Google & Meta ads", sub: "Paid traffic that pays off" },
];

export default function NeedChooser() {
  return (
    <section className="sec wrap need">
      <div className="sh">
        <div className="rv">
          <span className="ey">// Start here</span>
          <h2>
            What do you
            <br />
            need?
          </h2>
        </div>
        <p className="rv d1">
          Pick the closest one &mdash; it&rsquo;ll take you straight to a message that&rsquo;s already
          half-written. Not sure? That&rsquo;s a valid answer too.
        </p>
      </div>
      <div className="need-grid">
        {OPTIONS.map((o, i) => (
          <Link
            className="need-card rv"
            href={`/contact?need=${o.key}`}
            key={o.key}
            style={{ transitionDelay: `${i * 0.06}s` }}
            data-cursor="Choose"
          >
            <span className="need-n">{o.n}</span>
            <span className="need-label">{o.label}</span>
            <span className="need-sub">{o.sub}</span>
            <span className="need-arw">&rarr;</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
