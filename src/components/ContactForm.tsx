"use client";

import { useState, type FormEvent, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowRight, CheckCircle2, AlertCircle, ShieldCheck } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

function ContactFormInner() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get("service");

  const [projectType, setProjectType] = useState(
    preselectedService === "data-engineering"
      ? "Data Engineering & Analytics"
      : "Premium Web Subscription"
  );


  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    const name = String(data.name || "").trim();
    const email = String(data.email || "").trim();
    const message = String(data.message || "").trim();

    if (!name || !email || !message) {
      setErrorMessage("Please fill in your name, email, and project message.");
      setStatus("error");
      return;
    }

    try {
      const formPayload = {
        "Client Name": name,
        "Email Address": email,
        "Phone / WhatsApp": String(data.phone || "Not provided").trim(),
        "Company": String(data.company || "Not provided").trim(),
        "Service Required": String(data.projectType || projectType),
        "Anticipated Budget": String(data.budget || "Flexible"),
        "Project Message": message,
        _subject: `New Lead [${data.projectType || projectType}]: ${name}`,
        _replyto: email,
        _template: "table",
        _captcha: "false",
      };

      // 1. Primary: Direct browser dispatch to FormSubmit (zero .env, works on GitHub Pages & Vercel)
      try {
        await fetch("https://formsubmit.co/ajax/92f744264d10f70e032a1c4205e29bfd", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formPayload),
        });
      } catch (fsErr) {
        console.warn("Direct FormSubmit notice:", fsErr);
      }

      // 2. Secondary: Internal Next.js API route as backup
      try {
        await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
      } catch (apiErr) {
        console.warn("Internal API route notice:", apiErr);
      }

      setStatus("success");
      form.reset();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Something went wrong. Please email us directly at support@pihowservices.in.";
      setErrorMessage(msg);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-teal/30 bg-teal/[0.03] p-10 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-teal/10 text-teal mb-4">
          <CheckCircle2 size={36} />
        </div>
        <h3 className="font-display text-2xl font-semibold text-ink">Inquiry Received</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink/70 max-w-md">
          Thank you for reaching out to Pihow Services. Your project details have been routed directly to our engineering team at <span className="font-semibold text-teal">support@pihowservices.in</span>. We will review and respond within one business day.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-xs font-semibold text-teal hover:underline"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Honeypot field for bot protection */}
      <input
        type="text"
        name="_hp"
        tabIndex={-1}
        autoComplete="off"
        className="hidden pointer-events-none"
        aria-hidden="true"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" name="name" required placeholder="Sarah Jenkins" />
        <Field label="Work email" name="email" type="email" required placeholder="sarah@company.com" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Phone / WhatsApp (optional)" name="phone" placeholder="+1 (555) 000-0000" />
        <Field label="Company / Organization" name="company" placeholder="Acme Technologies" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="projectType" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink/70">
            Service Required
          </label>
          <select
            id="projectType"
            name="projectType"
            value={projectType}
            onChange={(e) => setProjectType(e.target.value)}
            className="w-full rounded-lg border border-hairline bg-surface px-4 py-3 text-sm text-ink outline-none focus:border-teal"
          >
            <option value="Premium Web Subscription">Premium Web Subscription (₹45,000/mo)</option>
            <option value="One-Time Development">One-Time Development (From ₹60,000)</option>
            <option value="Data Engineering & Analytics">Data Engineering & Analytics (Custom)</option>
            <option value="Data Warehousing & BI">Data Warehousing & Power BI/Tableau</option>
            <option value="Not sure yet">General Scoping / Not sure yet</option>
          </select>
        </div>

        <div>
          <label htmlFor="budget" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink/70">
            Anticipated Budget
          </label>
          <select
            id="budget"
            name="budget"
            className="w-full rounded-lg border border-hairline bg-surface px-4 py-3 text-sm text-ink outline-none focus:border-teal"
          >
            <option value="₹45,000 / month (Subscription)">₹45,000 / month (Subscription)</option>
            <option value="₹60,000 – ₹1,50,000">₹60,000 – ₹1,50,000</option>
            <option value="₹1,50,000 – ₹5,00,000">₹1,50,000 – ₹5,00,000</option>
            <option value="₹5,00,000+ / Enterprise">₹5,00,000+ / Enterprise</option>
            <option value="Flexible / Need estimate">Flexible / Need an estimate</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink/70">
          Project Overview & Scope
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about what you need built, existing tools or data sources, and your target timeline..."
          className="w-full rounded-lg border border-hairline bg-surface px-4 py-3 text-sm text-ink outline-none focus:border-teal"
        />
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-teal px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-dark disabled:opacity-60"
        >
          {status === "submitting" ? "Routing Inquiry..." : "Submit Project Inquiry"}
          {status !== "submitting" ? <ArrowRight size={16} /> : null}
        </button>

        <span className="flex items-center gap-1.5 text-xs text-ink/50">
          <ShieldCheck size={14} className="text-teal" /> Routed to support@pihowservices.in
        </span>
      </div>

      {status === "error" ? (
        <div className="rounded-lg bg-red-50 border border-red-200 p-4 text-xs text-red-700 flex items-start gap-2">
          <AlertCircle size={16} className="mt-0.5 shrink-0" />
          <div>
            <p className="font-semibold">{errorMessage || "Submission error occurred."}</p>
            <p className="mt-1 text-red-600">
              You can also email us directly at{" "}
              <a href="mailto:support@pihowservices.in" className="underline font-semibold">
                support@pihowservices.in
              </a>{" "}
              or message us on WhatsApp.
            </p>
          </div>
        </div>
      ) : null}
    </form>
  );
}

export function ContactForm() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-sm text-ink/50">Loading contact form...</div>}>
      <ContactFormInner />
    </Suspense>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink/70">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg border border-hairline bg-surface px-4 py-3 text-sm text-ink outline-none focus:border-teal"
      />
    </div>
  );
}
