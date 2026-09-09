import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ashisBehuraImg from "../../../../public/images/ashis-behura.jpg";
import { ArrowRight, ChevronLeft, Clock, Calendar } from "lucide-react";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { blogPosts } from "@/content/blog";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} — Pihow Engineering Blog`,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: `https://${siteConfig.domain}`,
    },
  };

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <section className="border-b border-hairline py-16 bg-paper bg-tech-grid">
        <Container className="max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-ink/60 hover:text-teal mb-6 transition-colors"
          >
            <ChevronLeft size={14} /> Back to all articles
          </Link>

          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-gold/10 px-3 py-1 font-mono text-xs font-semibold text-gold">
              {post.category}
            </span>
            <span className="font-mono text-xs text-ink/60 flex items-center gap-1">
              <Calendar size={13} />
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="font-mono text-xs text-ink/60 flex items-center gap-1">
              <Clock size={13} />
              {post.readingTime}
            </span>
          </div>

          <h1 className="mt-4 font-display text-3xl font-semibold text-ink sm:text-4xl lg:text-5xl leading-tight">
            {post.title}
          </h1>
          <p className="mt-4 text-lg text-ink/70 leading-relaxed">{post.description}</p>

          <div className="mt-6 flex items-center gap-3 pt-6 border-t border-hairline">
            <div className="relative h-10 w-10 overflow-hidden rounded-full border border-hairline bg-slate-800">
              <Image
                src={ashisBehuraImg}
                alt={post.author.name}
                fill
                sizes="40px"
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-xs font-semibold text-ink">{post.author.name}</p>
              <p className="text-[11px] font-mono text-ink/50">{post.author.role} · Pihow Services</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Body Content */}
      <section className="py-16 bg-surface">
        <Container className="max-w-3xl">
          <div className="space-y-10">
            {post.body.map((block, i) => (
              <div key={i}>
                {block.heading ? (
                  <h2 className="font-display text-2xl font-semibold text-ink mb-4">
                    {block.heading}
                  </h2>
                ) : null}
                {block.paragraphs.map((p, j) => (
                  <p key={j} className="mt-3 text-base leading-relaxed text-ink/80">
                    {p}
                  </p>
                ))}
                {block.list ? (
                  <ul className="mt-4 space-y-3 pl-2">
                    {block.list.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-base leading-relaxed text-ink/80">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>

          {/* Author Footnote Box */}
          <div className="mt-16 rounded-2xl border border-hairline bg-paper p-8">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-hairline bg-slate-800">
                <Image
                  src={ashisBehuraImg}
                  alt={post.author.name}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
              <div className="text-center sm:text-left">
                <p className="font-display text-base font-semibold text-ink">
                  Written by {post.author.name}
                </p>
                <p className="text-xs text-ink/70 mt-1 leading-relaxed">
                  Founder & Tech Lead at Pihow Services. Specializing in high-performance full-stack web applications and scalable enterprise data architecture.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Consultation Card */}
          <div className="mt-12 rounded-2xl border border-teal/20 bg-teal/[0.03] p-8 text-center sm:p-10">
            <h3 className="font-display text-2xl font-semibold text-ink">
              Planning a new build or data migration?
            </h3>
            <p className="mt-2 text-sm text-ink/70 max-w-md mx-auto">
              Get an honest technical perspective on your architecture and timeline before signing with any vendor.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Button href="/contact#book-a-call" variant="primary">
                Book a Free Consultation <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </article>
  );
}
