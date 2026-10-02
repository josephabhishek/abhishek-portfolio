import Link from "next/link";

const LINKS = [
  { href: "/work", label: "Selected work", sub: "Case studies" },
  { href: "/services", label: "Services", sub: "Build & growth" },
  { href: "/notes", label: "Notes", sub: "Writing" },
  { href: "/contact", label: "Contact", sub: "Start a project" },
];

export default function NotFound() {
  return (
    <section className="nf wrap">
      <span className="ey rv">// 404</span>
      <h1 className="nf-title rv d1">
        This page went <em>off-grid</em>.
      </h1>
      <p className="lead rv d2" style={{ maxWidth: "48ch" }}>
        The link&rsquo;s broken or the page has moved. No dead end though &mdash; here&rsquo;s where
        most people are headed.
      </p>
      <div className="nf-links rv d3">
        {LINKS.map((l) => (
          <Link className="nf-link" href={l.href} key={l.href} data-cursor="Go">
            <span className="nf-link-label">{l.label}</span>
            <span className="nf-link-sub">{l.sub}</span>
            <span className="nf-link-arw">&rarr;</span>
          </Link>
        ))}
      </div>
      <Link className="btn btn-primary magnetic rv d4" data-mag=".2" href="/" data-cursor="Home" style={{ marginTop: "2.2rem" }}>
        Back home <span className="arw">&rarr;</span>
      </Link>
    </section>
  );
}
