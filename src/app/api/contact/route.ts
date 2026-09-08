import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  projectType?: string;
  budget?: string;
  timeline?: string;
  message?: string;
  preferredChannel?: string;
  _hp?: string; // Honeypot field for bot protection
};

const DESTINATION_EMAIL = process.env.CONTACT_EMAIL || "support@pihowservices.in";

// In-memory rate limiting (5 submissions per 10 mins per IP)
const submissionsByIp = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (submissionsByIp.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  timestamps.push(now);
  submissionsByIp.set(ip, timestamps);
  return timestamps.length > MAX_PER_WINDOW;
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again in a few minutes or message us on WhatsApp." },
      { status: 429 }
    );
  }

  const body = (await request.json().catch(() => null)) as ContactPayload | null;

  // Honeypot spam filter: bots usually fill hidden fields
  if (body?._hp) {
    return NextResponse.json({ ok: true });
  }

  if (!body?.name?.trim() || !body?.email?.trim() || !body?.message?.trim()) {
    return NextResponse.json({ error: "Name, email, and project message are required." }, { status: 400 });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(body.email.trim())) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const sanitized = {
    name: body.name.trim(),
    email: body.email.trim().toLowerCase(),
    phone: body.phone?.trim() || "Not provided",
    company: body.company?.trim() || "Not provided",
    projectType: body.projectType?.trim() || "Full-Stack Web Development",
    budget: body.budget?.trim() || "Flexible / Not sure yet",
    timeline: body.timeline?.trim() || "Flexible",
    preferredChannel: body.preferredChannel?.trim() || "Email",
    message: body.message.trim(),
    receivedAt: new Date().toISOString(),
    ip,
    destination: DESTINATION_EMAIL,
  };

  // 1. If RESEND_API_KEY is configured in environment, dispatch via Resend REST API
  if (process.env.RESEND_API_KEY) {
    try {
      const emailContent = `
New Project Inquiry Received for Pihow Services
--------------------------------------------------
Name: ${sanitized.name}
Email: ${sanitized.email}
Phone: ${sanitized.phone}
Company: ${sanitized.company}
Project Type: ${sanitized.projectType}
Budget: ${sanitized.budget}
Timeline: ${sanitized.timeline}
Preferred Channel: ${sanitized.preferredChannel}

Message:
${sanitized.message}

--------------------------------------------------
Sent via pihowservices.com contact portal
Timestamp: ${sanitized.receivedAt}
IP: ${sanitized.ip}
      `.trim();

      const resendRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.RESEND_FROM_EMAIL || "Pihow Inquiries <onboarding@resend.dev>",
          to: [DESTINATION_EMAIL],
          reply_to: sanitized.email,
          subject: `New Lead [${sanitized.projectType}]: ${sanitized.name}`,
          text: emailContent,
        }),
      });

      if (!resendRes.ok) {
        const errorText = await resendRes.text();
        console.error("[Resend API Error]", errorText);
      }
    } catch (err) {
      console.error("[Email Dispatch Exception]", err);
    }
  }

  // 2. Structured notification log for server logs & cloud monitoring
  console.info(`[LEAD DISPATCH -> ${DESTINATION_EMAIL}]`, sanitized);

  return NextResponse.json({
    ok: true,
    recipient: DESTINATION_EMAIL,
    message: "Thank you. Your inquiry has been sent to our engineering team.",
  });
}
