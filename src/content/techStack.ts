export type TechCategory = "web" | "data" | "cloud";

export type TechItem = {
  name: string;
  category: TechCategory;
  categoryLabel: string;
  role: string;
  highlight: string;
};

export const technologies: TechItem[] = [
  // Web & Full-Stack
  {
    name: "Next.js",
    category: "web",
    categoryLabel: "Full-Stack Web",
    role: "App Router & Edge Architecture",
    highlight: "Server Components, dynamic SSR, SEO excellence",
  },
  {
    name: "React 19",
    category: "web",
    categoryLabel: "Frontend",
    role: "Client Architecture",
    highlight: "High-performance reactive interfaces and state management",
  },
  {
    name: "TypeScript",
    category: "web",
    categoryLabel: "Core Language",
    role: "Type-Safe Systems",
    highlight: "End-to-end type safety from database schemas to client UI",
  },
  {
    name: "Node.js",
    category: "web",
    categoryLabel: "Backend",
    role: "Runtime & API Engines",
    highlight: "High-concurrency microservices, event-driven backends",
  },
  {
    name: "Python",
    category: "data",
    categoryLabel: "Backend & Data",
    role: "Data & Service Logic",
    highlight: "FastAPI backends, data transformation pipelines, ETL scripting",
  },
  {
    name: "PostgreSQL",
    category: "web",
    categoryLabel: "Database",
    role: "Relational Core",
    highlight: "Complex joins, ACID compliance, pgvector AI search",
  },
  {
    name: "Redis",
    category: "web",
    categoryLabel: "In-Memory",
    role: "Caching & Queues",
    highlight: "Sub-millisecond caching, rate-limiting, distributed locks",
  },
  {
    name: "Tailwind CSS",
    category: "web",
    categoryLabel: "Design Engineering",
    role: "Modern UI Styling",
    highlight: "Fluid, responsive, theme-driven custom design systems",
  },
  {
    name: "GraphQL",
    category: "web",
    categoryLabel: "API Architecture",
    role: "Declarative Queries",
    highlight: "Precise data fetching, unified schema federation",
  },
  {
    name: "Supabase",
    category: "web",
    categoryLabel: "Backend Platform",
    role: "Real-Time & Auth",
    highlight: "Managed Postgres, Row-Level Security, real-time sync",
  },
  {
    name: "Docker",
    category: "cloud",
    categoryLabel: "DevOps",
    role: "Containerization",
    highlight: "Reproducible builds across dev, staging, and production",
  },

  // Data Engineering & Analytics
  {
    name: "Apache Spark",
    category: "data",
    categoryLabel: "Data Engineering",
    role: "Distributed Processing",
    highlight: "Large-scale batch and streaming data compute",
  },
  {
    name: "Apache Kafka",
    category: "data",
    categoryLabel: "Event Streaming",
    role: "Real-Time Message Bus",
    highlight: "Fault-tolerant event ingestion and pub/sub pipelines",
  },
  {
    name: "Snowflake",
    category: "data",
    categoryLabel: "Data Warehouse",
    role: "Cloud Data Platform",
    highlight: "Separation of storage & compute, zero-copy cloning",
  },
  {
    name: "Google BigQuery",
    category: "data",
    categoryLabel: "Data Warehouse",
    role: "Serverless Analytics",
    highlight: "Petabyte-scale SQL queries, ML integration, real-time BI",
  },
  {
    name: "dbt (data build tool)",
    category: "data",
    categoryLabel: "Data Modeling",
    role: "Transformation Workflow",
    highlight: "Modular SQL transformations, automated data testing & docs",
  },
  {
    name: "Apache Airflow",
    category: "data",
    categoryLabel: "Data Orchestration",
    role: "Workflow Automation",
    highlight: "Programmatic DAG scheduling, monitoring, pipeline retries",
  },
  {
    name: "Databricks",
    category: "data",
    categoryLabel: "Lakehouse",
    role: "Unified Data & AI",
    highlight: "Delta Lake architecture, collaborative data engineering",
  },
  {
    name: "ClickHouse",
    category: "data",
    categoryLabel: "Columnar OLAP",
    role: "Real-Time Analytics",
    highlight: "Ultra-fast aggregation over billions of rows in milliseconds",
  },
  {
    name: "DuckDB",
    category: "data",
    categoryLabel: "Embedded Analytics",
    role: "Fast In-Process OLAP",
    highlight: "Local vectorized queries, instant parquet file processing",
  },
  {
    name: "Pandas & Polars",
    category: "data",
    categoryLabel: "Data Science",
    role: "Data Manipulation",
    highlight: "High-performance vector operations and data cleaning",
  },
  {
    name: "Power BI",
    category: "data",
    categoryLabel: "Business Intelligence",
    role: "Executive Dashboards",
    highlight: "Interactive KPI reporting, DAX measures, automated refreshes",
  },
  {
    name: "Tableau",
    category: "data",
    categoryLabel: "Visual Analytics",
    role: "Enterprise Reporting",
    highlight: "Deep exploratory analysis and executive board visual suites",
  },
  {
    name: "AWS Redshift",
    category: "data",
    categoryLabel: "Cloud Warehouse",
    role: "Massive Parallel Querying",
    highlight: "Scalable cluster analytics integrated with Amazon S3 data lakes",
  },

  // Cloud & DevOps
  {
    name: "Amazon Web Services",
    category: "cloud",
    categoryLabel: "Cloud Infrastructure",
    role: "Enterprise Cloud",
    highlight: "ECS, Lambda, RDS, S3, CloudFront, secure VPC architecture",
  },
  {
    name: "Google Cloud Platform",
    category: "cloud",
    categoryLabel: "Cloud Infrastructure",
    role: "Analytics & Compute",
    highlight: "Cloud Run, BigQuery, Pub/Sub, Vertex AI pipelines",
  },
  {
    name: "Kubernetes",
    category: "cloud",
    categoryLabel: "Container Orchestration",
    role: "Cluster Management",
    highlight: "Auto-scaling, zero-downtime rolling updates, service mesh",
  },
  {
    name: "Terraform",
    category: "cloud",
    categoryLabel: "Infrastructure as Code",
    role: "Reproducible Clouds",
    highlight: "Automated cloud provisioning, state management, audit trails",
  },
];
