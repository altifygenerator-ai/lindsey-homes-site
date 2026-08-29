import type { Metadata } from "next";
import Link from "next/link";
import { ImageSlot } from "@/components/ImageSlot";
import { ContactBand } from "@/components/ContactBand";
import { imageDisclaimer } from "@/data/site";
import { photos } from "@/data/photos";

export const metadata: Metadata = {
  title: "Design Inspiration",
  description: "Explore luxury custom-home design inspiration for Lindsey Homes, including estate exteriors, kitchens, living spaces, primary suites, pools, and outdoor living.",
};

export default function InspirationPage() {
  return (
    <>
      <section className="page-hero page-hero--design">
        <div className="shell page-hero-grid">
          <div>
            <span className="eyebrow eyebrow-light">Design</span>
            <h1>Architecture, interiors, and outdoor spaces with a clear point of view.</h1>
            <p>Use these references to identify the scale, materials, proportions, and finish direction that feel right for the residence you want to build.</p>
          </div>
          <ImageSlot className="page-hero-image" src={photos.villaPool.src} alt={photos.villaPool.alt} loading="eager" showLabel={false} />
        </div>
      </section>

      <section className="design-editorial shell section-space">
        <div className="design-editorial-copy">
          <span className="eyebrow">Design direction</span>
          <h2>The strongest homes feel consistent from the approach to the interior details.</h2>
          <p>Exterior architecture, interior material choices, natural light, entertaining spaces, primary suites, and outdoor living should feel related instead of collected from separate ideas.</p>
        </div>
        <ImageSlot aspect="portrait" src={photos.glassWoodExterior.src} alt={photos.glassWoodExterior.alt} showLabel={false} />
      </section>

      <section className="design-gallery-section">
        <div className="shell">
          <div className="design-gallery-heading">
            <span className="eyebrow eyebrow-light">Residential inspiration</span>
            <h2>Exterior presence. Interior restraint. Details that hold the room.</h2>
          </div>
          <div className="design-gallery-grid">
            <ImageSlot className="design-tall" aspect="portrait" src={photos.dallasStone.src} alt={photos.dallasStone.alt} eyebrow="Exterior" title="Stone + traditional influence" />
            <ImageSlot src={photos.woodKitchen.src} alt={photos.woodKitchen.alt} eyebrow="Interior" title="Kitchen + gathering" />
            <ImageSlot src={photos.elegantLiving.src} alt={photos.elegantLiving.alt} eyebrow="Interior" title="Great room" />
            <ImageSlot className="design-wide" src={photos.poolPatio.src} alt={photos.poolPatio.alt} eyebrow="Outdoor" title="Pool + exterior living" />
            <ImageSlot src={photos.luxeMarbleBath.src} alt={photos.luxeMarbleBath.alt} eyebrow="Interior" title="Primary suite" />
            <ImageSlot src={photos.modernMarbleBath.src} alt={photos.modernMarbleBath.alt} eyebrow="Detail" title="Material + finish" />
            <ImageSlot className="design-wide" src={photos.glassPoolEstate.src} alt={photos.glassPoolEstate.alt} eyebrow="Exterior" title="Contemporary estate" />
          </div>
          <p className="image-disclaimer">{imageDisclaimer}</p>
        </div>
      </section>

      <section className="design-cta shell section-space">
        <div>
          <span className="eyebrow">Have a direction in mind?</span>
          <h2>Bring the references you keep coming back to.</h2>
        </div>
        <div>
          <p>A few strong examples can say more than a long list of style names. Share the homes, rooms, materials, and details that feel right and use them to start the project conversation.</p>
          <Link className="text-link" href="/contact">Request a consultation →</Link>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
