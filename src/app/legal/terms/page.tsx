import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/SectionHeading";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service — Client Engagement & Website Terms",
  description:
    "Terms governing website usage and professional service agreements with Pihow Services for web development and data engineering.",
  alternates: { canonical: "/legal/terms" },
};

export default function TermsPage() {
  return (
    <section className="py-20 bg-paper">
      <Container className="max-w-3xl">
        <Eyebrow>Legal & Engagements</Eyebrow>
        <h1 className="mt-4 font-display text-4xl font-semibold text-ink">Terms of Service</h1>
        <p className="mt-2 font-mono text-xs text-ink/60">Last updated: September 2026</p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-ink/80">
          <div>
            <h2 className="font-display text-xl font-semibold text-ink">1. Acceptance of Terms</h2>
            <p className="mt-3">
              By accessing {siteConfig.domain} or engaging {siteConfig.name} (&ldquo;Pihow&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) for web development, software engineering, or data engineering services, you agree to be bound by these Terms of Service. If you are entering into these terms on behalf of a company, you represent that you have the authority to bind that entity.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-ink">2. Professional Service Models</h2>
            <p className="mt-3">
              Pihow Services provides engineering through three core structures:
            </p>
            <ul className="mt-2 space-y-1.5 list-disc pl-5">
              <li><strong>Premium Web Subscription:</strong> Continuous engineering sprints billed on a recurring 30-day cycle at ₹45,000/month (or equivalent currency). Covers prioritized backlog initiatives, weekly deployments, and priority developer communication. Either party may pause or cancel with 14 calendar days written notice before the next monthly invoice.</li>
              <li><strong>One-Time Development:</strong> Fixed-scope projects executed across structured milestone phases with delivery timelines defined in a Statement of Work (SOW). Includes 30 consecutive calendar days of bug-fix support following production deployment.</li>
              <li><strong>Data Engineering & Analytics Architecture:</strong> Bespoke data warehouse, streaming pipeline, and BI analytics implementations scoped individually based on data volume, cloud infrastructure, and modeling requirements.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-ink">3. Intellectual Property & Code Ownership</h2>
            <p className="mt-3">
              We operate under a <strong>100% Client Ownership</strong> standard. Upon receipt of agreed milestone payments or monthly retainer fees, all custom software code, data schemas, dbt transformation models, database queries, and graphic assets created specifically for the client are irrevocably assigned to the client. Pihow retains no residual claim, licensing encumbrance, or royalty rights over deliverables.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-ink">4. Confidentiality & Non-Disclosure</h2>
            <p className="mt-3">
              Both parties agree to protect and keep strictly confidential all proprietary information, software architectures, commercial metrics, and customer records exchanged during pre-contract discovery or contracted delivery. Standard mutual Non-Disclosure Agreements (NDAs) are executed prior to sharing production database credentials or repository access.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-ink">5. Payment, Taxes & Invoicing</h2>
            <p className="mt-3">
              Invoices are issued electronically and are payable within 7 calendar days of receipt unless otherwise stated in the client SOW. Indian domestic payments are processed via bank NEFT/RTGS/UPI and are subject to statutory GST. International clients are invoiced in USD, EUR, or GBP, payable via international wire transfer (SWIFT/ACH) or Stripe/PayPal. Third-party cloud infrastructure costs (AWS, GCP, Snowflake, Vercel, Supabase) are paid directly by the client to the respective vendor.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-ink">6. Warranties & Limitation of Liability</h2>
            <p className="mt-3">
              We warrant that all code delivered will be developed in a professional, workmanlike manner adhering to modern software engineering standards. Except for our 30-day bug warranty or specific service level agreements (SLAs), our aggregate liability arising out of or related to an engagement shall not exceed the total fees paid by the client under the applicable Statement of Work during the three (3) months preceding the claim.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-ink">7. Governing Law & Dispute Resolution</h2>
            <p className="mt-3">
              These terms and all related client agreements are governed by and construed in accordance with the substantive laws of India. Any disputes arising hereunder that cannot be settled amicably within 30 days shall be subject to the exclusive jurisdiction of the competent courts of Odisha, India, or resolved via binding international arbitration if stipulated in the master service contract.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-ink">8. Contact & Legal Inquiries</h2>
            <p className="mt-3">
              For contractual, legal, or partnership inquiries, contact our management team directly at{" "}
              <a href={`mailto:${siteConfig.contact.email}`} className="text-teal underline font-medium">
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
