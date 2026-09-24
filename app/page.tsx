import type { Metadata } from "next";
import Link from "next/link";
import { ContactChoice } from "@/components/ContactChoice";
import { LeadForm } from "@/components/LeadForm";
import { ReserveFeature } from "@/components/ReserveFeature";
import { LindseyResidenceFeature } from "@/components/LindseyResidenceFeature";
import { BlackwoodEstateFeature } from "@/components/BlackwoodEstateFeature";
import { SignatureSeries } from "@/components/SignatureSeries";
import { site } from "@/data/site";
import { photos } from "@/data/photos";

export const metadata: Metadata = {
  title: "Custom Home Builder in Dallas–Fort Worth",
  description: "Lindsey Homes builds custom homes, private estates, and build-on-your-land residences across Dallas–Fort Worth and North Texas.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Custom Home Builder in Dallas–Fort Worth | Lindsey Homes",
    description: "Custom homes, private estates, and build-on-your-land residences across Dallas–Fort Worth and North Texas.",
    url: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <section className="panorama-hero home-hero" aria-label="Dallas skyline at dusk and night">
        <img className="panorama-hero-fallback" src="/video/dallas-skyline-hero-poster.jpg" alt="" aria-hidden="true" />
        <video className="panorama-hero-video" autoPlay muted loop playsInline preload="metadata" poster="/video/dallas-skyline-hero-poster.jpg" aria-hidden="true">
          <source src="/video/dallas-skyline-hero.mp4" type="video/mp4" />
        </video>
        <div className="panorama-hero-vignette" aria-hidden="true" />
        <div className="shell home-hero-content">
          <div className="home-hero-copy">
            <span>Dallas–Fort Worth</span>
            <h1>Custom Homes &amp; Private Estates</h1>
            <p>Designed for North Texas. Built around the way you live.</p>
            <ContactChoice label="Schedule Your Consultation" />
          </div>
        </div>
      </section>

      <ReserveFeature />
      <LindseyResidenceFeature />
      <BlackwoodEstateFeature />
      <SignatureSeries />

      <section className="visual-gallery-section">
        <div className="shell visual-gallery-heading">
          <span className="eyebrow">Lindsey Homes</span>
          <h2>Luxury, expressed through the details.</h2>
        </div>
        <div className="shell visual-gallery-grid">
          <Link className="visual-tile visual-tile--wide" href="/inspiration#interiors">
            <img src={photos.inspirationGreatRoom.src} alt={photos.inspirationGreatRoom.alt} />
            <span>Interiors</span>
          </Link>
          <Link className="visual-tile" href="/inspiration#kitchens">
            <img src={photos.inspirationKitchenWhite.src} alt={photos.inspirationKitchenWhite.alt} />
            <span>Kitchens</span>
          </Link>
          <Link className="visual-tile" href="/inspiration#bathrooms">
            <img src={photos.inspirationBathNeutralSpa.src} alt={photos.inspirationBathNeutralSpa.alt} />
            <span>Bathrooms</span>
          </Link>
          <Link className="visual-tile" href="/inspiration#features">
            <img src={photos.inspirationFeatureMudroomDark.src} alt={photos.inspirationFeatureMudroomDark.alt} />
            <span>Features</span>
          </Link>
          <Link className="visual-tile visual-tile--wide" href="/inspiration#outdoor-living">
            <img src={photos.luxuryOutdoor.src} alt={photos.luxuryOutdoor.alt} />
            <span>Outdoor Living</span>
          </Link>
        </div>
        <p className="shell visual-gallery-note">Design inspiration imagery is shown to communicate style, materials, and features. Residence concept imagery remains within the individual residence sections.</p>
      </section>

      <section className="home-statement">
        <div className="shell home-statement-inner">
          <span>Custom Homes · Private Estates · Build on Your Land</span>
          <h2>One home. One clear point of view.</h2>
          <Link href="/about">Our approach →</Link>
        </div>
      </section>

      <section className="lead-section shell section-space home-lead">
        <div className="lead-intro">
          <span className="eyebrow">Start a conversation</span>
          <h2>Tell us what you want to build.</h2>
          <p>A property, a plan, or even a few inspiration photos is enough to start.</p>
          <div className="direct-contact">
            <span>{site.leadContact} · Sales</span>
            <a href={site.phoneHref}>{site.phone}</a>
            <a href={site.emailHref}>{site.email}</a>
          </div>
        </div>
        <LeadForm compact />
      </section>
    </>
  );
}
