# Lindsey Homes — Dallas Video Hero Pass

This overlay keeps the latest luxury/DFW consistency pass and replaces the static Dallas panorama with a self-hosted cinematic video hero.

## What changed
- The homepage hero now uses one optimized 25.5-second loop assembled from all three Dallas aerial clips supplied for this pass.
- Order: dusk bridge/skyline → downtown night/Reunion Tower → wider downtown night aerial.
- The transitions are short crossfades so it reads as one restrained city sequence rather than a slideshow.
- No sound, no visible controls, no arrows, no counters.
- The video is 1920×1080 H.264, optimized to about 6.3 MB and fast-start enabled for web delivery.
- A local poster image is included as the loading fallback.
- Visitors using reduced-motion settings see the still poster instead of autoplay video.
- Homepage copy remains below the panorama so the Dallas footage gets a clean first impression and is not covered by a giant headline.

## Apply
Copy the contents of this folder over the repository root and replace matching files.

Important paths:
- `app/page.tsx`
- `app/gallery.css`
- `components/Header.tsx`
- `data/site.ts`
- `public/video/dallas-skyline-hero.mp4`
- `public/video/dallas-skyline-hero-poster.jpg`

The Header and site data files are included so this package also preserves the latest luxury-consistency changes if the previous overlay had not yet been applied.

## Video sources
The source clips were supplied in the conversation and originated from Pexels:
- Dallas skyline at dusk — Jim Baker: https://www.pexels.com/video/drone-footage-of-dallas-skyline-at-dusk-15613466/
- Dallas at night — Jim Baker: https://www.pexels.com/video/drone-footage-of-the-city-of-dallas-at-night-16600939/
- Dallas skyline at night — Advancer Drones: https://www.pexels.com/video/dallas-skyline-at-night-with-lights-on-18505641/

Pexels license: https://www.pexels.com/license/
