import type { Metadata } from "next";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Eyebrow, SectionHeading } from "@/components/SectionHeading";
import { ComparisonTable } from "@/components/ComparisonTable";
import { Card } from "@/components/Card";
import { pricingFaq } from "@/content/faq";

export const metadata: Metadata = {
  title: "Pricing & Comparison — Transparent Models",
  description:
    "Compare Pihow Services' Premium Web Subscription (₹45,000/month), One-Time Development (from ₹60,000), and custom Data Engineering architecture side by side.",
  alternates: { canonical: "/pricing" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: pricingFaq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="border-b border-hairline py-20 bg-paper bg-tech-grid">
        <Container>
          <Eyebrow>Pricing & Comparison</Eyebrow>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold text-ink sm:text-5xl">
            Simple, honest pricing with zero hidden tiers.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink/70">
            Compare our monthly engineering partnership, milestone-based builds, and custom enterprise data architecture side by side.
          </p>
        </Container>
      </section>

      {/* Quick Model Summary Cards */}
      <section className="py-16 border-b border-hairline bg-surface">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3 mb-16">
            {/* Model 1 */}
            <Card className="flex flex-col justify-between border-hairline">
              <div>
                <span className="font-mono text-xs uppercase text-teal font-semibold">
                  Monthly Partnership
                </span>
                <h2 className="mt-2 font-display text-xl font-semibold text-ink">
                  Web Subscription
                </h2>
                <p className="mt-1 font-mono text-2xl font-bold text-gold">₹45,000 / mo</p>
                <p className="mt-3 text-xs leading-relaxed text-ink/70">
                  Ideal for startups needing continuous shipping, weekly feature releases, and rapid iteration without full-time hiring.
                </p>
              </div>
              <Button href="/services/subscription" variant="primary" className="mt-6">
                Explore Subscription <ArrowRight size={14} />
              </Button>
            </Card>

            {/* Model 2 */}
            <Card className="flex flex-col justify-between border-hairline">
              <div>
                <span className="font-mono text-xs uppercase text-gold font-semibold">
                  Fixed Milestone Build
                </span>
                <h2 className="mt-2 font-display text-xl font-semibold text-ink">
                  One-Time Development
                </h2>
                <p className="mt-1 font-mono text-2xl font-bold text-gold">From ₹60,000</p>
                <p className="mt-3 text-xs leading-relaxed text-ink/70">
                  Ideal for projects with a defined functional scope, fixed budget, and 30 days of included post-launch warranty.
                </p>
              </div>
              <Button href="/services/one-time-development" variant="secondary" className="mt-6">
                Explore One-Time <ArrowRight size={14} />
              </Button>
            </Card>

            {/* Model 3 */}
            <Card className="flex flex-col justify-between border-teal/30 bg-teal/[0.02]">
              <div>
                <span className="font-mono text-xs uppercase text-teal font-semibold">
                  Custom Architecture
                </span>
                <h2 className="mt-2 font-display text-xl font-semibold text-ink">
                  Data Engineering & Analytics
                </h2>
                <p className="mt-1 font-mono text-2xl font-bold text-teal">Custom Scope</p>
                <p className="mt-3 text-xs leading-relaxed text-ink/70">
                  Ideal for companies needing Kafka streaming, Snowflake/BigQuery cloud warehouses, dbt modeling, and custom BI dashboards.
                </p>
              </div>
              <Button href="/contact?service=data-engineering" variant="primary" className="mt-6">
                Request Data Architecture Quote <ArrowRight size={14} />
              </Button>
            </Card>
          </div>

          <SectionHeading
            eyebrow="Side by Side"
            title="Comprehensive Feature & Term Comparison"
          />
          <div className="mt-8">
            <ComparisonTable />
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="border-t border-hairline bg-paper py-20">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="Questions & Answers" title="Frequently asked before partnering" />
          <div className="mt-10 divide-y divide-hairline rounded-2xl border border-hairline bg-surface">
            {pricingFaq.map((item) => (
              <details key={item.question} className="group px-6 py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-semibold text-ink">
                  {item.question}
                  <ChevronDown
                    size={18}
                    className="shrink-0 text-ink/40 transition-transform duration-200 group-open:rotate-180"
                  />
                </summary>
                <p className="mt-3 text-xs leading-relaxed text-ink/70">{item.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      {/* Booking CTA */}
      <section className="py-20 bg-surface text-center">
        <Container className="max-w-md">
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            Still deciding which model fits?
          </h2>
          <p className="mt-3 text-sm text-ink/70">
            Tell us about your requirements on a brief 15-minute call and we will recommend the most cost-effective path.
          </p>
          <div className="mt-6">
            <Button href="/contact#book-a-call" variant="primary">
              Book a Free Consultation <ArrowRight size={16} />
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
