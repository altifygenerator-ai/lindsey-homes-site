import type { Metadata } from "next";
import Link from "next/link";
import { ContactBand } from "@/components/ContactBand";
import { photos } from "@/data/photos";

export const metadata: Metadata = {
  title: "Home Design Inspiration in Dallas–Fort Worth",
  description: "Explore Lindsey Homes design inspiration for interiors, kitchens, bathrooms, custom features, and outdoor living across Dallas–Fort Worth.",
  alternates: { canonical: "/inspiration" },
  openGraph: {
    title: "Home Design Inspiration in Dallas–Fort Worth | Lindsey Homes",
    description: "Interiors, kitchens, bathrooms, custom features, and outdoor living inspiration for North Texas homes.",
    url: "/inspiration",
  },
};

const sections = [
  {
    id: "interiors",
    eyebrow: "Interiors",
    title: "Rooms with warmth, scale, and a strong architectural point of view.",
    images: [
      photos.inspirationGreatRoom,
      photos.inspirationStoneFireplace,
      photos.featureGreatRoom,
    ],
  },
  {
    id: "kitchens",
    eyebrow: "Kitchens",
    title: "Cabinetry, stone, lighting, and workspaces designed as part of the whole home.",
    images: [
      photos.inspirationKitchenWhite,
      photos.featureKitchen,
      photos.luxuryKitchen,
    ],
  },
  {
    id: "bathrooms",
    eyebrow: "Bathrooms",
    title: "From quiet spa spaces to richer, more expressive material palettes.",
    images: [
      photos.inspirationBathNeutralSpa,
      photos.inspirationBathPlumGreen,
      photos.inspirationBathVaultedMarble,
      photos.inspirationBathBrass,
      photos.inspirationBathGreenDouble,
      photos.inspirationBathOliveVaulted,
      photos.inspirationBathBlueShower,
      photos.inspirationBathBrassLight,
    ],
  },
  {
    id: "features",
    eyebrow: "Features",
    title: "The built-ins, storage, drop zones, fireplaces, and details that make a home work better.",
    images: [
      photos.inspirationFeatureMudroomAdventure,
      photos.inspirationFeatureMudroomDark,
      photos.inspirationFeatureMudroomGreen,
      photos.inspirationStoneFireplace,
    ],
  },
  {
    id: "outdoor-living",
    eyebrow: "Outdoor Living",
    title: "Covered spaces, pools, landscape, and a natural connection between inside and out.",
    images: [
      photos.luxuryOutdoor,
    ],
  },
];

export default function InspirationPage() {
  return (
    <>
      <section className="page-hero page-hero--design inspiration-hero">
        <div className="shell inspiration-hero-grid">
          <div>
            <span className="eyebrow eyebrow-light">Design</span>
            <h1>Details that feel connected.</h1>
            <p>Use these ideas as a starting point for materials, layout, storage, lighting, and the way the home should feel.</p>
          </div>
          <img src={photos.inspirationGreatRoom.src} alt={photos.inspirationGreatRoom.alt} />
        </div>
      </section>

      <nav className="inspiration-jump" aria-label="Design inspiration categories">
        <div className="shell">
          {sections.map((section) => (
            <a key={section.id} href={`#${section.id}`}>{section.eyebrow}</a>
          ))}
        </div>
      </nav>

      <div className="inspiration-sections">
        {sections.map((section, sectionIndex) => (
          <section
            id={section.id}
            className={`inspiration-bucket ${sectionIndex % 2 ? "inspiration-bucket--alt" : ""}`}
            key={section.id}
          >
            <div className="shell">
              <div className="inspiration-bucket-heading">
                <span className="eyebrow">{section.eyebrow}</span>
                <h2>{section.title}</h2>
              </div>

              <div className={`inspiration-bucket-grid inspiration-bucket-grid--${Math.min(section.images.length, 4)}`}>
                {section.images.map((image, index) => (
                  <figure
                    className={`inspiration-image inspiration-image--${index % 5}`}
                    key={`${section.id}-${image.id}-${index}`}
                  >
                    <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
                    <figcaption>{image.label}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="design-cta shell section-space">
        <div>
          <span className="eyebrow">Your direction</span>
          <h2>Save what catches your eye.</h2>
        </div>
        <div>
          <p>A few strong references can say more than a long list of finishes.</p>
          <Link className="text-link" href="/contact">Share your ideas →</Link>
        </div>
      </section>

      <p className="shell inspiration-disclaimer">
        Design inspiration imagery is shown to communicate ideas, materials, layouts, and features. It is not presented as completed Lindsey Homes work unless specifically identified otherwise.
      </p>

      <ContactBand />
    </>
  );
}
