import type { Metadata } from "next";
import { ImageSlot } from "@/components/ImageSlot";
import { ContactBand } from "@/components/ContactBand";
import { photos } from "@/data/photos";

export const metadata: Metadata = {
  title: "Company",
  description: "Learn about Lindsey Homes, a North Texas custom residential builder focused on high-end homes, estate residences, and thoughtful project execution.",
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero page-hero--company">
        <div className="shell page-hero-grid">
          <div>
            <span className="eyebrow eyebrow-light">Lindsey Homes</span>
            <h1>A residential building company focused on the work.</h1>
            <p>Lindsey Homes was established to build distinctive custom residences with disciplined execution, clear communication, and a level of finish appropriate to the property and project.</p>
          </div>
          <ImageSlot className="page-hero-image" src={photos.terracePool.src} alt={photos.terracePool.alt} loading="eager" showLabel={false} />
        </div>
      </section>

      <section className="company-intro shell section-space">
        <div>
          <span className="eyebrow">Company</span>
          <h2>Custom residential work across North Texas.</h2>
        </div>
        <div className="company-intro-copy">
          <p>Lindsey Homes works across fully custom residences, private estate homes, land + build-to-suit opportunities, design-forward spec residences, and select residential development projects.</p>
          <p>The focus is straightforward: understand the property, define the right direction, make the important decisions deliberately, and carry that standard through the finished home.</p>
        </div>
      </section>

      <section className="leadership-section">
        <div className="shell leadership-grid">
          <ImageSlot aspect="portrait" src={photos.firelitLiving.src} alt={photos.firelitLiving.alt} showLabel={false} />
          <div>
            <span className="eyebrow eyebrow-light">Leadership</span>
            <h2>Experience across construction, land, and residential development.</h2>
            <p>Zac Lindsey is a Texas-licensed custom home builder with experience in land acquisition, high-end residential construction, and strategic real estate development.</p>
            <p>Chelsea Lindsey helps shape the company’s client experience and design-forward approach. Together, the company’s emphasis stays on thoughtful execution, clear decisions, and the quality of the finished residence.</p>
          </div>
        </div>
      </section>

      <section className="company-standard shell section-space">
        <div className="company-standard-title">
          <span className="eyebrow">The standard</span>
          <h2>Refinement without making the process harder than it needs to be.</h2>
        </div>
        <div className="company-standard-list">
          <div><strong>Clarity</strong><p>Keep the important project decisions visible and understandable as the work moves forward.</p></div>
          <div><strong>Craftsmanship</strong><p>Carry the architectural and finish intent into the details that shape the completed home.</p></div>
          <div><strong>Stewardship</strong><p>Treat the property, budget, materials, and project decisions with care.</p></div>
          <div><strong>Execution</strong><p>Build toward a finished residence that feels considered as a whole, not assembled one room at a time.</p></div>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
