"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/Card";
import { caseStudies } from "@/content/caseStudies";

export function PortfolioGrid() {
  const [filter, setFilter] = useState<"all" | "web" | "data" | "fullstack">("all");

  const filtered = filter === "all"
    ? caseStudies
    : caseStudies.filter((s) => s.serviceType === filter);

  return (
    <div>
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        <button
          type="button"
          onClick={() => setFilter("all")}
          className={`rounded-full px-5 py-2 text-xs font-medium transition-all ${
            filter === "all"
              ? "bg-teal text-white shadow-xs"
              : "border border-hairline bg-surface text-ink/70 hover:text-ink"
          }`}
        >
          All Engagements ({caseStudies.length})
        </button>
        <button
          type="button"
          onClick={() => setFilter("web")}
          className={`rounded-full px-5 py-2 text-xs font-medium transition-all ${
            filter === "web"
              ? "bg-teal text-white shadow-xs"
              : "border border-hairline bg-surface text-ink/70 hover:text-ink"
          }`}
        >
          Web & E-Commerce
        </button>
        <button
          type="button"
          onClick={() => setFilter("data")}
          className={`rounded-full px-5 py-2 text-xs font-medium transition-all ${
            filter === "data"
              ? "bg-teal text-white shadow-xs"
              : "border border-hairline bg-surface text-ink/70 hover:text-ink"
          }`}
        >
          Data Engineering & Analytics
        </button>
        <button
          type="button"
          onClick={() => setFilter("fullstack")}
          className={`rounded-full px-5 py-2 text-xs font-medium transition-all ${
            filter === "fullstack"
              ? "bg-teal text-white shadow-xs"
              : "border border-hairline bg-surface text-ink/70 hover:text-ink"
          }`}
        >
          SaaS & Cloud Platforms
        </button>
      </div>

      {/* Grid of Projects */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((study) => (
          <Link key={study.slug} href={`/work/${study.slug}`} className="group block h-full">
            <Card className="flex h-full flex-col overflow-hidden transition-all duration-300 group-hover:-translate-y-1.5 group-hover:border-teal group-hover:shadow-lg">
              {study.image ? (
                <div className="relative mb-5 aspect-video overflow-hidden rounded-lg bg-slate-950">
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
              <h2 className="mt-2 font-display text-xl font-semibold text-ink group-hover:text-teal">
                {study.client}
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/70">
                {study.summary}
              </p>

              {/* Highlight Metric */}
              <div className="mt-5 rounded-lg bg-paper p-3 border border-hairline">
                <span className="font-mono text-[10px] uppercase text-ink/50 block">Proven Outcome</span>
                <span className="font-display text-sm font-semibold text-teal">{study.result}</span>
              </div>

              {/* Tech Badges */}
              <div className="mt-4 flex flex-wrap gap-1.5 pt-2 border-t border-hairline">
                {study.techStack.slice(0, 3).map((tech) => (
                  <span key={tech} className="rounded-md bg-paper px-2 py-0.5 font-mono text-[10px] text-ink/70">
                    {tech}
                  </span>
                ))}
              </div>

              <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-ink group-hover:text-teal">
                Explore case study & architecture <ArrowRight size={14} />
              </span>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
