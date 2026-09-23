"use client";

import { useState } from "react";
import { imageDisclaimer, residenceCollection } from "@/data/site";
import { photos } from "@/data/photos";

export function LindseyResidenceFeature() {
  const [open, setOpen] = useState(false);
  const residence = residenceCollection.find((item) => item.slug === "the-lindsey");

  if (!residence) return null;

  return (
    <section className={`lindsey-residence-feature ${open ? "is-open" : ""}`}>
      <div className="shell">
        <button
          className="lindsey-residence-preview"
          type="button"
          aria-expanded={open}
          aria-controls="the-lindsey-expanded"
          onClick={() => setOpen((value) => !value)}
        >
          <img src={photos.theLindseyFront.src} alt={photos.theLindseyFront.alt} />
          <div className="lindsey-residence-shade" aria-hidden="true" />

          <div className="lindsey-residence-title">
            <span>Featured Residence</span>
            <strong>The Lindsey</strong>
            <small>Modern · Timeless · Refined</small>
          </div>

          <div className="lindsey-residence-stats" aria-hidden={open}>
            <span><strong>{residence.totalSqFt}</strong><small>One story</small></span>
            <span><strong>{residence.bedrooms}</strong><small>Private suites</small></span>
            <span><strong>{residence.bathrooms}</strong><small>Bathrooms</small></span>
            <span><strong>{residence.garage}</strong><small>Garage</small></span>
          </div>

          <span className="lindsey-residence-action">{open ? "Close residence" : "Explore The Lindsey +"}</span>
        </button>

        <div id="the-lindsey-expanded" className="lindsey-residence-expanded" hidden={!open}>
          <div className="lindsey-residence-expanded-head">
            <div>
              <span className="eyebrow">The Lindsey</span>
              <h2>Modern luxury living, built around everyday life.</h2>
            </div>
            <button type="button" onClick={() => setOpen(false)}>Close ×</button>
          </div>

          <div className="lindsey-residence-detail-grid">
            <figure className="lindsey-residence-angle">
              <img src={photos.theLindseyAngle.src} alt={photos.theLindseyAngle.alt} loading="lazy" decoding="async" />
              <figcaption>Exterior concept</figcaption>
            </figure>
            <figure className="lindsey-residence-plan">
              <img src={photos.theLindseyFloorPlan.src} alt={photos.theLindseyFloorPlan.alt} loading="lazy" decoding="async" />
              <figcaption>Residence plan</figcaption>
            </figure>
          </div>

          <div className="lindsey-residence-amenities">
            {residence.amenities.map((amenity) => <span key={amenity}>{amenity}</span>)}
          </div>

          <p className="lindsey-residence-disclaimer">{imageDisclaimer}</p>
        </div>
      </div>
    </section>
  );
}
