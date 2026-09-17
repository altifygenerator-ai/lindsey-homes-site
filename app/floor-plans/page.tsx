import type { Metadata } from "next";
import Link from "next/link";
import { ImageSlot } from "@/components/ImageSlot";
import { ContactBand } from "@/components/ContactBand";
import { ResidenceGallery } from "@/components/ResidenceGallery";
import { imageDisclaimer, residenceCollection } from "@/data/site";
import { photos } from "@/data/photos";

export const metadata: Metadata = {
  title: "Residence Collection",
  description: "Explore The Reserve and the growing Lindsey Homes residence collection for custom-home projects across Dallas–Fort Worth.",
};

export default function FloorPlansPage() {
  const reserve = residenceCollection[0];

  return (
    <>
      <section className="page-hero page-hero--plans">
        <div className="shell page-hero-grid">
          <div>
            <span className="eyebrow eyebrow-light">Residence Collection</span>
            <h1>Start with a home you love, then make it fit your life and your property.</h1>
            <p>Our residence collection gives you a strong architectural starting point without turning your home into a fixed package. Plans can be refined around the lot, the spaces you need, and the details you want to make your own.</p>
            <Link className="text-link-light" href="/contact">Ask about a residence →</Link>
          </div>
          <ImageSlot className="page-hero-image" src={photos.reserveFront.src} alt={photos.reserveFront.alt} loading="eager" showLabel={false} />
        </div>
      </section>

      <section className="plans-intro shell section-space">
        <div>
          <span className="eyebrow">Featured residence</span>
          <h2>{reserve.name}</h2>
          <p style={{ marginTop: 18, fontFamily: "var(--display)", fontSize: "2rem", color: "var(--navy)" }}>{reserve.startingAt}</p>
        </div>
        <div>
          <p>The Reserve is a private-estate design centered on generous everyday living and easy entertaining, with a separate guest residence, resort-style outdoor spaces, and room to gather without giving up privacy.</p>
          <Link className="text-link" href="/contact">Request more information →</Link>
        </div>
      </section>

      <section className="reserve-gallery-section">
        <div className="shell">
          <div className="reserve-gallery-heading">
            <div>
              <span className="eyebrow eyebrow-light">Inside The Reserve</span>
              <h2>An estate designed to feel connected from the front drive to the backyard.</h2>
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
              { src: photos.reservePool.src, alt: photos.reservePool.alt, eyebrow: "Outdoor living", title: "Resort-style backyard" },
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
          <h2>Space for everyday life, guests, and entertaining.</h2>
        </div>
        <div className="experience-list">
          <div><strong>Main residence</strong><p>{reserve.mainResidence}</p></div>
          <div><strong>Guest house</strong><p>{reserve.guestHouse}</p></div>
          <div><strong>Bedrooms + baths</strong><p>{reserve.bedrooms} · {reserve.fullBaths} · {reserve.halfBaths}</p></div>
          <div><strong>Garage</strong><p>{reserve.garage} with attached and detached capacity.</p></div>
          <div><strong>Features</strong><p>{reserve.amenities.join(" · ")}</p></div>
        </div>
      </section>

      <section className="floor-plan-preview">
        <div className="shell floor-plan-grid">
          <div>
            <span className="eyebrow eyebrow-light">Floor plan</span>
            <h2>A starting plan, not a one-size-fits-all package.</h2>
            <p>The plan shown gives you a feel for how The Reserve is organized. Before construction, the plans will be developed and engineered for the actual property, local requirements, structural needs, and any changes you choose to make.</p>
          </div>
          <ImageSlot src={photos.reserveFloorPlan.src} alt={photos.reserveFloorPlan.alt} showLabel={false} />
        </div>
      </section>

      <section className="plans-intro shell section-space">
        <div>
          <span className="eyebrow">Coming to the collection</span>
          <h2>More homes for different properties and investment levels.</h2>
        </div>
        <div>
          <p>The Lindsey is planned as the next residence in the collection, beginning around $1.5M. Additional designs will follow, including custom-home options reaching toward the $650K range.</p>
          <p style={{ marginTop: 18 }}>If one of those ranges is closer to what you are planning, you can reach out now and talk through the home before the full collection is released.</p>
          <Link className="text-link" href="/contact">Tell us what you are looking for →</Link>
        </div>
      </section>

      <section className="shell" style={{ paddingBottom: 72 }}>
        <p className="image-disclaimer">{imageDisclaimer}</p>
      </section>

      <ContactBand />
    </>
  );
}
