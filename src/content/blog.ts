export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  body: { heading?: string; paragraphs: string[]; list?: string[] }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-much-does-custom-web-app-development-cost-in-2026",
    title: "How Much Does Custom Web App Development Cost in 2026?",
    description:
      "A straightforward breakdown of what drives the cost of a custom web application, and how to scope a project before you ask for quotes.",
    date: "2026-08-10",
    readingTime: "6 min read",
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
    description:
      "Five questions to ask before signing with any outsourced development vendor — freelancer, agency, or studio.",
    date: "2026-08-17",
    readingTime: "5 min read",
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
