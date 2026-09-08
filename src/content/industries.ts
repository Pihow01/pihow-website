export type Industry = {
  name: string;
  slug: string;
  category: string;
  description: string;
  commonBottlenecks: string[];
  solutionsDelivered: string[];
  techDelivered: string[];
};

export const industries: Industry[] = [
  {
    name: "Retail & E-commerce",
    slug: "retail-ecommerce",
    category: "Commerce & D2C",
    description:
      "High-conversion headless storefronts, automated subscription recurring checkout, and real-time inventory and delivery-zone routing built to withstand peak flash sale traffic.",
    commonBottlenecks: [
      "Plugin bloat leading to slow checkout times and high drop-off rates",
      "Fragmented marketing attribution across Meta, Google, and Amazon channels",
      "Manual multi-warehouse stock synchronization causing overselling",
    ],
    solutionsDelivered: [
      "Next.js headless commerce with sub-second page transitions and dynamic cart hydration",
      "Customer 360 data warehouses in BigQuery calculating real-time blended CAC & cohort LTV",
      "PostGIS-enabled geographical delivery validation before credit card capture",
    ],
    techDelivered: ["Next.js", "Shopify Storefront API", "Stripe", "BigQuery", "dbt", "Redis"],
  },
  {
    name: "Healthcare & Clinic Groups",
    slug: "healthcare",
    category: "HealthTech & Medical",
    description:
      "HIPAA/GDPR-compliant multi-branch patient appointment booking, doctor schedule consoles, and automated WhatsApp appointment reminders that reduce clinic no-show rates.",
    commonBottlenecks: [
      "Front-desk staff spending hours making manual confirmation phone calls",
      "High patient no-show rates eroding doctor utilization and daily revenue",
      "Fragmented patient records across multiple branch locations",
    ],
    solutionsDelivered: [
      "Multi-clinic scheduling engine with real-time doctor availability and room allocations",
      "Automated bilingual (English/Arabic) WhatsApp reminders with one-tap confirmation",
      "Encrypted patient check-in portals reducing in-person wait times to under 30 seconds",
    ],
    techDelivered: ["Next.js", "Node.js", "PostgreSQL", "WhatsApp Cloud API", "Docker"],
  },
  {
    name: "FinTech & Financial Services",
    slug: "fintech",
    category: "Finance & Capital",
    description:
      "Ultra-low-latency real-time transaction streaming, audit-compliant data lakehouses, and high-frequency reporting dashboards for investment managers and fintech platforms.",
    commonBottlenecks: [
      "Nightly batch dumps delaying critical risk reporting by 6+ hours",
      "Inability to handle transaction spikes during volatile market hours",
      "Strict data privacy, encryption, and audit trail compliance requirements",
    ],
    solutionsDelivered: [
      "Apache Kafka event streaming ingestion handling 50,000+ messages per second",
      "Snowflake Lakehouse architecture with automated dbt data quality assertions",
      "Sub-50ms analytics query engines powered by ClickHouse and in-memory caches",
    ],
    techDelivered: ["Python", "Apache Kafka", "Apache Spark", "Snowflake", "ClickHouse", "AWS ECS"],
  },
  {
    name: "Logistics, Supply Chain & Operations",
    slug: "logistics",
    category: "Supply Chain & Fleet",
    description:
      "Real-time dispatch management systems, live driver GPS telemetry tracking, and shipper customer portals that replace manual phone calls and uncoordinated spreadsheets.",
    commonBottlenecks: [
      "Dispatchers coordinating freight over phones, text messages, and spreadsheets",
      "Shippers calling repeatedly for shipment status updates and bill of lading documents",
      "Suboptimal driver assignment causing excessive deadhead miles and fuel waste",
    ],
    solutionsDelivered: [
      "Interactive fleet dispatch dashboard with live GPS vehicle mapping and telemetry",
      "Shipper self-service tracking portal with real-time ETAs and automated document downloads",
      "Automated driver routing algorithms matching loads based on equipment and drive-time",
    ],
    techDelivered: ["Next.js", "FastAPI", "PostgreSQL", "Google Maps Platform", "Celery", "Docker"],
  },
  {
    name: "SaaS & High-Growth Startups",
    slug: "saas-startups",
    category: "Software Products",
    description:
      "Rapid MVP engineering, multi-tenant B2B customer portals, subscription billing, and product usage analytics for tech founders who need to ship new features weekly.",
    commonBottlenecks: [
      "Hiring friction and lengthy recruitment cycles delaying product launches",
      "Technical debt from early prototypes that cannot handle enterprise clients",
      "Lack of product telemetry and usage metrics for investor reporting",
    ],
    solutionsDelivered: [
      "Modern Next.js & TypeScript microservices built cleanly with modular architecture",
      "Multi-tenant authorization, organization hierarchies, and role-based access control",
      "Automated CI/CD deployment pipelines with zero-downtime rolling releases",
    ],
    techDelivered: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Supabase", "AWS", "Vercel"],
  },
  {
    name: "Education & Professional Training",
    slug: "education",
    category: "EdTech & Learning",
    description:
      "Interactive course platforms, student progress dashboards, automated certification generation, and administrative portals for educational institutions moving operations online.",
    commonBottlenecks: [
      "Off-the-shelf LMS platforms that are slow, clunky, and impossible to customize",
      "Difficulty tracking real student engagement, quiz completion, and course retention",
      "Manual certificate issuing and student enrollment verification",
    ],
    solutionsDelivered: [
      "Custom lightning-fast learning portal with video streaming and interactive quizzes",
      "Automated PDF certificate generation upon course completion with verification URLs",
      "Instructor analytics console tracking student drop-off points and lesson performance",
    ],
    techDelivered: ["Next.js", "Node.js", "PostgreSQL", "AWS S3 / CloudFront", "Tailwind CSS"],
  },
];
