export const site = {
  name: "Lindsey Homes LLC",
  shortName: "Lindsey Homes",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://www.lindseyhomes.com",
  region: "Dallas–Fort Worth",
  phone: "817-821-2476",
  phoneHref: "tel:+18178212476",
  email: "whitney@lindseyhomesllc.com",
  emailHref: "mailto:whitney@lindseyhomesllc.com",
  leadContact: "Whitney",
  logo: "/brand/lindsey-homes-logo.jpg",
};

export const buildTypes = [
  {
    title: "Custom residences",
    copy: "A home designed around your property, your priorities, and the way you want the spaces to work every day.",
  },
  {
    title: "Private estate homes",
    copy: "Larger properties where the main residence, guest spaces, outdoor living, landscape, and arrival are planned together from the start.",
  },
  {
    title: "Build on your land",
    copy: "Already have a property in Dallas–Fort Worth? We can begin with the land and shape the home around what makes that site work best.",
  },
  {
    title: "Design-forward residences",
    copy: "Homes with a clear architectural point of view, thoughtful materials, and interiors that feel polished without feeling overdone.",
  },
];

export const budgetBands = [
  { range: "$650K+", label: "Custom residences", note: "A starting point for a fully custom home, with final cost shaped by the property, size, architecture, site work, and finish selections." },
  { range: "$1M+", label: "High-end custom homes", note: "More room for architectural detail, specialty spaces, premium materials, and expanded indoor-outdoor living." },
  { range: "$1.5M+", label: "Luxury residences", note: "Larger custom homes with a deeper level of architectural, interior, and finish detail." },
  { range: "$2M+", label: "Estate residences", note: "Estate-scale homes with substantial finish packages, outdoor living, and more involved site planning." },
  { range: "$2.5M+", label: "Private estates", note: "Highly tailored properties where the home, guest spaces, landscape, and amenities are designed as one complete estate." },
  { range: "$4M+", label: "Signature estates", note: "One-of-a-kind projects shaped around the property, architecture, lifestyle, and long-term vision of the owner." },
];

export const residenceCollection = [
  {
    slug: "the-reserve",
    name: "The Reserve",
    startingAt: "Starting at $2.5M+",
    status: "Featured residence",
    totalSqFt: "6,890 sq. ft.",
    mainResidence: "5,842 sq. ft.",
    guestHouse: "1,048 sq. ft.",
    bedrooms: "6 bedrooms",
    fullBaths: "6 full bathrooms",
    halfBaths: "2 half bathrooms",
    garage: "5-car garage",
    amenities: ["Guest house / in-law suite", "Two pools", "Outdoor living", "Study", "Game room", "Media room"],
  },
];

export const imageDisclaimer =
  "The Reserve images and floor plan are concept visuals created for the residence, not photographs of a completed Lindsey Homes project. Final plans, specifications, and pricing will be developed for the actual property and may change with engineering, site conditions, selections, and location. Other reference photography is shown for design inspiration only.";
