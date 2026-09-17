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
            <h1>A home designed around your property and the way you want to live.</h1>
            <p>Whether you are planning a custom family home or a larger private estate, Lindsey Homes starts with the site, the spaces that matter to you, and the level of finish you want to come home to every day.</p>
            <Link className="text-link-light" href="/contact">Start a conversation →</Link>
          </div>
          <ImageSlot className="page-hero-image" src={photos.reserveDriveway.src} alt={photos.reserveDriveway.alt} loading="eager" showLabel={false} />
        </div>
      </section>

      <section className="build-detail shell section-space">
        <div className="build-detail-intro">
          <span className="eyebrow">What we build</span>
          <h2>From a custom home to a complete estate property.</h2>
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
          <ImageSlot aspect="portrait" src={photos.reserveKitchen.src} alt={photos.reserveKitchen.alt} showLabel={false} />
          <div>
            <span className="eyebrow eyebrow-light">Inside the home</span>
            <h2>Good design does not need every finish to compete for attention.</h2>
            <p>The rooms that feel most luxurious usually have a sense of balance. The stone, cabinetry, lighting, hardware, ceiling height, windows, and furnishings all have a place, and none of them has to carry the room alone.</p>
            <p>We bring that same thinking to the exterior, the landscape, and the way the home sits on the property.</p>
          </div>
        </div>
      </section>

      <section className="experience-section shell section-space">
        <div className="experience-title">
          <span className="eyebrow">What to expect</span>
          <h2>A clear path from the first conversation to the finished home.</h2>
        </div>
        <div className="experience-list">
          <div><strong>Start with the property</strong><p>We talk through the lot, location, size of the home, investment range, timing, and the spaces that matter most to you.</p></div>
          <div><strong>Shape the plan</strong><p>The layout and architecture are developed around the site and your priorities instead of forcing a stock plan onto the property.</p></div>
          <div><strong>Choose the details</strong><p>Materials, fixtures, cabinetry, lighting, and finishes are worked through with the overall home in mind.</p></div>
          <div><strong>Build it well</strong><p>The goal is simple: carry the design through construction so the finished home feels like the one you set out to build.</p></div>
        </div>
      </section>

      <section className="investment-band">
        <div className="shell investment-band-grid">
          <div>
            <span className="eyebrow eyebrow-light">Investment</span>
            <h2>Custom homes beginning around $650K, with estate properties extending well into the millions.</h2>
          </div>
          <p>Final pricing depends on the home, the property, square footage, architecture, site work, materials, finish selections, location, and current construction costs.</p>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
