export type Testimonial = {
  quote: string;
  name: string;
  title: string;
  company: string;
  location: string;
  service: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Working with Pihow felt like adding a senior engineering team to our startup overnight. They architected our entire subscription grocery platform from scratch with incredible speed and zero post-launch bugs.",
    name: "Ananya Rao",
    title: "Founder & CEO",
    company: "Verdant Foods",
    location: "Bengaluru, India",
    service: "Full-Stack Web Development",
    rating: 5,
  },
  {
    quote:
      "Pihow engineered a high-volume Kafka and Snowflake data pipeline that dropped our analytical query latency from 6 hours down to 42 milliseconds. Their data engineering precision is world-class.",
    name: "David Chen",
    title: "Head of Engineering",
    company: "ApexMetrics Financial",
    location: "London, UK",
    service: "Data Engineering & Analytics",
    rating: 5,
  },
  {
    quote:
      "They didn't just build what we asked for — Ashis and his team questioned our assumptions and engineered an automated dispatch system that cut our manual operations time by 65%.",
    name: "James Whitfield",
    title: "Chief Operating Officer",
    company: "Northbridge Logistics",
    location: "Chicago, USA",
    service: "SaaS Platform Development",
    rating: 5,
  },
  {
    quote:
      "The monthly technology subscription gave us dedicated senior engineering capacity without the massive overhead and recruitment friction of hiring in-house. They ship every single week.",
    name: "Marco Bianchi",
    title: "Founder",
    company: "Lumen Retail Co.",
    location: "Milan, Italy",
    service: "Premium Monthly Subscription",
    rating: 5,
  },
  {
    quote:
      "Our clinic group needed a reliable multi-branch appointment booking system with automated WhatsApp confirmations. Pihow delivered ahead of schedule and cut our patient no-show rate by 30%.",
    name: "Dr. Fatima Al-Suwaidi",
    title: "Operations Director",
    company: "Al Waha Clinics",
    location: "Dubai, UAE",
    service: "Custom Web Application",
    rating: 5,
  },
  {
    quote:
      "They unified our Shopify, Amazon, and ad data into BigQuery with clean dbt models and executive Power BI dashboards. We now have real-time visibility into blended CAC and cohort retention.",
    name: "Saurabh Mehta",
    title: "VP of Growth",
    company: "PulseCommerce Analytics",
    location: "Mumbai, India",
    service: "Data Warehousing & BI",
    rating: 5,
  },
];
