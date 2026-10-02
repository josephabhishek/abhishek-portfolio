"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ExitIntent() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(hover:hover) and (pointer:fine)").matches;
    if (!fine) return;
    let shown = false;
    try {
      shown = sessionStorage.getItem("ei_shown") === "1";
    } catch {}
    if (shown) return;

    // arm after a short delay so it never fires on immediate bounce
    let armed = false;
    const armTimer = setTimeout(() => (armed = true), 8000);

    const onLeave = (e: MouseEvent) => {
      if (!armed) return;
      if (e.clientY <= 0) {
        setOpen(true);
        try {
          sessionStorage.setItem("ei_shown", "1");
        } catch {}
        document.removeEventListener("mouseout", onLeave);
      }
    };
    document.addEventListener("mouseout", onLeave);
    return () => {
      clearTimeout(armTimer);
      document.removeEventListener("mouseout", onLeave);
    };
  }, []);

  if (!open) return null;

  return (
    <div className="ei-overlay" role="dialog" aria-modal="true" aria-label="Free website audit" onClick={() => setOpen(false)}>
      <div className="ei-modal" onClick={(e) => e.stopPropagation()}>
        <button className="ei-close" aria-label="Close" onClick={() => setOpen(false)}>×</button>
        <span className="ey">// Before you go</span>
        <h3>Want a free, honest audit of your site?</h3>
        <p>
          Send me your URL and I&rsquo;ll come back with the two or three fixes that would move the
          needle first &mdash; speed, SEO, conversion. No pitch.
        </p>
        <div className="ei-actions">
          <Link className="btn btn-primary" href="/#audit" onClick={() => setOpen(false)} data-cursor="Get audit">
            Get my free audit <span className="arw">&rarr;</span>
          </Link>
          <button className="ei-dismiss" onClick={() => setOpen(false)}>No thanks</button>
        </div>
      </div>
    </div>
  );
}
