import type { Metadata } from "next";
import Image from "next/image";
import { 
  ArrowRight, 
  Database, 
  Workflow, 
  Server, 
  Cpu, 
  BarChart3, 
  ShieldCheck, 
  CheckCircle 
} from "lucide-react";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Data Engineering & Analytics Architecture",
  description:
    "Enterprise data engineering, streaming pipelines, cloud warehousing in Snowflake & BigQuery, dbt modeling, and custom BI analytics dashboards by Pihow Services.",
  alternates: { canonical: "/services/data-engineering" },
};

const capabilities = [
  {
    title: "Real-Time Streaming & Event Ingestion",
    description: "Capture and process events as they happen with zero data loss and sub-second delivery.",
    icon: Workflow,
    deliverables: [
      "Apache Kafka & AWS Kinesis cluster deployment",
      "Event-driven pub/sub architecture and schema registries",
      "Stream deduplication & validation workers in Python / Spark",
      "Microservice change data capture (Debezium / PostgreSQL CDC)",
    ],
  },
  {
    title: "Cloud Data Warehousing & Lakehouse",
    description: "Consolidate fragmented business data into a single, high-speed analytical source of truth.",
    icon: Server,
    deliverables: [
      "Snowflake & Google BigQuery architecture design",
      "Raw, Bronze, Silver, and Gold medallion layer modeling",
      "Separation of compute and storage to optimize operational costs",
      "ClickHouse integration for low-latency customer-facing queries",
    ],
  },
  {
    title: "Transformation & Data Modeling (dbt)",
    description: "Turn raw messy data into reliable, tested, and documented analytics models.",
    icon: Database,
    deliverables: [
      "dbt core and dbt cloud pipelines with version control",
      "Automated schema validations, freshness, and relationship tests",
      "Dimensional modeling (Star & Snowflake schemas) for BI tools",
      "Automated data lineage documentation and dictionary generation",
    ],
  },
  {
    title: "Workflow Orchestration & Automation",
    description: "Reliable scheduling and automated recovery for batch and incremental syncs.",
    icon: Cpu,
    deliverables: [
      "Apache Airflow and Prefect programmatic DAG development",
      "Automated retry mechanisms and dead-letter queue routing",
      "Data pipeline health monitoring and Slack/Email incident alerting",
      "Automated infrastructure teardown to prevent idle cloud billing",
    ],
  },
  {
    title: "Executive BI & Analytics Dashboards",
    description: "Transform raw warehouse queries into intuitive decision-making dashboards.",
    icon: BarChart3,
    deliverables: [
      "Custom interactive Power BI, Tableau & Apache Superset suites",
      "Automated executive KPI tracking (CAC, LTV, Retention, ROAS)",
      "Role-based dashboard permissions and row-level security",
      "Embedded analytics dashboards inside your customer web apps",
    ],
  },
  {
    title: "Data Governance & Compliance",
    description: "Protect sensitive data while ensuring engineering teams have fast access.",
    icon: ShieldCheck,
    deliverables: [
      "PII data masking and role-based access control (RBAC)",
      "Audit logging and GDPR / DPDP Act 2023 compliance architecture",
      "Data retention and automated archival policies",
      "Disaster recovery and automated warehouse backup snapshots",
    ],
  },
];

const dataTech = [
  "Apache Spark",
  "Apache Kafka",
  "Snowflake",
  "Google BigQuery",
  "dbt",
  "Apache Airflow",
  "ClickHouse",
  "PostgreSQL",
  "DuckDB",
  "Python",
  "Power BI",
  "Tableau",
  "AWS Redshift",
  "Docker",
];

export default function DataEngineeringPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-hairline bg-paper py-20 bg-tech-grid">
        <Container className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-teal/20 bg-teal/5 px-3.5 py-1 text-xs font-medium text-teal mb-4">
              <span className="h-2 w-2 rounded-full bg-teal animate-pulse" />
              Enterprise Data Architecture & Intelligence
            </div>
            <h1 className="font-display text-4xl font-semibold leading-[1.1] text-ink sm:text-5xl">
              Data Engineering, Pipelines & Analytical Warehousing
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink/70">
              Stop making decisions on stale data and brittle spreadsheets. We design, deploy, and maintain
              enterprise-grade data pipelines, modern cloud warehouses (Snowflake, BigQuery), and executive BI dashboards.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              {/* As requested: Data services do not have pricing so directly redirect to contact page */}
              <Button href="/contact?service=data-engineering" variant="primary">
                Discuss Your Data Architecture <ArrowRight size={16} />
              </Button>
              <Button href="/work/apexmetrics-financial" variant="secondary">
                View FinTech Case Study
              </Button>
            </div>
            <p className="mt-4 font-mono text-xs text-ink/50">
              Custom scope & retainer arrangements tailored to your infrastructure requirements.
            </p>
          </div>

          <div className="relative aspect-video overflow-hidden rounded-2xl border border-hairline bg-slate-950 shadow-xl">
            <Image
              src="/images/data-pipeline.jpg"
              alt="Data Pipeline and Analytics Architecture Preview"
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      {/* Tech Stack Banner */}
      <section className="border-b border-hairline bg-surface py-8">
        <Container>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-gold shrink-0">
              Core Data Technologies:
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {dataTech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-hairline bg-paper px-3 py-1 font-mono text-xs text-ink/80"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Capabilities Grid */}
      <section className="py-24 border-b border-hairline bg-paper">
        <Container>
          <SectionHeading
            eyebrow="Capabilities"
            title="End-to-End Data Engineering Services"
            description="From raw transactional ingestion to boardroom decision dashboards, we engineer every layer of your modern data stack."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <Card key={cap.title} className="flex flex-col justify-between">
                  <div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal/10 text-teal mb-4">
                      <Icon size={20} />
                    </div>
                    <h2 className="font-display text-lg font-semibold text-ink">
                      {cap.title}
                    </h2>
                    <p className="mt-2 text-xs leading-relaxed text-ink/70">
                      {cap.description}
                    </p>
                  </div>
                  <ul className="mt-6 space-y-2 border-t border-hairline pt-4 text-xs text-ink/80">
                    {cap.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle size={14} className="mt-0.5 text-teal shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      {/* How We Deliver Data Projects */}
      <section className="border-b border-hairline bg-surface py-20">
        <Container className="max-w-4xl">
          <SectionHeading
            eyebrow="Our Engineering Process"
            title="How we design and deploy your data infrastructure"
            description="Every data project follows our disciplined four-stage engineering methodology."
          />

          <div className="mt-12 space-y-6">
            <div className="rounded-xl border border-hairline bg-paper p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-teal text-white font-mono text-xs font-bold">
                  1
                </span>
                <h3 className="font-display text-lg font-semibold text-ink">
                  Data Audit & Schema Discovery
                </h3>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-ink/70 pl-10">
                We catalog your current data sources, schema changes, query bottlenecks, and reporting requirements. We deliver a clear architecture blueprint before any infrastructure is provisioned.
              </p>
            </div>

            <div className="rounded-xl border border-hairline bg-paper p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-teal text-white font-mono text-xs font-bold">
                  2
                </span>
                <h3 className="font-display text-lg font-semibold text-ink">
                  Pipeline Ingestion & Lakehouse Setup
                </h3>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-ink/70 pl-10">
                We establish resilient ELT connectors or real-time Kafka topics, configure the cloud warehouse (Snowflake/BigQuery), and implement automated schema migrations and security guardrails.
              </p>
            </div>

            <div className="rounded-xl border border-hairline bg-paper p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-teal text-white font-mono text-xs font-bold">
                  3
                </span>
                <h3 className="font-display text-lg font-semibold text-ink">
                  dbt Modeling & Quality Assertions
                </h3>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-ink/70 pl-10">
                We write modular, version-controlled SQL transformations in dbt. We enforce automated tests so bad data from upstream APIs is trapped and alerted before polluting executive reports.
              </p>
            </div>

            <div className="rounded-xl border border-hairline bg-paper p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-teal text-white font-mono text-xs font-bold">
                  4
                </span>
                <h3 className="font-display text-lg font-semibold text-ink">
                  Analytics Delivery & Handover
                </h3>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-ink/70 pl-10">
                We wire up your Power BI, Tableau, or web application dashboards, verify analytical calculations with your finance/operations leaders, and hand over complete documentation and code.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Data Case Study Callout */}
      <section className="py-20 border-b border-hairline bg-paper">
        <Container className="rounded-2xl border border-hairline bg-teal px-8 py-12 text-white sm:px-16">
          <div className="grid items-center gap-8 lg:grid-cols-[1.3fr_0.7fr]">
            <div>
              <span className="rounded-full bg-white/20 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-white">
                Featured Case Study · FinTech Data Lakehouse
              </span>
              <h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">
                ApexMetrics: From 6-hour batch delays to 42ms query speed
              </h2>
              <p className="mt-3 text-sm text-white/80 leading-relaxed max-w-xl">
                Discover how Pihow architected an Apache Kafka streaming pipeline and Snowflake warehouse processing 50M+ daily transactions with 99.99% reliability.
              </p>
              <div className="mt-6">
                <Button 
                  href="/work/apexmetrics-financial" 
                  variant="secondary" 
                  className="bg-white text-teal hover:bg-paper"
                >
                  Read the Full Case Study <ArrowRight size={16} />
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 border-t border-white/20 pt-6 lg:border-t-0 lg:border-l lg:pl-8">
              <div>
                <p className="font-display text-3xl font-bold text-amber-300">42 ms</p>
                <p className="text-xs text-white/80 mt-1">Average Latency</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-amber-300">50M+</p>
                <p className="text-xs text-white/80 mt-1">Daily Events</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-amber-300">38%</p>
                <p className="text-xs text-white/80 mt-1">Cloud Cost Saved</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-amber-300">99.99%</p>
                <p className="text-xs text-white/80 mt-1">Pipeline SLA</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-surface text-center">
        <Container className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
            Ready to upgrade your data infrastructure?
          </h2>
          <p className="mt-4 text-base text-ink/70">
            Tell us about your current data sources, volumes, and analytical goals. We&apos;ll prepare an architectural recommendation and scoping roadmap.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact?service=data-engineering" variant="primary">
              Contact Our Data Team <ArrowRight size={16} />
            </Button>
            <Button href="/contact#book-a-call" variant="secondary">
              Book a Free Scoping Call
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
