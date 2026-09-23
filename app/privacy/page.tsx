import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Lindsey Homes LLC.",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <section className="legal-page shell section-space">
      <span className="eyebrow">Privacy</span>
      <h1>Privacy Policy</h1>
      <p className="legal-updated">Last updated: August 2026</p>

      <div className="legal-copy">
        <p>Lindsey Homes LLC is committed to protecting your privacy. This policy explains how information may be collected and used when you visit the website or contact Lindsey Homes by form, phone, email, or text message.</p>

        <h2>Information you provide</h2>
        <p>We may collect information you choose to provide, including your name, email address, phone number, property or project information, and other details you include in an inquiry.</p>

        <h2>How information is used</h2>
        <p>Information may be used to respond to inquiries, discuss home building or real estate-related services, provide customer support and follow-up, maintain business records, and improve website functionality.</p>

        <h2>Phone, email, and text communication</h2>
        <p>By submitting your contact information, you consent to receive communications related to your inquiry or relationship with Lindsey Homes. Message and data rates may apply. You may opt out of text messages at any time by replying STOP.</p>

        <h2>Sharing of information</h2>
        <p>Lindsey Homes does not sell, rent, or trade personal information. Information may be shared with trusted service providers only as needed for business operations and to serve the client.</p>

        <h2>Your choices</h2>
        <p>You may ask to access, update, or correct information you have provided, or opt out of communications by contacting Lindsey Homes.</p>

        <h2>Contact</h2>
        <p><a href={site.emailHref}>{site.email}</a><br /><a href={site.phoneHref}>{site.phone}</a></p>
      </div>
    </section>
  );
}
