import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { Eyebrow } from "@/components/SectionHeading";
import { DemoPlaceholder } from "@/components/DemoPlaceholder";
import { caseStudies } from "@/content/caseStudies";

export const metadata: Metadata = {
  title: "Portfolio & Case Studies",
  description:
    "Real projects, by result: what the situation was, what Pihow Services built, and what changed afterward.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <section className="border-b border-hairline py-20">
        <Container>
          <Eyebrow>Portfolio</Eyebrow>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold text-ink sm:text-5xl">
            Case studies, by result
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink/70">
            Situation, what was built, and the outcome — with real screenshots once each project
            is live.
          </p>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <DemoPlaceholder>
            The three case studies below are demo content — invented names, companies, and
            figures written to be realistic in structure. Replace each with a real project,
            screenshots, and a verified result before this page goes live. The geographic spread
            (India, US, Gulf) should mirror wherever your first few real projects actually are.
          </DemoPlaceholder>

          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <Link key={study.slug} href={`/work/${study.slug}`} className="group block h-full">
                <Card className="flex h-full flex-col">
                  <div className="mb-5 aspect-video rounded-lg bg-gradient-to-br from-teal/10 to-gold/10" />
                  <p className="font-mono text-[11px] uppercase tracking-wide text-gold">
                    {study.category} · {study.market}
                  </p>
                  <h2 className="mt-2 font-display text-xl font-semibold text-ink group-hover:text-teal">
                    {study.client}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/70">
                    {study.summary}
                  </p>
                  <p className="mt-4 text-sm font-medium text-teal">{study.result}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-ink">
                    Read the case study <ArrowRight size={14} />
                  </span>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
