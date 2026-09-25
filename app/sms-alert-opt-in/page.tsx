import type { Metadata } from "next";
import { SmsAlertOptInForm } from "@/components/SmsAlertOptInForm";

export const metadata: Metadata = {
  title: "SMS Lead Alert Opt-In",
  description: "Internal Lindsey Homes SMS lead-alert opt-in.",
  robots: { index: false, follow: false, nocache: true },
};

export default function SmsAlertOptInPage() {
  return (
    <section className="legal-page shell section-space">
      <span className="eyebrow">Lindsey Homes</span>
      <h1>SMS Lead Alert Opt-In</h1>
      <p className="legal-updated">
        Internal notification consent for the designated Lindsey Homes sales recipient.
      </p>

      <div className="legal-copy">
        <p>
          Lindsey Homes uses this page to document consent for low-volume internal text
          notifications generated when a prospective client submits a website inquiry or requests
          follow-up.
        </p>
        <p style={{ marginTop: 18 }}>
          These messages are operational lead alerts for Lindsey Homes staff. They are not a
          marketing subscription for website visitors.
        </p>
      </div>

      <div style={{ marginTop: 42, maxWidth: 760 }}>
        <SmsAlertOptInForm />
      </div>
    </section>
  );
}
