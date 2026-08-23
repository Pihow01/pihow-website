import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/SectionHeading";
import { DemoPlaceholder } from "@/components/DemoPlaceholder";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing the use of pihowservices.com and engagements with Pihow Services.",
  alternates: { canonical: "/legal/terms" },
};

export default function TermsPage() {
  return (
    <section className="py-20">
      <Container className="max-w-3xl">
        <Eyebrow>Legal</Eyebrow>
        <h1 className="mt-4 font-display text-4xl font-semibold text-ink">Terms of Service</h1>
        <p className="mt-2 text-sm text-ink/60">Last updated: 23 August 2026</p>

        <div className="mt-6">
          <DemoPlaceholder>
            This is a standard-form starting point, not a substitute for legal advice. Have it
            reviewed by a qualified lawyer, and replace the summary terms below with the specific
            contract language used in your client agreements.
          </DemoPlaceholder>
        </div>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-ink/80">
          <div>
            <h2 className="font-display text-xl font-semibold text-ink">1. Using this site</h2>
            <p className="mt-3">
              By using {siteConfig.domain}, you agree to these terms. If you do not agree, please
              do not use the site.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-ink">2. Services</h2>
            <p className="mt-3">
              Information on this site about the Premium Subscription and One-Time Development
              services is provided for general guidance. Actual scope, pricing, and terms for any
              engagement are set out in a separate written agreement signed by both parties before
              work begins.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-ink">3. Intellectual property</h2>
            <p className="mt-3">
              Unless otherwise agreed in a client contract, all content on this website — text,
              design, and code — is the property of {siteConfig.name} and may not be reproduced
              without permission.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-ink">4. No warranty</h2>
            <p className="mt-3">
              This website is provided &ldquo;as is&rdquo; without warranties of any kind. We aim
              for accuracy but do not guarantee the site is free of errors or uninterrupted.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-ink">5. Limitation of liability</h2>
            <p className="mt-3">
              To the fullest extent permitted by law, {siteConfig.name} is not liable for indirect
              or consequential losses arising from use of this website. Liability related to a
              specific client engagement is governed by that engagement&apos;s signed contract.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-ink">6. Governing law</h2>
            <p className="mt-3">
              These terms are governed by the laws of India. Any dispute arising from use of this
              site will be subject to the exclusive jurisdiction of the courts of Odisha, India.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-ink">7. Contact</h2>
            <p className="mt-3">
              Questions about these terms can be sent to{" "}
              <a href={`mailto:${siteConfig.contact.email}`} className="text-teal underline">
                {siteConfig.contact.email}
              </a>
              .
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
