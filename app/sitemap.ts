import type { MetadataRoute } from "next";
import { SITE, projects } from "@/lib/projects";
import { notes } from "@/lib/notes";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url.replace(/\/$/, "");

  // Freshest note date = a good "site was updated" signal for the top-level pages.
  const latestNote = notes
    .map((n) => n.dateISO)
    .sort()
    .reverse()[0];
  const homeUpdated = latestNote ? new Date(latestNote) : new Date();

  const routes = ["", "/work", "/services", "/about", "/notes", "/faq", "/uses", "/contact"].map((p) => ({
    url: `${base}${p}`,
    lastModified: p === "" || p === "/notes" ? homeUpdated : new Date(),
    changeFrequency: "monthly" as const,
    priority: p === "" ? 1 : 0.8,
  }));

  const cases = projects.map((p) => {
    const yr = (p.year.match(/\d{4}/) ?? ["2024"])[0];
    return {
      url: `${base}/work/${p.slug}`,
      lastModified: new Date(`${yr}-06-01`),
      changeFrequency: "yearly" as const,
      priority: 0.7,
    };
  });

  const noteRoutes = notes.map((n) => ({
    url: `${base}/notes/${n.slug}`,
    lastModified: new Date(n.dateISO),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...routes, ...cases, ...noteRoutes];
}
