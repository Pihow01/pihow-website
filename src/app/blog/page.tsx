import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { Eyebrow } from "@/components/SectionHeading";
import { blogPosts } from "@/content/blog";

export const metadata: Metadata = {
  title: "Blog & Resources",
  description:
    "Pricing guides, vendor-selection advice, and practical answers to the questions founders search before hiring a development partner.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  return (
    <>
      <section className="border-b border-hairline py-20">
        <Container>
          <Eyebrow>Blog & resources</Eyebrow>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold text-ink sm:text-5xl">
            Practical answers, not sales pitches
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink/70">
            Pricing guides, vendor-selection advice, and the specific questions founders search
            before hiring a development partner.
          </p>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block h-full">
                <Card className="flex h-full flex-col">
                  <p className="font-mono text-xs uppercase tracking-wide text-ink/50">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}{" "}
                    · {post.readingTime}
                  </p>
                  <h2 className="mt-3 font-display text-xl font-semibold text-ink group-hover:text-teal">
                    {post.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/70">
                    {post.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-teal">
                    Read article <ArrowRight size={14} />
                  </span>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
