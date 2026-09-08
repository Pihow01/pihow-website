import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star, CheckCircle } from "lucide-react";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { SectionHeading, Eyebrow } from "@/components/SectionHeading";
import { HeroArchitectureShowcase } from "@/components/HeroArchitectureShowcase";
import { TechnologyMarquee } from "@/components/TechnologyMarquee";
import { caseStudies } from "@/content/caseStudies";
import { testimonials } from "@/content/testimonials";

const proofStats = [
  { value: "50+", label: "Projects Delivered", detail: "Web apps, SaaS & data pipelines" },
  { value: "99.9%", label: "Production SLA", detail: "Enterprise uptime & reliability" },
  { value: "100%", label: "Code Ownership", detail: "Full IP handover to clients" },
  { value: "6", label: "Countries Served", detail: "India, UAE, US, UK, Germany, Italy" },
];

export default function HomePage() {
  const featuredStudies = caseStudies.slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-hairline bg-paper py-20 sm:py-28 bg-tech-grid">
        <Container className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="fade-in-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-teal/20 bg-teal/5 px-3.5 py-1 text-xs font-medium text-teal mb-4">
              <span className="h-2 w-2 rounded-full bg-teal animate-pulse" />
              Full-Stack Software & Enterprise Data Engineering
            </div>
            <h1 className="font-display text-4xl font-semibold leading-[1.1] text-ink sm:text-5xl lg:text-[3.25rem]">
              Production-grade software & data systems, built to scale.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70">
              Pihow Services is the technology partner for founders and growing companies who need
              senior-level execution — from modern full-stack web applications to scalable real-time
              data pipelines, cloud warehousing, and analytics.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="/contact#book-a-call" variant="primary">
                Book a Free Consultation <ArrowRight size={16} />
              </Button>
              <Button href="/work" variant="secondary">
                Explore Case Studies
              </Button>
              <Button href="/services/data-engineering" variant="text">
                Data Engineering <ArrowRight size={14} />
              </Button>
            </div>
          </div>

          {/* Interactive Live Architecture Showcase */}
          <div className="fade-in-up">
            <HeroArchitectureShowcase />
          </div>
        </Container>
      </section>

      {/* Verified Authority & Proof Strip */}
      <section className="border-b border-hairline bg-surface py-12">
        <Container>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {proofStats.map((stat) => (
              <div key={stat.label} className="border-l-2 border-gold/40 pl-4">
                <p className="font-display text-3xl font-semibold text-teal lg:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 font-display text-sm font-semibold text-ink">
                  {stat.label}
                </p>
                <p className="mt-0.5 text-xs text-ink/60">{stat.detail}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Technology Expertise Section (Requested Marquee & Interactive Grid) */}
      <section className="py-20 border-b border-hairline bg-paper">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <Eyebrow>Technology Expertise</Eyebrow>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
              Wide-Ranging Tech Coverage, Deep Core Expertise
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              End-to-end coverage with deep expertise in specific domains, platforms, and the latest technologies.
            </p>
          </div>

          <TechnologyMarquee />
        </Container>
      </section>

      {/* Core Service Pillars */}
      <section className="border-b border-hairline bg-surface py-24">
        <Container>
          <SectionHeading
            eyebrow="Our Core Capabilities"
            title="Three ways to partner with Pihow"
            description="Whether you need continuous monthly feature delivery, a complete bespoke build, or high-throughput data engineering, we have a structured engagement model."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {/* Card 1: Web Subscription */}
            <Card className="flex flex-col relative group hover:border-teal transition-all">
              <div className="inline-block rounded-full bg-teal/10 px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-teal w-max">
                Ongoing Partnership
              </div>
              <h3 className="mt-4 font-display text-2xl font-semibold text-ink">
                Premium Web Subscription
              </h3>
              <p className="mt-1 font-mono text-lg font-semibold text-gold">₹45,000 / month</p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-ink/70">
                Your dedicated full-stack engineering team. Continuous development, feature expansion,
                database management, and proactive maintenance without hiring friction.
              </p>
              <ul className="mt-6 space-y-2 text-xs text-ink/80 border-t border-hairline pt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-teal shrink-0" /> Continuous 2-week sprints
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-teal shrink-0" /> Weekly production deploys
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-teal shrink-0" /> Full source code ownership
                </li>
              </ul>
              <Button href="/services/subscription" variant="primary" className="mt-8">
                Explore Subscription <ArrowRight size={14} />
              </Button>
            </Card>

            {/* Card 2: One-Time Web Development */}
            <Card className="flex flex-col relative group hover:border-teal transition-all">
              <div className="inline-block rounded-full bg-gold/10 px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-gold w-max">
                Start-to-Finish Build
              </div>
              <h3 className="mt-4 font-display text-2xl font-semibold text-ink">
                One-Time Development
              </h3>
              <p className="mt-1 font-mono text-lg font-semibold text-gold">From ₹60,000</p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-ink/70">
                Build it once, own it completely. A custom-built website or web application
                engineered around your exact requirements, with full source code handover and 30 days of warranty support.
              </p>
              <ul className="mt-6 space-y-2 text-xs text-ink/80 border-t border-hairline pt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-teal shrink-0" /> Fixed scope & milestone timeline
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-teal shrink-0" /> 11-step quality lifecycle
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-teal shrink-0" /> 30-day post-launch warranty
                </li>
              </ul>
              <Button href="/services/one-time-development" variant="secondary" className="mt-8">
                Explore Fixed-Price <ArrowRight size={14} />
              </Button>
            </Card>

            {/* Card 3: Data Engineering & Analytics */}
            <Card className="flex flex-col relative group hover:border-teal transition-all border-teal/30 bg-teal/[0.02]">
              <div className="inline-block rounded-full bg-teal text-white px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider w-max">
                Data Infrastructure
              </div>
              <h3 className="mt-4 font-display text-2xl font-semibold text-ink">
                Data Engineering & Analytics
              </h3>
              <p className="mt-1 font-mono text-lg font-semibold text-teal">Custom Architecture</p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-ink/70">
                Streaming pipelines, modern lakehouses (Snowflake, BigQuery), dbt data modeling,
                and executive BI analytics (Power BI, Tableau) for data-driven companies.
              </p>
              <ul className="mt-6 space-y-2 text-xs text-ink/80 border-t border-hairline pt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-teal shrink-0" /> Kafka & Spark real-time streaming
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-teal shrink-0" /> Snowflake / BigQuery warehouses
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-teal shrink-0" /> Direct advisory & implementation
                </li>
              </ul>
              <Button href="/services/data-engineering" variant="primary" className="mt-8">
                Explore Data Services <ArrowRight size={14} />
              </Button>
            </Card>
          </div>
        </Container>
      </section>

      {/* Featured Recent Projects (Case Studies) */}
      <section className="py-24 border-b border-hairline bg-paper">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
            <SectionHeading 
              eyebrow="Proven Outcomes" 
              title="Featured Client Case Studies"
              description="Real systems engineered for scale. Explore the problem, the architecture, and the measurable business outcome." 
            />
            <Button href="/work" variant="secondary">
              View All 5 Case Studies <ArrowRight size={14} />
            </Button>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {featuredStudies.map((study) => (
              <Link key={study.slug} href={`/work/${study.slug}`} className="group block h-full">
                <Card className="flex h-full flex-col overflow-hidden transition-all duration-300 group-hover:-translate-y-1.5 group-hover:border-teal group-hover:shadow-lg">
                  {study.image ? (
                    <div className="relative mb-5 aspect-video overflow-hidden rounded-lg bg-slate-900">
                      <Image
                        src={study.image}
                        alt={study.client}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-2.5 right-2.5 rounded-full bg-ink/80 backdrop-blur-xs px-2.5 py-0.5 font-mono text-[10px] text-white">
                        {study.market}
                      </div>
                    </div>
                  ) : null}

                  <p className="font-mono text-[11px] uppercase tracking-wide text-gold">
                    {study.category}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-semibold text-ink group-hover:text-teal">
                    {study.client}
                  </h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-ink/70">
                    {study.summary}
                  </p>

                  <div className="mt-6 rounded-lg bg-paper p-3 border border-hairline">
                    <span className="font-mono text-[10px] uppercase text-ink/50 block">Result</span>
                    <span className="font-display text-sm font-semibold text-teal">{study.result}</span>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-1.5 pt-2">
                    {study.techStack.slice(0, 3).map((tech) => (
                      <span key={tech} className="rounded-md bg-paper px-2 py-0.5 font-mono text-[10px] text-ink/70">
                        {tech}
                      </span>
                    ))}
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Client Testimonials Preview */}
      <section className="border-b border-hairline bg-surface py-20">
        <Container>
          <SectionHeading 
            eyebrow="Client Testimonials" 
            title="Trusted by engineering and business leaders" 
            description="Direct feedback from founders and engineering leaders we have partnered with."
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {testimonials.slice(0, 2).map((testimonial) => (
              <Card key={testimonial.name} className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-gold mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="font-display text-lg leading-relaxed text-ink">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-hairline flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-ink">{testimonial.name}</p>
                    <p className="text-xs text-ink/60">
                      {testimonial.title}, {testimonial.company}
                    </p>
                  </div>
                  <span className="rounded-full bg-teal/10 px-2.5 py-1 font-mono text-[10px] text-teal">
                    {testimonial.location}
                  </span>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/testimonials" className="inline-flex items-center gap-1.5 text-sm font-medium text-teal hover:underline">
              Read all verified client reviews <ArrowRight size={14} />
            </Link>
          </div>
        </Container>
      </section>

      {/* High-Converting Bottom CTA */}
      <section className="py-24 bg-paper bg-tech-dots">
        <Container className="text-center max-w-3xl">
          <Eyebrow>Ready to ship?</Eyebrow>
          <h2 className="mx-auto mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl lg:text-5xl">
            Let&apos;s build software and data infrastructure that lasts.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-ink/70">
            Tell us about your web app or data engineering project. We respond within one business day with an honest technical assessment.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" variant="primary">
              Get a Free Quote <ArrowRight size={16} />
            </Button>
            <Button href="/contact#book-a-call" variant="secondary">
              Book a 15-Min Call
            </Button>
          </div>
          <p className="mt-6 font-mono text-xs text-ink/50">
            Direct email: <a href="mailto:support@pihowservices.in" className="text-teal underline">support@pihowservices.in</a> · WhatsApp available 7 days/week
          </p>
        </Container>
      </section>
    </>
  );
}
