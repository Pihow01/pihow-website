import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronLeft, Server } from "lucide-react";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
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
    title: `${study.client} — Case Study & Architecture`,
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: `${study.client} Case Study`,
    headline: study.summary,
    creator: {
      "@type": "Organization",
      name: "Pihow Services",
    },
    about: {
      "@type": "Thing",
      name: study.category,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <section className="border-b border-hairline py-16 bg-paper bg-tech-grid">
        <Container className="max-w-4xl">
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-ink/60 hover:text-teal mb-6 transition-colors"
          >
            <ChevronLeft size={14} /> Back to all case studies
          </Link>

          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-gold/10 px-3 py-1 font-mono text-xs font-semibold text-gold">
              {study.category}
            </span>
            <span className="rounded-full bg-paper border border-hairline px-3 py-1 font-mono text-xs text-ink/70">
              {study.market}
            </span>
          </div>

          <h1 className="mt-4 font-display text-4xl font-semibold text-ink sm:text-5xl">
            {study.client}
          </h1>
          <p className="mt-4 text-xl leading-relaxed text-ink/80">{study.summary}</p>
        </Container>
      </section>

      {/* Main Case Study Content */}
      <section className="py-16 bg-surface">
        <Container className="max-w-4xl">
          {/* Main Visual Showcase */}
          {study.image ? (
            <div className="relative mb-12 aspect-video overflow-hidden rounded-2xl border border-hairline bg-slate-950 shadow-xl">
              <Image
                src={study.image}
                alt={`${study.client} production architecture preview`}
                fill
                priority
                sizes="(max-width: 896px) 100vw, 896px"
                className="object-cover"
              />
            </div>
          ) : null}

          {/* Key Metrics Grid */}
          <div className="mb-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {study.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-xl border border-hairline bg-paper p-5 text-center sm:text-left"
              >
                <p className="font-display text-2xl font-bold text-teal lg:text-3xl">
                  {metric.value}
                </p>
                <p className="mt-1 font-mono text-xs text-ink/60">{metric.label}</p>
              </div>
            ))}
          </div>

          {/* Situation & Challenge */}
          <div className="mb-14 rounded-2xl border border-hairline bg-paper p-8">
            <h2 className="font-display text-2xl font-semibold text-ink">
              The Challenge & Context
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              {study.situation}
            </p>
          </div>

          {/* Architecture & Engineering Decisions */}
          <div className="mb-14 rounded-2xl border border-teal/20 bg-teal/[0.02] p-8">
            <div className="flex items-center gap-2 text-teal mb-3">
              <Server size={20} />
              <h2 className="font-display text-2xl font-semibold text-ink">
                System Architecture & Design
              </h2>
            </div>
            <p className="text-base leading-relaxed text-ink/80">
              {study.architecture}
            </p>

            <div className="mt-6 pt-6 border-t border-hairline">
              <span className="font-mono text-xs uppercase tracking-wider text-ink/50 block mb-3">
                Technologies Utilized:
              </span>
              <div className="flex flex-wrap gap-2">
                {study.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-hairline bg-surface px-3 py-1 font-mono text-xs text-ink"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* What Was Built Checklist */}
          <div className="mb-14">
            <h2 className="font-display text-2xl font-semibold text-ink mb-6">
              Core Deliverables & Implementations
            </h2>
            <div className="grid gap-3">
              {study.whatWasBuilt.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-hairline bg-paper p-4"
                >
                  <CheckCircle2 size={18} className="mt-0.5 text-teal shrink-0" />
                  <span className="text-sm font-medium text-ink leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Outcome & Result Highlight */}
          <div className="rounded-2xl border border-hairline bg-teal p-8 text-white sm:p-10 mb-14">
            <span className="font-mono text-xs uppercase tracking-wider text-amber-300">
              Measurable Business Impact
            </span>
            <p className="mt-2 font-display text-2xl sm:text-3xl font-semibold">
              {study.result}
            </p>
          </div>

          {/* Next Steps CTA */}
          <div className="rounded-2xl border border-hairline bg-paper p-8 text-center sm:p-12">
            <h3 className="font-display text-2xl font-semibold text-ink">
              Looking to build something similar?
            </h3>
            <p className="mt-3 text-sm text-ink/70 max-w-lg mx-auto">
              Whether you need a custom web application or an end-to-end data pipeline, our engineering team can assess your current architecture and scope a delivery plan.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <Button href="/contact" variant="primary">
                Discuss Your Project <ArrowRight size={16} />
              </Button>
              <Button href="/work" variant="secondary">
                View Other Projects
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
