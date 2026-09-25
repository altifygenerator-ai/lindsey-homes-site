"use client";

import { useState } from "react";
import { imageDisclaimer, residenceCollection } from "@/data/site";
import { eliaGroveGallery, photos } from "@/data/photos";
import { ResidenceGallery } from "@/components/ResidenceGallery";

export function EliaGroveFeature() {
  const [open, setOpen] = useState(false);
  const residence = residenceCollection.find((item) => item.slug === "elia-grove");

  if (!residence) return null;

  return (
    <section className={`elia-feature ${open ? "is-open" : ""}`}>
      <div className="shell">
        <button
          className="elia-preview"
          type="button"
          aria-expanded={open}
          aria-controls="elia-expanded"
          onClick={() => setOpen((value) => !value)}
        >
          <img src={photos.eliaExterior.src} alt={photos.eliaExterior.alt} />
          <div className="elia-preview-shade" aria-hidden="true" />
          <div className="elia-preview-title">
            <span>The Estate Collection</span>
            <strong>Elia Grove</strong>
            <small>Mediterranean Farmhouse</small>
          </div>
          <div className="elia-preview-stats" aria-hidden={open}>
            <span><strong>{residence.totalSqFt}</strong><small>Living</small></span>
            <span><strong>{residence.bedrooms}</strong><small>Bedrooms</small></span>
            <span><strong>{residence.bathrooms}</strong><small>Bathrooms</small></span>
            <span><strong>{residence.garage}</strong><small>Garage</small></span>
          </div>
          <span className="elia-preview-action">{open ? "Close residence" : "Explore Elia Grove +"}</span>
        </button>

        <div id="elia-expanded" className="elia-expanded" hidden={!open}>
          <div className="elia-expanded-head">
            <div>
              <span className="eyebrow">Elia Grove</span>
              <h2>Stone, arches, warmth, and easy one-story living.</h2>
              <p>Mediterranean character meets a modern farmhouse plan, with generous gathering spaces, a private primary terrace, and a strong indoor-outdoor connection.</p>
            </div>
            <button type="button" onClick={() => setOpen(false)}>Close ×</button>
          </div>
          <ResidenceGallery slides={eliaGroveGallery} label="Elia Grove image gallery" />
          <div className="elia-amenities">
            {residence.amenities.map((amenity) => <span key={amenity}>{amenity}</span>)}
          </div>
          <p className="elia-disclaimer">{imageDisclaimer}</p>
        </div>
      </div>
    </section>
  );
}
