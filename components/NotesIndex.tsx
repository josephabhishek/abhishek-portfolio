"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { Note } from "@/lib/notes";

export default function NotesIndex({ notes }: { notes: Note[] }) {
  const featured = notes[0];
  const rest = notes.slice(1);

  const categories = useMemo(() => {
    const set = new Set<string>();
    notes.forEach((n) => set.add(n.category));
    return ["All", ...Array.from(set)];
  }, [notes]);

  const [active, setActive] = useState("All");
  const shown = active === "All" ? rest : rest.filter((n) => n.category === active);

  return (
    <>
      {/* Featured */}
      <Link className="note-feat" href={`/notes/${featured.slug}`} data-cursor="Read">
        <div className="note-feat-in">
          <div className="note-feat-meta">
            <span className="nf-cat">{featured.category}</span>
            <span>{featured.date}</span>
            <span>&middot;</span>
            <span>{featured.readMins} min read</span>
            <span className="nf-badge">Latest</span>
          </div>
          <h2 className="note-feat-title">{featured.title}</h2>
          <p className="note-feat-ex">{featured.excerpt}</p>
          <span className="ul">Read the post <span className="arw">&rarr;</span></span>
        </div>
        <div className="note-feat-glow" aria-hidden="true" />
      </Link>

      {/* Filter */}
      <div className="notes-filter">
        {categories.map((c) => (
          <button
            key={c}
            className={`wf-btn${active === c ? " on" : ""}`}
            onClick={() => setActive(c)}
            data-cursor="Filter"
          >
            {c}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="notes-grid" key={active}>
        {shown.map((n, i) => (
          <Link
            className="note-card"
            href={`/notes/${n.slug}`}
            key={n.slug}
            style={{ animationDelay: `${i * 0.07}s` }}
            data-cursor="Read"
          >
            <div className="note-card-meta">
              <span className="nf-cat">{n.category}</span>
              <span>{n.readMins} min</span>
            </div>
            <h3 className="note-card-title">{n.title}</h3>
            <p className="note-card-ex">{n.excerpt}</p>
            <div className="note-card-foot">
              <span className="note-card-date">{n.date}</span>
              <span className="note-card-arw">&rarr;</span>
            </div>
          </Link>
        ))}
      </div>
      {shown.length === 0 ? <p className="notes-empty">Nothing here yet in this topic.</p> : null}
    </>
  );
}
