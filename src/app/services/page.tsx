import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { SectionHeading, Eyebrow } from "@/components/SectionHeading";
import { ComparisonTable } from "@/components/ComparisonTable";
import { Card } from "@/components/Card";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Two ways to work with Pihow Services: a monthly Premium Subscription for continuous development, or a One-Time Development project you own outright.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-hairline py-20">
        <Container>
          <Eyebrow>Services</Eyebrow>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold text-ink sm:text-5xl">
            Two ways to work with us
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink/70">
            Same two offers as always — rewritten for clarity, each with its own detail page.
          </p>
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid gap-6 sm:grid-cols-2">
          <Card className="flex flex-col">
            <Eyebrow>Ongoing partnership</Eyebrow>
            <h2 className="mt-3 font-display text-2xl font-semibold text-ink">
              Premium Subscription
            </h2>
            <p className="mt-1 font-mono text-sm text-gold">₹45,000 / month</p>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-ink/70">
              Your dedicated technology partner. Continuous full-stack development,
              maintenance, and infrastructure management — without the overhead or upfront cost
              of hiring an in-house team. Best for startups and growing businesses whose product
              needs to keep evolving.
            </p>
            <Button href="/services/subscription" variant="primary" className="mt-6 self-start">
              See what&apos;s included <ArrowRight size={16} />
            </Button>
          </Card>
          <Card className="flex flex-col">
            <Eyebrow>One project, start to finish</Eyebrow>
            <h2 className="mt-3 font-display text-2xl font-semibold text-ink">
              One-Time Development
            </h2>
            <p className="mt-1 font-mono text-sm text-gold">From ₹60,000</p>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-ink/70">
              Build it once, own it completely. A custom-built website or application developed
              around your exact requirements, with full source-code handover and 30 days of
              post-launch support. Best for a clearly scoped project with a fixed budget.
            </p>
            <Button
              href="/services/one-time-development"
              variant="secondary"
              className="mt-6 self-start"
            >
              See the process <ArrowRight size={16} />
            </Button>
          </Card>
        </Container>
      </section>

      <section className="border-t border-hairline bg-surface py-20">
        <Container>
          <SectionHeading eyebrow="At a glance" title="Which one fits your project?" />
          <div className="mt-8">
            <ComparisonTable />
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container className="rounded-2xl border border-hairline bg-teal px-8 py-10 text-center sm:px-16">
          <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
            Need something bigger?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-white/80">
            SaaS platforms, marketplaces, booking systems, CRMs, ERPs, and customer portals are
            quoted individually after a discovery call.
          </p>
          <div className="mt-6">
            <Button href="/contact" variant="secondary" className="border-white text-white hover:bg-white hover:text-teal">
              Get a Custom Quote <ArrowRight size={16} />
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
