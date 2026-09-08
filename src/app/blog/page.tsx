import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { Eyebrow } from "@/components/SectionHeading";
import { blogPosts } from "@/content/blog";

export const metadata: Metadata = {
  title: "Engineering Blog & Technical Insights",
  description:
    "Pricing guides, architecture breakdowns, data engineering patterns, and vendor-selection advice for founders and technical leaders.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  return (
    <>
      <section className="border-b border-hairline py-20 bg-paper bg-tech-grid">
        <Container>
          <Eyebrow>Engineering Blog & Resources</Eyebrow>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold text-ink sm:text-5xl">
            Practical engineering insights, zero buzzwords.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink/70">
            Real architectural blueprints, honest cost breakdowns, and vendor-selection guidance written directly from our engineering team.
          </p>
        </Container>
      </section>

      <section className="py-20 bg-surface">
        <Container>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block h-full">
                <Card className="flex h-full flex-col justify-between p-6 transition-all duration-200 group-hover:-translate-y-1 group-hover:border-teal group-hover:shadow-md">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="rounded-full bg-gold/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-gold">
                        {post.category}
                      </span>
                      <span className="font-mono text-xs text-ink/50 flex items-center gap-1">
                        <Clock size={12} /> {post.readingTime}
                      </span>
                    </div>

                    <h2 className="font-display text-xl font-semibold text-ink group-hover:text-teal transition-colors">
                      {post.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-ink/70">
                      {post.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-hairline flex items-center justify-between">
                    <span className="text-xs text-ink/60 font-medium">
                      By {post.author.name}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-teal group-hover:underline">
                      Read article <ArrowRight size={14} />
                    </span>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
