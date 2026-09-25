import type { Metadata } from "next";
import Link from "next/link";
import { ImageSlot } from "@/components/ImageSlot";
import { ContactBand } from "@/components/ContactBand";
import { designBuckets } from "@/data/photos";

export const metadata: Metadata = {
  title: "Custom Home Building Approach in Dallas–Fort Worth",
  description: "Learn how Lindsey Homes approaches custom home design and building across Dallas–Fort Worth, from the property and architecture through interiors and outdoor living.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "Custom Home Building Approach | Lindsey Homes",
    description: "How Lindsey Homes approaches custom home design and building across Dallas–Fort Worth.",
    url: "/about",
  },
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
          <ImageSlot className="page-hero-image" src={designBuckets.foyersMudrooms[0].src} alt={designBuckets.foyersMudrooms[0].alt} loading="eager" showLabel={false} />
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
          <ImageSlot aspect="portrait" src={designBuckets.greatRooms[1].src} alt={designBuckets.greatRooms[1].alt} showLabel={false} />
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
