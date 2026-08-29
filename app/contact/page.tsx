import type { Metadata } from "next";
import { LeadForm } from "@/components/LeadForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Request a consultation with Lindsey Homes about a custom residence, private estate home, land, or build-to-suit project in North Texas.",
};

export default function ContactPage() {
  return (
    <section className="contact-page">
      <div className="shell contact-page-grid">
        <div className="contact-page-copy">
          <span className="eyebrow eyebrow-light">Private residential inquiries</span>
          <h1>Start the conversation around the project you want to build.</h1>
          <p>Share the property, location, investment range, plans, or architectural direction you have today. You do not need every detail settled before reaching out.</p>

          <div className="contact-card">
            <span>Direct contact</span>
            <strong>{site.leadContact} · Sales</strong>
            <a href={site.phoneHref}>{site.phone}</a>
            <a href={site.emailHref}>{site.email}</a>
            <p>Whitney is the direct contact for new residential inquiries.</p>
          </div>
        </div>
        <LeadForm />
      </div>
    </section>
  );
}
