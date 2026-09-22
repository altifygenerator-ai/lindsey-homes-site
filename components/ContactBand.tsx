import Link from "next/link";
import { site } from "@/data/site";

export function ContactBand() {
  return (
    <section className="contact-band">
      <div className="shell contact-band-grid">
        <div>
          <span className="eyebrow eyebrow-light">Planning a custom home?</span>
          <h2>Start with a conversation.</h2>
        </div>
        <div className="contact-band-details">
          <span>{site.leadContact} · Sales</span>
          <a href={site.phoneHref}>{site.phone}</a>
          <a href={`sms:+18178212476`}>Text Whitney</a>
          <Link href="/contact">Send project details →</Link>
        </div>
      </div>
    </section>
  );
}
