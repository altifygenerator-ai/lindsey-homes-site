import type { Metadata } from "next";
import Link from "next/link";
import { ImageSlot } from "@/components/ImageSlot";
import { ContactBand } from "@/components/ContactBand";
import { photos } from "@/data/photos";

export const metadata: Metadata = {
  title: "Our Approach",
  description: "How Lindsey Homes approaches luxury custom residential building across Dallas–Fort Worth.",
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero page-hero--company">
        <div className="shell page-hero-grid">
          <div>
            <span className="eyebrow eyebrow-light">Our Approach</span>
            <h1>Luxury starts with getting the big decisions right.</h1>
            <p>The way a home sits on the property. The proportions of the rooms. The natural light. The materials you touch every day. Those choices matter more than adding detail simply for the sake of detail.</p>
          </div>
          <ImageSlot className="page-hero-image" src={photos.reserveEntry.src} alt={photos.reserveEntry.alt} loading="eager" showLabel={false} />
        </div>
      </section>

      <section className="company-intro shell section-space">
        <div>
          <span className="eyebrow">Lindsey Homes</span>
          <h2>A custom home should feel like one complete idea.</h2>
        </div>
        <div className="company-intro-copy">
          <p>Lindsey Homes builds custom residences and private estates across Dallas–Fort Worth, with the architecture, interiors, outdoor spaces, and property considered together from the beginning.</p>
          <p>That does not mean making the process more complicated. It means making the right decisions at the right time so the finished home feels intentional instead of pieced together.</p>
        </div>
      </section>

      <section className="dark-editorial-section">
        <div className="shell dark-editorial-grid">
          <ImageSlot aspect="portrait" src={photos.reserveGreatRoom.src} alt={photos.reserveGreatRoom.alt} showLabel={false} />
          <div>
            <span className="eyebrow eyebrow-light">From plan to finish</span>
            <h2>Every part of the home affects the way the rest of it feels.</h2>
            <p>Ceiling height changes a room. Window placement changes the light. The exterior changes the way you arrive. Cabinetry, stone, flooring, lighting, and millwork change how the interior feels every day.</p>
            <p>Keeping those decisions connected is what gives a custom home a sense of consistency from the street all the way through the last room.</p>
            <Link className="text-link-light" href="/contact">Talk with us about your home →</Link>
          </div>
        </div>
      </section>

      <section className="company-standard shell section-space">
        <div className="company-standard-title">
          <span className="eyebrow">What matters</span>
          <h2>A beautiful home that works just as well as it looks.</h2>
        </div>
        <div className="company-standard-list">
          <div><strong>The property</strong><p>Use the lot, orientation, access, views, and privacy to help shape the home instead of fighting against them.</p></div>
          <div><strong>The plan</strong><p>Create spaces that make sense together and support the way you actually plan to live in the house.</p></div>
          <div><strong>The materials</strong><p>Choose finishes because they belong in the home, not simply because they are expensive or fashionable.</p></div>
          <div><strong>The finish</strong><p>Carry the original idea through construction so the completed home feels resolved down to the details.</p></div>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
