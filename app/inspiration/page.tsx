import type { Metadata } from "next";
import Link from "next/link";
import { ImageSlot } from "@/components/ImageSlot";
import { ContactBand } from "@/components/ContactBand";
import { imageDisclaimer } from "@/data/site";
import { photos } from "@/data/photos";

export const metadata: Metadata = {
  title: "Luxury Home Design Inspiration",
  description: "Explore luxury home design inspiration for Lindsey Homes in Dallas–Fort Worth, including estate exteriors, kitchens, baths, outdoor living, and architectural details.",
};

export default function InspirationPage() {
  return (
    <>
      <section className="page-hero page-hero--design">
        <div className="shell page-hero-grid">
          <div>
            <span className="eyebrow eyebrow-light">Design</span>
            <h1>The details should feel as good as the first impression.</h1>
            <p>A beautiful home is more than a collection of expensive finishes. Proportion, natural light, materials, landscape, and the way each space connects to the next are what make the whole home feel right.</p>
          </div>
          <ImageSlot className="page-hero-image" src={photos.reserveOutdoor.src} alt={photos.reserveOutdoor.alt} loading="eager" showLabel={false} />
        </div>
      </section>

      <section className="design-editorial shell section-space">
        <div className="design-editorial-copy">
          <span className="eyebrow">Made for North Texas</span>
          <h2>There is more than one way to build a beautiful home in Dallas–Fort Worth.</h2>
          <p>Texas stone, metal roofing, large windows, warm wood, deep covered patios, strong landscape lighting, and generous indoor-outdoor spaces can all take on a different character depending on the home. What matters is that the choices feel connected.</p>
        </div>
        <ImageSlot aspect="portrait" src={photos.dallasStone.src} alt={photos.dallasStone.alt} showLabel={false} />
      </section>

      <section className="design-gallery-section">
        <div className="shell">
          <div className="design-gallery-heading">
            <span className="eyebrow eyebrow-light">Design inspiration</span>
            <h2>Homes and spaces worth taking a second look at.</h2>
          </div>
          <div className="design-gallery-grid">
            <ImageSlot className="design-tall" aspect="portrait" src={photos.reserveEntry.src} alt={photos.reserveEntry.alt} eyebrow="Arrival" title="Entry + landscape" />
            <ImageSlot src={photos.reserveKitchen.src} alt={photos.reserveKitchen.alt} eyebrow="Interior" title="Kitchen" />
            <ImageSlot src={photos.reserveGreatRoom.src} alt={photos.reserveGreatRoom.alt} eyebrow="Interior" title="Great room" />
            <ImageSlot className="design-wide" src={photos.reserveOutdoor.src} alt={photos.reserveOutdoor.alt} eyebrow="Outdoor" title="Covered living" />
            <ImageSlot src={photos.reserveBath.src} alt={photos.reserveBath.alt} eyebrow="Interior" title="Primary bath" />
            <ImageSlot src={photos.dallasEntryDetail.src} alt={photos.dallasEntryDetail.alt} eyebrow="Detail" title="Stone + lighting" />
            <ImageSlot className="design-wide" src={photos.reservePool.src} alt={photos.reservePool.alt} eyebrow="Estate" title="Pool + backyard" />
          </div>
          <p className="image-disclaimer">{imageDisclaimer}</p>
        </div>
      </section>

      <section className="design-cta shell section-space">
        <div>
          <span className="eyebrow">Know what you like?</span>
          <h2>Save the homes and details you keep coming back to.</h2>
        </div>
        <div>
          <p>You do not need to know the name of every style or finish. A handful of images you genuinely like can tell us a lot about the scale, materials, mood, and level of detail you want in your home.</p>
          <Link className="text-link" href="/contact">Share your ideas with us →</Link>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
