export type CaseStudy = {
  slug: string;
  client: string;
  market: string;
  category: string;
  summary: string;
  situation: string;
  whatWasBuilt: string[];
  result: string;
  isDemo: true;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "verdant-foods",
    client: "Verdant Foods",
    market: "India",
    category: "D2C organic grocery startup",
    summary:
      "Built an e-commerce platform with subscription checkout and delivery-zone logic.",
    situation:
      "Verdant Foods was running its subscription grocery box on a patchwork of a storefront builder and manual spreadsheets for delivery-zone eligibility, which capped how many customers it could take on without support tickets piling up.",
    whatWasBuilt: [
      "A custom storefront with recurring subscription checkout",
      "Delivery-zone logic that checks eligibility at checkout, not after payment",
      "An admin dashboard for managing boxes, swaps, and pauses",
    ],
    result: "42% increase in checkout conversion after the platform rebuild.",
    isDemo: true,
  },
  {
    slug: "northbridge-logistics",
    client: "Northbridge Logistics",
    market: "United States",
    category: "Logistics SaaS",
    summary:
      "Built an internal dispatch dashboard and a client-facing shipment portal.",
    situation:
      "Dispatchers were coordinating pickups over phone calls and shared spreadsheets, and customers had no way to check shipment status without calling in.",
    whatWasBuilt: [
      "An internal dispatch dashboard with real-time driver assignment",
      "A client-facing portal for shipment tracking and documents",
      "Integrations with existing routing and invoicing tools",
    ],
    result: "Cut manual dispatch processing time by 65%.",
    isDemo: true,
  },
  {
    slug: "al-waha-clinics",
    client: "Al Waha Clinics",
    market: "United Arab Emirates",
    category: "Healthcare clinic group",
    summary:
      "Built an appointment booking system with automated WhatsApp reminders.",
    situation:
      "Missed appointments were a recurring revenue and scheduling problem across the group's clinics, and front-desk staff had no automated way to confirm or remind patients.",
    whatWasBuilt: [
      "A multi-clinic appointment booking system",
      "Automated WhatsApp reminders ahead of each appointment",
      "A front-desk dashboard for same-day schedule changes",
    ],
    result: "Reduced missed appointments by 30%.",
    isDemo: true,
  },
];
