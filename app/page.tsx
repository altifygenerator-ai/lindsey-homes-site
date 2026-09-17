import Link from "next/link";
import { ImageSlot } from "@/components/ImageSlot";
import { LeadForm } from "@/components/LeadForm";
import { ContactBand } from "@/components/ContactBand";
import { HeroGallery } from "@/components/HeroGallery";
import { imageDisclaimer, residenceCollection, site } from "@/data/site";
import { photos } from "@/data/photos";

export default function HomePage() {
  const reserve = residenceCollection[0];

  return (
    <>
      <section className="hero-gallery-shell">
        <HeroGallery
          slides={[
            { src: photos.dallasSkyline.src, alt: photos.dallasSkyline.alt, position: "center 48%" },
            { src: photos.reserveFront.src, alt: photos.reserveFront.alt, position: "center 54%" },
            { src: photos.reservePool.src, alt: photos.reservePool.alt, position: "center 54%" },
            { src: photos.reserveOutdoor.src, alt: photos.reserveOutdoor.alt, position: "center 52%" },
            { src: photos.dallasStone.src, alt: photos.dallasStone.alt, position: "center" },
          ]}
        />
        <div className="shell hero-gallery-content">
          <div className="hero-gallery-copy">
            <p className="hero-kicker">Custom Homes · Dallas–Fort Worth</p>
            <h1>A home should feel considered from the first look to the last detail.</h1>
            <p className="hero-lead">
              Lindsey Homes builds custom residences and private estates across Dallas–Fort Worth, with each home shaped around the property, the architecture, and the way you want to live.
            </p>
            <div className="hero-actions">
              <Link className="button-gold" href="/contact">Start a conversation</Link>
              <Link className="hero-text-link" href="/floor-plans">View residences →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="editorial-intro shell section-space">
        <div className="editorial-intro-title">
          <span className="eyebrow">Lindsey Homes</span>
          <h2>Homes with presence, without trying too hard.</h2>
        </div>
        <div className="editorial-intro-copy">
          <p>The best custom homes feel right as a whole. The proportions make sense. The materials belong together. The rooms flow naturally, and the details still feel good long after the first impression.</p>
          <p>That is the standard we bring to custom homes and estate properties throughout Dallas–Fort Worth.</p>
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
              <p>The Reserve is designed for the way a true estate is lived in: generous gathering spaces, a separate guest residence, resort-style outdoor living, and an arrival that feels special before you ever step inside.</p>
              <Link className="text-link-light" href="/floor-plans">Explore The Reserve →</Link>
            </div>
          </article>
          <article className="residence-row">
            <ImageSlot className="residence-image" src={photos.reservePool.src} alt={photos.reservePool.alt} showLabel={false} />
            <div className="residence-copy">
              <span>Outdoor living</span>
              <h3>The backyard should feel like part of the home.</h3>
              <p>Covered entertaining space, pools, guest accommodations, landscape, and the connection between indoors and out are planned as part of the property, not treated as an afterthought.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="design-section shell section-space">
        <div className="design-heading">
          <span className="eyebrow">The details</span>
          <h2>Beautiful rooms should still feel comfortable to live in.</h2>
          <p>Natural stone, warm wood, strong lighting, thoughtful cabinetry, generous glass, and well-planned outdoor spaces can make a home feel elevated without making it feel staged.</p>
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
            <h2>The lot should help shape the house.</h2>
            <p>How you approach the home, where the garage sits, what you want to see from the windows, how much privacy you want, and where outdoor living belongs all matter. Those are decisions worth getting right before the plans are finished.</p>
            <Link href="/contact" className="text-link-light">Tell us about your property →</Link>
          </div>
        </div>
      </section>

      <section className="floor-plan-preview">
        <div className="shell floor-plan-grid">
          <div>
            <span className="eyebrow eyebrow-light">Residence collection</span>
            <h2>Start with a home you love, then make it yours.</h2>
            <p>The Reserve is the first home in the Lindsey Homes residence collection. More designs are on the way, each created as a strong starting point that can still be tailored to the property and the people who will live there.</p>
            <Link href="/floor-plans" className="text-link-light">Explore the collection →</Link>
          </div>
          <ImageSlot src={photos.reserveFloorPlan.src} alt={photos.reserveFloorPlan.alt} showLabel={false} />
        </div>
      </section>

      <section className="investment-section shell section-space">
        <div className="investment-statement">
          <span className="eyebrow">Investment</span>
          <h2>Custom homes from around $650K to multi-million-dollar estate properties.</h2>
        </div>
        <div className="investment-copy">
          <p>Every home is different, and the final cost should reflect the home you actually want to build. Size, architecture, the lot, site work, materials, interior selections, outdoor spaces, and location all play a part.</p>
          <p>If you have a budget range in mind, we can talk through what makes sense within it.</p>
          <small>{imageDisclaimer}</small>
        </div>
      </section>

      <section className="lead-section shell section-space">
        <div className="lead-intro">
          <span className="eyebrow">Start a conversation</span>
          <h2>Tell us what you are thinking about building.</h2>
          <p>You do not need to have every decision made. If you have a property, a plan, a few inspiration photos, or simply a budget and an idea, that is enough to start.</p>
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
