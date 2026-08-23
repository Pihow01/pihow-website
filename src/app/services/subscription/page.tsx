import type { Metadata } from "next";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Eyebrow } from "@/components/SectionHeading";
import { DemoPlaceholder } from "@/components/DemoPlaceholder";
import {
  subscriptionIncludes,
  subscriptionSupport,
  howItWorks,
  subscriptionTerms,
} from "@/content/services";

export const metadata: Metadata = {
  title: "Premium Subscription — ₹45,000/month",
  description:
    "A dedicated full-stack technology partner for ₹45,000/month: design, development, integrations, hosting, security, and priority support — without hiring in-house.",
  alternates: { canonical: "/services/subscription" },
};

export default function SubscriptionPage() {
  return (
    <>
      <section className="border-b border-hairline py-20">
        <Container>
          <Eyebrow>Premium Subscription</Eyebrow>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold text-ink sm:text-5xl">
            Your dedicated technology partner
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink/70">
            Continuous full-stack development, maintenance, and infrastructure management —
            without the overhead or upfront cost of hiring an in-house team.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <p className="font-mono text-2xl font-semibold text-gold">₹45,000 / month</p>
            <Button href="/contact" variant="primary">
              Book a Free Consultation <ArrowRight size={16} />
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            What&apos;s included
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {subscriptionIncludes.map((group) => (
              <Card key={group.title}>
                <h3 className="font-display text-lg font-semibold text-teal">{group.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-ink/70">
                      <Check size={16} className="mt-0.5 shrink-0 text-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
            <Card>
              <h3 className="font-display text-lg font-semibold text-teal">Priority Support</h3>
              <ul className="mt-4 space-y-2.5">
                {subscriptionSupport.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-ink/70">
                    <Check size={16} className="mt-0.5 shrink-0 text-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </Container>
      </section>

      <section className="border-y border-hairline bg-surface py-20">
        <Container>
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            How it works
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-4">
            {howItWorks.map((step, i) => (
              <div key={step.step}>
                <p className="font-mono text-xs font-semibold text-gold">
                  0{i + 1}
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold text-ink">{step.step}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="max-w-3xl">
          <Eyebrow>New</Eyebrow>
          <h2 className="mt-3 font-display text-2xl font-semibold text-ink sm:text-3xl">
            What ₹45,000/month actually buys
          </h2>
          <div className="mt-6">
            <DemoPlaceholder note="This should reflect real delivery capacity, not a placeholder number.">
              Add a concrete capacity statement here — e.g. a stated number of development hours
              or story points per month, or &ldquo;one active initiative at a time, replanned
              monthly.&rdquo; This directly answers the most common question about a monthly
              retainer: what am I actually getting.
            </DemoPlaceholder>
          </div>
        </Container>
      </section>

      <section className="border-t border-hairline bg-surface py-20">
        <Container className="max-w-3xl">
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            Subscription terms
          </h2>
          <ul className="mt-6 space-y-3">
            {subscriptionTerms.map((term) => (
              <li key={term} className="flex items-start gap-3 text-sm leading-relaxed text-ink/70">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                {term}
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <Button href="/contact" variant="primary">
              Book a Free Consultation <ArrowRight size={16} />
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
