import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Eyebrow } from "@/components/SectionHeading";
import { DemoPlaceholder } from "@/components/DemoPlaceholder";
import { testimonials } from "@/content/testimonials";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "What clients say about working with Pihow Services.",
  alternates: { canonical: "/testimonials" },
};

export default function TestimonialsPage() {
  return (
    <>
      <section className="border-b border-hairline py-20">
        <Container>
          <Eyebrow>Testimonials</Eyebrow>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold text-ink sm:text-5xl">
            What clients say
          </h1>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <DemoPlaceholder>
            All names, titles, companies, and quotes below are invented placeholders in a
            realistic voice and format. Replace each with a genuine quote — even a short one —
            from an actual client before publishing this page.
          </DemoPlaceholder>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name}>
                <p className="font-display text-xl leading-snug text-ink">
                  <span className="text-gold">&ldquo;</span>
                  {testimonial.quote}
                  <span className="text-gold">&rdquo;</span>
                </p>
                <p className="mt-4 text-sm font-medium text-ink">{testimonial.name}</p>
                <p className="text-sm text-ink/60">
                  {testimonial.title}, {testimonial.company}
                  <span className="ml-2 rounded-full bg-amber-100 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-amber-700">
                    Demo
                  </span>
                </p>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button href="/contact" variant="primary">
              Start your project <ArrowRight size={16} />
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
