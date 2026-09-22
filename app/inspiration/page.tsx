import type { Metadata } from "next";
import Link from "next/link";
import { ImageSlot } from "@/components/ImageSlot";
import { ContactBand } from "@/components/ContactBand";
import { photos } from "@/data/photos";

export const metadata: Metadata = {
  title: "Luxury Home Design Inspiration",
  description: "Luxury home design inspiration for Lindsey Homes in Dallas–Fort Worth, including exteriors, kitchens, baths, interiors, and outdoor living.",
};

export default function InspirationPage() {
  return (
    <>
      <section className="page-hero page-hero--design">
        <div className="shell page-hero-grid">
          <div>
            <span className="eyebrow eyebrow-light">Design</span>
            <h1>Details that feel connected.</h1>
          </div>
          <ImageSlot className="page-hero-image" src={photos.luxuryOutdoor.src} alt={photos.luxuryOutdoor.alt} loading="eager" showLabel={false} />
        </div>
      </section>

      <section className="design-gallery-section">
        <div className="shell">
          <div className="design-gallery-heading">
            <span className="eyebrow eyebrow-light">Inspiration</span>
            <h2>Architecture. Interiors. Materials. Light.</h2>
          </div>
          <div className="design-gallery-grid">
            <ImageSlot className="design-tall" aspect="portrait" src={photos.luxuryExterior.src} alt={photos.luxuryExterior.alt} eyebrow="Exterior" title="Luxury homes" />
            <ImageSlot src={photos.luxuryKitchen.src} alt={photos.luxuryKitchen.alt} eyebrow="Interior" title="Kitchen" />
            <ImageSlot src={photos.luxuryLiving.src} alt={photos.luxuryLiving.alt} eyebrow="Interior" title="Living" />
            <ImageSlot className="design-wide" src={photos.luxuryOutdoor.src} alt={photos.luxuryOutdoor.alt} eyebrow="Outdoor" title="Pool + living" />
            <ImageSlot src={photos.luxuryBath.src} alt={photos.luxuryBath.alt} eyebrow="Interior" title="Primary bath" />
            <ImageSlot src={photos.dallasEntryDetail.src} alt={photos.dallasEntryDetail.alt} eyebrow="Detail" title="Stone + lighting" />
            <ImageSlot className="design-wide" src={photos.dallasStone.src} alt={photos.dallasStone.alt} eyebrow="Architecture" title="North Texas inspiration" />
          </div>
          <p className="image-disclaimer">Reference photography is shown for design inspiration and is not presented as completed Lindsey Homes work.</p>
        </div>
      </section>

      <section className="design-cta shell section-space">
        <div>
          <span className="eyebrow">Your direction</span>
          <h2>Save what catches your eye.</h2>
        </div>
        <div>
          <p>A few strong references can say more than a long list of finishes.</p>
          <Link className="text-link" href="/contact">Share your ideas →</Link>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
