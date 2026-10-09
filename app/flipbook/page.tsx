import type { Metadata } from "next";
import Link from "next/link";
import "./flipbook.css";

export const metadata: Metadata = {
  title: "Lindsey Homes Flipbook Draft",
  robots: {
    index: false,
    follow: false,
  },
};

const sections = [
  {
    number: "01",
    eyebrow: "Cover",
    title: "Custom Homes & Private Estates",
    copy: "Primary cover image, logo, short positioning line, and consultation call to action.",
    asset: "Final cover image / approved hero art",
  },
  {
    number: "02",
    eyebrow: "Approach",
    title: "One complete approach.",
    copy: "Land, architecture, engineering, financing, selections, permitting, and construction presented as one guided process.",
    asset: "Entry / interior hero image",
  },
  {
    number: "03",
    eyebrow: "What we do",
    title: "A Full-Service Custom Home Builder",
    copy: "Custom homes, land + property support, design + planning, and financing.",
    asset: "Service icons / approved copy",
  },
  {
    number: "04",
    eyebrow: "Where we build",
    title: "Serving North Texas",
    copy: "Service-area map and finalized county / community list.",
    asset: "Final Google service-area map graphic",
  },
  {
    number: "05",
    eyebrow: "Our process",
    title: "From Land to Home",
    copy: "Find or evaluate land → design & plan → secure financing → build → move in.",
    asset: "Process copy / optional timeline artwork",
  },
  {
    number: "06",
    eyebrow: "Homes",
    title: "Featured Residences",
    copy: "Selected plans, renderings, floor plans, and residence highlights.",
    asset: "Final featured homes / floor plans",
  },
  {
    number: "07",
    eyebrow: "Design",
    title: "Inspiration & Details",
    copy: "Kitchens, great rooms, baths, entries, outdoor living, and signature details.",
    asset: "Approved inspiration image set",
  },
  {
    number: "08",
    eyebrow: "Team + financing",
    title: "The people behind the process",
    copy: "Team bios, Realtor support, architect / engineering support, and approved lending-partner information.",
    asset: "Headshots, titles, bios, lender language",
  },
  {
    number: "09",
    eyebrow: "Start a conversation",
    title: "Ready when you are.",
    copy: "Final contact information, consultation CTA, service-area button, and QR destination.",
    asset: "Final contact QR / business-card QR",
  },
];

export default function FlipbookPage() {
  return (
    <main className="flipbook-page">
      <section className="flipbook-hero">
        <div className="shell">
          <div className="flipbook-hero__top">
            <span>Internal working draft</span>
            <Link href="/team-links">Business cards & referral links →</Link>
          </div>
          <h1>Lindsey Homes Flipbook</h1>
          <p>
            The structure is ready. These pages are intentionally built with content and asset
            placeholders so the final photos, floor plans, team information, and approved copy can
            be dropped in without rebuilding the layout.
          </p>
        </div>
      </section>

      <section className="shell flipbook-workspace">
        <div className="flipbook-checklist">
          <div>
            <span>Before final production</span>
            <h2>What we still need</h2>
          </div>
          <ul>
            <li>Final approved photos and renderings</li>
            <li>Floor plans to feature</li>
            <li>Final service-area county / community list</li>
            <li>Team names, titles, headshots, and short bios</li>
            <li>Approved financing / lending-partner wording</li>
            <li>Final business-card artwork and QR assignments</li>
          </ul>
        </div>

        <div className="flipbook-pages">
          {sections.map((section) => (
            <article className="flipbook-sheet" key={section.number}>
              <div className="flipbook-sheet__number">{section.number}</div>
              <div className="flipbook-sheet__copy">
                <span>{section.eyebrow}</span>
                <h2>{section.title}</h2>
                <p>{section.copy}</p>
              </div>
              <div className="flipbook-sheet__asset">
                <span>Placeholder</span>
                <strong>{section.asset}</strong>
                <small>Drop final approved asset here</small>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
