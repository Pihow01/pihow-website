export type Testimonial = {
  quote: string;
  name: string;
  title: string;
  company: string;
  isDemo: true;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Working with Pihow felt like adding a senior engineering team to our startup overnight.",
    name: "Ananya Rao",
    title: "Founder",
    company: "Verdant Foods",
    isDemo: true,
  },
  {
    quote:
      "They didn't just build what we asked for — they questioned our assumptions, and the product is better for it.",
    name: "James Whitfield",
    title: "COO",
    company: "Northbridge Logistics",
    isDemo: true,
  },
  {
    quote:
      "Clear communication, on-time delivery, and code we could actually maintain after handover.",
    name: "Fatima Al-Suwaidi",
    title: "Operations Director",
    company: "Al Waha Clinics",
    isDemo: true,
  },
  {
    quote:
      "The monthly subscription let us move fast without the overhead of hiring a full in-house team.",
    name: "Marco Bianchi",
    title: "CEO",
    company: "Lumen Retail Co.",
    isDemo: true,
  },
];
