import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Eyebrow } from "@/components/SectionHeading";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Pihow Services' mission, vision, and values — and the team behind the full-stack development and technical partnership work.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    name: "Innovation",
    description: "We constantly explore new technologies to deliver cutting-edge solutions.",
  },
  {
    name: "Integrity",
    description: "We believe in transparent, honest, and ethical business practices.",
  },
  {
    name: "Collaboration",
    description: "We work as an extension of your team to achieve shared goals.",
  },
  {
    name: "Excellence",
    description: "We are committed to delivering the highest quality in everything we do.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-hairline py-20">
        <Container>
          <Eyebrow>About Pihow Services</Eyebrow>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold text-ink sm:text-5xl">
            {siteConfig.positioning}
          </h1>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-10 sm:grid-cols-2">
          <Card>
            <h2 className="font-display text-xl font-semibold text-teal">Mission</h2>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              Empower businesses by providing accessible, high-quality, and premium custom web
              application and full-stack development solutions.
            </p>
          </Card>
          <Card>
            <h2 className="font-display text-xl font-semibold text-teal">Vision</h2>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              To be a leading provider of digital transformation services, recognized for our
              commitment to excellence, customer satisfaction, and technological innovation.
            </p>
          </Card>
        </Container>
      </section>

      <section className="border-y border-hairline bg-surface py-20">
        <Container>
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            Core values
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.name}>
                <h3 className="font-display text-lg font-semibold text-ink">{value.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <Eyebrow>Team</Eyebrow>
          <h2 className="mt-3 font-display text-2xl font-semibold text-ink sm:text-3xl">
            Founder-led, network-supported
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <Card>
              <div className="h-16 w-16 rounded-full bg-teal/10" aria-hidden="true" />
              <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                {siteConfig.founder.name}
              </h3>
              <p className="text-sm text-gold">{siteConfig.founder.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">
                Leads every engagement end to end — from discovery and architecture through
                delivery and ongoing support.
              </p>
            </Card>
            <Card className="flex flex-col justify-center">
              <p className="text-sm leading-relaxed text-ink/70">
                Every project is backed by a vetted network of design, QA, and DevOps specialists
                engaged as needed — so a monthly partnership gets the right skills for the work in
                front of it, not just one person&apos;s available hours.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      <section className="border-t border-hairline bg-surface py-20">
        <Container className="text-center">
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            Let&apos;s talk about your project
          </h2>
          <div className="mt-6">
            <Button href="/contact" variant="primary">
              Book a Free Consultation <ArrowRight size={16} />
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
