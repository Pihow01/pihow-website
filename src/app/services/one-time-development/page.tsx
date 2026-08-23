import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Eyebrow } from "@/components/SectionHeading";
import { oneTimeLifecycle, oneTimePricingFactors } from "@/content/services";

export const metadata: Metadata = {
  title: "One-Time Development — from ₹60,000",
  description:
    "A custom-built website or application developed around your exact requirements, with full source-code handover and 30 days of post-launch support.",
  alternates: { canonical: "/services/one-time-development" },
};

export default function OneTimeDevelopmentPage() {
  return (
    <>
      <section className="border-b border-hairline py-20">
        <Container>
          <Eyebrow>One-Time Development</Eyebrow>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold text-ink sm:text-5xl">
            Build it once, own it completely
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink/70">
            A custom-built website or application developed around your exact requirements, with
            full source-code handover and 30 days of post-launch support.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <p className="font-mono text-2xl font-semibold text-gold">From ₹60,000</p>
            <Button href="/contact" variant="primary">
              Get a Free Quote <ArrowRight size={16} />
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            Development lifecycle & delivery
          </h2>
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {oneTimeLifecycle.map((step, i) => (
              <li
                key={step}
                className="flex items-center gap-4 rounded-xl border border-hairline bg-surface px-5 py-4"
              >
                <span className="font-mono text-sm font-semibold text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-medium text-ink">{step}</span>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-y border-hairline bg-surface py-20">
        <Container className="grid gap-10 lg:grid-cols-2">
          <Card>
            <h2 className="font-display text-xl font-semibold text-ink">
              Post-launch support
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink/70">
              Every project includes 30 days of included bug-fix support after handover, covering
              issues with what was delivered. New features or scope beyond the original build are
              quoted separately.
            </p>
          </Card>
          <Card>
            <h2 className="font-display text-xl font-semibold text-ink">
              What affects the price
            </h2>
            <ul className="mt-4 space-y-2.5">
              {oneTimePricingFactors.map((factor) => (
                <li key={factor} className="flex items-start gap-2 text-sm text-ink/70">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {factor}
                </li>
              ))}
            </ul>
          </Card>
        </Container>
      </section>

      <section className="py-20">
        <Container className="max-w-3xl">
          <Eyebrow>New</Eyebrow>
          <h2 className="mt-3 font-display text-2xl font-semibold text-ink sm:text-3xl">
            International payment
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink/70">
            For clients outside India: invoicing in USD or EUR available, payable via
            international wire transfer or Stripe/PayPal. Contracts and NDAs available on request
            before any project begins.
          </p>
          <div className="mt-10">
            <Button href="/contact" variant="primary">
              Get a Free Quote <ArrowRight size={16} />
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
