import Link from "next/link";
import { ImageSlot } from "@/components/ImageSlot";
import { LeadForm } from "@/components/LeadForm";
import { ContactBand } from "@/components/ContactBand";
import { buildTypes, imageDisclaimer, site } from "@/data/site";
import { photos } from "@/data/photos";

export default function HomePage() {
  return (
    <>
      <section className="hero luxury-hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="hero-kicker">North Texas Custom Residential</p>
            <h1>Custom homes with the presence, detail, and finish the property deserves.</h1>
            <p className="hero-lead">Lindsey Homes builds fully custom residences, private estate homes, and build-to-suit projects across North Texas. Every project begins with the site, the architecture, and the level of finish expected from the completed home.</p>
            <div className="hero-actions">
              <Link className="button-gold" href="/contact">Request a consultation</Link>
              <Link className="hero-text-link" href="/custom-homes">Explore custom homes →</Link>
            </div>
            <div className="hero-detail-line">
              <span>Custom residences</span>
              <span>Private estates</span>
              <span>Land + build-to-suit</span>
            </div>
          </div>

          <div className="hero-visual">
            <ImageSlot className="hero-image" aspect="portrait" src={photos.glassPoolEstate.src} alt={photos.glassPoolEstate.alt} loading="eager" showLabel={false} />
            <div className="hero-visual-note">
              <span>Residential building</span>
              <strong>North Texas</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="editorial-intro shell section-space">
        <div className="editorial-intro-title">
          <span className="eyebrow">Lindsey Homes</span>
          <h2>A higher standard should be visible in the details.</h2>
        </div>
        <div className="editorial-intro-copy">
          <p>Luxury is not one finish package or one architectural style. It is the way the property, plan, materials, proportions, and final execution work together.</p>
          <p>Lindsey Homes approaches custom residential work as a complete project, with the home and the land considered together from the beginning.</p>
          <Link className="text-link" href="/about">About the company →</Link>
        </div>
      </section>

      <section className="residence-showcase">
        <div className="shell residence-showcase-head">
          <span className="eyebrow eyebrow-light">Residential work</span>
          <h2>Built for different properties, different priorities, and different levels of scale.</h2>
        </div>

        <div className="shell residence-rows">
          {buildTypes.slice(0, 3).map((item, index) => {
            const image = [photos.glassWoodExterior, photos.dallasStone, photos.ruralPoolAerial][index];
            return (
              <article className="residence-row" key={item.title}>
                <ImageSlot className="residence-image" src={image.src} alt={image.alt} showLabel={false} />
                <div className="residence-copy">
                  <span>{index === 0 ? "Custom" : index === 1 ? "Estate" : "Property + build"}</span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="design-section shell section-space">
        <div className="design-heading">
          <span className="eyebrow">Architectural direction</span>
          <h2>Clean lines, strong materials, considered interiors, and outdoor spaces that belong to the home.</h2>
          <p>Use the design gallery as a starting point for conversations around architecture, finish level, interior character, and the overall feel of the residence.</p>
          <Link className="text-link" href="/inspiration">Explore design inspiration →</Link>
        </div>

        <div className="luxury-mosaic">
          <ImageSlot className="luxury-mosaic-main" src={photos.villaPool.src} alt={photos.villaPool.alt} showLabel={false} />
          <ImageSlot src={photos.woodKitchen.src} alt={photos.woodKitchen.alt} eyebrow="Interior" title="Kitchen + gathering" />
          <ImageSlot src={photos.luxeMarbleBath.src} alt={photos.luxeMarbleBath.alt} eyebrow="Interior" title="Primary suite" />
          <ImageSlot className="luxury-mosaic-wide" src={photos.poolPatio.src} alt={photos.poolPatio.alt} eyebrow="Outdoor" title="Pool + exterior living" />
        </div>
      </section>

      <section className="property-section">
        <div className="shell property-grid">
          <div className="property-image-wrap">
            <ImageSlot className="property-image" aspect="portrait" src={photos.ruralPoolAerial.src} alt={photos.ruralPoolAerial.alt} showLabel={false} />
          </div>
          <div className="property-copy">
            <span className="eyebrow eyebrow-light">Land + residence</span>
            <h2>The right house starts with understanding the property.</h2>
            <p>Access, orientation, views, outdoor living, privacy, and the way the home sits on the land all shape the final project. If the property is already secured, the conversation can start there. If not, Lindsey Homes can help bring the land and build into the same planning process.</p>
            <Link href="/contact" className="text-link-light">Discuss a property →</Link>
          </div>
        </div>
      </section>

      <section className="experience-section shell section-space">
        <div className="experience-title">
          <span className="eyebrow">The build experience</span>
          <h2>Clear decisions. Careful execution. No unnecessary noise.</h2>
        </div>
        <div className="experience-list">
          <div><strong>Property + feasibility</strong><p>Start with the site, goals, project scale, and the practical decisions that affect the build.</p></div>
          <div><strong>Architecture + direction</strong><p>Bring plans, inspiration, or an early idea and shape the residence around the property and the client.</p></div>
          <div><strong>Selections + finish</strong><p>Develop the material and finish decisions that give the home its character and level of refinement.</p></div>
          <div><strong>Construction + communication</strong><p>Keep the project moving with clear expectations, direct communication, and attention to the finished work.</p></div>
        </div>
      </section>

      <section className="floor-plan-preview">
        <div className="shell floor-plan-grid">
          <div>
            <span className="eyebrow eyebrow-light">Floor plans</span>
            <h2>A curated plan collection is coming soon.</h2>
            <p>Future plans will be presented as starting points, not fixed packages. Site conditions, layout changes, finish selections, and the overall project can still shape the final home.</p>
            <Link href="/floor-plans" className="text-link-light">Floor plan information →</Link>
          </div>
          <div className="plan-linework" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
      </section>

      <section className="investment-section shell section-space">
        <div className="investment-statement">
          <span className="eyebrow">Project investment</span>
          <h2>From custom residences around $450K to estate projects above $4M.</h2>
        </div>
        <div className="investment-copy">
          <p>The number is only useful when it is tied to the actual project. Square footage, architecture, land, site work, material selections, finish level, outdoor spaces, and location all affect final cost.</p>
          <p>Use the range as a broad starting point, then let the property and scope define the real conversation.</p>
          <small>{imageDisclaimer}</small>
        </div>
      </section>

      <section className="lead-section shell section-space">
        <div className="lead-intro">
          <span className="eyebrow">Request a consultation</span>
          <h2>Bring the property, the plans, or the idea you want to explore.</h2>
          <p>Share what you know today. Whitney is the direct contact for new residential inquiries and will follow up from there.</p>
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
