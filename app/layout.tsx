import type { Metadata } from "next";
// Self-hosted fonts (Fontsource) — no external fetch at build time, works offline & on Vercel.
import "@fontsource-variable/fraunces";
import "@fontsource-variable/inter";
import "@fontsource/space-mono/400.css";
import "@fontsource/space-mono/700.css";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Script from "next/script";
import Interactions from "@/components/Interactions";
import WhatsAppButton from "@/components/WhatsAppButton";
import StickyCTA from "@/components/StickyCTA";
import ExitIntent from "@/components/ExitIntent";
import { Analytics } from "@vercel/analytics/next";
import { SITE } from "@/lib/projects";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Abhishek Joseph — Website Developer × Digital Marketer",
    template: "%s — Abhishek Joseph",
  },
  description:
    "Abhishek Joseph builds fast, custom-coded websites and grows them with SEO and paid media. One person across the whole digital journey — build, launch, discover, convert, grow.",
  keywords: [
    "Abhishek Joseph",
    "web developer",
    "digital marketer",
    "Next.js developer",
    "SEO",
    "Google Ads",
    "Rajasthan",
    "hospitality websites",
  ],
  authors: [{ name: "Abhishek Joseph" }],
  openGraph: {
    type: "website",
    title: "Abhishek Joseph — Website Developer × Digital Marketer",
    description:
      "I build digital experiences that look good — and perform. Custom-coded sites plus the SEO and paid media that make them work.",
    url: SITE.url,
    siteName: "Abhishek Joseph",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhishek Joseph — Website Developer × Digital Marketer",
    description:
      "I build digital experiences that look good — and perform.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "/",
    types: { "application/rss+xml": "/rss.xml" },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE.name,
    url: SITE.url,
    jobTitle: "Website Developer & Digital Marketer",
    email: `mailto:${SITE.email}`,
    telephone: SITE.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mount Abu",
      addressRegion: "Rajasthan",
      addressCountry: "IN",
    },
    sameAs: [SITE.linkedin, SITE.github].filter((u) => u && u !== "#"),
    knowsAbout: [
      "Web Development",
      "React",
      "Next.js",
      "TypeScript",
      "Search Engine Optimization",
      "Google Ads",
      "Meta Ads",
      "Conversion Rate Optimization",
      "Core Web Vitals",
    ],
  };

  const businessLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE.url}#business`,
    name: "Abhishek Joseph — Web Development & Digital Marketing",
    description:
      "Freelance website developer and digital marketer building fast, custom-coded websites and growing them with SEO and paid media. Serving hospitality and growth-focused brands across Rajasthan and remotely worldwide.",
    url: SITE.url,
    image: `${SITE.url}/icon.png`,
    email: `mailto:${SITE.email}`,
    telephone: SITE.phone,
    founder: { "@type": "Person", name: SITE.name },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mount Abu",
      addressRegion: "Rajasthan",
      addressCountry: "IN",
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Rajasthan" },
      { "@type": "Country", name: "India" },
    ],
    availableLanguage: ["English", "Hindi"],
    sameAs: [SITE.linkedin, SITE.github].filter((u) => u && u !== "#"),
    knowsAbout: [
      "Web Development",
      "Search Engine Optimization",
      "Answer Engine Optimization",
      "Google Ads",
      "Meta Ads",
      "Conversion Rate Optimization",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Web & growth services",
      itemListElement: [
        ["Website design & build", "Fast, custom-coded websites in React & Next.js."],
        ["Search engine optimisation", "Technical SEO and content that gets you found and converting."],
        ["Paid advertising", "Google and Meta ad campaigns that pay off."],
        ["Analytics & conversion", "GA4, GTM and conversion optimisation to prove what works."],
      ].map(([name, description]) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name, description },
      })),
    },
  };
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Script id="theme-init" strategy="beforeInteractive">
          {`try{var t=localStorage.getItem('theme');if(t!=='dark'&&t!=='light'){t=window.matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light';}document.documentElement.setAttribute('data-theme',t);}catch(e){}`}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessLd) }}
        />
        <a href="#main" className="skip-link">Skip to content</a>
        <Interactions />
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppButton />
        <StickyCTA />
        <ExitIntent />
        <Analytics />
      </body>
    </html>
  );
}
