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

export const photos: Record<string, StockPhoto> = {
  dallasSkyline: {
    id: "18061788",
    src: pexels("18061788"),
    alt: "Downtown Dallas skyline illuminated at sunset with Reunion Tower",
    label: "Dallas–Fort Worth",
    photographer: "Ricardo Olvera",
    sourcePage: "https://www.pexels.com/photo/sunset-in-dallas-18061788/",
  },
  dallasStone: {
    id: "23930020",
    src: pexels("23930020"),
    alt: "Stone residence in Dallas, Texas with traditional architectural detailing",
    label: "Dallas residential reference",
    photographer: "Nuray",
    sourcePage: "https://www.pexels.com/photo/mansion-with-stone-fence-23930020/",
  },
  dallasMediterranean: {
    id: "23928929",
    src: pexels("23928929"),
    alt: "Stone Mediterranean-style residence in Dallas, Texas",
    label: "Dallas residential reference",
    photographer: "Nuray",
    sourcePage: "https://www.pexels.com/photo/view-on-a-mansion-23928929/",
  },
  dallasEntryDetail: {
    id: "21953233",
    src: pexels("21953233"),
    alt: "Stone residential entry with architectural lighting in Dallas, Texas",
    label: "Dallas architectural detail",
    photographer: "Nuray",
    sourcePage: "https://www.pexels.com/photo/vintage-lamps-on-stone-building-wall-21953233/",
  },
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
  [photos.dallasStone, photos.dallasMediterranean, photos.dallasEntryDetail, photos.reserveGuest],
  [photos.reserveGuest, photos.reserveKitchen, photos.reserveBath, photos.reserveGreatRoom],
  [photos.reserveFront, photos.reserveKitchen, photos.reserveEntry, photos.reserveGreatRoom],
  [photos.reserveDriveway, photos.reservePool, photos.reserveBath, photos.reserveOutdoor],
  [photos.reserveWide, photos.reservePool, photos.reserveEntry, photos.reserveKitchen],
  [photos.reserveFront, photos.reservePool, photos.reserveOutdoor, photos.reserveGreatRoom],
];

export const stockPhotoList = budgetPhotos.flat();
