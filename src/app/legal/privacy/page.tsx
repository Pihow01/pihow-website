import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/SectionHeading";
import { DemoPlaceholder } from "@/components/DemoPlaceholder";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Pihow Services collects, uses, and protects your information.",
  alternates: { canonical: "/legal/privacy" },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="py-20">
      <Container className="max-w-3xl">
        <Eyebrow>Legal</Eyebrow>
        <h1 className="mt-4 font-display text-4xl font-semibold text-ink">Privacy Policy</h1>
        <p className="mt-2 text-sm text-ink/60">Last updated: 23 August 2026</p>

        <div className="mt-6">
          <DemoPlaceholder>
            This is a standard-form starting point, not a substitute for legal advice. Have it
            reviewed by a qualified lawyer before launch — particularly for GDPR compliance in
            the German, French, and Italian markets this rebuild targets.
          </DemoPlaceholder>
        </div>

        <div className="prose-sm mt-10 space-y-8 text-sm leading-relaxed text-ink/80">
          <div>
            <h2 className="font-display text-xl font-semibold text-ink">1. Who we are</h2>
            <p className="mt-3">
              {siteConfig.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;) operates {siteConfig.domain}.
              For any privacy question, contact us at{" "}
              <a href={`mailto:${siteConfig.contact.email}`} className="text-teal underline">
                {siteConfig.contact.email}
              </a>{" "}
              or at {siteConfig.contact.address}.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-ink">2. What we collect</h2>
            <p className="mt-3">
              When you submit the contact form, we collect your name, email address, company
              (if provided), project details, and message. We also collect standard analytics
              data (pages visited, approximate location, device type) via Google Analytics, and
              cookies used for essential site function and, where consented to, analytics.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-ink">3. How we use it</h2>
            <p className="mt-3">
              We use the information you submit to respond to your inquiry, scope potential
              projects, and — only with your consent — send occasional updates. We do not sell
              your data to third parties.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-ink">4. Third-party services</h2>
            <p className="mt-3">
              We use third-party providers to operate this site and run our business, including
              hosting (Vercel), analytics (Google Analytics), email delivery, and scheduling.
              Each provider processes data under its own privacy policy.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-ink">5. Data retention</h2>
            <p className="mt-3">
              We retain contact-form submissions and related correspondence for as long as
              reasonably necessary to respond to your inquiry and maintain business records, and
              delete or anonymize it on request where we are not legally required to retain it.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-ink">6. Your rights</h2>
            <p className="mt-3">
              Depending on where you live, you may have the right to access, correct, delete, or
              export the personal data we hold about you, and to object to or restrict certain
              processing. To exercise any of these rights, email{" "}
              <a href={`mailto:${siteConfig.contact.email}`} className="text-teal underline">
                {siteConfig.contact.email}
              </a>
              .
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-ink">7. Changes to this policy</h2>
            <p className="mt-3">
              We may update this policy from time to time. Material changes will be reflected by
              an updated &ldquo;last updated&rdquo; date above.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
