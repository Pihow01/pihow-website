"use client";

import { useState } from "react";
import { technologies, type TechCategory } from "@/content/techStack";
import { 
  Code2, 
  Database, 
  Cloud, 
  Server, 
  Workflow, 
  BarChart3, 
  Terminal 
} from "lucide-react";

function getTechIcon(name: string, category: TechCategory) {
  if (name.includes("React") || name.includes("Next") || name.includes("Tailwind")) {
    return <Code2 className="text-teal" size={18} />;
  }
  if (name.includes("SQL") || name.includes("Postgre") || name.includes("Redis") || name.includes("Supabase")) {
    return <Database className="text-teal" size={18} />;
  }
  if (name.includes("Spark") || name.includes("Kafka") || name.includes("Airflow") || name.includes("dbt")) {
    return <Workflow className="text-gold" size={18} />;
  }
  if (name.includes("Snowflake") || name.includes("BigQuery") || name.includes("Redshift") || name.includes("ClickHouse") || name.includes("DuckDB")) {
    return <Server className="text-gold" size={18} />;
  }
  if (name.includes("Power BI") || name.includes("Tableau") || name.includes("Pandas")) {
    return <BarChart3 className="text-gold" size={18} />;
  }
  if (category === "cloud" || name.includes("AWS") || name.includes("Google") || name.includes("Kubernetes")) {
    return <Cloud className="text-teal-dark" size={18} />;
  }
  return <Terminal className="text-ink/70" size={18} />;
}

export function TechnologyMarquee() {
  const [selectedCategory, setSelectedCategory] = useState<"all" | TechCategory>("all");

  const row1 = technologies.slice(0, 14);
  const row2 = technologies.slice(14);

  const filteredTech = selectedCategory === "all" 
    ? technologies 
    : technologies.filter(t => t.category === selectedCategory);

  return (
    <div className="w-full">
      {/* Infinite Marquee Section */}
      <div className="relative overflow-hidden py-4">
        {/* Gradient fade masks for smooth infinite effect */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-paper to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-paper to-transparent" />

        {/* Row 1 */}
        <div className="animate-marquee gap-3 py-1.5">
          {[...row1, ...row1].map((tech, idx) => (
            <div
              key={`${tech.name}-r1-${idx}`}
              className="flex items-center gap-2.5 rounded-full border border-hairline bg-surface/90 px-4 py-2 shadow-xs backdrop-blur-xs transition-colors hover:border-teal hover:bg-surface"
            >
              {getTechIcon(tech.name, tech.category)}
              <span className="font-display text-sm font-semibold text-ink">
                {tech.name}
              </span>
              <span className="rounded-full bg-paper px-2 py-0.5 font-mono text-[10px] text-ink/60">
                {tech.categoryLabel}
              </span>
            </div>
          ))}
        </div>

        {/* Row 2 (Reverse) */}
        <div className="animate-marquee-reverse mt-3 gap-3 py-1.5">
          {[...row2, ...row2].map((tech, idx) => (
            <div
              key={`${tech.name}-r2-${idx}`}
              className="flex items-center gap-2.5 rounded-full border border-hairline bg-surface/90 px-4 py-2 shadow-xs backdrop-blur-xs transition-colors hover:border-gold hover:bg-surface"
            >
              {getTechIcon(tech.name, tech.category)}
              <span className="font-display text-sm font-semibold text-ink">
                {tech.name}
              </span>
              <span className="rounded-full bg-paper px-2 py-0.5 font-mono text-[10px] text-ink/60">
                {tech.categoryLabel}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Category Filter & Detail Grid */}
      <div className="mt-12">
        <div className="flex flex-wrap items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => setSelectedCategory("all")}
            className={`rounded-full px-4 py-2 text-xs font-medium transition-all ${
              selectedCategory === "all"
                ? "bg-teal text-white shadow-xs"
                : "border border-hairline bg-surface text-ink/70 hover:text-ink"
            }`}
          >
            All Capabilities ({technologies.length})
          </button>
          <button
            type="button"
            onClick={() => setSelectedCategory("web")}
            className={`rounded-full px-4 py-2 text-xs font-medium transition-all ${
              selectedCategory === "web"
                ? "bg-teal text-white shadow-xs"
                : "border border-hairline bg-surface text-ink/70 hover:text-ink"
            }`}
          >
            Full-Stack Web & APIs
          </button>
          <button
            type="button"
            onClick={() => setSelectedCategory("data")}
            className={`rounded-full px-4 py-2 text-xs font-medium transition-all ${
              selectedCategory === "data"
                ? "bg-teal text-white shadow-xs"
                : "border border-hairline bg-surface text-ink/70 hover:text-ink"
            }`}
          >
            Data Engineering & Analytics
          </button>
          <button
            type="button"
            onClick={() => setSelectedCategory("cloud")}
            className={`rounded-full px-4 py-2 text-xs font-medium transition-all ${
              selectedCategory === "cloud"
                ? "bg-teal text-white shadow-xs"
                : "border border-hairline bg-surface text-ink/70 hover:text-ink"
            }`}
          >
            Cloud, DevOps & Infra
          </button>
        </div>

        {/* Highlight Grid */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {filteredTech.slice(0, 12).map((tech) => (
            <div
              key={tech.name}
              className="group rounded-xl border border-hairline bg-surface p-5 transition-all duration-200 hover:-translate-y-1 hover:border-teal/50 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-paper">
                  {getTechIcon(tech.name, tech.category)}
                </div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-gold">
                  {tech.categoryLabel}
                </span>
              </div>
              <h3 className="mt-3 font-display text-base font-semibold text-ink group-hover:text-teal">
                {tech.name}
              </h3>
              <p className="mt-1 font-mono text-xs text-ink/50">{tech.role}</p>
              <p className="mt-2 text-xs leading-relaxed text-ink/70">
                {tech.highlight}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
