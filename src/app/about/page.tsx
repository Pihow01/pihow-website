import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Terminal, Code2, Database, ShieldCheck } from "lucide-react";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Eyebrow, SectionHeading } from "@/components/SectionHeading";
import { LinkedInIcon, XIcon, InstagramIcon } from "@/components/BrandIcons";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Pihow Services — Technical Leadership & Team",
  description:
    "Learn about Pihow Services, founded by Ashis Kumar Behura. Full-stack software engineering, modern data architecture, and long-term technical partnerships.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    name: "Engineering Rigor",
    description: "We write clean, typed, maintainable code designed to be read and maintained by teams for years, not rushed prototypes that collapse under scale.",
    icon: Code2,
  },
  {
    name: "Data Integrity & Transparency",
    description: "Whether modeling financial data in Snowflake or designing checkout workflows in Next.js, accuracy, zero-data-loss, and transparent metrics are non-negotiable.",
    icon: Database,
  },
  {
    name: "Complete IP Handover",
    description: "You own 100% of the code, data pipelines, infrastructure scripts, and documentation we write. We never lock clients into proprietary agency silos.",
    icon: ShieldCheck,
  },
  {
    name: "Direct Developer Access",
    description: "No junior intermediaries or account managers passing messages. You collaborate directly with senior technical leadership who understand your business model.",
    icon: Terminal,
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-hairline py-20 bg-paper bg-tech-grid">
        <Container>
          <Eyebrow>About Pihow Services</Eyebrow>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold text-ink sm:text-5xl">
            The technical partner growing businesses hire once and keep.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/70">
            Pihow Services bridges the gap between high-performance full-stack web engineering and scalable enterprise data infrastructure. We combine the discipline of an in-house engineering team with the velocity and focus of a specialist studio.
          </p>
        </Container>
      </section>

      {/* Founder Spotlight */}
      <section className="py-20 border-b border-hairline bg-surface">
        <Container>
          <SectionHeading
            eyebrow="Leadership"
            title="Founder-Led Engineering Excellence"
            description="Every engagement is architected and overseen directly by senior engineering leadership."
          />

          <div className="mt-12 grid gap-12 lg:grid-cols-[0.85fr_1.15fr] items-center">
            {/* Founder Photo */}
            <div className="relative aspect-square max-w-md mx-auto w-full overflow-hidden rounded-2xl border border-hairline bg-slate-900 shadow-xl">
              <Image
                src="/images/ashis-behura.jpg"
                alt="Ashis Kumar Behura — Founder & Tech Lead at Pihow Services"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 448px"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-white">
                <p className="font-display text-xl font-bold">{siteConfig.founder.name}</p>
                <p className="font-mono text-xs text-amber-300">{siteConfig.founder.role}</p>
              </div>
            </div>

            {/* Founder Bio & Philosophy */}
            <div className="space-y-6">
              <div>
                <h3 className="font-display text-2xl font-semibold text-ink">
                  Engineering with Purpose & Accountability
                </h3>
                <p className="mt-3 text-base leading-relaxed text-ink/70">
                  Ashis Kumar Behura founded Pihow Services to solve a persistent failure mode in software outsourcing: generic agencies that churn out fragile, unmaintainable code and disappear as soon as production issues arise.
                </p>
                <p className="mt-3 text-base leading-relaxed text-ink/70">
                  With deep hands-on expertise spanning modern web frameworks (Next.js, TypeScript, Node.js) and enterprise data platforms (Apache Kafka, Snowflake, dbt, BigQuery), Ashis leads technical discovery, system architecture, and quality assurance across every client engagement.
                </p>
              </div>

              <div className="rounded-xl border border-hairline bg-paper p-5">
                <p className="font-mono text-xs uppercase tracking-wider text-teal font-semibold mb-2">
                  Specialist Network Model
                </p>
                <p className="text-xs leading-relaxed text-ink/70">
                  Backing each project is a trusted network of senior UI/UX designers, cloud DevOps engineers, and QA specialists assembled specifically for the requirements of your build — ensuring you get domain experts without agency bloat.
                </p>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline text-ink/70 hover:border-teal hover:text-teal transition-colors"
                  aria-label="Ashis Kumar Behura on LinkedIn"
                >
                  <LinkedInIcon size={18} />
                </a>
                <a
                  href={siteConfig.social.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline text-ink/70 hover:border-teal hover:text-teal transition-colors"
                  aria-label="Ashis Kumar Behura on X"
                >
                  <XIcon size={18} />
                </a>
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline text-ink/70 hover:border-teal hover:text-teal transition-colors"
                  aria-label="Pihow on Instagram"
                >
                  <InstagramIcon size={18} />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 border-b border-hairline bg-paper">
        <Container className="grid gap-8 sm:grid-cols-2">
          <Card className="p-8">
            <span className="font-mono text-xs uppercase text-gold font-semibold">Our Mission</span>
            <h2 className="mt-2 font-display text-2xl font-semibold text-teal">
              Democratizing Production-Grade Engineering
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink/70">
              Empower founders and growing companies by providing accessible, reliable, and premium custom web software and enterprise data solutions — delivering enterprise-grade discipline at startup velocity.
            </p>
          </Card>
          <Card className="p-8">
            <span className="font-mono text-xs uppercase text-gold font-semibold">Our Vision</span>
            <h2 className="mt-2 font-display text-2xl font-semibold text-teal">
              The Long-Term Technology Standard
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink/70">
              To be the most trusted international technology partner for businesses undergoing digital transformation — renowned for engineering excellence, customer alignment, and absolute transparency.
            </p>
          </Card>
        </Container>
      </section>

      {/* Core Values */}
      <section className="border-b border-hairline bg-surface py-20">
        <Container>
          <SectionHeading
            eyebrow="Guiding Principles"
            title="How we think and build"
            description="The four foundational commitments that govern every line of code and customer interaction."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.name} className="rounded-xl border border-hairline bg-paper p-6">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal/10 text-teal mb-4">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-ink">{value.name}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-ink/70">{value.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-paper text-center">
        <Container className="max-w-xl">
          <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
            Let&apos;s build together
          </h2>
          <p className="mt-4 text-base text-ink/70">
            Tell us about your web application or enterprise data challenge. We would love to evaluate your roadmap.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" variant="primary">
              Get in Touch <ArrowRight size={16} />
            </Button>
            <Button href="/contact#book-a-call" variant="secondary">
              Book a Free Consultation
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
