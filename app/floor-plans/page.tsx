import type { Metadata } from "next";
import Link from "next/link";
import { ImageSlot } from "@/components/ImageSlot";
import { ContactBand } from "@/components/ContactBand";
import { ResidenceGallery } from "@/components/ResidenceGallery";
import { imageDisclaimer, residenceCollection } from "@/data/site";
import { blackwoodGallery, eliaGroveGallery, photos } from "@/data/photos";

export const metadata: Metadata = {
  title: "Residence Collection & Signature Series",
  description: "Explore The Reserve, The Lindsey, Blackwood Estate, Elia Grove, Oak Ridge, Cedar Grove, and the Lindsey Homes residence collection for Dallas–Fort Worth.",
  alternates: { canonical: "/floor-plans" },
  openGraph: {
    title: "Residence Collection & Signature Series | Lindsey Homes",
    description: "Explore The Reserve, The Lindsey, Blackwood Estate, Elia Grove, and Signature Series residences from Lindsey Homes.",
    url: "/floor-plans",
  },
};

export default function FloorPlansPage() {
  const reserve = residenceCollection.find((item) => item.slug === "the-reserve")!;
  const lindsey = residenceCollection.find((item) => item.slug === "the-lindsey")!;
  const blackwood = residenceCollection.find((item) => item.slug === "blackwood-estate")!;
  const elia = residenceCollection.find((item) => item.slug === "elia-grove")!;
  const oakRidge = residenceCollection.find((item) => item.slug === "oak-ridge")!;
  const cedarGrove = residenceCollection.find((item) => item.slug === "cedar-grove")!;

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
              <span>{reserve.bathrooms}</span>
            </div>
          </div>

          <ResidenceGallery
            label="The Reserve image gallery"
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
          <div><strong>Bedrooms + baths</strong><p>{reserve.bedrooms} · {reserve.bathrooms}</p></div>
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

      <section className="collection-lindsey-section">
        <div className="shell">
          <div className="collection-lindsey-heading">
            <div>
              <span className="eyebrow">Featured Residence</span>
              <h2>{lindsey.name}</h2>
            </div>
            <div className="collection-lindsey-specs">
              <span>{lindsey.totalSqFt}</span>
              <span>{lindsey.bedrooms}</span>
              <span>{lindsey.bathrooms}</span>
              <span>{lindsey.garage}</span>
            </div>
          </div>

          <ResidenceGallery
            label="The Lindsey image gallery"
            slides={[
              { src: photos.theLindseyFront.src, alt: photos.theLindseyFront.alt, eyebrow: "Exterior", title: "Modern luxury living" },
              { src: photos.theLindseyAngle.src, alt: photos.theLindseyAngle.alt, eyebrow: "Exterior", title: "Timeless design" },
              { src: photos.theLindseyFloorPlan.src, alt: photos.theLindseyFloorPlan.alt, eyebrow: "Plan", title: "5,312 sq. ft. one-story residence" },
            ]}
          />

          <div className="collection-lindsey-amenities">
            {lindsey.amenities.map((amenity) => <span key={amenity}>{amenity}</span>)}
          </div>
        </div>
      </section>


      <section className="collection-blackwood-section">
        <div className="shell">
          <div className="collection-blackwood-heading">
            <div>
              <span className="eyebrow eyebrow-light">Featured Residence</span>
              <h2>{blackwood.name}</h2>
              <p>Luxury black farmhouse architecture with vaulted gathering spaces and a generous one-story plan.</p>
            </div>
            <div className="collection-blackwood-specs">
              <span>{blackwood.totalSqFt}</span>
              <span>{blackwood.bedrooms}</span>
              <span>{blackwood.bathrooms}</span>
              <span>{blackwood.garage}</span>
            </div>
          </div>

          <ResidenceGallery label="Blackwood Estate image gallery" slides={blackwoodGallery} />

          <div className="collection-blackwood-amenities">
            {blackwood.amenities.map((amenity) => <span key={amenity}>{amenity}</span>)}
          </div>
        </div>
      </section>

      <section className="collection-elia-section"><div className="shell"><div className="collection-elia-heading"><div><span className="eyebrow">The Estate Collection</span><h2>{elia.name}</h2><p>Mediterranean farmhouse architecture with stone, arches, warm materials, and a single-level plan designed around everyday living.</p></div><div className="collection-elia-specs"><span>{elia.totalSqFt}</span><span>{elia.bedrooms}</span><span>{elia.bathrooms}</span><span>{elia.garage}</span></div></div><ResidenceGallery label="Elia Grove image gallery" slides={eliaGroveGallery} /><div className="collection-elia-amenities">{elia.amenities.map((amenity) => <span key={amenity}>{amenity}</span>)}</div></div></section>

      <section className="collection-signature-section">
        <div className="shell collection-signature-heading">
          <span className="eyebrow">Signature Series</span>
          <h2>Customized to fit your family.</h2>
        </div>

        <div className="shell collection-signature-grid">
          {[
            { residence: oakRidge, presentation: photos.oakRidgePresentation, plan: photos.oakRidgeFloorPlan },
            { residence: cedarGrove, presentation: photos.cedarGrovePresentation, plan: photos.cedarGroveFloorPlan },
          ].map(({ residence, presentation, plan }) => (
            <article className="collection-signature-card" key={residence.slug}>
              <div className="collection-signature-card-images">
                <img src={presentation.src} alt={presentation.alt} loading="lazy" decoding="async" />
                <img src={plan.src} alt={plan.alt} loading="lazy" decoding="async" />
              </div>
              <div className="collection-signature-card-copy">
                <span>{residence.status}</span>
                <h3>{residence.name}</h3>
                <p>{residence.totalSqFt} · {residence.bedrooms} · {residence.bathrooms}</p>
                <Link href="/contact">Ask about {residence.name} →</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="shell" style={{ paddingBlock: 72 }}>
        <p className="image-disclaimer" style={{ color: "var(--muted)" }}>{imageDisclaimer}</p>
      </section>

      <ContactBand />
    </>
  );
}
