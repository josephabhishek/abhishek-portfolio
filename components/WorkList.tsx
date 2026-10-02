"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import MediaImage from "@/components/MediaImage";
import type { Project } from "@/lib/projects";

export default function WorkList({ projects }: { projects: Project[] }) {
  const disciplines = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => p.role.split("·").forEach((d) => set.add(d.trim())));
    return ["All", ...Array.from(set)];
  }, [projects]);

  const [active, setActive] = useState("All");
  const shown = active === "All" ? projects : projects.filter((p) => p.role.includes(active));

  return (
    <>
      <div className="work-filter">
        {disciplines.map((d) => (
          <button
            key={d}
            className={`wf-btn${active === d ? " on" : ""}`}
            onClick={() => setActive(d)}
            data-cursor="Filter"
          >
            {d}
          </button>
        ))}
      </div>

      <div className="work-filtered">
        {shown.map((p, i) => (
          <Link className="wrow wlink rv in" href={`/work/${p.slug}`} key={p.slug} data-cursor="Open case">
            <MediaImage
              wrapClass="wmedia"
              src={p.card}
              alt={`${p.name} — ${p.category}`}
              caption={p.name}
              sub={p.category}
              tag={p.tags[0]}
              priority={i === 0}
            />
            <div className="wbody">
              <div className="wm">
                <span className="wi">{String(i + 1).padStart(2, "0")}</span>
                <span>{p.category}</span>
                <span>&middot;</span>
                <span>{p.location.split(",")[0]}</span>
                <span>&middot;</span>
                <span>{p.role}</span>
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
                Open case study <span className="arw">&rarr;</span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
