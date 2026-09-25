import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for Lindsey Homes LLC.",
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <section className="legal-page shell section-space">
      <span className="eyebrow">Lindsey Homes</span>
      <h1>Terms &amp; Conditions</h1>
      <p className="legal-updated">Last updated: September 2026</p>

      <div className="legal-copy">
        <p>
          These Terms &amp; Conditions apply to use of the Lindsey Homes LLC website and related
          website inquiry and communication features.
        </p>

        <h2>Website information</h2>
        <p>
          Website content, residence concepts, floor plans, images, dimensions, timelines, and
          other project information are provided for general informational purposes and may change
          as a project is developed.
        </p>

        <h2>SMS Terms</h2>
        <p>
          Lindsey Homes may use SMS for internal website lead alerts and for direct communication
          with individuals who have separately consented to be contacted by text. Message frequency
          varies. Message and data rates may apply.
        </p>
        <p>
          For Lindsey Homes internal website lead alerts, the designated staff recipient provides
          affirmative consent before receiving messages. The recipient may reply STOP at any time
          to opt out and HELP for assistance.
        </p>
        <p>
          Consent to receive SMS messages is not a condition of purchasing services from Lindsey
          Homes. Carriers are not liable for delayed or undelivered messages.
        </p>

        <h2>Privacy</h2>
        <p>
          Information collected through website forms and communication features is handled in
          accordance with the Lindsey Homes Privacy Policy.
        </p>

        <h2>Contact</h2>
        <p>
          <a href={site.emailHref}>{site.email}</a><br />
          <a href={site.phoneHref}>{site.phone}</a>
        </p>
      </div>
    </section>
  );
}
