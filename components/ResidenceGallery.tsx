"use client";

import { useState } from "react";

type Slide = {
  src: string;
  alt: string;
  eyebrow: string;
  title: string;
  position?: string;
};

export function ResidenceGallery({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0);
  if (!slides.length) return null;

  const active = slides[index];
  const previous = () => setIndex((current) => (current - 1 + slides.length) % slides.length);
  const next = () => setIndex((current) => (current + 1) % slides.length);

  return (
    <div className="residence-gallery" aria-roledescription="carousel" aria-label="The Reserve image gallery">
      <div className="residence-gallery-stage">
        {slides.map((slide, slideIndex) => (
          <img
            key={`${slide.src}-${slideIndex}`}
            className={`residence-gallery-image ${slideIndex === index ? "is-active" : ""}`}
            src={slide.src}
            alt={slide.alt}
            loading={slideIndex === 0 ? "eager" : "lazy"}
            decoding="async"
            style={{ objectPosition: slide.position || "center" }}
            aria-hidden={slideIndex !== index}
          />
        ))}

        <div className="residence-gallery-shade" aria-hidden="true" />

        {slides.length > 1 ? (
          <>
            <button type="button" className="residence-gallery-arrow residence-gallery-arrow--left" onClick={previous} aria-label="Previous Reserve image">
              <span aria-hidden="true">‹</span>
            </button>
            <button type="button" className="residence-gallery-arrow residence-gallery-arrow--right" onClick={next} aria-label="Next Reserve image">
              <span aria-hidden="true">›</span>
            </button>
          </>
        ) : null}

        <div className="residence-gallery-meta">
          <div className="residence-gallery-caption" aria-live="polite">
            <span>{active.eyebrow}</span>
            <strong>{active.title}</strong>
          </div>
          <div className="residence-gallery-position" aria-label={`Image ${index + 1} of ${slides.length}`}>
            {String(index + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </div>
        </div>
      </div>
    </div>
  );
}
