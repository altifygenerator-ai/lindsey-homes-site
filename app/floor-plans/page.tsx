import type { Metadata } from "next";
import Link from "next/link";
import { ImageSlot } from "@/components/ImageSlot";
import { ContactBand } from "@/components/ContactBand";
import { photos } from "@/data/photos";

export const metadata: Metadata = {
  title: "Floor Plans",
  description: "Floor plan information for Lindsey Homes custom residential projects in North Texas.",
};

export default function FloorPlansPage() {
  return (
    <>
      <section className="page-hero page-hero--plans">
        <div className="shell page-hero-grid">
          <div>
            <span className="eyebrow eyebrow-light">Floor Plans</span>
            <h1>A starting point should still leave room for the property and the client.</h1>
            <p>Lindsey Homes is preparing a curated floor plan collection for future residential projects. Plans will be presented as a place to begin, with the final home still shaped by site conditions, layout changes, architecture, and finish selections.</p>
            <Link className="text-link-light" href="/contact">Ask about plan availability →</Link>
          </div>
          <ImageSlot className="page-hero-image" src={photos.glassWoodExterior.src} alt={photos.glassWoodExterior.alt} loading="eager" showLabel={false} />
        </div>
      </section>

      <section className="plans-intro shell section-space">
        <div>
          <span className="eyebrow">Plan collection</span>
          <h2>Floor plans will be added here as the collection is finalized.</h2>
        </div>
        <div>
          <p>If you already have plans, a sketch, or a residence you want to use as architectural direction, there is no need to wait for the plan collection. Those materials can be part of the first project conversation now.</p>
          <Link className="text-link" href="/contact">Request a consultation →</Link>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
