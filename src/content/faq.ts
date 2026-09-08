export const pricingFaq = [
  {
    question: "How long does a typical one-time project take to ship?",
    answer:
      "A one-time web build usually runs 4–10 weeks depending on complexity. A marketing site with custom integrations is typically 3–4 weeks, while a multi-role web platform or portal runs 6–10 weeks. We establish a firm milestone schedule during discovery before any contract is signed.",
  },
  {
    question: "How is Data Engineering & Analytics priced?",
    answer:
      "Unlike web development which has fixed tiers, Data Engineering projects depend on your source data volume, real-time streaming requirements (Kafka/Spark), and warehouse modeling scope (Snowflake/BigQuery). We scope your infrastructure on an introductory call and offer either fixed milestone implementation or dedicated monthly data retainers.",
  },
  {
    question: "Who owns the code, pipelines, and intellectual property?",
    answer:
      "You own 100% of everything we build. For one-time projects, full source-code and repository access is handed over upon launch. Under the monthly subscription, you own all code, schemas, and configurations commit by commit. We never hold client IP hostage.",
  },
  {
    question: "Can we cancel or change our monthly subscription anytime?",
    answer:
      "Yes. The subscription is billed monthly with no lock-in contracts. You can pause or cancel anytime with 14 days written notice prior to your next monthly billing date. Scope is replanned at the start of every sprint.",
  },
  {
    question: "Do you work with international clients outside India, and how is payment handled?",
    answer:
      "Yes. A large portion of our clients are based in the US, UK, UAE, and Europe. Invoicing in USD, EUR, or GBP is available via international wire transfer (SWIFT/ACH) or Stripe/PayPal. We provide signed NDAs and standard service agreements before starting.",
  },
  {
    question: "How do you handle cloud infrastructure costs (AWS, Snowflake, GCP, Vercel)?",
    answer:
      "Cloud hosting, database instances, and third-party APIs are billed directly to your own company cloud account (AWS, Snowflake, Google Cloud, Vercel). We set up secure IAM role-based access, configure automated budget alerts, and optimize query compute so you never pay surprise bills.",
  },
  {
    question: "What is your bug-fix warranty and response SLA?",
    answer:
      "Every one-time project includes 30 consecutive days of post-launch bug-fix support covering all delivered scope. Subscription and enterprise data clients receive priority support with same-day (4–8 business hour) turnaround for critical production incidents.",
  },
] as const;
