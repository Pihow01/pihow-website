export const subscriptionIncludes = [
  {
    title: "Design & UX",
    items: [
      "Custom UI/UX design",
      "Responsive, mobile-first layouts",
      "Modern design systems",
      "Landing pages & website redesigns",
      "User-flow improvements & conversion optimization",
    ],
  },
  {
    title: "Full-Stack Development",
    items: [
      "Modern frontend & backend development",
      "Database architecture & REST APIs",
      "Authentication, user roles & permissions",
      "Admin dashboards & custom business logic",
      "Web applications built to scale",
    ],
  },
  {
    title: "Integrations",
    items: [
      "Payment gateways",
      "WhatsApp integration",
      "Email, SMS & OTP services",
      "Google services",
      "CRM & third-party APIs",
    ],
  },
  {
    title: "Continuous Development",
    items: [
      "New features & functionality",
      "Dashboard enhancements",
      "Business automation & workflow improvements",
      "Performance enhancements",
      "Ongoing bug fixes",
    ],
  },
  {
    title: "Hosting & Infrastructure",
    items: [
      "Cloud deployment & server configuration",
      "Database management",
      "SSL setup & domain/DNS assistance",
      "Backup and production deployment",
      "Uptime monitoring",
    ],
  },
  {
    title: "Security & Maintenance",
    items: [
      "Security updates",
      "Dependency updates",
      "Error monitoring & bug fixing",
      "Database maintenance",
      "Performance checks",
    ],
  },
] as const;

export const subscriptionSupport = [
  "Priority technical support",
  "Direct developer communication",
  "Faster issue resolution",
  "Monthly planning session",
  "Ongoing technical guidance",
] as const;

export const howItWorks = [
  {
    step: "Plan",
    description: "We discuss your requirements, priorities, and what needs to ship this month.",
  },
  {
    step: "Build",
    description: "Design and development happen against that plan, with regular check-ins.",
  },
  {
    step: "Launch",
    description: "We test and deploy — to production, not a staging link you have to chase.",
  },
  {
    step: "Improve",
    description: "The cycle repeats: next month's plan starts from what launched, and what it taught us.",
  },
] as const;

export const subscriptionTerms = [
  "Billed monthly at ₹45,000.",
  "Third-party services (hosting, APIs, SaaS tools) are billed separately at cost.",
  "Major projects outside the agreed monthly scope are quoted separately before work begins.",
] as const;

export const oneTimeLifecycle = [
  "Discovery & Planning",
  "UI/UX Design",
  "Frontend Development",
  "Backend Development",
  "Database",
  "Integrations",
  "Admin Dashboard",
  "Deployment",
  "Testing & Quality",
  "Handover",
  "Post-Launch Support",
] as const;

export const oneTimePricingFactors = [
  "Project complexity",
  "Number and type of features",
  "Backend and database complexity",
  "Third-party integrations required",
  "Authentication and admin requirements",
  "Automation needs",
  "Deployment and infrastructure setup",
] as const;

export const comparisonRows = [
  {
    label: "Best for",
    subscription: "A product that needs to keep evolving",
    oneTime: "A clearly scoped project with a fixed budget",
  },
  {
    label: "Engagement",
    subscription: "Ongoing monthly partnership",
    oneTime: "One project, start to finish",
  },
  {
    label: "Pricing",
    subscription: "₹45,000 / month",
    oneTime: "From ₹60,000",
  },
  {
    label: "Support",
    subscription: "Priority support, replanned monthly",
    oneTime: "30 days of post-launch bug-fix support",
  },
  {
    label: "Ownership",
    subscription: "You own everything built, month to month",
    oneTime: "Full source-code handover on completion",
  },
  {
    label: "Ideal for",
    subscription: "Startups & growing businesses whose product keeps changing",
    oneTime: "Businesses that need one thing built well, once",
  },
] as const;
