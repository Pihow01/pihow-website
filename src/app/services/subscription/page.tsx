import type { Metadata } from "next";
import { ArrowRight, Check, Zap, Clock, Sparkles, MessageSquare } from "lucide-react";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Eyebrow, SectionHeading } from "@/components/SectionHeading";
import {
  subscriptionIncludes,
  subscriptionSupport,
  howItWorks,
  subscriptionTerms,
} from "@/content/services";

export const metadata: Metadata = {
  title: "Premium Web Subscription — ₹45,000/month",
  description:
    "A dedicated full-stack technology partner for ₹45,000/month: continuous product design, frontend/backend engineering, database management, and priority support.",
  alternates: { canonical: "/services/subscription" },
};

const capacityPoints = [
  {
    title: "One Active Epic at a Time",
    detail:
      "We focus 100% of our attention on your top-priority initiative until it's tested, reviewed, and deployed to production. As soon as it's live, we immediately roll into your next queued priority.",
    icon: Zap,
  },
  {
    title: "Continuous 2-Week Sprint Cadence",
    detail:
      "Every month is divided into two focused execution sprints with planned deliverables, transparent backlog tracking, and demo releases every Friday.",
    icon: Clock,
  },
  {
    title: "Senior Full-Stack Execution",
    detail:
      "Direct execution by senior engineering talent — no junior handoffs or opaque agency layers. Covers UI/UX, Next.js, Node.js/Python, database queries, and cloud deployment.",
    icon: Sparkles,
  },
  {
    title: "Direct & Async Communication",
    detail:
      "Private Slack or WhatsApp channel for rapid day-to-day coordination, plus weekly video summaries and monthly strategic roadmap alignment.",
    icon: MessageSquare,
  },
];

export default function SubscriptionPage() {
  return (
    <>
      <section className="border-b border-hairline py-20 bg-paper bg-tech-grid">
        <Container>
          <Eyebrow>Premium Technology Subscription</Eyebrow>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold text-ink sm:text-5xl">
            Your dedicated full-stack technology partner.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/70">
            Continuous development, rapid feature releases, and infrastructure reliability — without the overhead, recruitment lag, or equity cost of hiring an in-house engineering team.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <div className="rounded-xl border border-hairline bg-surface px-5 py-3 shadow-xs">
              <span className="text-[11px] font-mono text-ink/50 uppercase block">Predictable Retainer</span>
              <p className="font-mono text-2xl font-bold text-gold">₹45,000 / month</p>
            </div>
            <Button href="/contact#book-a-call" variant="primary">
              Book a Free Consultation <ArrowRight size={16} />
            </Button>
          </div>
        </Container>
      </section>

      {/* Real Capacity Section - Zero Placeholders */}
      <section className="py-20 border-b border-hairline bg-surface">
        <Container>
          <SectionHeading
            eyebrow="Delivery Capacity"
            title="What ₹45,000/month actually buys"
            description="Clear expectations, no vague retainers. Here is exactly how your subscription operates month to month."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {capacityPoints.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal/10 text-teal">
                      <Icon size={18} />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-ink">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-ink/70">
                    {item.detail}
                  </p>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      {/* What's Included */}
      <section className="py-20 border-b border-hairline bg-paper">
        <Container>
          <SectionHeading
            eyebrow="Scope of Coverage"
            title="What is included in the subscription"
            description="End-to-end capabilities spanning design, engineering, infrastructure, and priority developer support."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
            <Card className="border-teal/30 bg-teal/[0.02]">
              <h3 className="font-display text-lg font-semibold text-teal">Priority Support SLA</h3>
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

      {/* How it works */}
      <section className="border-b border-hairline bg-surface py-20">
        <Container>
          <SectionHeading
            eyebrow="Workflow"
            title="A rhythm built for continuous shipping"
            description="Four simple steps executed in tight feedback loops every single month."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-4">
            {howItWorks.map((step, i) => (
              <div key={step.step} className="rounded-xl border border-hairline bg-paper p-6">
                <p className="font-mono text-xs font-semibold text-gold">
                  0{i + 1}
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold text-ink">{step.step}</h3>
                <p className="mt-2 text-xs leading-relaxed text-ink/70">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Terms */}
      <section className="py-20 bg-paper">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="Partnership Terms"
            title="Simple, transparent agreement terms"
            description="Clear business rules designed to keep both sides aligned."
          />
          <ul className="mt-8 space-y-3 rounded-2xl border border-hairline bg-surface p-8">
            {subscriptionTerms.map((term) => (
              <li key={term} className="flex items-start gap-3 text-sm leading-relaxed text-ink/70">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                {term}
              </li>
            ))}
            <li className="flex items-start gap-3 text-sm leading-relaxed text-ink/70">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
              Cancel or pause anytime with 14 days written notice before the next monthly billing cycle.
            </li>
            <li className="flex items-start gap-3 text-sm leading-relaxed text-ink/70">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
              100% full intellectual property and code ownership transfer to you on all shipped commits.
            </li>
          </ul>

          <div className="mt-10 text-center">
            <Button href="/contact#book-a-call" variant="primary">
              Book a Free Consultation <ArrowRight size={16} />
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
