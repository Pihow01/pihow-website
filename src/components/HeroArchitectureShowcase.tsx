"use client";

import { useState } from "react";
import { 
  Code2, 
  Workflow, 
  Activity, 
  CheckCircle2
} from "lucide-react";

export function HeroArchitectureShowcase() {
  const [activeTab, setActiveTab] = useState<"web" | "data">("web");

  return (
    <div className="relative rounded-2xl border border-hairline bg-surface p-2 shadow-[0_20px_60px_rgba(14,59,51,0.08)]">
      {/* Window Title Bar */}
      <div className="flex items-center justify-between border-b border-hairline bg-paper/80 px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          </div>
          <span className="ml-2 font-mono text-xs text-ink/50">
            pihow-core-engine // {activeTab === "web" ? "fullstack-service.ts" : "data-pipeline-dag.py"}
          </span>
        </div>

        {/* Tab Switcher */}
        <div className="flex rounded-lg bg-surface p-0.5 border border-hairline">
          <button
            type="button"
            onClick={() => setActiveTab("web")}
            className={`flex items-center gap-1.5 rounded-md px-3 py-1 text-xs font-medium transition-all ${
              activeTab === "web"
                ? "bg-teal text-white shadow-xs"
                : "text-ink/60 hover:text-ink"
            }`}
          >
            <Code2 size={13} />
            Full-Stack App
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("data")}
            className={`flex items-center gap-1.5 rounded-md px-3 py-1 text-xs font-medium transition-all ${
              activeTab === "data"
                ? "bg-teal text-white shadow-xs"
                : "text-ink/60 hover:text-ink"
            }`}
          >
            <Workflow size={13} />
            Data Lakehouse
          </button>
        </div>
      </div>

      {/* Interactive Display Content */}
      <div className="overflow-hidden rounded-b-xl bg-slate-950 p-6 text-slate-100 font-mono text-xs">
        {activeTab === "web" ? (
          <div className="space-y-5">
            {/* Top metrics bar */}
            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-lg border border-emerald-900/40 bg-emerald-950/30 p-3">
                <span className="text-[10px] text-emerald-400">STATUS</span>
                <p className="mt-1 flex items-center gap-1 text-sm font-semibold text-emerald-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" /> 100% Healthy
                </p>
              </div>
              <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-3">
                <span className="text-[10px] text-slate-400">EDGE SSR LATENCY</span>
                <p className="mt-1 text-sm font-semibold text-slate-100">18 ms</p>
              </div>
              <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-3">
                <span className="text-[10px] text-slate-400">TYPE SAFETY</span>
                <p className="mt-1 text-sm font-semibold text-teal-400">TypeScript 100%</p>
              </div>
            </div>

            {/* Architecture Node Diagram */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-2 mb-3">
                <span className="text-slate-400 text-[11px] font-medium">FULL-STACK SYSTEM ARCHITECTURE</span>
                <span className="text-emerald-400 text-[10px] flex items-center gap-1">
                  <CheckCircle2 size={12} /> Production Deployed
                </span>
              </div>
              <div className="grid grid-cols-4 gap-2 text-center text-[11px]">
                <div className="rounded-md border border-slate-800 bg-slate-800/40 p-2.5">
                  <p className="text-teal-300 font-semibold">Next.js 16</p>
                  <p className="text-[10px] text-slate-400 mt-1">App Router</p>
                </div>
                <div className="rounded-md border border-slate-800 bg-slate-800/40 p-2.5">
                  <p className="text-teal-300 font-semibold">Node.js</p>
                  <p className="text-[10px] text-slate-400 mt-1">Fastify / REST</p>
                </div>
                <div className="rounded-md border border-slate-800 bg-slate-800/40 p-2.5">
                  <p className="text-teal-300 font-semibold">PostgreSQL</p>
                  <p className="text-[10px] text-slate-400 mt-1">ACID + Prisma</p>
                </div>
                <div className="rounded-md border border-slate-800 bg-slate-800/40 p-2.5">
                  <p className="text-teal-300 font-semibold">Redis Cache</p>
                  <p className="text-[10px] text-slate-400 mt-1">Sub-ms Query</p>
                </div>
              </div>
            </div>

            {/* Live Terminal Output */}
            <div className="rounded-lg bg-slate-900/90 p-3 font-mono text-[11px] leading-relaxed text-slate-300">
              <p className="text-slate-500">{"// Deploy pipeline execution: pihow-ci-cd"}</p>
              <p className="text-emerald-400">✓ Compiled client and edge server bundles in 842ms</p>
              <p className="text-emerald-400">✓ Database schema migration applied cleanly to cluster</p>
              <p className="text-slate-400">➔ Deployed to global edge locations [BOM, DXB, LHR, FRA, SFO]</p>
            </div>
          </div>
        ) : (
          <div className="space-y-5">
            {/* Top metrics bar */}
            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-lg border border-cyan-900/40 bg-cyan-950/30 p-3">
                <span className="text-[10px] text-cyan-400">STREAMING INGESTION</span>
                <p className="mt-1 flex items-center gap-1 text-sm font-semibold text-cyan-300">
                  <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" /> 54,230 msg/s
                </p>
              </div>
              <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-3">
                <span className="text-[10px] text-slate-400">SNOWFLAKE QUERY</span>
                <p className="mt-1 text-sm font-semibold text-slate-100">42 ms avg</p>
              </div>
              <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-3">
                <span className="text-[10px] text-slate-400">DBT MODEL RUNS</span>
                <p className="mt-1 text-sm font-semibold text-gold">100% Passed</p>
              </div>
            </div>

            {/* Data Pipeline Flow Diagram */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-2 mb-3">
                <span className="text-slate-400 text-[11px] font-medium">END-TO-END DATA PIPELINE DAG</span>
                <span className="text-cyan-400 text-[10px] flex items-center gap-1">
                  <Activity size={12} /> Airflow Active
                </span>
              </div>
              <div className="grid grid-cols-4 gap-2 text-center text-[11px]">
                <div className="rounded-md border border-slate-800 bg-slate-800/40 p-2.5">
                  <p className="text-cyan-300 font-semibold">Kafka Ingest</p>
                  <p className="text-[10px] text-slate-400 mt-1">Real-Time Events</p>
                </div>
                <div className="rounded-md border border-slate-800 bg-slate-800/40 p-2.5">
                  <p className="text-cyan-300 font-semibold">Spark Compute</p>
                  <p className="text-[10px] text-slate-400 mt-1">Deduplication</p>
                </div>
                <div className="rounded-md border border-slate-800 bg-slate-800/40 p-2.5">
                  <p className="text-cyan-300 font-semibold">Snowflake</p>
                  <p className="text-[10px] text-slate-400 mt-1">dbt Gold Marts</p>
                </div>
                <div className="rounded-md border border-slate-800 bg-slate-800/40 p-2.5">
                  <p className="text-cyan-300 font-semibold">Power BI & API</p>
                  <p className="text-[10px] text-slate-400 mt-1">Executive BI</p>
                </div>
              </div>
            </div>

            {/* Live Terminal Output */}
            <div className="rounded-lg bg-slate-900/90 p-3 font-mono text-[11px] leading-relaxed text-slate-300">
              <p className="text-slate-500">{"// dbt test & incremental run"}</p>
              <p className="text-cyan-400">✓ PASS unique_transaction_id on mart_daily_financials</p>
              <p className="text-cyan-400">✓ Ingested 1.2M rows into ClickHouse real-time analytics layer</p>
              <p className="text-slate-400">➔ Consumer lag: 0.12s across all partition workers</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
