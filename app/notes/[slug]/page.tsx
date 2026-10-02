import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import ReadingProgress from "@/components/ReadingProgress";
import { notes, getNote, noteSlugs, type Block } from "@/lib/notes";
import { SITE } from "@/lib/projects";
import type { ReactNode } from "react";

// Renders inline [label](href) markdown links inside body text; everything else is plain text.
function inline(text: string): ReactNode {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (!m) return part;
    const [, label, href] = m;
    const external = /^https?:\/\//.test(href);
    return external ? (
      <a key={i} href={href} target="_blank" rel="noreferrer">{label}</a>
    ) : (
      <Link key={i} href={href}>{label}</Link>
    );
  });
}

export function generateStaticParams() {
  return noteSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const n = getNote(slug);
  if (!n) return {};
  return {
    title: n.title,
    description: n.excerpt,
    alternates: { canonical: `/notes/${slug}` },
    openGraph: {
      type: "article",
      title: n.title,
      description: n.excerpt,
      url: `${SITE.url.replace(/\/$/, "")}/notes/${slug}`,
      publishedTime: n.dateISO,
      authors: ["Abhishek Joseph"],
      tags: n.tags,
    },
  };
}

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case "h2":
      return <h2>{inline(block.text)}</h2>;
    case "h3":
      return <h3 className="note-h3">{inline(block.text)}</h3>;
    case "quote":
      return <blockquote className="note-quote">{inline(block.text)}</blockquote>;
    case "ul":
      return (
        <ul className="note-ul">
          {block.items.map((it, i) => (
            <li key={i}>{inline(it)}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="note-ol">
          {block.items.map((it, i) => (
            <li key={i}>{inline(it)}</li>
          ))}
        </ol>
      );
    case "callout":
      return (
        <div className="note-callout">
          <span className="nc-stat">{block.stat}</span>
          <span className="nc-label">{inline(block.label)}</span>
          {block.source ? <span className="nc-src">{block.source}</span> : null}
        </div>
      );
    case "img":
      return (
        <figure className="note-img">
          <Image
            src={block.src}
            alt={block.alt}
            width={1600}
            height={900}
            sizes="(max-width:760px) 100vw, 760px"
          />
          {block.caption ? <figcaption>{block.caption}</figcaption> : null}
        </figure>
      );
    default:
      return <p>{inline(block.text)}</p>;
  }
}

export default async function NotePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const n = getNote(slug);
  if (!n) notFound();

  const idx = notes.findIndex((x) => x.slug === n.slug);
  const next = notes[(idx + 1) % notes.length];

  const base = SITE.url.replace(/\/$/, "");
  const url = `${base}/notes/${n.slug}`;
  const wordCount = n.blocks.reduce((sum, b) => {
    let text = "";
    if (b.type === "ul" || b.type === "ol") text = b.items.join(" ");
    else if (b.type === "callout") text = `${b.stat} ${b.label}`;
    else if (b.type === "img") text = "";
    else text = (b as { text?: string }).text ?? "";
    return sum + text.trim().split(/\s+/).filter(Boolean).length;
  }, 0);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: n.title,
      description: n.excerpt,
      datePublished: n.dateISO,
      dateModified: n.dateISO,
      wordCount,
      inLanguage: "en",
      url,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      image: `${url}/opengraph-image`,
      articleSection: n.category,
      keywords: n.tags.join(", "),
      author: { "@type": "Person", name: "Abhishek Joseph", url: base },
      publisher: {
        "@type": "Person",
        name: "Abhishek Joseph",
        url: base,
        logo: { "@type": "ImageObject", url: `${base}/icon.png` },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: base },
        { "@type": "ListItem", position: 2, name: "Notes", item: `${base}/notes` },
        { "@type": "ListItem", position: 3, name: n.title, item: url },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ReadingProgress />
      <article>
        <section className="phead wrap" style={{ paddingBottom: "clamp(20px,3vh,40px)" }}>
          <div className="cbc rv">
            <Link href="/notes" className="ul" style={{ fontSize: ".72rem" }}>Notes</Link>
            <span className="sq">/</span>
            <span>{n.date}</span>
            <span className="sq">·</span>
            <span>{n.readMins} min</span>
          </div>
          <h1 className="rv d1" style={{ maxWidth: "20ch" }}>{n.title}</h1>
          <div className="note-tags rv d2" style={{ marginTop: "1.6rem" }}>
            <span className="nf-cat">{n.category}</span>
            {n.tags.map((t) => (
              <span className="chip" key={t}>{t}</span>
            ))}
          </div>
        </section>

        <section className="wrap" style={{ paddingBottom: "clamp(50px,8vw,100px)" }}>
          <div className="note-body prose">
            {n.blocks.map((b, i) => (
              <BlockView block={b} key={i} />
            ))}
          </div>
        </section>

        <Link className="cnext" href={`/notes/${next.slug}`} data-cursor="Next">
          <div className="wrap">
            <div className="cn-k">Next note</div>
            <div className="cn-row">
              <h2 style={{ fontSize: "clamp(1.8rem,4vw,3rem)", maxWidth: "18ch" }}>{next.title}</h2>
              <span className="cn-arw">&rarr;</span>
            </div>
          </div>
        </Link>
      </article>
    </>
  );
}
