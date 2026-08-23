import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { SectionHeading, Eyebrow } from "@/components/SectionHeading";
import { DemoPlaceholder } from "@/components/DemoPlaceholder";
import { caseStudies } from "@/content/caseStudies";
import { testimonials } from "@/content/testimonials";

const proofStats = [
  { value: "50+", label: "Projects delivered" },
  { value: "4.9 / 5", label: "Average client rating" },
  { value: "6", label: "Countries served" },
  { value: "2023", label: "Founded" },
];

export default function HomePage() {
  return (
    <>
      <section className="border-b border-hairline bg-paper py-20 sm:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="fade-in-up">
            <Eyebrow>Full-stack development & technical partnership</Eyebrow>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.1] text-ink sm:text-5xl lg:text-[3.25rem]">
              Full-stack software, built like a product — not a project.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70">
              Pihow Services is a full-stack development partner for founders and growing
              companies who need production-grade engineering — delivered as an ongoing monthly
              partnership, or a complete one-time build you own outright.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact" variant="primary">
                Book a Free Consultation <ArrowRight size={16} />
              </Button>
              <Button href="/work" variant="secondary">
                See Our Work
              </Button>
            </div>
          </div>

          <div className="relative hidden aspect-[4/3] rounded-2xl border border-hairline bg-surface p-2 shadow-[0_20px_60px_rgba(14,59,51,0.08)] lg:block">
            <div className="flex h-full flex-col overflow-hidden rounded-xl border border-hairline bg-paper">
              <div className="flex items-center gap-1.5 border-b border-hairline px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-hairline" />
                <span className="h-2.5 w-2.5 rounded-full bg-hairline" />
                <span className="h-2.5 w-2.5 rounded-full bg-hairline" />
              </div>
              <div className="flex flex-1 flex-col justify-center gap-3 p-8">
                <div className="h-3 w-2/3 rounded-full bg-teal/15" />
                <div className="h-3 w-1/2 rounded-full bg-hairline" />
                <div className="mt-4 h-24 rounded-lg bg-teal/10" />
                <div className="flex gap-2">
                  <div className="h-8 w-20 rounded-full bg-teal/90" />
                  <div className="h-8 w-20 rounded-full border border-hairline" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <DemoPlaceholder note="Replace every figure below with a verified number before publishing. Do not reuse an unverifiable stat.">
            Headline proof statistics for the homepage — confirm actual counts before launch.
          </DemoPlaceholder>
          <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {proofStats.map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <p className="font-display text-3xl font-semibold text-gold">{stat.value}</p>
                <p className="mt-1 text-sm text-ink/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-hairline bg-surface py-20">
        <Container>
          <SectionHeading
            eyebrow="How to work with us"
            title="Two ways to work with us"
            description="A Premium Subscription for continuous development, or a One-Time Development project you own outright."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <Card className="flex flex-col">
              <Eyebrow>Ongoing partnership</Eyebrow>
              <h3 className="mt-3 font-display text-2xl font-semibold text-ink">
                Premium Subscription
              </h3>
              <p className="mt-1 font-mono text-sm text-gold">₹45,000 / month</p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-ink/70">
                Your dedicated technology partner. Continuous full-stack development,
                maintenance, and infrastructure management — without the overhead or upfront
                cost of hiring an in-house team.
              </p>
              <Button href="/services/subscription" variant="text" className="mt-6">
                Learn more <ArrowRight size={14} />
              </Button>
            </Card>
            <Card className="flex flex-col">
              <Eyebrow>One project, start to finish</Eyebrow>
              <h3 className="mt-3 font-display text-2xl font-semibold text-ink">
                One-Time Development
              </h3>
              <p className="mt-1 font-mono text-sm text-gold">From ₹60,000</p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-ink/70">
                Build it once, own it completely. A custom-built website or application
                developed around your exact requirements, with full source-code handover and 30
                days of post-launch support.
              </p>
              <Button href="/services/one-time-development" variant="text" className="mt-6">
                Learn more <ArrowRight size={14} />
              </Button>
            </Card>
          </div>
          <p className="mt-8 text-sm text-ink/60">
            Need something bigger? SaaS platforms, marketplaces, booking systems, CRMs, ERPs, and
            customer portals are quoted individually after a discovery call.{" "}
            <Link href="/contact" className="font-medium text-teal underline-offset-4 hover:underline">
              Get a custom quote
            </Link>
            .
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading eyebrow="Featured work" title="Recent projects" />
            <Button href="/work" variant="text">
              View all case studies <ArrowRight size={14} />
            </Button>
          </div>
          <div className="mt-4">
            <DemoPlaceholder>
              Verdant Foods, Northbridge Logistics, and Al Waha Clinics below are demo case
              studies. Replace with real projects, screenshots, and results.
            </DemoPlaceholder>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {caseStudies.map((study) => (
              <Link key={study.slug} href={`/work/${study.slug}`} className="group block">
                <Card className="h-full">
                  <div className="mb-4 aspect-video rounded-lg bg-gradient-to-br from-teal/10 to-gold/10" />
                  <p className="font-mono text-[11px] uppercase tracking-wide text-gold">
                    {study.category}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-semibold text-ink group-hover:text-teal">
                    {study.client}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">{study.summary}</p>
                  <p className="mt-3 text-sm font-medium text-teal">{study.result}</p>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-hairline bg-surface py-20">
        <Container>
          <SectionHeading eyebrow="What clients say" title="Trusted by teams who needed it done right" />
          <div className="mt-4">
            <DemoPlaceholder>
              All names and companies below are invented placeholders — replace with genuine
              quotes before launch.
            </DemoPlaceholder>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {testimonials.slice(0, 2).map((testimonial) => (
              <Card key={testimonial.name}>
                <p className="font-display text-xl leading-snug text-ink">
                  <span className="text-gold">&ldquo;</span>
                  {testimonial.quote}
                  <span className="text-gold">&rdquo;</span>
                </p>
                <p className="mt-4 text-sm font-medium text-ink">{testimonial.name}</p>
                <p className="text-sm text-ink/60">
                  {testimonial.title}, {testimonial.company}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container className="text-center">
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold text-ink sm:text-4xl">
            Ready to build something that lasts?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-ink/70">
            Tell us about your project and we&apos;ll reply within one business day.
          </p>
          <div className="mt-8">
            <Button href="/contact" variant="primary">
              Get a Free Quote <ArrowRight size={16} />
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
