export const siteConfig = {
  name: "Pihow Services",
  domain: "pihowservices.com",
  legacyDomain: "pihowservices.xyz",
  tagline:
    "Empowering businesses with premium full-stack web development, data engineering, analytics, and ongoing technology partnership.",
  positioning:
    "Pihow Services is the full-stack technology partner that growing businesses hire once and keep — combining modern software engineering with enterprise data pipelines, warehousing, and analytics.",
  founder: {
    name: "Ashis Kumar Behura",
    role: "Founder & Tech Lead",
  },
  contact: {
    email: "support@pihowservices.in",
    secondaryEmail: "info@pihowservices.xyz",
    phone: "+91 81449 70408",
    phoneHref: "+918144970408",
    whatsappHref: "https://wa.me/918144970408",
    address: "Building No 23, Sujal Nagar, Nuagarh, Jajpur Road, Odisha, India 755019",
  },
  social: {
    linkedin: "https://linkedin.com/company/pihow/",
    x: "https://x.com/pihowservices",
    instagram: "https://instagram.com/pihowbyashis/",
  },
  booking: {
    href: "/contact#book-a-call",
    label: "Book a Free Consultation",
    calLink: "https://cal.id/pihow",
  },
} as const;

export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

export const primaryNav: { label: string; href: string; children?: NavLink[] }[] = [
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Overview", href: "/services", description: "Full-stack & data engineering offers" },
      {
        label: "Premium Subscription",
        href: "/services/subscription",
        description: "Ongoing partnership — ₹45,000/month",
      },
      {
        label: "One-Time Development",
        href: "/services/one-time-development",
        description: "A complete build you own — from ₹60,000",
      },
      {
        label: "Data Engineering & Analytics",
        href: "/services/data-engineering",
        description: "ETL pipelines, Snowflake/BigQuery, BI & Analytics",
      },
    ],
  },
  {
    label: "Work",
    href: "/work",
    children: [
      { label: "Portfolio", href: "/work", description: "Case studies by result" },
      { label: "Testimonials", href: "/testimonials", description: "What clients say" },
    ],
  },
  { label: "Industries", href: "/industries" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = {
  company: [
    { label: "About", href: "/about" },
    { label: "Industries", href: "/industries" },
    { label: "Portfolio", href: "/work" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Services overview", href: "/services" },
    { label: "Premium Subscription", href: "/services/subscription" },
    { label: "One-Time Development", href: "/services/one-time-development" },
    { label: "Data Engineering & Analytics", href: "/services/data-engineering" },
    { label: "Pricing & Comparison", href: "/pricing" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/legal/privacy" },
    { label: "Terms of Service", href: "/legal/terms" },
  ],
};

export const languageOptions = [
  { code: "en", label: "EN", name: "English", available: true },
  { code: "hi", label: "हिंदी", name: "Hindi", available: false },
  { code: "ar", label: "العربية", name: "Arabic", available: false },
  { code: "es", label: "Español", name: "Spanish", available: false },
  { code: "de", label: "Deutsch", name: "German", available: false },
  { code: "fr", label: "Français", name: "French", available: false },
];
