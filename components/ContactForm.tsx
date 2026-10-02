"use client";
import { useState, useEffect, useRef } from "react";
import SuccessMark from "@/components/SuccessMark";

type Status = "idle" | "sending" | "ok" | "error";

const NEED_MAP: Record<string, string> = {
  "new-site": "A new website",
  rebuild: "A rebuild of my current site",
  seo: "SEO & growth",
  ads: "Google & Meta ads",
};

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const scopeRef = useRef<HTMLInputElement>(null);

  // Pre-fill the "what are you looking to build?" field from the homepage chooser (?need=...)
  useEffect(() => {
    const need = new URLSearchParams(window.location.search).get("need");
    if (need && NEED_MAP[need] && scopeRef.current) {
      scopeRef.current.value = NEED_MAP[need];
    }
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setError("");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
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

  if (status === "ok") {
    return (
      <div className="form success-in" role="status">
        <SuccessMark />
        <h3 style={{ fontSize: "1.6rem", marginBottom: ".8rem" }}>Thanks &mdash; message sent.</h3>
        <p>I&rsquo;ll get back to you personally, usually within a day or two.</p>
        <button className="btn btn-ghost" style={{ marginTop: "1.6rem" }} onClick={() => setStatus("idle")}>
          Send another
        </button>
      </div>
    );
  }

  return (
    <form className="form rv d1" onSubmit={onSubmit}>
      {/* honeypot */}
      <input type="text" name="company_website" tabIndex={-1} autoComplete="off" style={{ display: "none" }} aria-hidden="true" />
      <div className="field">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" placeholder="Your name" autoComplete="name" required />
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" placeholder="you@company.com" autoComplete="email" required />
      </div>
      <div className="field">
        <label htmlFor="company">Company / Project</label>
        <input id="company" name="company" type="text" placeholder="Who&rsquo;s this for?" />
      </div>
      <div className="field">
        <label htmlFor="scope">What are you looking to build?</label>
        <input ref={scopeRef} id="scope" name="scope" type="text" placeholder="New site, rebuild, growth…" />
      </div>
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder="A sentence or two about what you need…" required />
      </div>
      <button className="btn btn-primary" type="submit" style={{ width: "100%", justifyContent: "center" }} data-cursor="Send" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : (<>Send message <span className="arw">&rarr;</span></>)}
      </button>
      {status === "error" ? (
        <p className="note" style={{ color: "var(--accent)" }}>{error}</p>
      ) : (
        <p className="note">
          Your message is emailed straight to me. Set <code>RESEND_API_KEY</code> and{" "}
          <code>CONTACT_TO_EMAIL</code> in the environment to enable delivery.
        </p>
      )}
    </form>
  );
}
