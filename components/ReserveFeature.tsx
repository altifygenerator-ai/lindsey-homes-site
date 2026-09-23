"use client";

import { useState } from "react";
import { imageDisclaimer, residenceCollection } from "@/data/site";
import { photos } from "@/data/photos";

export function ReserveFeature() {
  const [open, setOpen] = useState(false);
  const reserve = residenceCollection[0];

  return (
    <section className={`reserve-feature ${open ? "is-open" : ""}`}>
      <div className="shell">
        <button
          className="reserve-preview"
          type="button"
          aria-expanded={open}
          aria-controls="reserve-expanded"
          onClick={() => setOpen((value) => !value)}
        >
          <div className="reserve-preview-image reserve-preview-image--main">
            <img src={photos.reserveWide.src} alt={photos.reserveWide.alt} />
          </div>
          <div className="reserve-preview-image reserve-preview-image--side">
            <img src={photos.reservePool.src} alt={photos.reservePool.alt} loading="lazy" decoding="async" />
          </div>

          <div className="reserve-preview-title">
            <span>Featured Residence</span>
            <strong>The Reserve</strong>
          </div>

          <div className="reserve-hover-info" aria-hidden={open}>
            <div>
              <strong>{reserve.totalSqFt}</strong>
              <span>Total living space</span>
            </div>
            <div>
              <strong>{reserve.bedrooms}</strong>
              <span>Private suites</span>
            </div>
            <div>
              <strong>6 full + 2 half</strong>
              <span>Bathrooms</span>
            </div>
            <div>
              <strong>{reserve.garage}</strong>
              <span>Garage capacity</span>
            </div>
          </div>

          <span className="reserve-expand-label">{open ? "Close residence" : "Explore residence +"}</span>
        </button>

        <div id="reserve-expanded" className="reserve-expanded" hidden={!open}>
          <div className="reserve-expanded-head">
            <div>
              <span className="eyebrow eyebrow-light">The Reserve</span>
              <h2>Estate living, connected from arrival to backyard.</h2>
            </div>
            <button type="button" onClick={() => setOpen(false)}>Close ×</button>
          </div>

          <div className="reserve-spec-grid" aria-label="The Reserve specifications">
            <div><span>Total</span><strong>{reserve.totalSqFt}</strong></div>
            <div><span>Main residence</span><strong>{reserve.mainResidence}</strong></div>
            <div><span>Guest house</span><strong>{reserve.guestHouse}</strong></div>
            <div><span>Bedrooms</span><strong>{reserve.bedrooms}</strong></div>
            <div><span>Bathrooms</span><strong>6 full · 2 half</strong></div>
            <div><span>Garage</span><strong>{reserve.garage}</strong></div>
          </div>

          <div className="reserve-expanded-gallery">
            <figure className="reserve-gallery-main">
              <img src={photos.reserveFront.src} alt={photos.reserveFront.alt} loading="lazy" decoding="async" />
              <figcaption>Estate exterior</figcaption>
            </figure>
            <figure>
              <img src={photos.reserveEntry.src} alt={photos.reserveEntry.alt} loading="lazy" decoding="async" />
              <figcaption>Arrival</figcaption>
            </figure>
            <figure>
              <img src={photos.reserveGreatRoom.src} alt={photos.reserveGreatRoom.alt} loading="lazy" decoding="async" />
              <figcaption>Great room</figcaption>
            </figure>
            <figure>
              <img src={photos.reserveKitchen.src} alt={photos.reserveKitchen.alt} loading="lazy" decoding="async" />
              <figcaption>Kitchen</figcaption>
            </figure>
            <figure>
              <img src={photos.reserveBath.src} alt={photos.reserveBath.alt} loading="lazy" decoding="async" />
              <figcaption>Primary bath</figcaption>
            </figure>
            <figure>
              <img src={photos.reserveOutdoor.src} alt={photos.reserveOutdoor.alt} loading="lazy" decoding="async" />
              <figcaption>Outdoor living</figcaption>
            </figure>
            <figure>
              <img src={photos.reserveGuest.src} alt={photos.reserveGuest.alt} loading="lazy" decoding="async" />
              <figcaption>Guest house</figcaption>
            </figure>
            <figure className="reserve-gallery-plan">
              <img src={photos.reserveFloorPlan.src} alt={photos.reserveFloorPlan.alt} loading="lazy" decoding="async" />
              <figcaption>Concept floor plan</figcaption>
            </figure>
          </div>

          <div className="reserve-amenities">
            {reserve.amenities.map((amenity) => <span key={amenity}>{amenity}</span>)}
          </div>

          <p className="reserve-disclaimer">{imageDisclaimer}</p>
        </div>
      </div>
    </section>
  );
}
