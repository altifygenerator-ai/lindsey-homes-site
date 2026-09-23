import Link from "next/link";
import { residenceCollection } from "@/data/site";
import { photos } from "@/data/photos";

const cards = [
  { slug: "oak-ridge", image: photos.oakRidgePresentation },
  { slug: "cedar-grove", image: photos.cedarGrovePresentation },
];

export function SignatureSeries() {
  return (
    <section className="signature-series">
      <div className="shell signature-series-heading">
        <span className="eyebrow eyebrow-light">Signature Series</span>
        <h2>Customized to fit your family.</h2>
        <p>Thoughtful starting points with room to make the home your own.</p>
      </div>

      <div className="shell signature-series-grid">
        {cards.map(({ slug, image }) => {
          const residence = residenceCollection.find((item) => item.slug === slug);
          if (!residence) return null;

          return (
            <article className="signature-series-card" key={slug}>
              <div className="signature-series-image">
                <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
              </div>
              <div className="signature-series-copy">
                <div>
                  <span>{residence.status}</span>
                  <h3>{residence.name}</h3>
                </div>
                <div className="signature-series-specs">
                  <span>{residence.totalSqFt}</span>
                  <span>{residence.bedrooms}</span>
                  <span>{residence.bathrooms}</span>
                </div>
                <Link href="/floor-plans">View residence details →</Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
