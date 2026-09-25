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
      <p className="legal-updated">Last updated: September 2026</p>

      <div className="legal-copy">
        <p>Lindsey Homes LLC is committed to protecting your privacy. This policy explains how information may be collected and used when you visit the website or contact Lindsey Homes by form, phone, email, text message, or the website concierge.</p>

        <h2>Information you provide</h2>
        <p>We may collect information you choose to provide, including your name, email address, phone number, property or project information, and other details you include in an inquiry.</p>

        <h2>Website concierge</h2>
        <p>Messages entered into the website concierge are processed to provide a response. Conversation history is kept in your browser session for continuity. If you choose the follow-up option, your contact details and recent conversation context are sent to Lindsey Homes so Whitney can follow up with you.</p>

        <h2>Website analytics</h2>
        <p>We may collect website usage and performance information, such as page visits and interactions with contact, project, and concierge features. This information is used to understand how the website is used and improve the visitor experience.</p>

        <h2>How information is used</h2>
        <p>Information may be used to respond to inquiries, discuss home building or real estate-related services, provide customer support and follow-up, maintain business records, send an acknowledgment when an inquiry is received, and improve website functionality.</p>

        <h2>Phone, email, and text communication</h2>
        <p>By submitting your contact information and consent, you agree that Lindsey Homes may contact you regarding your inquiry by phone, email, or text. Message and data rates may apply. You may opt out of text messages at any time by replying STOP.</p>

        <h2>Service providers</h2>
        <p>Lindsey Homes may use trusted service providers to operate the website, process website concierge messages, deliver inquiry emails, and measure website performance. Information is shared only as needed to provide those services and operate the website.</p>

        <h2>Sharing of information</h2>
        <p>Lindsey Homes does not sell, rent, or trade personal information. Information may be shared with trusted service providers only as needed for business operations and to serve the client.</p>

        <h2>SMS opt-in data</h2>
        <p>We do not sell or share your SMS opt-in data or personal information with third parties for marketing purposes. SMS consent and opt-in information are used only to provide the communications requested and to operate Lindsey Homes communication services.</p>

        <h2>Your choices</h2>
        <p>You may ask to access, update, or correct information you have provided, or opt out of communications by contacting Lindsey Homes.</p>

        <h2>Contact</h2>
        <p><a href={site.emailHref}>{site.email}</a><br /><a href={site.phoneHref}>{site.phone}</a></p>
      </div>
    </section>
  );
}
