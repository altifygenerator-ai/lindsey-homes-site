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
  lindseyKitchen: {
    id: "lindsey-kitchen-feature",
    src: "/luxury/lindsey-kitchen-feature.webp",
    alt: "Luxury kitchen with dual stone islands, brass pendant lighting, and warm wood flooring",
    label: "Kitchens",
    photographer: "Client-supplied design image",
    sourcePage: "",
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
  reserveKitchen: local("reserve-kitchen", "reserve-kitchen.jpg", "Luxury kitchen concept for The Reserve", "Kitchen"),
  reserveGreatRoom: local("reserve-great-room", "reserve-great-room.jpg", "Open great room and kitchen concept for The Reserve", "Great room"),
};

export const budgetPhotos: StockPhoto[][] = [
  [photos.luxuryExterior, photos.dallasStone, photos.dallasMediterranean],
  [photos.luxuryLiving, photos.dallasEntryDetail],
  [photos.luxuryKitchen, photos.luxuryLiving],
  [photos.luxuryBath, photos.luxuryLiving],
  [photos.luxuryOutdoor, photos.luxuryExterior],
];

export const stockPhotoList = budgetPhotos.flat();
