import type { Metadata } from "next";
import Link from "next/link";
import { buildTypes } from "@/data/site";
import { ImageSlot } from "@/components/ImageSlot";
import { ContactBand } from "@/components/ContactBand";
import { photos } from "@/data/photos";

export const metadata: Metadata = {
  title: "Luxury Custom Homes in Dallas–Fort Worth",
  description: "Custom homes, private estates, and build-on-your-land residences by Lindsey Homes across Dallas–Fort Worth.",
};

export default function CustomHomesPage() {
  return (
    <>
      <section className="page-hero page-hero--luxury">
        <div className="shell page-hero-grid">
          <div>
            <span className="eyebrow eyebrow-light">Custom Homes</span>
            <h1>Designed around the property. Built around your life.</h1>
            <Link className="text-link-light" href="/contact">Start a conversation →</Link>
          </div>
          <ImageSlot className="page-hero-image" src={photos.luxuryExterior.src} alt={photos.luxuryExterior.alt} loading="eager" showLabel={false} />
        </div>
      </section>

      <section className="build-detail shell section-space">
        <div className="build-detail-intro">
          <span className="eyebrow">What we build</span>
          <h2>Custom homes with a clear point of view.</h2>
        </div>
        <div className="spectrum-list spectrum-list--page">
          {buildTypes.map((item) => (
            <article key={item.title} className="spectrum-row">
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="dark-editorial-section">
        <div className="shell dark-editorial-grid">
          <ImageSlot aspect="portrait" src={photos.luxuryKitchen.src} alt={photos.luxuryKitchen.alt} showLabel={false} />
          <div>
            <span className="eyebrow eyebrow-light">Inside the home</span>
            <h2>Quiet materials. Strong details. Rooms that belong together.</h2>
            <Link className="text-link-light" href="/inspiration">Explore design →</Link>
          </div>
        </div>
      </section>

      <section className="experience-section shell section-space">
        <div className="experience-title">
          <span className="eyebrow">The process</span>
          <h2>From property to finished home.</h2>
        </div>
        <div className="experience-list">
          <div><strong>Property</strong><p>Lot, access, views, privacy, and orientation.</p></div>
          <div><strong>Plan</strong><p>Architecture shaped around the site and your priorities.</p></div>
          <div><strong>Details</strong><p>Materials, cabinetry, lighting, fixtures, and finish.</p></div>
          <div><strong>Build</strong><p>Carry the original design through construction.</p></div>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
