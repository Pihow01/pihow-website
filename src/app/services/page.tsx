import type { Metadata } from "next";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { SectionHeading, Eyebrow } from "@/components/SectionHeading";
import { ComparisonTable } from "@/components/ComparisonTable";
import { Card } from "@/components/Card";

export const metadata: Metadata = {
  title: "Services — Full-Stack Web & Data Engineering",
  description:
    "Explore our three engagement models: a monthly Premium Subscription for continuous development, One-Time Development projects, and enterprise Data Engineering & Analytics architecture.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-hairline py-20 bg-paper bg-tech-grid">
        <Container>
          <Eyebrow>Services & Engagement Models</Eyebrow>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold text-ink sm:text-5xl">
            Software engineering and data architecture, built around your business.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink/70">
            Whether you need a continuous technical partner, an end-to-end bespoke build, or enterprise data pipelines, we provide transparent execution with complete code ownership.
          </p>
        </Container>
      </section>

      {/* 3 Core Services */}
      <section className="py-20 border-b border-hairline">
        <Container className="grid gap-8 lg:grid-cols-3">
          {/* Card 1 */}
          <Card className="flex flex-col justify-between group hover:border-teal transition-all">
            <div>
              <Eyebrow>Ongoing partnership</Eyebrow>
              <h2 className="mt-3 font-display text-2xl font-semibold text-ink">
                Premium Web Subscription
              </h2>
              <p className="mt-1 font-mono text-sm text-gold">₹45,000 / month</p>
              <p className="mt-4 text-sm leading-relaxed text-ink/70">
                Your dedicated full-stack technology partner. Continuous development, feature expansion, and infrastructure management — without the overhead or friction of hiring an in-house team. Best for startups and scaling platforms whose product needs to ship weekly.
              </p>
              <ul className="mt-6 space-y-2 text-xs text-ink/80 border-t border-hairline pt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-teal shrink-0" /> Continuous 2-week sprint cadence
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-teal shrink-0" /> Weekly production deployments
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-teal shrink-0" /> Priority direct developer support
                </li>
              </ul>
            </div>
            <Button href="/services/subscription" variant="primary" className="mt-8 self-start">
              See what&apos;s included <ArrowRight size={16} />
            </Button>
          </Card>

          {/* Card 2 */}
          <Card className="flex flex-col justify-between group hover:border-teal transition-all">
            <div>
              <Eyebrow>One project, start to finish</Eyebrow>
              <h2 className="mt-3 font-display text-2xl font-semibold text-ink">
                One-Time Development
              </h2>
              <p className="mt-1 font-mono text-sm text-gold">From ₹60,000</p>
              <p className="mt-4 text-sm leading-relaxed text-ink/70">
                Build it once, own it completely. A custom-built website or web application developed around your exact requirements, with milestone-based delivery, full source-code handover, and 30 days of included post-launch bug-fix support.
              </p>
              <ul className="mt-6 space-y-2 text-xs text-ink/80 border-t border-hairline pt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-teal shrink-0" /> Fixed timeline & milestone delivery
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-teal shrink-0" /> 11-step structured quality lifecycle
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-teal shrink-0" /> Complete source code & IP handover
                </li>
              </ul>
            </div>
            <Button href="/services/one-time-development" variant="secondary" className="mt-8 self-start">
              See the process <ArrowRight size={16} />
            </Button>
          </Card>

          {/* Card 3: Data Engineering */}
          <Card className="flex flex-col justify-between group hover:border-teal transition-all border-teal/30 bg-teal/[0.02]">
            <div>
              <Eyebrow>Data & Analytics</Eyebrow>
              <h2 className="mt-3 font-display text-2xl font-semibold text-ink">
                Data Engineering & Analytics
              </h2>
              <p className="mt-1 font-mono text-sm text-teal">Custom Architecture</p>
              <p className="mt-4 text-sm leading-relaxed text-ink/70">
                Enterprise data pipelines, cloud warehouses (Snowflake, BigQuery), dbt data modeling, and custom Power BI / Tableau dashboards. Eliminate stale reports and unify disparate data sources into a real-time single source of truth.
              </p>
              <ul className="mt-6 space-y-2 text-xs text-ink/80 border-t border-hairline pt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-teal shrink-0" /> Streaming ingestion (Kafka / Spark)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-teal shrink-0" /> Modern Data Stack (Snowflake/BigQuery/dbt)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-teal shrink-0" /> Executive & embedded BI dashboards
                </li>
              </ul>
            </div>
            <Button href="/services/data-engineering" variant="primary" className="mt-8 self-start">
              Explore Data Architecture <ArrowRight size={16} />
            </Button>
          </Card>
        </Container>
      </section>

      {/* Comparison Section */}
      <section className="border-b border-hairline bg-surface py-20">
        <Container>
          <SectionHeading eyebrow="At a glance" title="Which model fits your initiative?" />
          <div className="mt-8">
            <ComparisonTable />
          </div>
        </Container>
      </section>

      {/* Custom Scoping Banner */}
      <section className="py-20 bg-paper">
        <Container className="rounded-2xl border border-hairline bg-teal px-8 py-12 text-center text-white sm:px-16">
          <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
            Have a custom software or enterprise data requirement?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-white/80">
            SaaS platforms, multi-tenant portals, custom Kafka pipelines, and complex enterprise migrations are scoped individually after a discovery call.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" variant="secondary" className="border-white text-white hover:bg-white hover:text-teal">
              Get a Custom Quote <ArrowRight size={16} />
            </Button>
            <Button href="/contact#book-a-call" variant="text" className="text-white hover:text-white/80">
              Book a Consultation
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
