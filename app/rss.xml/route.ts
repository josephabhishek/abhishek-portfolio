import { SITE } from "@/lib/projects";
import { notes } from "@/lib/notes";

export const dynamic = "force-static";

function esc(s: string) {
  return s.replace(/[<>&'"]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '"': "&quot;" }[c] as string));
}

export async function GET() {
  const base = SITE.url.replace(/\/$/, "");
  const items = notes
    .map(
      (n) => `    <item>
      <title>${esc(n.title)}</title>
      <link>${base}/notes/${n.slug}</link>
      <guid>${base}/notes/${n.slug}</guid>
      <description>${esc(n.excerpt)}</description>
      <pubDate>${new Date(n.dateISO).toUTCString()}</pubDate>
    </item>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Abhishek Joseph — Notes</title>
    <link>${base}/notes</link>
    <description>Practical notes on building websites that perform — development, SEO, performance and conversion.</description>
    <language>en</language>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
