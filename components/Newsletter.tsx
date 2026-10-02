"use client";
import { useState } from "react";

export default function Newsletter() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setError("");
    const form = e.currentTarget;
    const data = { ...Object.fromEntries(new FormData(form).entries()), type: "subscribe" };
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
    <div className="news">
      <div className="news-copy">
        <h4>One useful web &amp; growth tip a month.</h4>
        <p>No spam, no fluff &mdash; just one practical thing you can actually use. Unsubscribe anytime.</p>
      </div>
      {status === "ok" ? (
        <p className="news-ok">Subscribed &mdash; thanks. Talk soon. ✓</p>
      ) : (
        <form className="news-form" onSubmit={onSubmit}>
          <input type="text" name="company_website" tabIndex={-1} autoComplete="off" style={{ display: "none" }} aria-hidden="true" />
          <label htmlFor="nl-email" className="sr-only">Email</label>
          <input id="nl-email" name="email" type="email" placeholder="you@email.com" autoComplete="email" required />
          <button className="btn btn-primary" type="submit" disabled={status === "sending"} data-cursor="Subscribe">
            {status === "sending" ? "…" : (<>Subscribe <span className="arw">&rarr;</span></>)}
          </button>
          {status === "error" ? <span className="news-err">{error}</span> : null}
        </form>
      )}
    </div>
  );
}
