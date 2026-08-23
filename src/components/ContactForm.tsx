"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-hairline bg-surface p-10 text-center">
        <CheckCircle2 size={32} className="text-teal" />
        <h3 className="mt-4 font-display text-xl font-semibold text-ink">Message sent</h3>
        <p className="mt-2 text-sm text-ink/70">
          Thanks for reaching out — we reply within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" name="name" required />
        <Field label="Email" name="email" type="email" required />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Company (optional)" name="company" />
        <SelectField
          label="Project type"
          name="projectType"
          options={["Premium Subscription", "One-Time Development", "Not sure yet"]}
        />
      </div>
      <SelectField
        label="Budget range"
        name="budget"
        options={["Under ₹1,00,000", "₹1,00,000 – ₹5,00,000", "₹5,00,000+", "Not sure yet"]}
      />
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-lg border border-hairline bg-surface px-4 py-3 text-sm text-ink outline-none focus:border-teal"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-teal px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-dark disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Send message"}
        {status !== "submitting" ? <ArrowRight size={16} /> : null}
      </button>

      {status === "error" ? (
        <p className="flex items-center gap-2 text-sm text-red-600">
          <AlertCircle size={16} />
          Something went wrong — please email {" "}
          <a href="mailto:info@pihowservices.xyz" className="underline">
            info@pihowservices.xyz
          </a>{" "}
          directly.
        </p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-ink">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-lg border border-hairline bg-surface px-4 py-3 text-sm text-ink outline-none focus:border-teal"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-ink">
        {label}
      </label>
      <select
        id={name}
        name={name}
        className="w-full rounded-lg border border-hairline bg-surface px-4 py-3 text-sm text-ink outline-none focus:border-teal"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
