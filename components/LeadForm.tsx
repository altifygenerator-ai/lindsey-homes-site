"use client";

import { FormEvent, useState } from "react";
import { site } from "@/data/site";

export function LeadForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);
    setStatus("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result?.message || "Could not send your request.");
      form.reset();
      setStatus("Thank you. Whitney will follow up with you directly.");
    } catch (error) {
      const message = error instanceof Error ? error.message : "Could not send your request.";
      setStatus(`${message} You can also call ${site.phone} or email ${site.email}.`);
    } finally {
      setSending(false);
    }
  }

  return (
    <form className={`lead-form ${compact ? "lead-form--compact" : ""}`} onSubmit={submit}>
      <div className="form-intro">
        <span>Project inquiry</span>
        <strong>Tell us where the project stands today.</strong>
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
        <label><span>Build location</span><input name="location" maxLength={180} placeholder="City, area, or property location" /></label>
      </div>

      <div className="field-row">
        <label>
          <span>Project investment</span>
          <select name="investment" defaultValue="">
            <option value="" disabled>Select a range</option>
            <option>$450K–$750K</option>
            <option>$750K–$1M</option>
            <option>$1M–$2M</option>
            <option>$2M–$4M</option>
            <option>$4M+</option>
            <option>Still defining</option>
          </select>
        </label>
        <label>
          <span>Property status</span>
          <select name="propertyStatus" defaultValue="">
            <option value="" disabled>Select one</option>
            <option>We own the property</option>
            <option>We are under contract</option>
            <option>We are looking for land</option>
            <option>Still deciding</option>
          </select>
        </label>
      </div>

      <div className="field-row">
        <label>
          <span>Preferred timing</span>
          <select name="timeline" defaultValue="">
            <option value="" disabled>Select one</option>
            <option>As soon as the project is ready</option>
            <option>Within 6 months</option>
            <option>6–12 months</option>
            <option>12+ months</option>
            <option>Still planning</option>
          </select>
        </label>
        <div className="form-note">Plans, inspiration, property details, and a general budget range are all useful starting points.</div>
      </div>

      <label>
        <span>Project details</span>
        <textarea name="project" maxLength={3000} rows={compact ? 4 : 6} placeholder="Tell us about the home, property, architectural direction, or plans you already have." />
      </label>

      <label className="consent-row">
        <input type="checkbox" name="contactConsent" value="yes" required />
        <span>I agree that Lindsey Homes may contact me about this inquiry by phone, email, or text.</span>
      </label>

      <div className="form-actions">
        <button type="submit" disabled={sending}>{sending ? "Sending…" : "Request a consultation"}</button>
        <span>New inquiries go directly to Whitney.</span>
      </div>
      {status ? <p className="form-status" role="status" aria-live="polite">{status}</p> : null}
    </form>
  );
}
