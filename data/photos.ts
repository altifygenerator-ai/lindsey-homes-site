export type StockPhoto = {
  id: string;
  src: string;
  alt: string;
  label: string;
  photographer: string;
  sourcePage: string;
};

const pexels = (id: string) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=2000`;

const local = (id: string, file: string, alt: string, label: string): StockPhoto => ({
  id,
  src: `/projects/reserve/${file}`,
  alt,
  label,
  photographer: "Lindsey Homes concept imagery",
  sourcePage: "",
});

const residence = (id: string, path: string, alt: string, label: string): StockPhoto => ({
  id,
  src: `/residences/${path}`,
  alt,
  label,
  photographer: "Lindsey Homes design material",
  sourcePage: "",
});

const feature = (id: string, file: string, alt: string, label: string): StockPhoto => ({
  id,
  src: `/features/${file}`,
  alt,
  label,
  photographer: "Client-provided design imagery",
  sourcePage: "",
});

const stock = (id: string, alt: string, label: string, photographer: string, sourcePage: string): StockPhoto => ({
  id,
  src: pexels(id),
  alt,
  label,
  photographer,
  sourcePage,
});

export const photos: Record<string, StockPhoto> = {
  dallasSkyline: stock(
    "18061788",
    "Downtown Dallas skyline illuminated at sunset with Reunion Tower",
    "Dallas–Fort Worth",
    "Ricardo Olvera",
    "https://www.pexels.com/photo/sunset-in-dallas-18061788/"
  ),
  dallasStone: stock(
    "23930020",
    "Stone residence in Dallas, Texas with traditional architectural detailing",
    "Dallas residential reference",
    "Nuray",
    "https://www.pexels.com/photo/mansion-with-stone-fence-23930020/"
  ),
  dallasMediterranean: stock(
    "23928929",
    "Stone Mediterranean-style residence in Dallas, Texas",
    "Dallas residential reference",
    "Nuray",
    "https://www.pexels.com/photo/view-on-a-mansion-23928929/"
  ),
  dallasEntryDetail: stock(
    "21953233",
    "Stone residential entry with architectural lighting in Dallas, Texas",
    "Dallas architectural detail",
    "Nuray",
    "https://www.pexels.com/photo/vintage-lamps-on-stone-building-wall-21953233/"
  ),

  luxuryExterior: stock(
    "8134821",
    "Contemporary luxury home exterior with a landscaped drive",
    "Luxury homes",
    "Max Vakhtbovych",
    "https://www.pexels.com/photo/modern-house-exterior-design-8134821/"
  ),
  luxuryLiving: stock(
    "32025967",
    "Luxury open-concept living room and kitchen with natural light",
    "Interiors",
    "Christopher Moon",
    "https://www.pexels.com/photo/luxury-modern-kitchen-and-living-room-interior-design-32025967/"
  ),
  luxuryKitchen: stock(
    "8146212",
    "Elegant modern kitchen with marble surfaces and refined finishes",
    "Kitchens",
    "Max Vakhtbovych",
    "https://www.pexels.com/photo/modern-kitchen-interior-design-with-tiles-8146212/"
  ),
  luxuryBath: stock(
    "7031572",
    "Spacious modern luxury bathroom with clean architectural lines",
    "Bathrooms",
    "Max Vakhtbovych",
    "https://www.pexels.com/photo/luxury-modern-home-bathroom-interior-7031572/"
  ),
  luxuryOutdoor: stock(
    "28586202",
    "Modern luxury home with glass facade and pool",
    "Outdoor living",
    "Jonathan Borba",
    "https://www.pexels.com/photo/modern-luxury-home-with-glass-facade-and-pool-28586202/"
  ),

  featureKitchen: feature(
    "feature-kitchen",
    "lindsey-feature-kitchen.webp",
    "Warm contemporary kitchen and dining space with tall windows and dark cabinetry",
    "Kitchen"
  ),
  featureGreatRoom: feature(
    "feature-great-room",
    "lindsey-feature-great-room.webp",
    "Bright great room with fireplace, open railing, and dining area",
    "Great room"
  ),

  reserveFront: local("reserve-front", "reserve-front-evening.webp", "The Reserve concept residence exterior at sunset", "The Reserve"),
  reservePool: local("reserve-pool", "reserve-pool-estate.webp", "The Reserve concept residence pool and backyard", "Pool + outdoor living"),
  reserveEntry: local("reserve-entry", "reserve-entry.webp", "The Reserve concept residence entry", "Arrival"),
  reserveBath: local("reserve-bath", "reserve-primary-bath.jpg", "Luxury primary bathroom concept for The Reserve", "Primary bath"),
  reserveOutdoor: local("reserve-outdoor", "reserve-outdoor-living.webp", "Covered outdoor living concept for The Reserve", "Outdoor living"),
  reserveGuest: local("reserve-guest", "reserve-guest-house.webp", "Guest house concept for The Reserve", "Guest house"),
  reserveDriveway: local("reserve-driveway", "reserve-driveway.webp", "The Reserve concept residence with multi-car garage and landscaped drive", "Estate arrival"),
  reserveFloorPlan: local("reserve-plan", "reserve-floor-plan.jpg", "Concept floor plan for The Reserve", "Concept plan"),
  reserveWide: local("reserve-wide", "reserve-front-wide.webp", "Wide exterior concept rendering of The Reserve", "The Reserve"),
  reservePresentation: local("reserve-presentation", "reserve-presentation.webp", "The Reserve concept presentation with residence, floor plans, and site plan", "Residence concept"),
  reserveKitchen: {
    id: "reserve-kitchen",
    src: "/luxury/lindsey-kitchen-reference.webp",
    alt: "Luxury kitchen concept for The Reserve with warm white cabinetry, stone islands, brass pendant lighting, and garden views",
    label: "Kitchen",
    photographer: "Client-provided Reserve design image",
    sourcePage: "",
  },
  reserveGreatRoom: local("reserve-great-room", "reserve-great-room.jpg", "Open great room and kitchen concept for The Reserve", "Great room"),

  theLindseyFront: residence(
    "the-lindsey-front",
    "the-lindsey/the-lindsey-front.webp",
    "The Lindsey modern luxury residence exterior at sunset",
    "The Lindsey"
  ),
  theLindseyAngle: residence(
    "the-lindsey-angle",
    "the-lindsey/the-lindsey-angle.webp",
    "Angled exterior concept view of The Lindsey",
    "The Lindsey exterior"
  ),
  theLindseyFloorPlan: residence(
    "the-lindsey-floor-plan",
    "the-lindsey/the-lindsey-floor-plan.webp",
    "The Lindsey one-story 5,312 square foot floor plan and residence presentation",
    "The Lindsey floor plan"
  ),

  blackwoodPresentation: residence(
    "blackwood-estate-presentation",
    "blackwood-estate/blackwood-estate-presentation.webp",
    "Blackwood Estate luxury black farmhouse residence presentation",
    "Blackwood Estate"
  ),
  blackwoodFloorPlan: residence(
    "blackwood-estate-floor-plan",
    "blackwood-estate/blackwood-estate-floor-plan.webp",
    "Blackwood Estate approximately 4,568 square foot one-story floor plan",
    "Blackwood Estate floor plan"
  ),
  oakRidgePresentation: residence(
    "oak-ridge-presentation",
    "signature/oak-ridge-presentation.webp",
    "Oak Ridge Signature Series residence presentation",
    "Oak Ridge"
  ),
  oakRidgeFloorPlan: residence(
    "oak-ridge-floor-plan",
    "signature/oak-ridge-floor-plan.webp",
    "Oak Ridge approximately 3,200 square foot main floor plan",
    "Oak Ridge floor plan"
  ),
  cedarGrovePresentation: residence(
    "cedar-grove-presentation",
    "signature/cedar-grove-presentation.webp",
    "Cedar Grove Signature Series residence presentation",
    "Cedar Grove"
  ),
  cedarGroveFloorPlan: residence(
    "cedar-grove-floor-plan",
    "signature/cedar-grove-floor-plan.webp",
    "Cedar Grove approximately 3,100 square foot floor plan",
    "Cedar Grove floor plan"
  ),
};

export const budgetPhotos: StockPhoto[][] = [
  [photos.luxuryExterior, photos.dallasStone, photos.dallasMediterranean],
  [photos.featureGreatRoom, photos.luxuryLiving],
  [photos.featureKitchen, photos.luxuryKitchen],
  [photos.luxuryBath, photos.luxuryLiving],
  [photos.luxuryOutdoor, photos.luxuryExterior],
];

export const stockPhotoList = budgetPhotos.flat();
