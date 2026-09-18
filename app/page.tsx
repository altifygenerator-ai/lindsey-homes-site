import Link from "next/link";
import { ImageSlot } from "@/components/ImageSlot";
import { LeadForm } from "@/components/LeadForm";
import { ContactBand } from "@/components/ContactBand";
import { residenceCollection, site } from "@/data/site";
import { photos } from "@/data/photos";

export default function HomePage() {
  const reserve = residenceCollection[0];

  return (
    <>
      <section className="panorama-hero" aria-label="Dallas skyline at dusk and night">
        <img
          className="panorama-hero-fallback"
          src="/video/dallas-skyline-hero-poster.jpg"
          alt=""
          aria-hidden="true"
        />
        <video
          className="panorama-hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/video/dallas-skyline-hero-poster.jpg"
          aria-hidden="true"
        >
          <source src="/video/dallas-skyline-hero.mp4" type="video/mp4" />
        </video>
        <div className="panorama-hero-vignette" aria-hidden="true" />
      </section>

      <section className="hero-intro-band">
        <div className="shell hero-intro-grid">
          <div className="hero-intro-title">
            <span className="eyebrow eyebrow-light">Custom Homes · Dallas–Fort Worth</span>
            <h1>A custom home should feel like it belongs to you and to the property.</h1>
          </div>
          <div className="hero-intro-copy">
            <p>Lindsey Homes builds custom residences and private estates across Dallas–Fort Worth. We bring the home, the property, the interior details, and the outdoor spaces together from the beginning so the finished home feels complete.</p>
            <div className="hero-actions">
              <Link className="button-gold" href="/contact">Start a conversation</Link>
              <Link className="hero-text-link" href="/floor-plans">Explore residences →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="editorial-intro shell section-space">
        <div className="editorial-intro-title">
          <span className="eyebrow">Lindsey Homes</span>
          <h2>The difference is in how everything comes together.</h2>
        </div>
        <div className="editorial-intro-copy">
          <p>Good proportions. Natural light. Materials that belong together. Rooms that work for everyday life, not just for photographs. Those are the things that make a home feel special long after move-in.</p>
          <p>That is the standard Lindsey Homes brings to custom homes and estate properties throughout Dallas–Fort Worth.</p>
          <Link className="text-link" href="/custom-homes">See how we build →</Link>
        </div>
      </section>

      <section className="residence-showcase">
        <div className="shell residence-showcase-head">
          <span className="eyebrow eyebrow-light">Featured residence</span>
          <h2>{reserve.name} · {reserve.startingAt}</h2>
        </div>
        <div className="shell residence-rows">
          <article className="residence-row">
            <ImageSlot className="residence-image" src={photos.reserveFront.src} alt={photos.reserveFront.alt} showLabel={false} />
            <div className="residence-copy">
              <span>{reserve.status}</span>
              <h3>{reserve.totalSqFt} across the main residence and guest house.</h3>
              <p>The Reserve brings together generous living spaces, a separate guest residence, two pools, and dedicated spaces for work, media, and entertaining.</p>
              <Link className="text-link-light" href="/floor-plans">Explore The Reserve →</Link>
            </div>
          </article>
          <article className="residence-row">
            <ImageSlot className="residence-image" src={photos.reservePool.src} alt={photos.reservePool.alt} showLabel={false} />
            <div className="residence-copy">
              <span>Outdoor living</span>
              <h3>Made to enjoy inside and out.</h3>
              <p>Covered entertaining space, pools, landscape, and the connection back to the main residence are treated as part of the home from the start.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="design-section shell section-space">
        <div className="design-heading">
          <span className="eyebrow">The details</span>
          <h2>Luxury should still feel comfortable to live in.</h2>
          <p>Stone, wood, glass, lighting, cabinetry, hardware, and outdoor living all matter. The goal is not to make every finish compete for attention. It is to make the whole home feel right together.</p>
          <Link className="text-link" href="/inspiration">Explore the design gallery →</Link>
        </div>
        <div className="luxury-mosaic">
          <ImageSlot className="luxury-mosaic-main" src={photos.reserveGreatRoom.src} alt={photos.reserveGreatRoom.alt} showLabel={false} />
          <ImageSlot src={photos.reserveKitchen.src} alt={photos.reserveKitchen.alt} eyebrow="Interior" title="Kitchen" />
          <ImageSlot src={photos.reserveBath.src} alt={photos.reserveBath.alt} eyebrow="Interior" title="Primary bath" />
          <ImageSlot className="luxury-mosaic-wide" src={photos.reserveOutdoor.src} alt={photos.reserveOutdoor.alt} eyebrow="Outdoor" title="Covered living" />
        </div>
      </section>

      <section className="property-section">
        <div className="shell property-grid">
          <div className="property-image-wrap">
            <ImageSlot className="property-image" aspect="portrait" src={photos.reserveDriveway.src} alt={photos.reserveDriveway.alt} showLabel={false} />
          </div>
          <div className="property-copy">
            <span className="eyebrow eyebrow-light">Built for the property</span>
            <h2>The right home starts with the right fit on the lot.</h2>
            <p>Arrival, garage placement, views, privacy, natural light, and outdoor living all change the way a home should sit on the property. Those decisions are worth working through before the plans are finished.</p>
            <Link href="/contact" className="text-link-light">Tell us about your property →</Link>
          </div>
        </div>
      </section>

      <section className="floor-plan-preview">
        <div className="shell floor-plan-grid">
          <div>
            <span className="eyebrow eyebrow-light">Residence collection</span>
            <h2>A growing collection of homes with room to make them your own.</h2>
            <p>The Reserve is the first Lindsey Homes residence. Additional homes are being developed for different properties and investment levels, each with a clear design direction and the flexibility to be tailored to the people who will live there.</p>
            <Link href="/floor-plans" className="text-link-light">Explore the collection →</Link>
          </div>
          <ImageSlot src={photos.reserveFloorPlan.src} alt={photos.reserveFloorPlan.alt} showLabel={false} />
        </div>
      </section>

      <section className="investment-section shell section-space">
        <div className="investment-statement">
          <span className="eyebrow">Investment</span>
          <h2>Custom homes beginning around $650K, with private estates extending into the multi-millions.</h2>
        </div>
        <div className="investment-copy">
          <p>Every home is different. Size, architecture, the property, site work, materials, interior selections, outdoor spaces, and location all play a part in the final cost.</p>
          <p>If you already have an investment range in mind, we can talk through what makes sense within it and where you want to place the priorities.</p>
        </div>
      </section>

      <section className="lead-section shell section-space">
        <div className="lead-intro">
          <span className="eyebrow">Start a conversation</span>
          <h2>Tell us what you want to build.</h2>
          <p>You do not need to have every decision made. A property, a plan, a few inspiration photos, or simply a budget and an idea is enough to get started.</p>
          <div className="direct-contact">
            <span>{site.leadContact} · Sales</span>
            <a href={site.phoneHref}>{site.phone}</a>
            <a href={site.emailHref}>{site.email}</a>
          </div>
        </div>
        <LeadForm compact />
      </section>

      <ContactBand />
    </>
  );
}
