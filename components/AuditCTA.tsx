"use client";
import { useState } from "react";
import SuccessMark from "@/components/SuccessMark";

type Status = "idle" | "sending" | "ok" | "error";

export default function AuditCTA() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setError("");
    const form = e.currentTarget;
    const data = { ...Object.fromEntries(new FormData(form).entries()), type: "audit" };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error || "Something went wrong.");
      setStatus("ok");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <section className="audit" id="audit">
      <div className="wrap">
        <div className="audit-in rv">
          <div className="audit-copy">
            <span className="ey">// Free, no strings</span>
            <h2>
              Not sure how your site is <em>really</em> doing?
            </h2>
            <p className="lead">
              Send me your URL and I&rsquo;ll send back a short, honest audit &mdash; speed &amp; Core
              Web Vitals, on-page SEO, and the two or three fixes that would move the needle first.
            </p>
          </div>
          {status === "ok" ? (
            <div className="audit-form success-in" role="status">
              <SuccessMark />
              <p className="serif" style={{ fontSize: "1.35rem", lineHeight: 1.35 }}>
                Got it &mdash; I&rsquo;ll be in touch with your audit.
              </p>
            </div>
          ) : (
            <form className="audit-form" onSubmit={onSubmit}>
              <input type="text" name="company_website" tabIndex={-1} autoComplete="off" style={{ display: "none" }} aria-hidden="true" />
              <div className="af-row">
                <label htmlFor="a-url" className="sr-only">Your website</label>
                <input id="a-url" name="website" type="text" placeholder="yourwebsite.com" required />
              </div>
              <div className="af-row">
                <label htmlFor="a-email" className="sr-only">Email</label>
                <input id="a-email" name="email" type="email" placeholder="you@email.com" autoComplete="email" required />
              </div>
              <button className="btn btn-primary" type="submit" disabled={status === "sending"} data-cursor="Send">
                {status === "sending" ? "Sending…" : (<>Get my audit <span className="arw">&rarr;</span></>)}
              </button>
              {status === "error" ? <p className="af-note" style={{ color: "var(--accent)" }}>{error}</p> : null}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
