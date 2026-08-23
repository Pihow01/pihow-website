import type { Metadata } from "next";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Eyebrow, SectionHeading } from "@/components/SectionHeading";
import { ComparisonTable } from "@/components/ComparisonTable";
import { pricingFaq } from "@/content/faq";

export const metadata: Metadata = {
  title: "Pricing & Comparison",
  description:
    "Compare the Premium Subscription (₹45,000/month) and One-Time Development (from ₹60,000) side by side, plus answers to the questions that come up before signing.",
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
      <section className="border-b border-hairline py-20">
        <Container>
          <Eyebrow>Pricing</Eyebrow>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold text-ink sm:text-5xl">
            Simple pricing, two ways to work with us
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink/70">
            No hidden tiers, no forced upsells — a monthly partnership or a one-time build,
            compared side by side.
          </p>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <ComparisonTable />
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/services/subscription" variant="primary">
              Explore the Subscription <ArrowRight size={16} />
            </Button>
            <Button href="/services/one-time-development" variant="secondary">
              Explore One-Time Development
            </Button>
          </div>
        </Container>
      </section>

      <section className="border-t border-hairline bg-surface py-20">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="Questions" title="Frequently asked" />
          <div className="mt-10 divide-y divide-hairline rounded-2xl border border-hairline bg-paper">
            {pricingFaq.map((item) => (
              <details key={item.question} className="group px-6 py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-medium text-ink">
                  {item.question}
                  <ChevronDown
                    size={18}
                    className="shrink-0 text-ink/40 transition-transform duration-200 group-open:rotate-180"
                  />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{item.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="text-center">
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            Still not sure which fits?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-ink/70">
            Tell us about the project on a free call and we&apos;ll recommend the right one.
          </p>
          <div className="mt-6">
            <Button href="/contact" variant="primary">
              Book a Free Consultation <ArrowRight size={16} />
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
