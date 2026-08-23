import type { Metadata } from "next";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact / Get a Quote",
  description:
    "Tell us about your project and we'll reply within one business day. Book a free consultation or reach us directly by email, phone, or WhatsApp.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="py-20">
      <Container className="grid gap-16 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <Eyebrow>Contact</Eyebrow>
          <h1 className="mt-4 font-display text-4xl font-semibold text-ink sm:text-5xl">
            Get a free quote
          </h1>
          <p className="mt-6 max-w-md text-lg text-ink/70">
            Tell us about your project and we&apos;ll reply within one business day.
          </p>

          <div className="mt-10 space-y-5">
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="flex items-center gap-3 text-sm font-medium text-ink hover:text-teal"
            >
              <Mail size={18} className="text-teal" />
              {siteConfig.contact.email}
            </a>
            <a
              href={`tel:${siteConfig.contact.phoneHref}`}
              className="flex items-center gap-3 text-sm font-medium text-ink hover:text-teal"
            >
              <Phone size={18} className="text-teal" />
              {siteConfig.contact.phone}
            </a>
            <a
              href={`${siteConfig.contact.whatsappHref}?text=${encodeURIComponent(
                "Hi Pihow Services — I'd like to talk about a project."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm font-medium text-ink hover:text-teal"
            >
              <MessageCircle size={18} className="text-teal" />
              Chat on WhatsApp
            </a>
            <div className="flex items-start gap-3 text-sm text-ink/70">
              <MapPin size={18} className="mt-0.5 shrink-0 text-teal" />
              {siteConfig.contact.address}
            </div>
          </div>

          <div className="mt-10 rounded-xl border border-dashed border-hairline p-5 text-sm text-ink/60">
            Prefer to pick a time directly? A Cal.com / Calendly scheduling link goes here once
            connected — for now, the fastest paths are the form, email, or WhatsApp above.
          </div>
        </div>

        <div className="rounded-2xl border border-hairline bg-surface p-8">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
