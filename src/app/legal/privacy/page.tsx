import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/SectionHeading";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy — Data Protection & Privacy Rights",
  description:
    "How Pihow Services collects, uses, protects, and governs client and visitor data in compliance with DPDP Act 2023 and GDPR.",
  alternates: { canonical: "/legal/privacy" },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="py-20 bg-paper">
      <Container className="max-w-3xl">
        <Eyebrow>Legal & Compliance</Eyebrow>
        <h1 className="mt-4 font-display text-4xl font-semibold text-ink">Privacy Policy</h1>
        <p className="mt-2 font-mono text-xs text-ink/60">Last updated: September 2026</p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-ink/80">
          <div>
            <h2 className="font-display text-xl font-semibold text-ink">1. Data Controller & Identity</h2>
            <p className="mt-3">
              {siteConfig.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) operates {siteConfig.domain}. We provide full-stack web application development, cloud hosting maintenance, and enterprise data engineering services. For any inquiry regarding our data handling or privacy practices, contact our Data Protection Lead at{" "}
              <a href={`mailto:${siteConfig.contact.email}`} className="text-teal underline font-medium">
                {siteConfig.contact.email}
              </a>{" "}
              or by post at {siteConfig.contact.address}.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-ink">2. Categories of Data Collected</h2>
            <p className="mt-3">
              We collect information strictly necessary to provide proposals, execute engineering contracts, and operate our web platforms:
            </p>
            <ul className="mt-2 space-y-1.5 list-disc pl-5">
              <li><strong>Contact & Communication Data:</strong> Name, work email address, telephone/WhatsApp number, company name, and project requirements submitted via our contact forms or email correspondence.</li>
              <li><strong>Project Architecture & Credentials:</strong> During contracted engagements, API credentials, git repository access, and database connection strings are encrypted in transit and at rest with strict role-based access.</li>
              <li><strong>Technical Log Data:</strong> IP addresses, browser user agent, device operating system, and anonymous analytics necessary for infrastructure security, DDoS prevention, and rate limiting.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-ink">3. Purpose and Legal Basis of Processing</h2>
            <p className="mt-3">
              We process personal and commercial data under the following legal bases:
            </p>
            <ul className="mt-2 space-y-1.5 list-disc pl-5">
              <li><strong>Contractual Performance:</strong> To prepare technical estimates, fulfill software development agreements, deploy client databases, and manage ongoing monthly sprint retainers.</li>
              <li><strong>Legitimate Interests:</strong> To ensure server security, prevent automated spam submissions, and maintain technical audit trails.</li>
              <li><strong>Legal Compliance:</strong> To satisfy tax, invoicing, and corporate compliance obligations under Indian law and international trade treaties.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-ink">4. Client Confidentiality & Intellectual Property</h2>
            <p className="mt-3">
              All proprietary business logic, schemas, customer data, and source code accessed during an engagement are treated as strictly confidential under signed Non-Disclosure Agreements (NDAs). We never sell, monetize, or repurpose client datasets or trade secrets.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-ink">5. Third-Party Service Providers</h2>
            <p className="mt-3">
              We partner with industry-standard cloud and communication providers to deliver our services. These include Vercel (frontend deployment), Amazon Web Services (cloud compute & storage), Google Cloud (analytics & data warehousing), and transactional email infrastructure. Each processor operates under strict data protection addendums.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-ink">6. International Transfers & Global Safeguards</h2>
            <p className="mt-3">
              When collaborating with clients in the European Union, United Kingdom, United States, or United Arab Emirates, data transfers adhere to Standard Contractual Clauses (SCCs) and GDPR Article 46 safeguards, ensuring your information receives equivalent protections regardless of location.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-ink">7. Data Retention & Erasure</h2>
            <p className="mt-3">
              Project proposals and contact inquiries are retained for as long as needed to fulfill commercial discussions. Upon termination of a client contract and final payment settlement, all client staging credentials and private environment variables in our custody are securely purged upon written request.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-ink">8. Your Statutory Rights</h2>
            <p className="mt-3">
              Under applicable data protection laws (including the Indian Digital Personal Data Protection Act 2023 and EU GDPR), you have the right to access, rectify, port, or request erasure of your personal records, or to object to processing. To exercise these rights, email{" "}
              <a href={`mailto:${siteConfig.contact.email}`} className="text-teal underline font-medium">
                {siteConfig.contact.email}
              </a>
              . We respond to all verified statutory requests within 30 calendar days.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
