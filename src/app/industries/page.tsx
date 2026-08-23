import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Eyebrow } from "@/components/SectionHeading";
import { industries } from "@/content/industries";

export const metadata: Metadata = {
  title: "Industries & Use Cases",
  description:
    "Full-stack development across retail, healthcare, education, hospitality, logistics, and SaaS — outcome-first, not a generic feature checklist.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <section className="border-b border-hairline py-20">
        <Container>
          <Eyebrow>Industries & use cases</Eyebrow>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold text-ink sm:text-5xl">
            Built around what your business actually does
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink/70">
            Every industry has different bottlenecks. Here&apos;s where a full-stack partner
            usually makes the fastest difference.
          </p>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <Card key={industry.name}>
                <h2 className="font-display text-lg font-semibold text-ink">{industry.name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{industry.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-hairline bg-surface py-20">
        <Container className="text-center">
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            Don&apos;t see your industry?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-ink/70">
            Tell us what you&apos;re trying to solve — most projects don&apos;t fit a category
            neatly, and that&apos;s fine.
          </p>
          <div className="mt-6">
            <Button href="/contact" variant="primary">
              Talk to us <ArrowRight size={16} />
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
