import Link from "next/link";
import { ArrowRight, Compass, Home } from "lucide-react";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center py-20">
      <Container className="max-w-xl text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-teal/10 text-teal">
          <Compass size={32} />
        </div>
        <p className="mt-6 font-mono text-sm font-semibold uppercase tracking-widest text-gold">
          404 Error
        </p>
        <h1 className="mt-2 font-display text-4xl font-semibold text-ink sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 text-base leading-relaxed text-ink/70">
          The page you are looking for might have been moved, renamed, or is temporarily unavailable.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-dark"
          >
            <Home size={16} />
            Back to Home
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-teal"
          >
            Explore Services <ArrowRight size={16} />
          </Link>
        </div>
      </Container>
    </section>
  );
}
