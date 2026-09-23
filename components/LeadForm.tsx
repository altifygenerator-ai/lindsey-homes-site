"use client";

import { FormEvent, useState } from "react";
import { track } from "@vercel/analytics";
import { site } from "@/data/site";

export function LeadForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);
    setStatus("");

    const form = event.currentTarget;
    const data = {
      ...Object.fromEntries(new FormData(form).entries()),
      source: compact ? "Homepage inquiry form" : "Contact page inquiry form",
      page: window.location.pathname,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result?.message || "We could not send your inquiry.");
      form.reset();
      track("Lead Submitted", { location: compact ? "home" : "contact" });
      setStatus("Thank you. Whitney will be in touch with you directly.");
    } catch (error) {
      const message = error instanceof Error ? error.message : "We could not send your inquiry.";
      setStatus(message + " You can also call " + site.phone + " or email " + site.email + ".");
    } finally {
      setSending(false);
    }
  }

  return (
    <form className={"lead-form" + (compact ? " lead-form--compact" : "")} onSubmit={submit}>
      <div className="form-intro">
        <span>New home inquiry</span>
        <strong>Tell us what you are planning.</strong>
      </div>

      <div className="form-honeypot" aria-hidden="true">
        <label><span>Website</span><input name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>

      <div className="field-row">
        <label><span>Name</span><input name="name" autoComplete="name" maxLength={100} required /></label>
        <label><span>Phone</span><input name="phone" type="tel" autoComplete="tel" maxLength={40} required /></label>
      </div>

      <div className="field-row">
        <label><span>Email</span><input name="email" type="email" autoComplete="email" maxLength={160} required /></label>
        <label><span>Build location</span><input name="location" maxLength={180} placeholder="City, neighborhood, or property location" /></label>
      </div>

      <div className="field-row">
        <label>
          <span>Property status</span>
          <select name="propertyStatus" defaultValue="">
            <option value="" disabled>Select one</option>
            <option>We own the property</option>
            <option>We are under contract</option>
            <option>We are looking for land</option>
            <option>We have not started looking yet</option>
          </select>
        </label>
        <label>
          <span>When are you hoping to build?</span>
          <select name="timeline" defaultValue="">
            <option value="" disabled>Select one</option>
            <option>As soon as the project is ready</option>
            <option>Within 6 months</option>
            <option>6–12 months</option>
            <option>12+ months</option>
            <option>We are still planning</option>
          </select>
        </label>
      </div>

      <label>
        <span>Tell us about the home</span>
        <textarea name="project" maxLength={3000} rows={compact ? 4 : 6} placeholder="Style, size, must-have spaces, property details, plans, or anything else you want us to know." />
      </label>

      <label className="consent-row">
        <input type="checkbox" name="contactConsent" value="yes" required />
        <span>I agree that Lindsey Homes may contact me about this inquiry by phone, email, or text.</span>
      </label>

      <div className="form-actions">
        <button type="submit" disabled={sending}>{sending ? "Sending…" : "Send my inquiry"}</button>
        <span>Your inquiry goes directly to Whitney.</span>
      </div>
      {status ? <p className="form-status" role="status" aria-live="polite">{status}</p> : null}
    </form>
  );
}
