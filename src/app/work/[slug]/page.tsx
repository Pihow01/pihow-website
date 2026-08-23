import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Eyebrow } from "@/components/SectionHeading";
import { DemoPlaceholder } from "@/components/DemoPlaceholder";
import { caseStudies } from "@/content/caseStudies";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) return {};
  return {
    title: `${study.client} — Case Study`,
    description: study.summary,
    alternates: { canonical: `/work/${study.slug}` },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) notFound();

  return (
    <>
      <section className="border-b border-hairline py-20">
        <Container>
          <Eyebrow>
            {study.category} · {study.market}
          </Eyebrow>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold text-ink sm:text-5xl">
            {study.client}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink/70">{study.summary}</p>
        </Container>
      </section>

      <section className="py-16">
        <Container className="max-w-3xl">
          <DemoPlaceholder>
            {study.client} is a demo case study. All names, figures, and results on this page
            are invented placeholders written to be realistic in structure — replace with a real
            client, real screenshots, and a verified result before publishing.
          </DemoPlaceholder>

          <div className="mt-10 aspect-video rounded-2xl bg-gradient-to-br from-teal/10 to-gold/10" />

          <div className="mt-12 grid gap-10 sm:grid-cols-2">
            <div>
              <h2 className="font-display text-xl font-semibold text-ink">Situation</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">{study.situation}</p>
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold text-ink">What was built</h2>
              <ul className="mt-3 space-y-2.5">
                {study.whatWasBuilt.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-ink/70">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 rounded-2xl border border-hairline bg-surface p-8">
            <h2 className="font-display text-xl font-semibold text-ink">Result</h2>
            <p className="mt-3 font-display text-2xl text-teal">{study.result}</p>
          </div>

          <div className="mt-12">
            <Button href="/contact" variant="primary">
              Start a project like this <ArrowRight size={16} />
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
