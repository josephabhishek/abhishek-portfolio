import type { Metadata } from "next";
import Link from "next/link";
import WorkList from "@/components/WorkList";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  alternates: { canonical: "/work" },
  title: "Work",
  description:
    "Selected work by Abhishek Joseph — custom-coded hospitality case studies: MIJMAAN, Pushkar Rajwada Resort and Jawai Safari.",
};

export default function WorkPage() {
  return (
    <>
      <section className="phead wrap">
        <span className="ey rv">// Selected work &mdash; 2024&ndash;25</span>
        <h1 className="rv d1">
          Three projects.
          <br />
          One way of working.
        </h1>
        <p className="lead rv d2">
          Every site here was custom-coded, designed, and set up to be found &mdash; the full loop
          from first wireframe to conversion tracking. Open any one to see the thinking.
        </p>
      </section>

      <section className="wrap" style={{ paddingBottom: "clamp(20px,4vw,50px)" }}>
        <WorkList projects={projects} />
      </section>

      <section className="cta-band wrap">
        <span className="ey rv">// Your project next?</span>
        <h2 className="rv d1">
          Let&rsquo;s make something worth <em>measuring</em>.
        </h2>
        <Link className="btn btn-primary magnetic rv d2" data-mag=".2" href="/contact" data-cursor="Say hi">
          Start a conversation <span className="arw">&rarr;</span>
        </Link>
      </section>
    </>
  );
}
