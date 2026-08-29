import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found shell section-space">
      <span className="eyebrow">404</span>
      <h1>That page isn’t available.</h1>
      <p>Return to Lindsey Homes or reach out directly about a residential project.</p>
      <div className="hero-actions">
        <Link className="button-gold" href="/">Back home</Link>
        <Link className="text-link" href="/contact">Contact Lindsey Homes →</Link>
      </div>
    </section>
  );
}
