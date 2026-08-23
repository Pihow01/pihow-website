import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  projectType?: string;
  budget?: string;
  message?: string;
};

// Basic in-memory rate limit per server instance — replace with a durable
// store (e.g. Upstash Redis) before relying on this in production.
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
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  const body = (await request.json().catch(() => null)) as ContactPayload | null;

  if (!body?.name || !body?.email || !body?.message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  // TODO before launch: send via a transactional email provider (e.g. Resend)
  // and log a copy to a durable store (Google Sheet or database) so no lead
  // depends on a single inbox, per the blueprint's lead-capture plan.
  console.info("[contact-form submission]", {
    ...body,
    ip,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
