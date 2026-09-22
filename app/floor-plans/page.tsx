import type { Metadata } from "next";
import Link from "next/link";
import { ImageSlot } from "@/components/ImageSlot";
import { ContactBand } from "@/components/ContactBand";
import { ResidenceGallery } from "@/components/ResidenceGallery";
import { imageDisclaimer, residenceCollection } from "@/data/site";
import { photos } from "@/data/photos";

export const metadata: Metadata = {
  title: "Residence Collection",
  description: "Explore The Reserve and the growing Lindsey Homes residence collection for Dallas–Fort Worth.",
};

export default function FloorPlansPage() {
  const reserve = residenceCollection[0];

  return (
    <>
      <section className="page-hero page-hero--plans">
        <div className="shell page-hero-grid">
          <div>
            <span className="eyebrow eyebrow-light">Residence Collection</span>
            <h1>Strong architecture, tailored to the property.</h1>
            <Link className="text-link-light" href="/contact">Ask about a residence →</Link>
          </div>
          <ImageSlot className="page-hero-image" src={photos.reserveFront.src} alt={photos.reserveFront.alt} loading="eager" showLabel={false} />
        </div>
      </section>

      <section className="plans-intro shell section-space">
        <div>
          <span className="eyebrow">Featured residence</span>
          <h2>{reserve.name}</h2>
        </div>
        <div>
          <p>A private-estate design with generous living, a separate guest residence, resort-style outdoor spaces, and room to gather without giving up privacy.</p>
          <Link className="text-link" href="/contact">Request more information →</Link>
        </div>
      </section>

      <section className="reserve-gallery-section">
        <div className="shell">
          <div className="reserve-gallery-heading">
            <div>
              <span className="eyebrow eyebrow-light">Inside The Reserve</span>
              <h2>From the front drive to the backyard.</h2>
            </div>
            <div className="reserve-gallery-stats" aria-label="The Reserve key details">
              <span>{reserve.totalSqFt}</span>
              <span>{reserve.bedrooms}</span>
              <span>6 full + 2 half baths</span>
            </div>
          </div>

          <ResidenceGallery
            slides={[
              { src: photos.reserveWide.src, alt: photos.reserveWide.alt, eyebrow: "Exterior", title: "Estate approach", position: "center 52%" },
              { src: photos.reserveEntry.src, alt: photos.reserveEntry.alt, eyebrow: "Arrival", title: "Main entry" },
              { src: photos.reserveKitchen.src, alt: photos.reserveKitchen.alt, eyebrow: "Interior", title: "Kitchen" },
              { src: photos.reservePool.src, alt: photos.reservePool.alt, eyebrow: "Outdoor living", title: "Backyard" },
              { src: photos.reserveOutdoor.src, alt: photos.reserveOutdoor.alt, eyebrow: "Outdoor living", title: "Covered entertaining" },
              { src: photos.reserveBath.src, alt: photos.reserveBath.alt, eyebrow: "Primary suite", title: "Primary bath" },
              { src: photos.reserveGuest.src, alt: photos.reserveGuest.alt, eyebrow: "Guest residence", title: "Guest house" },
            ]}
          />
        </div>
      </section>

      <section className="experience-section shell section-space">
        <div className="experience-title">
          <span className="eyebrow">At a glance</span>
          <h2>The Reserve</h2>
        </div>
        <div className="experience-list">
          <div><strong>Main residence</strong><p>{reserve.mainResidence}</p></div>
          <div><strong>Guest house</strong><p>{reserve.guestHouse}</p></div>
          <div><strong>Bedrooms + baths</strong><p>{reserve.bedrooms} · {reserve.fullBaths} · {reserve.halfBaths}</p></div>
          <div><strong>Garage</strong><p>{reserve.garage}</p></div>
          <div><strong>Features</strong><p>{reserve.amenities.join(" · ")}</p></div>
        </div>
      </section>

      <section className="floor-plan-preview">
        <div className="shell floor-plan-grid">
          <div>
            <span className="eyebrow eyebrow-light">Concept plan</span>
            <h2>A starting point for the property.</h2>
          </div>
          <ImageSlot src={photos.reserveFloorPlan.src} alt={photos.reserveFloorPlan.alt} showLabel={false} />
        </div>
      </section>

      <section className="shell" style={{ paddingBlock: 72 }}>
        <p className="image-disclaimer" style={{ color: "var(--muted)" }}>{imageDisclaimer}</p>
      </section>

      <ContactBand />
    </>
  );
}
