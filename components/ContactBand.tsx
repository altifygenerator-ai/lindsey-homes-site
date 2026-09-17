import Link from "next/link";
import { site } from "@/data/site";

export function ContactBand() {
  return (
    <section className="contact-band">
      <div className="shell contact-band-grid">
        <div>
          <span className="eyebrow eyebrow-light">Planning a custom home?</span>
          <h2>Bring us the property, the plans, or simply the idea you want to explore.</h2>
        </div>
        <div className="contact-band-details">
          <span>{site.leadContact} · Sales</span>
          <a href={site.phoneHref}>{site.phone}</a>
          <a href={site.emailHref}>{site.email}</a>
          <Link href="/contact">Start a conversation →</Link>
        </div>
      </div>
    </section>
  );
}
