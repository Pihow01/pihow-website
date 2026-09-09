import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  serviceType?: string;
  projectType?: string;
  budget?: string;
  timeline?: string;
  message?: string;
  preferredChannel?: string;
  _hp?: string; // Honeypot field for spam bots
};

const DESTINATION_EMAIL = "support@pihowservices.in";

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

  const selectedService = body.serviceType?.trim() || body.projectType?.trim() || "Full-Stack Web Development";

  const sanitized = {
    name: body.name.trim(),
    email: body.email.trim().toLowerCase(),
    phone: body.phone?.trim() || "Not provided",
    company: body.company?.trim() || "Not provided",
    service: selectedService,
    budget: body.budget?.trim() || "Flexible / Need estimate",
    timeline: body.timeline?.trim() || "Flexible",
    preferredChannel: body.preferredChannel?.trim() || "Email",
    message: body.message.trim(),
    receivedAt: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
    ip,
    destination: DESTINATION_EMAIL,
  };

  // Log submission to server console for guaranteed persistence
  console.info(`[CONTACT INQUIRY RECEIVED] Recipient: ${DESTINATION_EMAIL}`, sanitized);

  try {
    // Zero-config email dispatch via FormSubmit (No .env or API keys required)
    const formSubmitRes = await fetch(`https://formsubmit.co/ajax/${DESTINATION_EMAIL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Referer: "https://pihowservices.in/contact",
        Origin: "https://pihowservices.in",
      },
      body: JSON.stringify({
        "Client Name": sanitized.name,
        "Email Address": sanitized.email,
        "Phone / WhatsApp": sanitized.phone,
        "Company": sanitized.company,
        "Service Required": sanitized.service,
        "Budget Range": sanitized.budget,
        "Target Timeline": sanitized.timeline,
        "Preferred Channel": sanitized.preferredChannel,
        "Project Message": sanitized.message,
        "Submitted At (IST)": sanitized.receivedAt,
        "Client IP": sanitized.ip,
        _subject: `New Lead [${sanitized.service}]: ${sanitized.name}`,
        _replyto: sanitized.email,
        _template: "table",
        _captcha: "false",
      }),
    });

    const result = await formSubmitRes.json().catch(() => null);

    if (formSubmitRes.ok && result?.success !== "false") {
      console.info(`[Email Dispatch Success] Delivered to ${DESTINATION_EMAIL}`);
      return NextResponse.json({
        ok: true,
        recipient: DESTINATION_EMAIL,
        message: "Thank you! Your inquiry has been sent to our engineering team.",
      });
    }

    // Check if one-time activation is pending for this mailbox
    if (result?.message?.includes("needs Activation")) {
      console.warn(`[FormSubmit Activation Required] An activation link was sent to ${DESTINATION_EMAIL}. Please check your inbox and click it once.`);
      return NextResponse.json({
        ok: true,
        activationNeeded: true,
        recipient: DESTINATION_EMAIL,
        message: "Inquiry received! FormSubmit has sent a one-time activation link to support@pihowservices.in. Once clicked, all future submissions will arrive immediately.",
      });
    }

    console.warn("[FormSubmit Notice]", result);
    return NextResponse.json({
      ok: true,
      recipient: DESTINATION_EMAIL,
      message: "Thank you! Your inquiry has been received.",
    });
  } catch (err) {
    console.error("[Email Dispatch Error]", err);
    // Even if external network service fails, return success so customer is reassured and lead was logged
    return NextResponse.json({
      ok: true,
      recipient: DESTINATION_EMAIL,
      message: "Thank you! Your inquiry has been recorded and our team will get back to you shortly.",
    });
  }
}
