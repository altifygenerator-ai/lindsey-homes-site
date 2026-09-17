"use client";

import { useEffect, useMemo, useState } from "react";

type Slide = {
  src: string;
  alt: string;
  position?: string;
};

type Props = {
  slides: Slide[];
  intervalMs?: number;
};

export function HeroGallery({ slides, intervalMs = 7000 }: Props) {
  const safeSlides = useMemo(() => slides.filter((slide) => Boolean(slide?.src)), [slides]);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (safeSlides.length < 2 || paused) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setTimeout(() => {
      setIndex((current) => (current + 1) % safeSlides.length);
    }, intervalMs);

    return () => window.clearTimeout(timer);
  }, [index, intervalMs, paused, safeSlides.length]);

  if (!safeSlides.length) return null;

  const previous = () => setIndex((current) => (current - 1 + safeSlides.length) % safeSlides.length);
  const next = () => setIndex((current) => (current + 1) % safeSlides.length);

  return (
    <div
      className="hero-gallery"
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Lindsey Homes featured imagery"
    >
      <div className="hero-gallery-images" aria-live="off">
        {safeSlides.map((slide, slideIndex) => (
          <img
            key={`${slide.src}-${slideIndex}`}
            className={`hero-gallery-image ${slideIndex === index ? "is-active" : ""}`}
            src={slide.src}
            alt={slide.alt}
            loading={slideIndex === 0 ? "eager" : "lazy"}
            decoding="async"
            style={{ objectPosition: slide.position || "center" }}
            aria-hidden={slideIndex !== index}
          />
        ))}
      </div>

      {safeSlides.length > 1 ? (
        <>
          <button type="button" className="hero-gallery-arrow hero-gallery-arrow--left" onClick={previous} aria-label="Previous image">
            <span aria-hidden="true">‹</span>
          </button>
          <button type="button" className="hero-gallery-arrow hero-gallery-arrow--right" onClick={next} aria-label="Next image">
            <span aria-hidden="true">›</span>
          </button>
        </>
      ) : null}
    </div>
  );
}
