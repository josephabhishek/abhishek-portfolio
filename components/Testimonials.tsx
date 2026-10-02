"use client";
import { useState } from "react";
import { testimonials } from "@/lib/testimonials";

export default function Testimonials() {
  const [i, setI] = useState(0);
  if (!testimonials.length) return null; // hidden until real quotes are added
  const t = testimonials[i];
  const go = (d: number) => setI((i + d + testimonials.length) % testimonials.length);

  return (
    <section className="tm wrap">
      <div className="sh">
        <div className="rv">
          <span className="ey">// In their words</span>
          <h2>What clients say.</h2>
        </div>
      </div>
      <div className="tm-card rv">
        <blockquote className="tm-quote">&ldquo;{t.quote}&rdquo;</blockquote>
        <div className="tm-by">
          <b>{t.name}</b> &middot; {t.role}
        </div>
        {testimonials.length > 1 ? (
          <div className="ei-actions" style={{ marginTop: "1.8rem" }}>
            <button className="ei-dismiss" onClick={() => go(-1)} aria-label="Previous">&larr; Prev</button>
            <button className="ei-dismiss" onClick={() => go(1)} aria-label="Next">Next &rarr;</button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
