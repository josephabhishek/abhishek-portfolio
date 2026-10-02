import { getProject, projectSlugs } from "@/lib/projects";
import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Abhishek Joseph — case study";

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getProject(slug);
  return ogImage({
    eyebrow: p ? `Case Study — ${p.category}` : "Case Study",
    title: p?.name ?? "Selected work",
    kicker: p ? `${p.type} · ${p.location.split(",")[0]}` : undefined,
  });
}
