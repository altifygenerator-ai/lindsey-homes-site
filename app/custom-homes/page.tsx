import type { Metadata } from "next";
import Link from "next/link";
import { buildTypes } from "@/data/site";
import { ImageSlot } from "@/components/ImageSlot";
import { ContactBand } from "@/components/ContactBand";
import { photos } from "@/data/photos";

export const metadata: Metadata = {
  title: "Custom Homes",
  description: "Custom residences, estate homes, land + build-to-suit opportunities, and select residential projects by Lindsey Homes in North Texas.",
};

export default function CustomHomesPage() {
  return (
    <>
      <section className="page-hero page-hero--luxury">
        <div className="shell page-hero-grid">
          <div>
            <span className="eyebrow eyebrow-light">Custom Homes</span>
            <h1>Residential work shaped around the property, not a preset package.</h1>
            <p>Every custom project brings its own site, scale, architecture, finish level, and priorities. Lindsey Homes starts there and builds the project around those realities.</p>
            <Link className="text-link-light" href="/contact">Request a consultation →</Link>
          </div>
          <ImageSlot className="page-hero-image" src={photos.highEndExterior.src} alt={photos.highEndExterior.alt} loading="eager" showLabel={false} />
        </div>
      </section>

      <section className="build-detail shell section-space">
        <div className="build-detail-intro">
          <span className="eyebrow">Residential capabilities</span>
          <h2>From private homes to larger estate-scale projects.</h2>
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
          <ImageSlot aspect="portrait" src={photos.suspendedFireplace.src} alt={photos.suspendedFireplace.alt} showLabel={false} />
          <div>
            <span className="eyebrow eyebrow-light">The finished home</span>
            <h2>Architecture and finish should read as one decision.</h2>
            <p>Floor plan, ceiling volume, natural light, materials, interior detailing, exterior character, and outdoor spaces all affect how the home feels. Treating those pieces separately is how custom homes start to feel generic.</p>
            <p>Lindsey Homes keeps those decisions connected as the project develops.</p>
          </div>
        </div>
      </section>

      <section className="experience-section shell section-space">
        <div className="experience-title">
          <span className="eyebrow">How the work moves</span>
          <h2>The process should stay clear even when the project is complex.</h2>
        </div>
        <div className="experience-list">
          <div><strong>Early conversation</strong><p>Property, project scale, architectural direction, timing, and investment range.</p></div>
          <div><strong>Site + design alignment</strong><p>Make sure the house and the property are working toward the same result.</p></div>
          <div><strong>Selections + decisions</strong><p>Develop the details and finish level before they become last-minute choices.</p></div>
          <div><strong>Build + completion</strong><p>Carry the design intent through the construction and finished home.</p></div>
        </div>
      </section>

      <section className="investment-band">
        <div className="shell investment-band-grid">
          <div>
            <span className="eyebrow eyebrow-light">Project scale</span>
            <h2>Custom residential projects from approximately $450K through $4M+ estates.</h2>
          </div>
          <p>Final pricing depends on the actual residence, property, site work, square footage, architecture, selections, finish level, location, and current material costs.</p>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
