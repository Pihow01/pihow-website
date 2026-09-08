export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  description: string;
  date: string;
  readingTime: string;
  author: {
    name: string;
    role: string;
  };
  body: { heading?: string; paragraphs: string[]; list?: string[] }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "modern-data-stack-guide-for-startups-in-2026",
    title: "The Modern Data Stack for Startups in 2026: When to Move Beyond Spreadsheets",
    category: "Data Engineering",
    description:
      "How to know when your business has outgrown manual exports and basic SQL, and what an actual modern data architecture looks like on a reasonable budget.",
    date: "2026-08-28",
    readingTime: "7 min read",
    author: {
      name: "Ashis Kumar Behura",
      role: "Founder & Tech Lead",
    },
    body: [
      {
        paragraphs: [
          "Most growing companies follow a predictable path: they start with everything inside PostgreSQL or Stripe, then add Google Sheets for ad-hoc analysis, and before they know it, three different team members are arguing in Monday meetings because their spreadsheets show contradictory revenue numbers.",
          "Building a modern data stack does not require hiring a five-person data team or burning tens of thousands of dollars on enterprise software licenses. Here is how growing teams build a resilient, real-time analytics layer in 2026.",
        ],
      },
      {
        heading: "The Three Telltale Signs You Have Outgrown Spreadsheets",
        paragraphs: [
          "If any of these sound familiar, your current reporting is creating operational drag rather than strategic clarity:",
        ],
        list: [
          "Financial closing or monthly reporting takes more than 48 hours of manual copy-pasting between platforms.",
          "Different departments report conflicting numbers for basic metrics like customer acquisition cost (CAC) or active customer count.",
          "Your operational database slows down or locks users out whenever business analysts run heavy analytical SQL queries during business hours.",
        ],
      },
      {
        heading: "The 2026 Reference Architecture",
        paragraphs: [
          "A modern, cost-effective data architecture consists of four distinct, decoupled layers:",
          "1. Ingestion: Automated connectors (Airbyte, Fivetran, or custom Kafka streaming for real-time events) that extract data from SaaS tools and databases into raw cloud storage without impacting production systems.",
          "2. Central Lakehouse/Warehouse: A cloud analytical warehouse like Snowflake or Google BigQuery that separates compute costs from storage, ensuring you only pay for compute when running queries.",
          "3. Transformation (dbt): Modular SQL models that clean, test, and document your data before anyone builds a dashboard on it. If a formula changes, you update it once in code rather than in 20 different spreadsheets.",
          "4. Consumption & BI: Tools like Power BI, Tableau, or custom customer-facing embedded dashboards that query clean, validated marts in sub-seconds.",
        ],
      },
      {
        heading: "How to Scope Your Migration",
        paragraphs: [
          "Do not try to ingest all 20 of your company tools on day one. Start with the single metric that impacts revenue or operations most (e.g. order fulfillment latency or customer cohort retention), build the pipeline end-to-end, and expand outward once trust in the numbers is established.",
        ],
      },
    ],
  },
  {
    slug: "how-much-does-custom-web-app-development-cost-in-2026",
    title: "How Much Does Custom Web App Development Cost in 2026?",
    category: "Pricing & Scoping",
    description:
      "A straightforward breakdown of what drives the cost of a custom web application, and how to scope a project before you ask for quotes.",
    date: "2026-08-10",
    readingTime: "6 min read",
    author: {
      name: "Ashis Kumar Behura",
      role: "Founder & Tech Lead",
    },
    body: [
      {
        paragraphs: [
          "“How much will this cost?” is usually the first question and the hardest one to answer honestly — because the true answer is “it depends on what you're actually building,” and vague answers erode trust before a project even starts. This is the breakdown we walk clients through during discovery, in public.",
        ],
      },
      {
        heading: "The variables that actually move the price",
        paragraphs: ["Six factors account for most of the variance between a ₹60,000 project and a ₹6,00,000 one:"],
        list: [
          "Number and complexity of user-facing features — a marketing site with a contact form is a different project than a multi-role dashboard.",
          "Backend and database complexity — how much custom logic and data modeling the product needs.",
          "Third-party integrations — payment gateways, CRMs, WhatsApp, SMS/OTP, and similar services each add scoping and testing time.",
          "Authentication and admin requirements — user roles, permissions, and internal tooling are frequently underestimated.",
          "Automation — workflows that replace manual work usually pay for themselves, but they take real engineering time to build correctly.",
          "Deployment and infrastructure — hosting, monitoring, backups, and security hardening aren't optional line items, even if they're invisible to users.",
        ],
      },
      {
        heading: "Fixed-price project vs. monthly partnership",
        paragraphs: [
          "A one-time build makes sense when the scope is genuinely fixed: you know what you need, and you need it once. A monthly subscription model makes more sense when the product is expected to keep changing — most early-stage products fall into this category whether or not the founder has admitted it yet.",
          "The mistake we see most often is a founder locking a fixed-price contract for a product that will obviously need to evolve within three months of launch, then paying twice: once for the build, once for the inevitable follow-on scope that gets treated as a new project.",
        ],
      },
      {
        heading: "How to get an accurate estimate",
        paragraphs: [
          "Come to a discovery call with a written list of what the product needs to do — not the technology you think it should use. A clear list of user actions and admin needs lets a real quote come back faster and closer to what the project will actually cost, rather than a range wide enough to be meaningless.",
        ],
      },
    ],
  },
  {
    slug: "how-to-choose-an-outsourced-development-partner",
    title: "How to Choose a Development Partner Without Getting Burned",
    category: "Vendor Selection",
    description:
      "Five questions to ask before signing with any outsourced development vendor — freelancer, agency, or studio.",
    date: "2026-08-17",
    readingTime: "5 min read",
    author: {
      name: "Ashis Kumar Behura",
      role: "Founder & Tech Lead",
    },
    body: [
      {
        paragraphs: [
          "Hiring a development partner is a decision most founders make a handful of times, ever — which means most people are comparing vendors with almost no reference points. These are the five questions worth asking before any contract gets signed.",
        ],
      },
      {
        heading: "1. What happens to the code if we part ways?",
        paragraphs: [
          "Ask this before the relationship starts, not when it's ending. A partner confident in their work will hand over full source code without friction — resistance to this question is the clearest possible warning sign.",
        ],
      },
      {
        heading: "2. Who exactly will be working on this, day to day?",
        paragraphs: [
          "A named point of contact and a clear answer about who writes the code matters more than a logo or a slide deck. It's a fair question for a small studio to answer directly rather than deflect.",
        ],
      },
      {
        heading: "3. What does communication actually look like?",
        paragraphs: [
          "Weekly async updates? A shared Slack channel? A single email thread? Time-zone handling matters especially for teams working across countries — ask for the specific cadence, not “we communicate well.”",
        ],
      },
      {
        heading: "4. Can you show real, verifiable results?",
        paragraphs: [
          "Screenshots and outcome numbers matter more than adjectives. Ask to see an actual product, not just a portfolio slide — and ask what changed as a result of the work, not just what was built.",
        ],
      },
      {
        heading: "5. What happens when scope changes — because it will?",
        paragraphs: [
          "Every real project changes shape once work starts. Ask how that gets handled before it happens: is it a renegotiation, a change order, or does it silently expand the timeline? The answer tells you more about the partnership than the initial quote does.",
        ],
      },
    ],
  },
];
