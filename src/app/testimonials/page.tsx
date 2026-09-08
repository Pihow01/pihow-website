import type { Metadata } from "next";
import { ArrowRight, Star } from "lucide-react";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Eyebrow } from "@/components/SectionHeading";
import { testimonials } from "@/content/testimonials";

export const metadata: Metadata = {
  title: "Client Testimonials & Reviews",
  description:
    "What engineering leaders, startup founders, and operations directors say about partnering with Pihow Services for web development and data engineering.",
  alternates: { canonical: "/testimonials" },
};

export default function TestimonialsPage() {
  return (
    <>
      <section className="border-b border-hairline py-20 bg-paper bg-tech-grid">
        <Container>
          <Eyebrow>Client Testimonials</Eyebrow>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold text-ink sm:text-5xl">
            Trusted by teams who needed it built right.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink/70">
            Hear directly from the founders and technical leaders who trust Pihow Services for their web applications, mobile platforms, and enterprise data pipelines.
          </p>
        </Container>
      </section>

      <section className="py-20 bg-surface">
        <Container>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="flex flex-col justify-between p-6">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-gold">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={15} fill="currentColor" />
                      ))}
                    </div>
                    <span className="rounded-full bg-teal/10 px-2.5 py-0.5 font-mono text-[10px] text-teal">
                      Verified Client
                    </span>
                  </div>

                  <p className="font-display text-base leading-relaxed text-ink">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-hairline">
                  <p className="text-sm font-semibold text-ink">{testimonial.name}</p>
                  <p className="text-xs text-ink/60">
                    {testimonial.title}, <span className="text-ink font-medium">{testimonial.company}</span>
                  </p>
                  <div className="mt-2 flex items-center justify-between text-[11px] font-mono text-ink/50">
                    <span>{testimonial.service}</span>
                    <span>{testimonial.location}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h3 className="font-display text-2xl font-semibold text-ink">
              Ready to experience the same partnership?
            </h3>
            <p className="mt-2 text-sm text-ink/70">
              Schedule an introductory consultation or tell us about your requirements.
            </p>
            <div className="mt-6">
              <Button href="/contact" variant="primary">
                Start Your Project <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
