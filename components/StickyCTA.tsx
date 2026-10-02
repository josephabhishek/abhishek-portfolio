"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function StickyCTA() {
  const [show, setShow] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 640);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // hide on the contact page itself
  if (pathname === "/contact") return null;

  return (
    <div className={`sticky-cta${show ? " show" : ""}`}>
      <span className="sticky-copy">
        A site that should <em>perform</em> better?
      </span>
      <Link className="btn btn-primary" href="/contact" data-cursor="Say hi">
        Let&rsquo;s talk <span className="arw">&rarr;</span>
      </Link>
    </div>
  );
}
