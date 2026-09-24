"use client";

import { useState } from "react";
import { imageDisclaimer, residenceCollection } from "@/data/site";
import { photos } from "@/data/photos";

export function BlackwoodEstateFeature() {
  const [open, setOpen] = useState(false);
  const residence = residenceCollection.find((item) => item.slug === "blackwood-estate");

  if (!residence) return null;

  return (
    <section className={`blackwood-feature ${open ? "is-open" : ""}`}>
      <div className="shell">
        <button
          className="blackwood-preview"
          type="button"
          aria-expanded={open}
          aria-controls="blackwood-expanded"
          onClick={() => setOpen((value) => !value)}
        >
          <img src={photos.blackwoodPresentation.src} alt={photos.blackwoodPresentation.alt} />
          <div className="blackwood-preview-shade" aria-hidden="true" />

          <div className="blackwood-preview-title">
            <span>Featured Residence</span>
            <strong>Blackwood Estate</strong>
            <small>Luxury Black Farmhouse</small>
          </div>

          <div className="blackwood-preview-stats" aria-hidden={open}>
            <span><strong>{residence.totalSqFt}</strong><small>Living</small></span>
            <span><strong>{residence.bedrooms}</strong><small>Bedrooms</small></span>
            <span><strong>{residence.bathrooms}</strong><small>Bathrooms</small></span>
            <span><strong>{residence.garage}</strong><small>Garage</small></span>
          </div>

          <span className="blackwood-preview-action">
            {open ? "Close residence" : "Explore Blackwood Estate +"}
          </span>
        </button>

        <div id="blackwood-expanded" className="blackwood-expanded" hidden={!open}>
          <div className="blackwood-expanded-head">
            <div>
              <span className="eyebrow eyebrow-light">Blackwood Estate</span>
              <h2>Dark farmhouse character with generous one-story living.</h2>
            </div>
            <button type="button" onClick={() => setOpen(false)}>Close ×</button>
          </div>

          <div className="blackwood-expanded-grid">
            <figure className="blackwood-plan">
              <img src={photos.blackwoodFloorPlan.src} alt={photos.blackwoodFloorPlan.alt} loading="lazy" decoding="async" />
              <figcaption>Preliminary floor plan</figcaption>
            </figure>
          </div>

          <div className="blackwood-amenities">
            {residence.amenities.map((amenity) => <span key={amenity}>{amenity}</span>)}
          </div>

          <p className="blackwood-disclaimer">{imageDisclaimer}</p>
        </div>
      </div>
    </section>
  );
}
