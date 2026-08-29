import Link from "next/link";
import { site } from "@/data/site";

export function ContactBand() {
  return (
    <section className="contact-band">
      <div className="shell contact-band-grid">
        <div>
          <span className="eyebrow eyebrow-light">Private residential inquiries</span>
          <h2>Start with the property, the vision, or the plans you already have.</h2>
        </div>
        <div className="contact-band-details">
          <span>{site.leadContact} · Sales</span>
          <a href={site.phoneHref}>{site.phone}</a>
          <a href={site.emailHref}>{site.email}</a>
          <Link href="/contact">Request a consultation →</Link>
        </div>
      </div>
    </section>
  );
}
