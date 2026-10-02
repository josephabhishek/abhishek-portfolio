"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Interactions() {
  const pathname = usePathname();

  // one-time: nav solidify, mobile menu, custom cursor
  useEffect(() => {
    const rm = window.matchMedia("(prefers-reduced-motion:reduce)").matches;
    const fine = window.matchMedia("(hover:hover) and (pointer:fine)").matches;

    const nav = document.querySelector(".nav");
    const onScroll = () => nav?.classList.toggle("solid", window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const burger = document.querySelector<HTMLButtonElement>(".burger");
    const mm = document.querySelector<HTMLElement>(".mm");
    const toggleMenu = () => {
      const open = mm?.classList.toggle("open");
      burger?.classList.toggle("x", !!open);
      document.body.style.overflow = open ? "hidden" : "";
    };
    burger?.addEventListener("click", toggleMenu);
    const closeMenu = () => {
      mm?.classList.remove("open");
      burger?.classList.remove("x");
      document.body.style.overflow = "";
    };
    mm?.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeMenu));

    // custom cursor
    let raf = 0;
    const cleanupCursor: Array<() => void> = [];
    if (fine && !rm) {
      const c = document.createElement("div");
      c.className = "cursor";
      c.innerHTML = '<span class="clabel"></span>';
      const dot = document.createElement("div");
      dot.className = "cursor-dot";
      document.body.appendChild(c);
      document.body.appendChild(dot);
      const cl = c.querySelector<HTMLElement>(".clabel")!;
      let mx = innerWidth / 2, my = innerHeight / 2, cx = mx, cy = my;
      const move = (e: MouseEvent) => {
        mx = e.clientX; my = e.clientY;
        c.style.opacity = "1"; dot.style.opacity = "1";
      };
      window.addEventListener("mousemove", move);
      const loop = () => {
        cx += (mx - cx) * 0.16; cy += (my - cy) * 0.16;
        c.style.left = cx + "px"; c.style.top = cy + "px";
        dot.style.left = mx + "px"; dot.style.top = my + "px";
        raf = requestAnimationFrame(loop);
      };
      loop();
      const over = (e: Event) => {
        const el = e.currentTarget as HTMLElement;
        c.classList.add("grow");
        const lb = el.getAttribute("data-cursor");
        if (lb) { c.classList.add("lbl"); cl.textContent = lb; }
      };
      const out = () => { c.classList.remove("grow", "lbl"); cl.textContent = ""; };
      const bind = () => {
        document.querySelectorAll("a,button,.magnetic,[data-cursor]").forEach((el) => {
          el.addEventListener("mouseenter", over);
          el.addEventListener("mouseleave", out);
        });
      };
      bind();
      // rebind on later DOM changes
      const mo = new MutationObserver(bind);
      mo.observe(document.body, { childList: true, subtree: true });
      cleanupCursor.push(() => {
        window.removeEventListener("mousemove", move);
        cancelAnimationFrame(raf);
        mo.disconnect();
        c.remove(); dot.remove();
      });
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      burger?.removeEventListener("click", toggleMenu);
      cleanupCursor.forEach((f) => f());
    };
  }, []);

  // per-route: reveals, count-up, magnetic, hero line draw
  useEffect(() => {
    const rm = window.matchMedia("(prefers-reduced-motion:reduce)").matches;
    const fine = window.matchMedia("(hover:hover) and (pointer:fine)").matches;

    const io = new IntersectionObserver(
      (es) => es.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      }),
      // trigger as soon as any part enters (minus a small margin), never a % of the
      // element — a % threshold can never be met by elements taller than the viewport.
      { threshold: 0, rootMargin: "0px 0px -12% 0px" }
    );
    const revealEls = Array.from(document.querySelectorAll<HTMLElement>(".rv, .media"));
    if (rm) {
      revealEls.forEach((el) => el.classList.add("in"));
    } else {
      revealEls.forEach((el) => {
        // Safety net: anything already on screen or taller than the viewport reveals now,
        // so long content can never get stuck hidden if the observer doesn't fire.
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) el.classList.add("in");
        else if (r.height > window.innerHeight * 0.9) el.classList.add("in");
        else io.observe(el);
      });
    }

    // count-up
    const cio = new IntersectionObserver(
      (es) => es.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target as HTMLElement;
        const t = parseFloat(el.dataset.count || "0");
        const dec = parseInt(el.dataset.dec || "0");
        const pre = el.dataset.pre || "";
        const suf = el.dataset.suf || "";
        if (rm) { el.textContent = pre + t.toFixed(dec) + suf; }
        else {
          const d = 1400; let s: number | null = null;
          const step = (ts: number) => {
            if (s === null) s = ts;
            const p = Math.min((ts - s) / d, 1);
            const ease = 1 - Math.pow(1 - p, 3);
            el.textContent = pre + (t * ease).toFixed(dec) + suf;
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
        cio.unobserve(el);
      }),
      { threshold: 0.6 }
    );
    document.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => cio.observe(el));

    // magnetic
    const magHandlers: Array<() => void> = [];
    if (fine && !rm) {
      document.querySelectorAll<HTMLElement>(".magnetic").forEach((el) => {
        const s = parseFloat(el.getAttribute("data-mag") || "0.3");
        const move = (e: MouseEvent) => {
          const r = el.getBoundingClientRect();
          el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * s}px,${(e.clientY - r.top - r.height / 2) * s}px)`;
        };
        const leave = () => { el.style.transform = ""; };
        el.addEventListener("mousemove", move);
        el.addEventListener("mouseleave", leave);
        magHandlers.push(() => {
          el.removeEventListener("mousemove", move);
          el.removeEventListener("mouseleave", leave);
        });
      });
    }

    // hero performance-line draw
    const path = document.querySelector<SVGPathElement>(".perf-line");
    if (path && !rm) {
      const L = path.getTotalLength();
      path.style.strokeDasharray = `${L}`;
      path.style.strokeDashoffset = `${L}`;
      const to = setTimeout(() => {
        path.style.transition = "stroke-dashoffset 2.2s cubic-bezier(.19,1,.22,1)";
        path.style.strokeDashoffset = "0";
      }, 350);
      magHandlers.push(() => clearTimeout(to));
    }

    // hero visual mouse-parallax
    const hv = document.querySelector<HTMLElement>(".hv");
    const hero = document.querySelector<HTMLElement>(".hero");
    if (hv && hero && fine && !rm) {
      const onMove = (e: MouseEvent) => {
        const r = hero.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        hv.style.transition = "transform .3s cubic-bezier(.19,1,.22,1)";
        hv.style.transform = `translate(${x * 16}px, ${y * 16}px)`;
      };
      const onLeave = () => { hv.style.transform = ""; };
      hero.addEventListener("mousemove", onMove);
      hero.addEventListener("mouseleave", onLeave);
      magHandlers.push(() => {
        hero.removeEventListener("mousemove", onMove);
        hero.removeEventListener("mouseleave", onLeave);
      });
    }

    // work-image scroll parallax (object-position — no layout shift, no gaps)
    const pimgs = Array.from(document.querySelectorAll<HTMLElement>(".wmedia .pimg"));
    if (pimgs.length && !rm) {
      let ticking = false;
      const update = () => {
        const vh = window.innerHeight;
        pimgs.forEach((img) => {
          const r = img.getBoundingClientRect();
          const prog = (r.top + r.height / 2 - vh / 2) / vh;
          const y = Math.max(40, Math.min(60, 50 + prog * 12));
          img.style.objectPosition = `50% ${y}%`;
        });
        ticking = false;
      };
      const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
      update();
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll);
      magHandlers.push(() => {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
      });
    }

    return () => {
      io.disconnect();
      cio.disconnect();
      magHandlers.forEach((f) => f());
    };
  }, [pathname]);

  return null;
}
