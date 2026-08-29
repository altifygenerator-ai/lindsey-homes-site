"use client";

import { useState } from "react";
import { budgetBands, imageDisclaimer } from "@/data/site";
import { budgetPhotos } from "@/data/photos";
import { ImageSlot } from "@/components/ImageSlot";

export function BudgetCarousel() {
  const [active, setActive] = useState(0);
  const [photoIndex, setPhotoIndex] = useState(0);
  const item = budgetBands[active];
  const photos = budgetPhotos[active];
  const photo = photos[photoIndex];

  function setBand(index: number) {
    setActive(index);
    setPhotoIndex(0);
  }

  function movePhoto(direction: number) {
    setPhotoIndex((current) => (current + direction + photos.length) % photos.length);
  }

  return (
    <div className="budget-explorer">
      <div className="budget-tabs" role="tablist" aria-label="Home inspiration by budget range">
        {budgetBands.map((band, index) => (
          <button
            key={band.range}
            id={`budget-tab-${index}`}
            type="button"
            className={index === active ? "active" : ""}
            onClick={() => setBand(index)}
            role="tab"
            aria-selected={index === active}
            aria-controls="budget-panel"
            tabIndex={index === active ? 0 : -1}
          >
            {band.range}
          </button>
        ))}
      </div>

      <div
        className="budget-stage"
        id="budget-panel"
        role="tabpanel"
        aria-labelledby={`budget-tab-${active}`}
      >
        <div className="budget-image-wrap">
          <ImageSlot
            eyebrow="Design inspiration"
            title={photo.label}
            className="budget-image"
            src={photo.src}
            alt={photo.alt}
          />
          <div className="budget-photo-meta" aria-live="polite">
            <span>{photoIndex + 1} / {photos.length}</span>
            <strong>{item.range}</strong>
          </div>
          <div className="budget-arrows">
            <button type="button" onClick={() => movePhoto(-1)} aria-label="Previous inspiration photo">←</button>
            <button type="button" onClick={() => movePhoto(1)} aria-label="Next inspiration photo">→</button>
          </div>
        </div>

        <div className="budget-copy">
          <span className="eyebrow">A place to start</span>
          <p className="budget-range">{item.range}</p>
          <h3>{item.label}</h3>
          <p>{item.note}</p>
          <div className="budget-dots" aria-label="Photos in this budget range">
            {photos.map((candidate, index) => (
              <button
                key={candidate.id}
                type="button"
                className={index === photoIndex ? "active" : ""}
                onClick={() => setPhotoIndex(index)}
                aria-label={`Show ${candidate.label}`}
                aria-pressed={index === photoIndex}
              />
            ))}
          </div>
          <p className="budget-caption">Use the photos for scale and design inspiration. They are not Lindsey Homes projects and the range shown is not a quote for the home pictured.</p>
        </div>
      </div>

      <p className="legal-note">{imageDisclaimer}</p>
    </div>
  );
}
