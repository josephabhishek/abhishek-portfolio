import type { Metadata } from "next";
import NotesIndex from "@/components/NotesIndex";
import { notes } from "@/lib/notes";

export const metadata: Metadata = {
  alternates: { canonical: "/notes" },
  title: "Notes",
  description:
    "Practical notes on building websites that perform — AI search (AEO/GEO), development, SEO, performance and conversion — by Abhishek Joseph.",
};

export default function NotesPage() {
  return (
    <>
      <section className="phead wrap">
        <span className="ey rv">// Notes</span>
        <h1 className="rv d1">
          On building for
          <br />
          humans <em>and</em> the machines.
        </h1>
        <p className="lead rv d2">
          Practical notes on making websites that perform &mdash; AI search, development, speed and
          conversion. Written by someone who ships them, not just writes about them.
        </p>
      </section>

      <section className="wrap" style={{ paddingBottom: "clamp(40px,7vw,90px)" }}>
        <NotesIndex notes={notes} />
      </section>
    </>
  );
}
