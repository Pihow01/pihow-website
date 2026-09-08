import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, ShieldCheck, Globe, CreditCard } from "lucide-react";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Eyebrow, SectionHeading } from "@/components/SectionHeading";
import { oneTimeLifecycle, oneTimePricingFactors } from "@/content/services";

export const metadata: Metadata = {
  title: "One-Time Development — from ₹60,000",
  description:
    "A custom-built website or web application developed around your exact requirements, with full source-code handover, milestone payments, and 30 days of included post-launch support.",
  alternates: { canonical: "/services/one-time-development" },
};

const milestonePayments = [
  {
    phase: "Milestone 1: Discovery & Architecture (30%)",
    description: "Kicked off upon agreement. Covers technical scoping, database schema design, UI wireframes, and project milestones.",
  },
  {
    phase: "Milestone 2: Functional Prototype (40%)",
    description: "Payable when core workflows, database integrations, and interactive staging builds are ready for review.",
  },
  {
    phase: "Milestone 3: Final Launch & Handover (30%)",
    description: "Released after thorough QA testing, production deployment, domain verification, and complete source code transfer.",
  },
];

export default function OneTimeDevelopmentPage() {
  return (
    <>
      <section className="border-b border-hairline py-20 bg-paper bg-tech-grid">
        <Container>
          <Eyebrow>One-Time Development</Eyebrow>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold text-ink sm:text-5xl">
            Build it once, own it completely.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink/70">
            A bespoke website or web application engineered around your exact business requirements, with full source-code handover and 30 days of included warranty support.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <div className="rounded-xl border border-hairline bg-surface px-5 py-3 shadow-xs">
              <span className="text-[11px] font-mono text-ink/50 uppercase block">Fixed Project Scope</span>
              <p className="font-mono text-2xl font-bold text-gold">From ₹60,000</p>
            </div>
            <Button href="/contact" variant="primary">
              Get a Free Project Quote <ArrowRight size={16} />
            </Button>
          </div>
        </Container>
      </section>

      {/* 11-Step Lifecycle */}
      <section className="py-20 border-b border-hairline bg-surface">
        <Container>
          <SectionHeading
            eyebrow="Delivery Lifecycle"
            title="Our 11-stage disciplined engineering process"
            description="Every fixed-price project moves systematically from discovery to handover with strict milestone criteria."
          />
          <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {oneTimeLifecycle.map((step, i) => (
              <li
                key={step}
                className="flex items-center gap-4 rounded-xl border border-hairline bg-paper p-5 transition-colors hover:border-teal"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-teal/10 font-mono text-xs font-bold text-teal">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-semibold text-ink">{step}</span>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Milestone Payments & Warranty */}
      <section className="border-b border-hairline bg-paper py-20">
        <Container className="grid gap-8 lg:grid-cols-2">
          <Card className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-teal mb-3">
                <CreditCard size={20} />
                <h2 className="font-display text-xl font-semibold text-ink">
                  Milestone-Based Billing
                </h2>
              </div>
              <p className="text-sm text-ink/70 mb-6">
                You never pay 100% upfront. Payments are linked to verifiable delivery milestones.
              </p>
              <div className="space-y-4">
                {milestonePayments.map((m) => (
                  <div key={m.phase} className="rounded-lg bg-surface p-4 border border-hairline">
                    <p className="text-xs font-mono font-semibold text-teal">{m.phase}</p>
                    <p className="text-xs text-ink/70 mt-1 leading-relaxed">{m.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          <Card className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-teal mb-3">
                <ShieldCheck size={20} />
                <h2 className="font-display text-xl font-semibold text-ink">
                  30-Day Post-Launch Warranty
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-ink/70 mb-6">
                Every one-time build includes 30 consecutive days of bug-fix support following production deployment. If anything in the original agreed scope behaves unexpectedly, we resolve it promptly at zero additional cost.
              </p>
              <h3 className="font-display text-sm font-semibold text-ink mb-3">
                Variables that determine final quote:
              </h3>
              <ul className="space-y-2">
                {oneTimePricingFactors.map((factor) => (
                  <li key={factor} className="flex items-start gap-2 text-xs text-ink/70">
                    <CheckCircle2 size={14} className="mt-0.5 text-gold shrink-0" />
                    {factor}
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </Container>
      </section>

      {/* Global Invoicing & Compliance */}
      <section className="py-20 bg-surface">
        <Container className="max-w-3xl">
          <div className="flex items-center gap-2 text-teal mb-2">
            <Globe size={18} />
            <Eyebrow>Cross-Border & Global Delivery</Eyebrow>
          </div>
          <h2 className="mt-3 font-display text-2xl font-semibold text-ink sm:text-3xl">
            International Payment & Legal Compliance
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ink/70">
            We work with startups and businesses worldwide. For clients outside India, invoicing in USD or EUR is available, payable via international bank wire (SWIFT/ACH) or Stripe/PayPal. Mutual non-disclosure agreements (NDAs) and standard intellectual property assignment contracts are signed before any code is committed.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact" variant="primary">
              Get a Free Quote <ArrowRight size={16} />
            </Button>
            <Button href="/work" variant="secondary">
              See Case Studies
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
