import type { Metadata } from "next";
import { LeadForm } from "@/components/LeadForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Talk with Lindsey Homes about a custom home or private estate in Dallas–Fort Worth.",
};

export default function ContactPage() {
  return (
    <section className="contact-page">
      <div className="shell contact-page-grid">
        <div className="contact-page-copy">
          <span className="eyebrow eyebrow-light">Start a conversation</span>
          <h1>Tell us what you are thinking about building.</h1>
          <p>You do not need a finished set of plans before you reach out. A property address, a few inspiration photos, a budget range, or an early idea is enough to start the conversation.</p>

          <div className="contact-card">
            <span>New home inquiries</span>
            <strong>{site.leadContact} · Sales</strong>
            <a href={site.phoneHref}>{site.phone}</a>
            <a href={site.emailHref}>{site.email}</a>
            <p>Whitney is your direct contact for new Lindsey Homes projects.</p>
          </div>
        </div>
        <LeadForm />
      </div>
    </section>
  );
}
