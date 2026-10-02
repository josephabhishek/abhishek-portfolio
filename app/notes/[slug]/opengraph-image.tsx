import { getNote, noteSlugs } from "@/lib/notes";
import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Abhishek Joseph — note";

export function generateStaticParams() {
  return noteSlugs.map((slug) => ({ slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const n = getNote(slug);
  return ogImage({
    eyebrow: `Note — ${n?.category ?? "Journal"}`,
    title: n?.title ?? "Notes",
    kicker: n ? `${n.readMins} min read · ${n.date}` : undefined,
  });
}
