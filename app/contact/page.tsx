import type { Metadata } from "next";
import { LeadForm } from "@/components/LeadForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact a Dallas–Fort Worth Custom Home Builder",
  description: "Contact Lindsey Homes to discuss a custom home, private estate, or build-on-your-land project in Dallas–Fort Worth and North Texas.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Lindsey Homes | Dallas–Fort Worth Custom Home Builder",
    description: "Start a conversation about a custom home or private estate in Dallas–Fort Worth and North Texas.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <section className="contact-page">
      <div className="shell contact-page-grid">
        <div className="contact-page-copy">
          <span className="eyebrow eyebrow-light">Start a conversation</span>
          <h1>Tell us what you want to build.</h1>
          <p>A property address, a few inspiration photos, or an early idea is enough to start.</p>

          <div className="contact-card">
            <span>New home inquiries</span>
            <strong>{site.leadContact} · Sales</strong>
            <a href={site.phoneHref}>{site.phone}</a>
            <a href={site.smsHref}>Text Whitney</a>
            <a href={site.emailHref}>{site.email}</a>
          </div>
        </div>
        <LeadForm />
      </div>
    </section>
  );
}
