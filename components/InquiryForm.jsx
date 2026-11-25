"use client";

import { useEffect, useRef, useState } from "react";
import { track } from "@vercel/analytics";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";

const projectTypes = [
  "Web app or SaaS platform",
  "Business automation or CRM",
  "API or mobile backend",
  "Improve an existing product",
  "Other",
];

const budgetRanges = [
  "Not sure yet",
  "Under $1,000",
  "$1,000–$3,000",
  "$3,000–$7,000",
  "$7,000–$15,000",
  "$15,000+",
];

const timelines = [
  "Not sure yet",
  "As soon as possible",
  "Within 1 month",
  "1–3 months",
  "3+ months",
];

function sendAnalyticsEvent(name, properties = {}) {
  try {
    track(name, properties);
  } catch {
    // Analytics must never block an inquiry.
  }
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", name, properties);
  }
}

export default function InquiryForm() {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const startedAt = useRef(0);
  const startedTracked = useRef(false);
  const turnstileRef = useRef(null);
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  useEffect(() => {
    if (!turnstileSiteKey || !turnstileRef.current) return undefined;

    let widgetId;
    const renderWidget = () => {
      if (!window.turnstile || !turnstileRef.current) return;
      widgetId = window.turnstile.render(turnstileRef.current, {
        sitekey: turnstileSiteKey,
        callback: (token) => setTurnstileToken(token),
        "expired-callback": () => setTurnstileToken(""),
        "error-callback": () => setTurnstileToken(""),
      });
    };

    if (window.turnstile) {
      renderWidget();
    } else {
      const script = document.createElement("script");
      script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
      script.async = true;
      script.defer = true;
      script.onload = renderWidget;
      document.head.appendChild(script);
    }

    return () => {
      if (widgetId && window.turnstile) window.turnstile.remove(widgetId);
    };
  }, [turnstileSiteKey]);

  const markStarted = () => {
    if (startedTracked.current) return;
    startedTracked.current = true;
    sendAnalyticsEvent("inquiry_started");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    setError("");
    setStatus("submitting");

    const formData = new FormData(form);
    const params = new URLSearchParams(window.location.search);
    const attribution = {
      utmSource: params.get("utm_source") || "",
      utmMedium: params.get("utm_medium") || "",
      utmCampaign: params.get("utm_campaign") || "",
      utmTerm: params.get("utm_term") || "",
      utmContent: params.get("utm_content") || "",
      referrer: document.referrer || "",
      landingPage: window.location.pathname,
    };
    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      company: String(formData.get("company") || "").trim(),
      country: String(formData.get("country") || "").trim(),
      projectType: String(formData.get("projectType") || "").trim(),
      budgetRange: String(formData.get("budgetRange") || "").trim(),
      timeline: String(formData.get("timeline") || "").trim(),
      message: String(formData.get("message") || "").trim(),
      website: String(formData.get("website") || "").trim(),
      startedAt: startedAt.current,
      turnstileToken,
      ...attribution,
    };

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok || !result.ok) {
        throw new Error(result.error || "Your inquiry could not be sent. Please try again or email me directly.");
      }

      sendAnalyticsEvent("generate_lead", {
        project_type: payload.projectType,
        budget_range: payload.budgetRange || "Not provided",
        timeline: payload.timeline || "Not provided",
      });
      sendAnalyticsEvent("inquiry_submitted", { projectType: payload.projectType });
      form.reset();
      setStatus("success");
    } catch (submitError) {
      setStatus("error");
      setError(submitError.message);
      sendAnalyticsEvent("inquiry_failed");
    }
  };

  if (status === "success") {
    return (
      <div className="inquiry-success" role="status">
        <FiCheckCircle />
        <h3>Thanks — your inquiry has been received.</h3>
        <p>
          I will review your requirements and reply to the email address you provided.
          If your project is urgent, you can also reach me on LinkedIn.
        </p>
      </div>
    );
  }

  return (
    <form className="inquiry-form" onSubmit={handleSubmit} onFocus={markStarted}>
      <div className="form-grid">
        <label>
          Your name *
          <input name="name" type="text" autoComplete="name" required minLength={2} maxLength={120} placeholder="Jane Smith" />
        </label>
        <label>
          Email *
          <input name="email" type="email" autoComplete="email" required maxLength={254} placeholder="jane@company.com" />
        </label>
        <label>
          Company or business
          <input name="company" type="text" autoComplete="organization" maxLength={160} placeholder="Company name" />
        </label>
        <label>
          Country
          <input name="country" type="text" autoComplete="country-name" maxLength={100} placeholder="United States" />
        </label>
        <label>
          Project type *
          <select name="projectType" required defaultValue="">
            <option value="" disabled>Select a project type</option>
            {projectTypes.map((type) => <option key={type} value={type}>{type}</option>)}
          </select>
        </label>
        <label>
          Budget range
          <select name="budgetRange" defaultValue="Not sure yet">
            {budgetRanges.map((range) => <option key={range} value={range}>{range}</option>)}
          </select>
        </label>
        <label className="form-wide">
          Timeline
          <select name="timeline" defaultValue="Not sure yet">
            {timelines.map((timeline) => <option key={timeline} value={timeline}>{timeline}</option>)}
          </select>
        </label>
        <label className="form-wide">
          Tell me about your project *
          <textarea
            name="message"
            required
            minLength={20}
            maxLength={5000}
            rows={6}
            placeholder="What are you building or improving? What problem should it solve, and what does success look like?"
          />
        </label>
      </div>

      <label className="honeypot" aria-hidden="true">
        Website
        <input name="website" type="text" tabIndex={-1} autoComplete="off" />
      </label>

      {turnstileSiteKey ? <div className="turnstile-box" ref={turnstileRef} /> : null}

      {status === "error" ? (
        <p className="form-error" role="alert">
          {error} You can also email <a href="mailto:mshoaban09@gmail.com">mshoaban09@gmail.com</a>.
        </p>
      ) : null}

      <button className="button primary form-submit" type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending..." : "Send project inquiry"} <FiArrowRight />
      </button>
      <p className="form-note">
        Your details are used only to review and reply to this inquiry. Prefer to talk first?
        Mention that in your message and I will suggest a short discovery call.
      </p>
    </form>
  );
}
