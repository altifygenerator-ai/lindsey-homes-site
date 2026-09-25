"use client";

import { FormEvent, useState } from "react";

export function SmsAlertOptInForm() {
  const [name, setName] = useState("Whitney");
  const [phone, setPhone] = useState("817-821-2476");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");

    if (!consent) {
      setStatus("error");
      setMessage("Please check the SMS consent box before submitting.");
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("/api/sms-alert-opt-in", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, consent: true }),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        setStatus("error");
        setMessage(result.message || "The opt-in could not be recorded right now.");
        return;
      }

      setStatus("success");
      setMessage("SMS lead-alert consent has been recorded for Lindsey Homes.");
    } catch {
      setStatus("error");
      setMessage("The opt-in could not be recorded right now.");
    }
  }

  return (
    <form className="lead-form" onSubmit={submit}>
      <div className="form-intro">
        <span>Internal notifications</span>
        <strong>Website lead alert SMS opt-in</strong>
      </div>

      <label>
        <span>Recipient name</span>
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          autoComplete="name"
          required
        />
      </label>

      <label>
        <span>Mobile number</span>
        <input
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          inputMode="tel"
          autoComplete="tel"
          required
        />
      </label>

      <label className="consent-row">
        <input
          type="checkbox"
          checked={consent}
          onChange={(event) => setConsent(event.target.checked)}
          required
        />
        <span>
          I agree to receive Lindsey Homes internal website lead alerts by SMS at the mobile
          number above. Message frequency varies based on website inquiry activity. Message
          and data rates may apply. Reply STOP to opt out or HELP for help.
        </span>
      </label>

      <p className="form-note">
        This opt-in is for the designated Lindsey Homes sales recipient only. Website visitors
        and prospective clients are not enrolled in these internal alert messages through this form.
      </p>

      <p className="form-note">
        By submitting, you acknowledge the{" "}
        <a href="/terms" style={{ textDecoration: "underline", textUnderlineOffset: 3 }}>
          SMS Terms & Conditions
        </a>{" "}
        and{" "}
        <a href="/privacy" style={{ textDecoration: "underline", textUnderlineOffset: 3 }}>
          Privacy Policy
        </a>.
      </p>

      <div className="form-actions">
        <button type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Submitting..." : "Confirm SMS Opt-In"}
        </button>
      </div>

      {message ? (
        <p className="form-status" role="status" aria-live="polite">
          {message}
        </p>
      ) : null}
    </form>
  );
}
