export type Section = {
  label: string;
  title: string;
  paras: string[];
  chips?: string[];
};

export type GscPoint = {
  date: string;
  clicks: number;
  impressions: number;
  ctr: number; // 0..1
  position: number;
};

export type GscQuery = { q: string; clicks: number; impressions: number; ctr: number; position: number };
export type GscDevice = { device: string; clicks: number; ctr: number; position: number; share: number };

export type ResultStat = {
  value: string; // display value e.g. "1.9" or "Fast"
  label: string;
  count?: number; // if numeric count-up
  dec?: number;
  suffix?: string;
  accent?: boolean; // render value in accent (for non-count like ≈2×)
};

export type Project = {
  slug: string;
  name: string;
  category: string;
  location: string;
  year: string;
  role: string;
  type: string;
  tagline: string; // short line used on work rows
  result: string; // short result line on work rows
  tags: string[];
  hero: string;
  card: string;
  gallery: { src: string; caption: string }[];
  lead: string;
  sections: Section[];
  results: ResultStat[];
  resultsNote: string;
  liveUrl?: string;
  gsc?: GscPoint[];
  gscQueries?: GscQuery[];
  gscDevices?: GscDevice[];
  gscHomePosition?: number;
};

export const projects: Project[] = [
  {
    slug: "mijmaan",
    name: "MIJMAAN",
    category: "Luxury villa & hotel",
    location: "Udaipur, Rajasthan",
    year: "2024–25",
    role: "Design · Development · SEO",
    type: "Custom-coded website",
    tagline:
      "A custom-coded, mobile-first site for a luxury property — tuned for Core Web Vitals and built to rank from week one.",
    result: "Avg. Google position 1.9 · 10.2% organic CTR, week one",
    tags: ["Next.js", "Tailwind", "On-page SEO", "Core Web Vitals"],
    hero: "/images/mijmaan-hero.webp",
    card: "/images/mijmaan-hero.webp",
    liveUrl: "https://www.mijmaan.com",
    gallery: [
      { src: "/images/mijmaan-1.webp", caption: "Interiors" },
      { src: "/images/mijmaan-2.webp", caption: "Suites" },
      { src: "/images/mijmaan-3.webp", caption: "Poolside" },
    ],
    gsc: [
      { date: "Jul 18", clicks: 6, impressions: 29, ctr: 0.2069, position: 1.1 },
      { date: "Jul 19", clicks: 6, impressions: 28, ctr: 0.2143, position: 1.1 },
      { date: "Jul 20", clicks: 12, impressions: 65, ctr: 0.1846, position: 2.3 },
      { date: "Jul 21", clicks: 6, impressions: 41, ctr: 0.1463, position: 1.2 },
      { date: "Jul 22", clicks: 5, impressions: 35, ctr: 0.1429, position: 1.7 },
      { date: "Jul 23", clicks: 11, impressions: 135, ctr: 0.0815, position: 2.6 },
      { date: "Jul 24", clicks: 14, impressions: 206, ctr: 0.068, position: 1.6 },
      { date: "Jul 25", clicks: 2, impressions: 66, ctr: 0.0303, position: 2.0 },
    ],
    gscQueries: [
      { q: "mijmaan udaipur luxury villa stay nathwaton ka gurha", clicks: 10, impressions: 59, ctr: 0.1695, position: 1.07 },
      { q: "mijmaan luxury villa udaipur nathwaton ka gurha", clicks: 7, impressions: 150, ctr: 0.0467, position: 1.07 },
      { q: "mijmaan udaipur", clicks: 6, impressions: 32, ctr: 0.1875, position: 1.28 },
    ],
    gscDevices: [
      { device: "Mobile", clicks: 50, ctr: 0.0933, position: 1.44, share: 0.81 },
      { device: "Desktop", clicks: 12, ctr: 0.1739, position: 5.1, share: 0.19 },
    ],
    gscHomePosition: 1.63,
    lead:
      "A new luxury property needed a website as considered as the villa itself — and one that could be found by the right guests from the day it launched.",
    sections: [
      {
        label: "The challenge",
        title: "Look the part, and get found",
        paras: [
          "A luxury villa and hotel entering a competitive market needed an online presence that matched its positioning — refined, calm, unmistakably premium — without feeling like a template.",
          "It also had to earn visibility fast. High-intent travellers searching for Udaipur stays needed to find it, on a phone, in seconds.",
        ],
      },
      {
        label: "The approach",
        title: "Custom code over a template",
        paras: [
          "I chose to custom-code the site rather than reach for a builder, so design and performance were fully in my hands. The structure was planned around how guests actually search — and mobile-first, since that's where hospitality traffic lives.",
        ],
      },
      {
        label: "The build",
        title: "Fast by construction",
        paras: [
          "Built in a modern React / Next.js stack with Tailwind, with Core Web Vitals (LCP, INP, CLS) treated as a design constraint from the start — optimised media, deferred non-critical work, clean markup.",
          "The result is a site that feels quiet and quick, where the property's imagery leads and nothing gets in the way.",
        ],
        chips: ["Next.js", "React", "Tailwind CSS", "Core Web Vitals", "Responsive"],
      },
      {
        label: "The marketing",
        title: "SEO built into the foundation",
        paras: [
          "On-page and technical SEO were part of the build, not a later pass: a clean heading structure, considered metadata, internal linking, and keyword mapping across pages — aligned to real search intent for the location and property type.",
        ],
        chips: ["On-page SEO", "Technical SEO", "Metadata", "Internal linking"],
      },
    ],
    results: [
      { value: "1.9", label: "Avg. Google position", count: 1.9, dec: 1 },
      { value: "10.2%", label: "Organic CTR — first week", count: 10.2, dec: 1, suffix: "%" },
    ],
    resultsNote:
      "Within the first week of on-page SEO going live, the site reached an average Google position of 1.9 with a 10.2% organic click-through rate.",
  },
  {
    slug: "pushkar",
    name: "Pushkar Rajwada Resort",
    category: "Resort",
    location: "Pushkar, Rajasthan",
    year: "2024–25",
    role: "Design · Development · Performance",
    type: "Custom-coded website",
    tagline:
      "An image-rich resort site engineered so heavy visuals never cost it speed, with lead capture built into the journey.",
    result: "Fast despite heavy media · clear path to enquiry",
    tags: ["Custom code", "Image optimisation", "Lazy loading", "CRO"],
    hero: "/images/pushkar-hero.webp",
    card: "/images/pushkar-hero.webp",
    gallery: [
      { src: "/images/pushkar-1.webp", caption: "Cottages, golden hour" },
      { src: "/images/pushkar-2.webp", caption: "Grounds" },
      { src: "/images/pushkar-3.webp", caption: "Detail" },
    ],
    lead:
      "A resort with a lot of beautiful imagery — and the very real risk that all of it would make the site slow. The job was to keep the images and the speed.",
    sections: [
      {
        label: "The challenge",
        title: "Heavy visuals, no penalty",
        paras: [
          "The brand's strength is its photography, and there was a lot of it. Left unchecked, that becomes a slow, heavy site that frustrates visitors and quietly costs bookings.",
        ],
      },
      {
        label: "The approach",
        title: "Performance as a design constraint",
        paras: [
          "Rather than trimming the imagery, I treated performance as part of the design brief: every image earns its place, and nothing loads before it needs to. Speed and richness weren't a trade-off to accept — they were the problem to solve.",
        ],
      },
      {
        label: "The build",
        title: "Optimised, deferred, lean",
        paras: [
          "A custom-coded build with compressed and correctly-sized media, lazy loading for below-the-fold imagery, and reduced render-blocking scripts — so the gallery stays lush while the page stays quick.",
        ],
        chips: ["Custom code", "Image optimisation", "Lazy loading", "Reduced render-blocking"],
      },
      {
        label: "The marketing",
        title: "A clear path to enquiry",
        paras: [
          "Conversion was designed in: a streamlined, conversion-focused lead-capture flow that keeps the property's imagery front and centre while always leaving an obvious next step toward an enquiry.",
        ],
        chips: ["Lead capture", "CRO", "Conversion-focused"],
      },
    ],
    results: [
      { value: "Fast", label: "Loads despite heavy media", accent: true },
      { value: "Clear", label: "A single path to enquiry", accent: true },
    ],
    resultsNote:
      "A fast-loading, visually-rich site with a streamlined enquiry flow — the photography does the selling without the speed penalty.",
  },
  {
    slug: "jawai",
    name: "Jawai Safari",
    category: "Travel & tourism",
    location: "Jawai, Rajasthan",
    year: "2024–25",
    role: "Design · Development · SEO",
    type: "Custom-coded website",
    tagline:
      "A mobile-first tourism site with a clean structure and a streamlined enquiry flow, built to convert trip-planning traffic.",
    result: "Cleaner structure · streamlined enquiry flow",
    tags: ["Custom code", "Mobile-first", "On-page SEO", "IA"],
    hero: "/images/jawai-hero.webp",
    card: "/images/jawai-hero.webp",
    gallery: [
      { src: "/images/jawai-1.webp", caption: "Leopard country" },
      { src: "/images/jawai-2.webp", caption: "The wild" },
    ],
    lead:
      "Trip-planning visitors arrive with high intent and low patience. The site had to answer fast and make the next step obvious.",
    sections: [
      {
        label: "The challenge",
        title: "High intent, little patience",
        paras: [
          "People planning a trip decide quickly. A cluttered structure or a slow, confusing enquiry flow loses them before they ever reach out.",
        ],
      },
      {
        label: "The approach",
        title: "Clarity first, mobile-first",
        paras: [
          "I prioritised a simple, mobile-first structure that answers the obvious questions fast and moves every visitor toward a single, clear next step — no detours.",
        ],
      },
      {
        label: "The build",
        title: "Clean structure, clean code",
        paras: [
          "A custom-coded, mobile-first build with a rethought information architecture — fewer, clearer paths — leading into a streamlined enquiry flow.",
        ],
        chips: ["Custom code", "Mobile-first", "Information architecture"],
      },
      {
        label: "The marketing",
        title: "Found by the right people",
        paras: [
          "On-page SEO applied across the site so the pages line up with how travellers actually search for the experience — turning intent into visits, and visits into enquiries.",
        ],
        chips: ["On-page SEO", "Keyword mapping"],
      },
    ],
    results: [
      { value: "Clean", label: "Simplified site structure", accent: true },
      { value: "Simple", label: "Streamlined enquiry flow", accent: true },
    ],
    resultsNote:
      "A clearer site structure and a simpler enquiry path, designed to convert more of the high-intent travel traffic it attracts.",
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
export const projectSlugs = projects.map((p) => p.slug);

// Site-wide constants. Update `url` to your final domain when you deploy.
export const SITE = {
  name: "Abhishek Joseph",
  role: "Website Developer × Digital Marketer",
  location: "Mount Abu, Rajasthan",
  email: "abhishekjoseph780@gmail.com",
  phone: "+91 77420 74108",
  whatsapp: "917742074108", // digits only, for wa.me links
  linkedin: "https://www.linkedin.com/in/abhishek-joseph",
  github: "https://github.com/josephabhishek",
  calendly: "", // TODO: paste your Calendly/booking URL to show "Book a call" buttons
  cv: "/abhishek-joseph-cv.pdf",
  capabilities: "/abhishek-joseph-capabilities.pdf",
  url: "https://abhishek-j.vercel.app", // TODO: set to your final domain on deploy
};
