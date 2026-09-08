import type { Metadata } from "next";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Eyebrow } from "@/components/SectionHeading";
import { industries } from "@/content/industries";

export const metadata: Metadata = {
  title: "Industries & Domain Expertise",
  description:
    "Full-stack web applications and modern data engineering across retail, healthcare, fintech, logistics, education, and SaaS.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <section className="border-b border-hairline py-20 bg-paper bg-tech-grid">
        <Container>
          <Eyebrow>Industries & Domain Expertise</Eyebrow>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold text-ink sm:text-5xl">
            Built around how your business actually operates.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink/70">
            Every industry has unique data formats, user expectations, and operational bottlenecks. Here is where our full-stack engineering and data architecture deliver the fastest business leverage.
          </p>
        </Container>
      </section>

      <section className="py-20 bg-surface">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            {industries.map((ind) => (
              <Card key={ind.slug} className="flex flex-col justify-between p-8 group hover:border-teal transition-all">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider text-gold">
                      {ind.category}
                    </span>
                    <span className="rounded-full bg-paper border border-hairline px-2.5 py-0.5 font-mono text-[10px] text-ink/60">
                      Domain Tailored
                    </span>
                  </div>

                  <h2 className="font-display text-2xl font-semibold text-ink group-hover:text-teal transition-colors">
                    {ind.name}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">
                    {ind.description}
                  </p>

                  {/* Common Bottlenecks */}
                  <div className="mt-6 rounded-lg bg-paper p-4 border border-hairline">
                    <p className="font-mono text-xs font-semibold text-ink mb-2">
                      Typical Bottlenecks We Eliminate:
                    </p>
                    <ul className="space-y-1.5 text-xs text-ink/70">
                      {ind.commonBottlenecks.map((b) => (
                        <li key={b} className="flex items-start gap-2">
                          <span className="text-amber-600 font-bold shrink-0">✕</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Solutions Delivered */}
                  <div className="mt-4 rounded-lg bg-teal/[0.03] p-4 border border-teal/20">
                    <p className="font-mono text-xs font-semibold text-teal mb-2">
                      What Pihow Engineers & Deploys:
                    </p>
                    <ul className="space-y-1.5 text-xs text-ink/80">
                      {ind.solutionsDelivered.map((s) => (
                        <li key={s} className="flex items-start gap-2">
                          <CheckCircle2 size={13} className="mt-0.5 text-teal shrink-0" />
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack */}
                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {ind.techDelivered.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-hairline bg-surface px-2.5 py-0.5 font-mono text-[10px] text-ink/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-hairline">
                  <Button
                    href={`/contact?industry=${ind.slug}`}
                    variant="text"
                    className="p-0 text-sm font-semibold text-teal hover:underline"
                  >
                    Discuss {ind.name} Scope <ArrowRight size={14} />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Don't see your industry */}
      <section className="border-t border-hairline bg-paper py-20">
        <Container className="text-center max-w-xl">
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            Don&apos;t see your exact industry?
          </h2>
          <p className="mt-3 text-sm text-ink/70">
            Most breakthrough applications combine concepts across industries (e.g. telemedicine marketplace or IoT logistics analytics). We scope custom solutions around your exact business model.
          </p>
          <div className="mt-6">
            <Button href="/contact" variant="primary">
              Talk to Our Team <ArrowRight size={16} />
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
