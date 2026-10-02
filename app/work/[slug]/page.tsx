import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import MediaImage from "@/components/MediaImage";
import GscChart from "@/components/GscChart";
import GscSnapshot from "@/components/GscSnapshot";
import { projects, getProject, projectSlugs, SITE } from "@/lib/projects";

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  const desc = `${p.name} case study — custom-coded ${p.category.toLowerCase()} by Abhishek Joseph. Challenge, approach, build, marketing and results.`;
  return {
    title: `${p.name} — Case Study`,
    description: desc,
    alternates: { canonical: `/work/${slug}` },
    openGraph: {
      type: "article",
      title: `${p.name} — Case Study`,
      description: desc,
      url: `${SITE.url.replace(/\/$/, "")}/work/${slug}`,
    },
  };
}

export default async function CasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();

  const idx = projects.findIndex((x) => x.slug === p.slug);
  const next = projects[(idx + 1) % projects.length];

  const base = SITE.url.replace(/\/$/, "");
  const url = `${base}/work/${p.slug}`;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: `${p.name} — Case Study`,
      headline: `${p.name} — ${p.category}`,
      description: p.lead,
      url,
      image: `${url}/opengraph-image`,
      inLanguage: "en",
      dateCreated: String(p.year),
      creator: { "@type": "Person", name: "Abhishek Joseph", url: base },
      about: p.name,
      locationCreated: { "@type": "Place", name: p.location },
      keywords: p.tags.join(", "),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: base },
        { "@type": "ListItem", position: 2, name: "Work", item: `${base}/work` },
        { "@type": "ListItem", position: 3, name: p.name, item: url },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="chero wrap">
        <div className="cbc rv">
          <Link href="/work" className="ul" style={{ fontSize: ".72rem" }}>
            Work
          </Link>
          <span className="sq">/</span>
          <span>{p.name}</span>
        </div>
        <h1 className="rv d1">{p.name}</h1>
        <div className="csub rv d2">
          {p.category}, {p.location.split(",")[0]}
        </div>
        <div className="cmeta rv d2">
          <div>
            <h5>Year</h5>
            <p>{p.year}</p>
          </div>
          <div>
            <h5>Role</h5>
            <p>{p.role}</p>
          </div>
          <div>
            <h5>Type</h5>
            <p>{p.type}</p>
          </div>
          <div>
            <h5>Location</h5>
            <p>{p.location}</p>
          </div>
        </div>
        {p.liveUrl ? (
          <a className="clive rv" href={p.liveUrl} target="_blank" rel="noreferrer" data-cursor="Visit">
            Visit live site ↗
          </a>
        ) : null}
        <MediaImage
          wrapClass="chmedia"
          src={p.hero}
          alt={`${p.name} — ${p.category}`}
          caption={p.name}
          sub={p.category}
          sizes="100vw"
          priority
        />
      </section>

      <section className="wrap" style={{ paddingBlock: "clamp(40px,7vw,80px)" }}>
        <p className="clead rv">{p.lead}</p>
      </section>

      <section className="wrap" style={{ paddingBottom: "clamp(30px,5vw,60px)" }}>
        {p.sections.map((s, i) => (
          <div className="cline rv" key={s.label}>
            <div className="cl-l">
              <span className="n">{String(i + 1).padStart(2, "0")}</span>
              {s.label}
            </div>
            <div className="cbody">
              <h3>{s.title}</h3>
              {s.paras.map((para, j) => (
                <p key={j}>{para}</p>
              ))}
              {s.chips ? (
                <div className="chips">
                  {s.chips.map((c) => (
                    <span className="chip" key={c}>{c}</span>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        ))}

        <div className="cline rv">
          <div className="cl-l">
            <span className="n">{String(p.sections.length + 1).padStart(2, "0")}</span>
            The result
          </div>
          <div className="cbody">
            <h3>What happened</h3>
            <div className="cres">
              {p.results.map((r) =>
                r.count !== undefined ? (
                  <div className="r" key={r.label}>
                    <div className="rv">
                      <span
                        data-count={r.count}
                        data-dec={r.dec ?? 0}
                        data-suf={r.suffix ?? ""}
                      >
                        {r.value}
                      </span>
                    </div>
                    <div className="rl">{r.label}</div>
                  </div>
                ) : (
                  <div className="r" key={r.label}>
                    <div className="rv">
                      <em>{r.value}</em>
                    </div>
                    <div className="rl">{r.label}</div>
                  </div>
                )
              )}
            </div>
            <p style={{ marginTop: "1.8rem" }}>{p.resultsNote}</p>
            {p.gsc ? <GscChart data={p.gsc} /> : null}
            {p.gscQueries && p.gscDevices ? (
              <GscSnapshot queries={p.gscQueries} devices={p.gscDevices} homePosition={p.gscHomePosition} />
            ) : null}
          </div>
        </div>
      </section>

      <section className="wrap sec" style={{ paddingTop: 0 }}>
        <div className="sh">
          <div className="rv">
            <span className="ey">// Selected frames</span>
            <h2>A look at it.</h2>
          </div>
          <p className="rv d1">
            Real photography from the project. Live-site screenshots can be added alongside these.
          </p>
        </div>
        <div className="cgal">
          <MediaImage
            wrapClass="g1"
            src={p.gallery[0].src}
            alt={`${p.name} — ${p.gallery[0].caption}`}
            caption={p.name}
            sub={p.gallery[0].caption}
            tag=" 01 "
            sizes="100vw"
          />
          {p.gallery.slice(1).map((g, i) => (
            <MediaImage
              key={g.src}
              wrapClass={`g${i === 0 ? "" : " d1"}`}
              src={g.src}
              alt={`${p.name} — ${g.caption}`}
              caption={p.name}
              sub={g.caption}
              tag={` 0${i + 2} `}
              sizes="(max-width:900px) 100vw, 50vw"
            />
          ))}
        </div>
      </section>

      <Link className="cnext" href={`/work/${next.slug}`} data-cursor="Next">
        <div className="wrap">
          <div className="cn-k">
            Next project &mdash; {next.category}, {next.location.split(",")[0]}
          </div>
          <div className="cn-row">
            <h2>{next.name}</h2>
            <span className="cn-arw">&rarr;</span>
          </div>
        </div>
      </Link>
    </>
  );
}
