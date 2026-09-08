"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import { Container } from "@/components/Container";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[Application Error Caught]", error);
  }, [error]);

  return (
    <section className="flex min-h-[70vh] items-center py-20">
      <Container className="max-w-xl text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-600">
          <AlertTriangle size={32} />
        </div>
        <p className="mt-6 font-mono text-sm font-semibold uppercase tracking-widest text-gold">
          System Notice
        </p>
        <h1 className="mt-2 font-display text-3xl font-semibold text-ink sm:text-4xl">
          Something went wrong
        </h1>
        <p className="mt-4 text-base leading-relaxed text-ink/70">
          We encountered an unexpected error while rendering this page. Our team has been notified.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => reset()}
            className="inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-dark"
          >
            <RefreshCw size={16} />
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-teal"
          >
            <Home size={16} />
            Back to Home
          </Link>
        </div>
      </Container>
    </section>
  );
}
