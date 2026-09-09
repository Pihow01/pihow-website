import type { StaticImageData } from "next/image";
import ecommerceSubscriptionImg from "../../public/images/ecommerce-subscription.jpg";
import dataPipelineImg from "../../public/images/data-pipeline.jpg";
import logisticsDispatchImg from "../../public/images/logistics-dispatch.jpg";

export type CaseStudy = {
  slug: string;
  client: string;
  market: string;
  category: string;
  serviceType: "web" | "data" | "fullstack";
  summary: string;
  situation: string;
  architecture: string;
  whatWasBuilt: string[];
  techStack: string[];
  result: string;
  metrics: { label: string; value: string }[];
  image?: StaticImageData | string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "verdant-foods",
    client: "Verdant Foods",
    market: "India & UAE",
    category: "D2C Organic Grocery & Subscriptions",
    serviceType: "web",
    summary:
      "Engineered an automated recurring subscription e-commerce platform with dynamic delivery-zone geofencing and zero-latency cart logic.",
    situation:
      "Verdant Foods was running recurring produce subscriptions across multiple tier-1 cities on a patchwork of standard storefront plugins and manual spreadsheets. Inaccurate postal validation caused 18% of orders to be cancelled post-checkout, and customer retention was dropping due to rigid subscription modification options.",
    architecture:
      "Next.js App Router front-end with server actions, Node.js microservices for recurring billing schedules, PostgreSQL with PostGIS for spatial delivery boundary checks, and Redis for fast cart state hydration.",
    whatWasBuilt: [
      "Custom high-conversion storefront with recurring weekly/monthly subscription checkout",
      "Real-time postal and GPS geofence validation during checkout before payment capture",
      "Self-service customer portal for box customization, item swaps, vacation pauses, and billing updates",
      "Centralized operations admin panel with automated warehouse packing slip generation",
      "Automated WhatsApp notification pipeline for order confirmation, dispatch, and delivery updates",
    ],
    techStack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Stripe / Razorpay", "Tailwind CSS"],
    result: "42% increase in checkout conversion and 94% reduction in delivery-zone support tickets.",
    metrics: [
      { label: "Checkout Conversion", value: "+42%" },
      { label: "Delivery Error Rate", value: "<0.4%" },
      { label: "Weekly Retention", value: "81%" },
      { label: "Time to First Order", value: "2.1 min" },
    ],
    image: ecommerceSubscriptionImg,
  },
  {
    slug: "apexmetrics-financial",
    client: "ApexMetrics Financial",
    market: "Singapore & UK",
    category: "FinTech & Real-Time Analytics",
    serviceType: "data",
    summary:
      "Constructed a high-throughput event streaming pipeline and Snowflake Lakehouse processing 50M+ daily financial telemetry events.",
    situation:
      "ApexMetrics relied on batch nightly database dumps to populate investor dashboards. As transaction volume grew, processing delays stretched to 6+ hours, leaving portfolio managers and risk analysts looking at stale data during volatile market hours.",
    architecture:
      "Distributed Apache Kafka cluster capturing transaction event streams, Apache Spark streaming workers for real-time validation and deduplication, Snowflake Cloud Data Warehouse with dbt data modeling, and ClickHouse for sub-100ms dashboard aggregations.",
    whatWasBuilt: [
      "Fault-tolerant Apache Kafka ingestion engine with automated schema registry checks",
      "Stream processing worker cluster handling over 50,000 events/second during peak volume",
      "Snowflake Lakehouse architecture separating raw landing, bronze staging, and gold analytics marts",
      "Automated dbt transformation pipelines with integrated schema and data quality assertions",
      "Live analytics API serving sub-second metric queries to internal and customer portals",
    ],
    techStack: ["Python", "Apache Kafka", "Apache Spark", "Snowflake", "dbt", "ClickHouse", "AWS ECS", "Terraform"],
    result: "Reduced query latency from 6 hours to 42 milliseconds with 99.99% pipeline reliability.",
    metrics: [
      { label: "Data Latency", value: "42 ms" },
      { label: "Daily Event Volume", value: "50M+" },
      { label: "Infra Cost Savings", value: "38%" },
      { label: "Pipeline Uptime", value: "99.99%" },
    ],
    image: dataPipelineImg,
  },
  {
    slug: "northbridge-logistics",
    client: "Northbridge Logistics",
    market: "United States",
    category: "Logistics SaaS & Fleet Management",
    serviceType: "fullstack",
    summary:
      "Architected an end-to-end cloud dispatch suite and client tracking portal with live telemetry and automated driver routing.",
    situation:
      "Dispatchers handled 1,200+ interstate freight shipments weekly via shared spreadsheets and phone calls. Shippers had zero real-time visibility into truck locations without manual status inquiries, leading to communication bottlenecks and delayed handoffs.",
    architecture:
      "Next.js multi-tenant frontend with WebSockets for live driver location feeds, Python backend with FastAPI and Celery workers, PostgreSQL for audit logs and driver rosters, and Google Maps API route optimization.",
    whatWasBuilt: [
      "Real-time dispatch dashboard with interactive GPS route mapping and vehicle telemetry",
      "Shipper tracking portal with live ETAs, bill of lading document access, and automated status alerts",
      "Automated driver dispatch queue matching loads based on equipment type, location, and drive-time limits",
      "Two-way SMS and email alert system updating receivers at pickup and delivery milestones",
    ],
    techStack: ["Next.js", "Python", "FastAPI", "PostgreSQL", "Docker", "AWS", "Google Maps Platform"],
    result: "Cut manual dispatch processing time by 65% and boosted on-time delivery visibility to 96.8%.",
    metrics: [
      { label: "Dispatch Processing", value: "-65% time" },
      { label: "On-Time Visibility", value: "96.8%" },
      { label: "Active Fleet Monitored", value: "450+ Units" },
      { label: "Shipper Inquiries", value: "-78%" },
    ],
    image: logisticsDispatchImg,
  },
  {
    slug: "pulsecommerce-analytics",
    client: "PulseCommerce Analytics",
    market: "India & Europe",
    category: "E-Commerce Intelligence & BI",
    serviceType: "data",
    summary:
      "Designed a modern Customer 360 data warehouse and automated Power BI / Tableau reporting suite unifying multi-channel sales.",
    situation:
      "The client operated stores across Shopify, Amazon, and offline distributor channels. Revenue, ad spend (Meta, Google), and return metrics were siloed in different apps, making blended customer acquisition cost (CAC) and customer lifetime value (LTV) calculations a 10-day manual exercise every month.",
    architecture:
      "Automated Airbyte ELT extractors, Google BigQuery serverless data warehouse, dbt for normalized star-schema dimensional modeling, and interactive Power BI executive reporting dashboards.",
    whatWasBuilt: [
      "Multi-channel automated ingestion connectors aggregating Shopify, Amazon SP-API, Meta Ads, and Stripe",
      "Enterprise star-schema data warehouse in Google BigQuery with automated nightly incremental runs",
      "Unified Customer 360 view mapping cross-platform identity and repurchase cohorts",
      "Executive Power BI dashboards tracking real-time blended ROAS, inventory turnover, and cohort LTV",
      "Slack bot automated alerts triggering when return rates or acquisition costs breach thresholds",
    ],
    techStack: ["Google BigQuery", "dbt", "Airflow", "Python", "Power BI", "SQL", "GCP"],
    result: "Consolidated 12 siloed data sources into a single source of truth, cutting financial reporting time from 10 days to zero.",
    metrics: [
      { label: "Reporting Cycle", value: "Real-time" },
      { label: "Sources Unified", value: "12 Channels" },
      { label: "Ad Spend Efficiency", value: "+26%" },
      { label: "Data Freshness", value: "<15 min" },
    ],
    image: dataPipelineImg,
  },
  {
    slug: "al-waha-clinics",
    client: "Al Waha Clinics",
    market: "United Arab Emirates",
    category: "Healthcare Clinic Group",
    serviceType: "web",
    summary:
      "Created a multi-branch patient appointment booking system with automated bilingual WhatsApp reminders and doctor schedule management.",
    situation:
      "With 5 outpatient clinics across Dubai and Abu Dhabi, no-shows and last-minute cancellations were costing the group significant revenue daily. Front-desk personnel spent 4+ hours every morning placing confirmation calls in English and Arabic.",
    architecture:
      "Next.js App Router front-end, Node.js API with encrypted HIPAA/GDPR-compliant database storage, WhatsApp Cloud API for bidirectional confirmation messaging, and role-based doctor scheduling controls.",
    whatWasBuilt: [
      "Multi-clinic patient booking portal with doctor specialization filters and real-time slot availability",
      "Automated two-way WhatsApp confirmation bot (English & Arabic) allowing patients to confirm or reschedule in one tap",
      "Doctor & administrative console for managing consultation slots, walk-in adjustments, and room allocations",
      "Patient check-in QR code generator speeding up front-desk registration to under 30 seconds",
    ],
    techStack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "WhatsApp Cloud API", "Tailwind CSS"],
    result: "Reduced appointment no-show rates by 30% and reclaimed 20+ hours of staff time per week per clinic.",
    metrics: [
      { label: "No-Show Reduction", value: "-30%" },
      { label: "Front-Desk Time Saved", value: "20 hrs/wk" },
      { label: "WhatsApp Confirmations", value: "92% rate" },
      { label: "Clinics Connected", value: "5 Centers" },
    ],
    image: ecommerceSubscriptionImg,
  },
];
