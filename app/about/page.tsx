import type { Metadata } from "next";
import Link from "next/link";
import { ImageSlot } from "@/components/ImageSlot";
import { ContactBand } from "@/components/ContactBand";
import { photos } from "@/data/photos";

export const metadata: Metadata = {
  title: "Our Approach",
  description: "How Lindsey Homes approaches luxury custom residential building across Dallas–Fort Worth.",
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero page-hero--company">
        <div className="shell page-hero-grid">
          <div>
            <span className="eyebrow eyebrow-light">Our Approach</span>
            <h1>One complete idea, from the property to the last detail.</h1>
          </div>
          <ImageSlot className="page-hero-image" src={photos.luxuryExterior.src} alt={photos.luxuryExterior.alt} loading="eager" showLabel={false} />
        </div>
      </section>

      <section className="company-intro shell section-space">
        <div>
          <span className="eyebrow">Lindsey Homes</span>
          <h2>Architecture, interiors, and outdoor spaces considered together.</h2>
        </div>
        <div className="company-intro-copy">
          <p>Custom homes and private estates across Dallas–Fort Worth.</p>
        </div>
      </section>

      <section className="dark-editorial-section">
        <div className="shell dark-editorial-grid">
          <ImageSlot aspect="portrait" src={photos.luxuryLiving.src} alt={photos.luxuryLiving.alt} showLabel={false} />
          <div>
            <span className="eyebrow eyebrow-light">From plan to finish</span>
            <h2>Proportion. Light. Material. Craft.</h2>
            <Link className="text-link-light" href="/contact">Talk with us →</Link>
          </div>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
