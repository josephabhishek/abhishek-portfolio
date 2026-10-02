import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Abhishek Joseph — Website Developer × Digital Marketer",
    short_name: "Abhishek Joseph",
    description:
      "Fast, custom-coded websites plus the SEO and paid media that make them perform.",
    start_url: "/",
    display: "standalone",
    background_color: "#F4F1EA",
    theme_color: "#16140E",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
