import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Eyebrow } from "@/components/SectionHeading";
import { blogPosts } from "@/content/blog";

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
    title: post.title,
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

  return (
    <article>
      <section className="border-b border-hairline py-20">
        <Container className="max-w-3xl">
          <Eyebrow>
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}{" "}
            · {post.readingTime}
          </Eyebrow>
          <h1 className="mt-4 font-display text-3xl font-semibold text-ink sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg text-ink/70">{post.description}</p>
        </Container>
      </section>

      <section className="py-16">
        <Container className="max-w-3xl">
          <div className="space-y-8">
            {post.body.map((block, i) => (
              <div key={i}>
                {block.heading ? (
                  <h2 className="font-display text-xl font-semibold text-ink">
                    {block.heading}
                  </h2>
                ) : null}
                {block.paragraphs.map((p, j) => (
                  <p key={j} className="mt-3 text-base leading-relaxed text-ink/80">
                    {p}
                  </p>
                ))}
                {block.list ? (
                  <ul className="mt-3 space-y-2.5">
                    {block.list.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-base leading-relaxed text-ink/80">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-2xl border border-hairline bg-surface p-8 text-center">
            <h2 className="font-display text-xl font-semibold text-ink">
              Have a project in mind?
            </h2>
            <div className="mt-5">
              <Button href="/contact" variant="primary">
                Book a Free Consultation <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </article>
  );
}
