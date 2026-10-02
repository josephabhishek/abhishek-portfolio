"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";
import { SITE } from "@/lib/projects";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/notes", label: "Notes" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // Close the menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll and allow Escape to close while the menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header className={`nav${open ? " nav-open" : ""}`}>
        <div className="nav-in">
          <Link className="brand" href="/" data-cursor="Home">
            <span className="dot" />
            {SITE.name}
          </Link>
          <div className="nav-r">
            <nav className="nav-links">
              {LINKS.filter((l) => l.href !== "/").map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  aria-current={isActive(l.href) ? "page" : undefined}
                >
                  {l.label}
                </Link>
              ))}
            </nav>
            <ThemeToggle />
            <Link className="nav-cta magnetic" data-mag=".25" href="/contact">
              Let&rsquo;s talk
            </Link>
          </div>
          <span className="tt-mobile">
            <ThemeToggle />
          </span>
          <button
            className={`burger${open ? " x" : ""}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>
      <div id="mobile-menu" className={`mm${open ? " open" : ""}`} aria-hidden={!open}>
        {LINKS.map((l, i) => (
          <Link
            key={l.href}
            href={l.href}
            aria-current={isActive(l.href) ? "page" : undefined}
            tabIndex={open ? 0 : -1}
          >
            <span className="mi">{String(i + 1).padStart(2, "0")}</span>
            {l.label}
          </Link>
        ))}
        <div className="mm-meta">
          {SITE.location} &mdash; Available for select projects
        </div>
      </div>
    </>
  );
}
