import type { Metadata } from "next";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { siteConfig } from "@/lib/site";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${siteConfig.domain}`),
  title: {
    default: "Pihow Services",
    template: "%s — Pihow Services",
  },
  description:
    "Premium full-stack web and app development for growing businesses — as a monthly technology partnership or a complete one-time build. Talk to us today.",
  openGraph: {
    type: "website",
    siteName: "Pihow Services",
    title: "Pihow Services",
    description:
      "Premium full-stack web and app development for growing businesses — as a monthly technology partnership or a complete one-time build.",
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "/",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.name,
  description: siteConfig.tagline,
  url: `https://${siteConfig.domain}`,
  email: siteConfig.contact.email,
  telephone: siteConfig.contact.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Building No 23, Sujal Nagar, Nuagarh, Jajpur Road",
    addressRegion: "Odisha",
    addressCountry: "IN",
    postalCode: "755019",
  },
  founder: {
    "@type": "Person",
    name: siteConfig.founder.name,
  },
  sameAs: [siteConfig.social.linkedin, siteConfig.social.x, siteConfig.social.instagram],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${plexMono.variable} h-full`}
    >
      <body className="flex min-h-full flex-col font-sans text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
