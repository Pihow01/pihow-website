import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/SectionHeading";
import { PortfolioGrid } from "@/components/PortfolioGrid";

export const metadata: Metadata = {
  title: "Case Studies & Engineering Portfolio",
  description:
    "Explore how Pihow Services engineers production web applications, high-throughput streaming pipelines, and analytical data warehouses.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <section className="border-b border-hairline py-20 bg-paper bg-tech-grid">
        <Container>
          <Eyebrow>Portfolio & Case Studies</Eyebrow>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold text-ink sm:text-5xl">
            Real systems, measurable outcomes.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink/70">
            A selection of custom web applications, SaaS platforms, and enterprise data pipelines engineered for reliability and scale.
          </p>
        </Container>
      </section>

      <section className="py-20 bg-surface">
        <Container>
          <PortfolioGrid />
        </Container>
      </section>
    </>
  );
}
