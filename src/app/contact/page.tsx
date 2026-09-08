import type { Metadata } from "next";
import { Mail, Phone, MapPin, MessageCircle, CalendarClock, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/Container";
import { Eyebrow, SectionHeading } from "@/components/SectionHeading";
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

        </div>

        <div className="rounded-2xl border border-hairline bg-surface p-8">
          <ContactForm />
        </div>
      </Container>

      <Container className="mt-20 scroll-mt-24" id="book-a-call">
        <SectionHeading
          eyebrow="Or skip the form"
          title="Book a free consultation directly"
          description="Pick a time that works for you — no email round-trip required."
        />
        <a
          href={siteConfig.booking.calLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-8 flex flex-col items-start gap-4 rounded-2xl border border-hairline bg-surface p-8 transition-colors hover:border-teal sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal/10 text-teal">
              <CalendarClock size={22} />
            </div>
            <div>
              <p className="font-display text-lg font-semibold text-ink">
                Open the booking calendar
              </p>
              <p className="mt-1 text-sm text-ink/60">
                Opens in a new tab — pick a free slot for a 15-minute call.
              </p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-teal px-5 py-2.5 text-sm font-medium text-white transition-colors group-hover:bg-teal-dark">
            Book a time <ArrowUpRight size={16} />
          </span>
        </a>
      </Container>
    </section>
  );
}
