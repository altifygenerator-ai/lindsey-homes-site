import type { Metadata } from "next";
import { ReferralCardGrid } from "@/components/ReferralCardGrid";
import { referralMembers } from "@/data/referrals";
import "./team-links.css";

export const metadata: Metadata = {
  title: "Team Referral Links",
  robots: {
    index: false,
    follow: false,
  },
};

export default function TeamLinksPage() {
  return (
    <main className="team-links-page">
      <section className="team-links-hero">
        <div className="shell">
          <span>Internal workspace</span>
          <h1>Business Cards & Referral Links</h1>
          <p>
            Each card gets its own link to the Lindsey Homes inquiry form. When a lead submits,
            the referral is carried into the lead notification automatically.
          </p>
        </div>
      </section>

      <section className="shell team-links-section">
        <div className="team-links-note">
          <strong>What is live now</strong>
          <p>
            Whitney, Zac, and Jon already have working referral destinations below. The fourth
            card is intentionally left as a placeholder until the final name and title are supplied.
            The artwork and QR boxes are also placeholders so the finished business-card designs can
            drop straight into this layout later.
          </p>
        </div>

        <ReferralCardGrid members={referralMembers} />
      </section>
    </main>
  );
}
