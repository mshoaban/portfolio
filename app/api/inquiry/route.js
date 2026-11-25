const projectTypes = new Set([
  "Web app or SaaS platform",
  "Business automation or CRM",
  "API or mobile backend",
  "Improve an existing product",
  "Other",
]);

const budgetRanges = new Set([
  "Not sure yet",
  "Under $1,000",
  "$1,000–$3,000",
  "$3,000–$7,000",
  "$7,000–$15,000",
  "$15,000+",
]);

const timelines = new Set([
  "Not sure yet",
  "As soon as possible",
  "Within 1 month",
  "1–3 months",
  "3+ months",
]);

const rateLimitWindowMs = 10 * 60 * 1000;
const rateLimitMax = 5;
const rateLimits = globalThis.__portfolioInquiryRateLimits || new Map();
globalThis.__portfolioInquiryRateLimits = rateLimits;

function clean(value, maxLength) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getClientIp(request) {
  const forwardedFor = request.headers.get("x-forwarded-for") || "";
  return forwardedFor.split(",")[0].trim() || request.headers.get("x-real-ip") || "unknown";
}

function isRateLimited(ip) {
  const now = Date.now();
  const recent = (rateLimits.get(ip) || []).filter((time) => now - time < rateLimitWindowMs);
  recent.push(now);
  rateLimits.set(ip, recent);
  return recent.length > rateLimitMax;
}

async function verifyTurnstile(token, ip) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true;
  if (!token) return false;

  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ secret, response: token, remoteip: ip }),
  });
  const result = await response.json().catch(() => ({}));
  return result.success === true;
}

async function saveToSupabase(inquiry) {
  const url = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceRoleKey) return { configured: false, ok: false };

  const response = await fetch(`${url.replace(/\/$/, "")}/rest/v1/project_inquiries`, {
    method: "POST",
    headers: {
      apikey: serviceRoleKey,
      Authorization: `Bearer ${serviceRoleKey}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify({
      name: inquiry.name,
      email: inquiry.email,
      company: inquiry.company || null,
      country: inquiry.country || null,
      project_type: inquiry.projectType,
      budget_range: inquiry.budgetRange || null,
      timeline: inquiry.timeline || null,
      message: inquiry.message,
      utm_source: inquiry.utmSource || null,
      utm_medium: inquiry.utmMedium || null,
      utm_campaign: inquiry.utmCampaign || null,
      utm_term: inquiry.utmTerm || null,
      utm_content: inquiry.utmContent || null,
      referrer: inquiry.referrer || null,
      landing_page: inquiry.landingPage || null,
      status: "new",
    }),
  });

  if (!response.ok) {
    console.error("Inquiry storage failed", { status: response.status });
  }
  return { configured: true, ok: response.ok };
}

async function sendEmailNotification(inquiry) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return { configured: false, ok: false };

  const to = process.env.INQUIRY_NOTIFICATION_EMAIL || "mshoaban09@gmail.com";
  const from = process.env.RESEND_FROM_EMAIL || "Muhammad Shoaban Portfolio <onboarding@resend.dev>";
  const rows = [
    ["Name", inquiry.name],
    ["Email", inquiry.email],
    ["Company", inquiry.company || "Not provided"],
    ["Country", inquiry.country || "Not provided"],
    ["Project type", inquiry.projectType],
    ["Budget range", inquiry.budgetRange || "Not provided"],
    ["Timeline", inquiry.timeline || "Not provided"],
    ["Source", inquiry.utmSource || inquiry.referrer || "Direct / not provided"],
    ["Campaign", inquiry.utmCampaign || "Not provided"],
    ["Landing page", inquiry.landingPage || "Not provided"],
  ];
  const text = [
    "New project inquiry from muhammadshoaban.vercel.app",
    "",
    ...rows.map(([label, value]) => `${label}: ${value}`),
    "",
    "Project details:",
    inquiry.message,
  ].join("\n");
  const htmlRows = rows
    .map(([label, value]) => `<tr><td style="padding:6px 12px 6px 0"><strong>${escapeHtml(label)}</strong></td><td style="padding:6px 0">${escapeHtml(value)}</td></tr>`)
    .join("");
  const html = `<h2>New project inquiry</h2><table>${htmlRows}</table><h3>Project details</h3><p>${escapeHtml(inquiry.message).replaceAll("\n", "<br>")}</p>`;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: inquiry.email,
      subject: `New project inquiry — ${inquiry.projectType} — ${inquiry.name}`,
      text,
      html,
    }),
  });

  if (!response.ok) {
    console.error("Inquiry email failed", { status: response.status });
  }
  return { configured: true, ok: response.ok };
}

export async function POST(request) {
  const ip = getClientIp(request);
  if (isRateLimited(ip)) {
    return Response.json({ ok: false, error: "Too many inquiries. Please wait a few minutes and try again." }, { status: 429 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid inquiry data." }, { status: 400 });
  }

  const honeypot = clean(body.website, 200);
  const startedAt = Number(body.startedAt || 0);
  if (honeypot || (startedAt > 0 && Date.now() - startedAt < 1200)) {
    return Response.json({ ok: true });
  }

  const inquiry = {
    name: clean(body.name, 120),
    email: clean(body.email, 254).toLowerCase(),
    company: clean(body.company, 160),
    country: clean(body.country, 100),
    projectType: clean(body.projectType, 100),
    budgetRange: clean(body.budgetRange, 50),
    timeline: clean(body.timeline, 50),
    message: clean(body.message, 5000),
    utmSource: clean(body.utmSource, 200),
    utmMedium: clean(body.utmMedium, 200),
    utmCampaign: clean(body.utmCampaign, 200),
    utmTerm: clean(body.utmTerm, 200),
    utmContent: clean(body.utmContent, 200),
    referrer: clean(body.referrer, 500),
    landingPage: clean(body.landingPage, 300),
  };

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (
    inquiry.name.length < 2 ||
    !emailPattern.test(inquiry.email) ||
    !projectTypes.has(inquiry.projectType) ||
    inquiry.message.length < 20 ||
    (inquiry.budgetRange && !budgetRanges.has(inquiry.budgetRange)) ||
    (inquiry.timeline && !timelines.has(inquiry.timeline))
  ) {
    return Response.json({ ok: false, error: "Please complete the required fields with valid details." }, { status: 400 });
  }

  const turnstileOk = await verifyTurnstile(clean(body.turnstileToken, 3000), ip);
  if (!turnstileOk) {
    return Response.json({ ok: false, error: "Spam verification failed. Please try again." }, { status: 400 });
  }

  const [storage, email] = await Promise.all([
    saveToSupabase(inquiry).catch((error) => {
      console.error("Inquiry storage error", { name: error?.name || "unknown" });
      return { configured: true, ok: false };
    }),
    sendEmailNotification(inquiry).catch((error) => {
      console.error("Inquiry email error", { name: error?.name || "unknown" });
      return { configured: true, ok: false };
    }),
  ]);

  const anyConfigured = storage.configured || email.configured;
  const anySucceeded = storage.ok || email.ok;

  if (!anyConfigured && process.env.NODE_ENV !== "production") {
    return Response.json({ ok: true, dryRun: true });
  }

  if (!anyConfigured) {
    return Response.json({ ok: false, error: "The inquiry form is not configured yet. Please email me directly." }, { status: 503 });
  }

  if (!anySucceeded) {
    return Response.json({ ok: false, error: "Your inquiry could not be delivered. Please email me directly." }, { status: 502 });
  }

  return Response.json({ ok: true, stored: storage.ok, emailed: email.ok });
}
