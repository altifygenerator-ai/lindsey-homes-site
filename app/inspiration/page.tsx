import type { Metadata } from "next";
import Link from "next/link";
import { ContactBand } from "@/components/ContactBand";
import { designBuckets } from "@/data/photos";
export const metadata: Metadata = { title: "Home Design Inspiration in Dallas–Fort Worth", description: "Explore Lindsey Homes design inspiration for great rooms, kitchens, bathrooms, foyers and mudrooms, primary closets, prep kitchens, and custom details.", alternates: { canonical: "/inspiration" } };
const sections = [
  { id: "great-rooms", eyebrow: "Great Rooms", title: "Living spaces with scale, warmth, and a strong architectural center.", images: designBuckets.greatRooms },
  { id: "kitchens", eyebrow: "Kitchens", title: "Cabinetry, stone, lighting, and workspaces designed as part of the whole home.", images: designBuckets.kitchens },
  { id: "bathrooms", eyebrow: "Bathrooms", title: "Quiet spa spaces, expressive materials, and details that make the room feel finished.", images: designBuckets.bathrooms },
  { id: "foyers-mudrooms", eyebrow: "Foyers & Mudrooms", title: "Front doors, stair halls, arrival spaces, and hardworking drop zones that still feel considered.", images: designBuckets.foyersMudrooms },
  { id: "primary-closets", eyebrow: "Primary Closets", title: "Storage planned like a room, with cabinetry, islands, display space, and everyday function.", images: designBuckets.primaryClosets },
  { id: "pantry-prep-kitchen", eyebrow: "Pantry / Prep Kitchen", title: "Back-of-house spaces that keep entertaining, storage, and daily prep organized.", images: designBuckets.pantryPrep },
  { id: "features", eyebrow: "Features", title: "The faucets, lighting, stone, fireplaces, ceilings, fixtures, and small details that give a home its character.", images: designBuckets.features },
];
export default function InspirationPage() { return <>
  <section className="page-hero page-hero--design inspiration-hero"><div className="shell inspiration-hero-grid"><div><span className="eyebrow eyebrow-light">Design</span><h1>Luxury, expressed through the details.</h1><p>Use these ideas as a starting point for spaces, materials, storage, lighting, and the features you want to make your own.</p></div><img src={designBuckets.greatRooms[0].src} alt={designBuckets.greatRooms[0].alt} /></div></section>
  <nav className="inspiration-jump" aria-label="Design inspiration categories"><div className="shell">{sections.map((section)=><a key={section.id} href={`#${section.id}`}>{section.eyebrow}</a>)}</div></nav>
  <div className="inspiration-sections">{sections.map((section,sectionIndex)=><section id={section.id} className={`inspiration-bucket ${sectionIndex%2?"inspiration-bucket--alt":""}`} key={section.id}><div className="shell"><div className="inspiration-bucket-heading"><span className="eyebrow">{section.eyebrow}</span><h2>{section.title}</h2></div><div className={`inspiration-bucket-grid inspiration-bucket-grid--${Math.min(section.images.length,4)}`}>{section.images.map((image,index)=><figure className={`inspiration-image inspiration-image--${index%5}`} key={`${section.id}-${image.src}-${index}`}><img src={image.src} alt={image.alt} loading="lazy" decoding="async"/><figcaption>{image.label}</figcaption></figure>)}</div></div></section>)}</div>
  <section className="design-cta shell section-space"><div><span className="eyebrow">Your direction</span><h2>Save what catches your eye.</h2></div><div><p>A few strong references can say more than a long list of finishes.</p><Link className="text-link" href="/contact">Share your ideas →</Link></div></section>
  <p className="shell inspiration-disclaimer">Design inspiration imagery is shown to communicate ideas, materials, layouts, and features. It is not presented as completed Lindsey Homes work unless specifically identified otherwise.</p><ContactBand />
</>; }
