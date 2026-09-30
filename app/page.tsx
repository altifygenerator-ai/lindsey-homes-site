import type { Metadata } from "next";
import Link from "next/link";
import { ContactChoice } from "@/components/ContactChoice";
import { HeroSkylineVideo } from "@/components/HeroSkylineVideo";
import { LeadForm } from "@/components/LeadForm";
import { ReserveFeature } from "@/components/ReserveFeature";
import { LindseyResidenceFeature } from "@/components/LindseyResidenceFeature";
import { BlackwoodEstateFeature } from "@/components/BlackwoodEstateFeature";
import { EliaGroveFeature } from "@/components/EliaGroveFeature";
import { SignatureSeries } from "@/components/SignatureSeries";
import { site } from "@/data/site";
import { designBuckets } from "@/data/photos";

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
        <HeroSkylineVideo />
        <div className="panorama-hero-vignette" aria-hidden="true" />
        <div className="shell home-hero-content">
          <div className="home-hero-copy">
            <span>Dallas–Fort Worth</span>
            <h1>Custom Homes &amp; Private Estates</h1>

            <div className="home-hero-support">
              <p className="home-hero-property">
                Built on your land.<br />
                Or let us help you find the perfect property.
              </p>

              <p className="home-hero-service">
                With our in-house Realtor, architect and engineering team, plus approved lending partners
                offering FHA, VA, and conventional financing, we make the journey from land to home simple
                and personal.
              </p>

              <p className="home-hero-path">From land. To financing. To floor plans. To home.</p>
            </div>

            <ContactChoice label="Schedule Your Private Consultation" />
          </div>
        </div>
      </section>

      <ReserveFeature />
      <LindseyResidenceFeature />
      <BlackwoodEstateFeature />
      <EliaGroveFeature />
      <SignatureSeries />

      <section className="visual-gallery-section">
        <div className="shell visual-gallery-heading">
          <span className="eyebrow">Lindsey Homes</span>
          <h2>Luxury, expressed through the details.</h2>
        </div>
        <div className="shell visual-gallery-grid visual-gallery-grid--seven">
          <Link className="visual-tile visual-tile--wide" href="/inspiration#great-rooms"><img src={designBuckets.greatRooms[0].src} alt={designBuckets.greatRooms[0].alt} /><span>Great Rooms</span></Link>
          <Link className="visual-tile" href="/inspiration#kitchens"><img src={designBuckets.kitchens[0].src} alt={designBuckets.kitchens[0].alt} /><span>Kitchens</span></Link>
          <Link className="visual-tile" href="/inspiration#bathrooms"><img src={designBuckets.bathrooms[0].src} alt={designBuckets.bathrooms[0].alt} /><span>Bathrooms</span></Link>
          <Link className="visual-tile visual-tile--wide" href="/inspiration#foyers-mudrooms"><img src={designBuckets.foyersMudrooms[0].src} alt={designBuckets.foyersMudrooms[0].alt} /><span>Foyers &amp; Mudrooms</span></Link>
          <Link className="visual-tile" href="/inspiration#primary-closets"><img src={designBuckets.primaryClosets[0].src} alt={designBuckets.primaryClosets[0].alt} /><span>Primary Closets</span></Link>
          <Link className="visual-tile" href="/inspiration#pantry-prep-kitchen"><img src={designBuckets.pantryPrep[0].src} alt={designBuckets.pantryPrep[0].alt} /><span>Pantry / Prep Kitchen</span></Link>
          <Link className="visual-tile visual-tile--wide" href="/inspiration#features"><img src={designBuckets.features[0].src} alt={designBuckets.features[0].alt} /><span>Features</span></Link>
        </div>
        <p className="shell visual-gallery-note">Design inspiration imagery is grouped by room and detail. Named residence imagery stays within each residence section.</p>
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

      <style>{`
        .home-hero {
          min-height: 800px;
          height: clamp(800px, 96vh, 1040px);
        }

        .home-hero-content {
          padding-top: 112px;
        }

        .home-hero-copy {
          width: min(940px, 94%);
        }

        .home-hero-copy h1 {
          font-size: clamp(3.7rem, 7vw, 8rem);
        }

        .home-hero-support {
          width: min(760px, 92%);
          margin-top: 26px;
          display: grid;
          justify-items: center;
          gap: 15px;
          text-align: center;
        }

        .home-hero-copy .home-hero-property,
        .home-hero-copy .home-hero-service,
        .home-hero-copy .home-hero-path {
          margin-top: 0;
        }

        .home-hero-copy .home-hero-property {
          max-width: 680px;
          color: #fff;
          font-size: clamp(.9rem, 1.18vw, 1.08rem);
          font-weight: 800;
          line-height: 1.55;
          letter-spacing: .085em;
          text-transform: uppercase;
        }

        .home-hero-copy .home-hero-service {
          max-width: 720px;
          color: rgba(255,255,255,.78);
          font-size: clamp(.84rem, 1.05vw, .98rem);
          line-height: 1.65;
          letter-spacing: .005em;
        }

        .home-hero-copy .home-hero-path {
          max-width: 700px;
          color: rgba(255,255,255,.94);
          font-size: clamp(.72rem, .9vw, .83rem);
          font-weight: 850;
          line-height: 1.5;
          letter-spacing: .13em;
          text-transform: uppercase;
        }

        .home-hero-copy .hero-contact-trigger {
          margin-top: 27px;
        }

        @media (max-width: 680px) {
          .home-hero {
            min-height: 0;
            height: auto;
          }

          .home-hero-content {
            min-height: 790px;
            align-items: end;
            padding: 152px 0 54px;
          }

          .home-hero-copy {
            width: 100%;
          }

          .home-hero-copy > span {
            margin-bottom: 12px;
            font-size: .63rem;
          }

          .home-hero-copy h1 {
            max-width: 360px;
            font-size: clamp(3rem, 15vw, 4.35rem);
            line-height: .91;
          }

          .home-hero-support {
            width: min(350px, 96%);
            margin-top: 22px;
            gap: 12px;
          }

          .home-hero-copy .home-hero-property {
            max-width: 335px;
            font-size: .78rem;
            line-height: 1.5;
            letter-spacing: .075em;
          }

          .home-hero-copy .home-hero-service {
            max-width: 340px;
            font-size: .78rem;
            line-height: 1.55;
          }

          .home-hero-copy .home-hero-path {
            max-width: 330px;
            font-size: .64rem;
            line-height: 1.55;
            letter-spacing: .105em;
          }

          .home-hero-copy .hero-contact-trigger {
            width: min(328px, 88vw);
            min-width: 0;
            margin-top: 24px;
            padding-inline: 16px;
            font-size: .66rem;
            letter-spacing: .105em;
          }
        }
      `}</style>
    </>
  );
}
