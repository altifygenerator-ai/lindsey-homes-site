export type StockPhoto = {
  id: string;
  src: string;
  alt: string;
  label: string;
  photographer: string;
  sourcePage: string;
};

type ResidenceSlide = {
  src: string;
  alt: string;
  eyebrow: string;
  title: string;
  position?: string;
};

const local = (id: string, src: string, alt: string, label: string): StockPhoto => ({
  id,
  src,
  alt,
  label,
  photographer: "Whitney / Lindsey Homes supplied imagery",
  sourcePage: "",
});

export const photos: Record<string, StockPhoto> = {
  reserveFront: local("reserve-front", "/projects/reserve/reserve-front-evening.webp", "The Reserve concept residence exterior at sunset", "The Reserve"),
  reservePool: local("reserve-pool", "/projects/reserve/reserve-pool-estate.webp", "The Reserve concept residence pool and backyard", "Pool + outdoor living"),
  reserveEntry: local("reserve-entry", "/projects/reserve/reserve-entry.webp", "The Reserve concept residence entry", "Arrival"),
  reserveBath: local("reserve-bath", "/projects/reserve/reserve-primary-bath.jpg", "Luxury primary bathroom concept for The Reserve", "Primary bath"),
  reserveOutdoor: local("reserve-outdoor", "/projects/reserve/reserve-outdoor-living.webp", "Covered outdoor living concept for The Reserve", "Outdoor living"),
  reserveGuest: local("reserve-guest", "/projects/reserve/reserve-guest-house.webp", "Guest house concept for The Reserve", "Guest house"),
  reserveDriveway: local("reserve-driveway", "/projects/reserve/reserve-driveway.webp", "The Reserve concept residence with multi-car garage and landscaped drive", "Estate arrival"),
  reserveFloorPlan: local("reserve-plan", "/projects/reserve/reserve-floor-plan.jpg", "Concept floor plan for The Reserve", "Concept plan"),
  reserveWide: local("reserve-wide", "/projects/reserve/reserve-front-wide.webp", "Wide exterior concept rendering of The Reserve", "The Reserve"),
  reservePresentation: local("reserve-presentation", "/projects/reserve/reserve-presentation.webp", "The Reserve concept presentation with residence, floor plans, and site plan", "Residence concept"),
  reserveKitchen: local("reserve-kitchen", "/luxury/lindsey-kitchen-reference.webp", "Luxury kitchen concept for The Reserve", "Kitchen"),
  reserveGreatRoom: local("reserve-great-room", "/projects/reserve/reserve-great-room.jpg", "Open great room and kitchen concept for The Reserve", "Great room"),

  theLindseyFront: local("the-lindsey-front", "/residences/the-lindsey/the-lindsey-front.webp", "The Lindsey modern luxury residence exterior at sunset", "The Lindsey"),
  theLindseyAngle: local("the-lindsey-angle", "/residences/the-lindsey/the-lindsey-angle.webp", "Angled exterior concept view of The Lindsey", "The Lindsey exterior"),
  theLindseyFloorPlan: local("the-lindsey-floor-plan", "/residences/the-lindsey/the-lindsey-floor-plan.webp", "The Lindsey one-story 5,312 square foot floor plan and residence presentation", "The Lindsey floor plan"),

  blackwoodExterior: local("blackwood-exterior", "/residences/blackwood-estate/blackwood-exterior.webp", "Blackwood Estate clean exterior concept", "Blackwood Estate"),
  blackwoodPresentation: local("blackwood-presentation", "/residences/blackwood-estate/blackwood-presentation.webp", "Blackwood Estate residence presentation", "Blackwood Estate"),
  blackwoodFloorPlan: local("blackwood-floor-plan", "/residences/blackwood-estate/blackwood-floor-plan.webp", "Blackwood Estate preliminary floor plan", "Blackwood Estate floor plan"),

  eliaExterior: local("elia-exterior", "/residences/elia-grove/elia-exterior.webp", "Elia Grove Mediterranean farmhouse exterior concept", "Elia Grove"),
  eliaPresentation: local("elia-presentation", "/residences/elia-grove/elia-presentation.webp", "Elia Grove Estate Collection presentation", "Elia Grove"),
  eliaFloorPlan: local("elia-floor-plan", "/residences/elia-grove/elia-floor-plan.webp", "Elia Grove preliminary main floor plan", "Elia Grove floor plan"),

  oakRidgePresentation: local("oak-ridge-presentation", "/residences/signature/oak-ridge-presentation.webp", "Oak Ridge Signature Series residence presentation", "Oak Ridge"),
  oakRidgeFloorPlan: local("oak-ridge-floor-plan", "/residences/signature/oak-ridge-floor-plan.webp", "Oak Ridge approximately 3,200 square foot main floor plan", "Oak Ridge floor plan"),
  cedarGrovePresentation: local("cedar-grove-presentation", "/residences/signature/cedar-grove-presentation.webp", "Cedar Grove Signature Series residence presentation", "Cedar Grove"),
  cedarGroveFloorPlan: local("cedar-grove-floor-plan", "/residences/signature/cedar-grove-floor-plan.webp", "Cedar Grove approximately 3,100 square foot floor plan", "Cedar Grove floor plan"),

  featureKitchen: local("feature-kitchen", "/features/lindsey-feature-kitchen.webp", "Warm contemporary kitchen and dining space with tall windows and dark cabinetry", "Kitchens"),
  featureGreatRoom: local("feature-great-room", "/features/lindsey-feature-great-room.webp", "Bright great room with fireplace, open railing, and dining area", "Great Rooms"),
};

export const eliaGroveGallery: ResidenceSlide[] = [
  {
    "src": "/residences/elia-grove/elia-exterior.webp",
    "alt": "Elia Grove mediterranean farmhouse exterior concept",
    "eyebrow": "Exterior",
    "title": "Mediterranean farmhouse exterior"
  },
  {
    "src": "/residences/elia-grove/elia-presentation.webp",
    "alt": "Elia Grove elia grove presentation concept",
    "eyebrow": "Residence",
    "title": "Elia Grove presentation"
  },
  {
    "src": "/residences/elia-grove/elia-kitchen-1.webp",
    "alt": "Elia Grove arched kitchen concept",
    "eyebrow": "Kitchen",
    "title": "Arched kitchen"
  },
  {
    "src": "/residences/elia-grove/elia-kitchen-2.webp",
    "alt": "Elia Grove island kitchen concept",
    "eyebrow": "Kitchen",
    "title": "Island kitchen"
  },
  {
    "src": "/residences/elia-grove/elia-great-room-1.webp",
    "alt": "Elia Grove stone fireplace great room concept",
    "eyebrow": "Great Room",
    "title": "Stone fireplace great room"
  },
  {
    "src": "/residences/elia-grove/elia-great-room-2.webp",
    "alt": "Elia Grove indoor-outdoor great room concept",
    "eyebrow": "Great Room",
    "title": "Indoor-outdoor great room"
  },
  {
    "src": "/residences/elia-grove/elia-foyer.webp",
    "alt": "Elia Grove arched entry foyer concept",
    "eyebrow": "Foyer",
    "title": "Arched entry foyer"
  },
  {
    "src": "/residences/elia-grove/elia-primary-bath.webp",
    "alt": "Elia Grove primary bath concept",
    "eyebrow": "Primary Bath",
    "title": "Primary bath"
  },
  {
    "src": "/residences/elia-grove/elia-floor-plan.webp",
    "alt": "Elia Grove main floor plan concept",
    "eyebrow": "Floor Plan",
    "title": "Main floor plan"
  }
];

export const blackwoodGallery: ResidenceSlide[] = [
  {
    "src": "/residences/blackwood-estate/blackwood-exterior.webp",
    "alt": "Blackwood Estate clean exterior concept",
    "eyebrow": "Exterior",
    "title": "Luxury black farmhouse"
  },
  {
    "src": "/residences/blackwood-estate/blackwood-presentation.webp",
    "alt": "Blackwood Estate residence presentation",
    "eyebrow": "Residence",
    "title": "Blackwood Estate"
  },
  {
    "src": "/residences/blackwood-estate/blackwood-floor-plan.webp",
    "alt": "Blackwood Estate preliminary floor plan",
    "eyebrow": "Floor Plan",
    "title": "Main floor plan"
  }
];

export const designBuckets = {
  "greatRooms": [
    {
      "src": "/inspiration/whitney/great-rooms/great-room-modern-art.webp",
      "alt": "Warm great room with fireplace, built-ins, and colorful art",
      "label": "Great Rooms"
    },
    {
      "src": "/inspiration/whitney/great-rooms/great-room-timber.webp",
      "alt": "Vaulted great room with timber trusses and stone fireplace",
      "label": "Great Rooms"
    },
    {
      "src": "/inspiration/whitney/great-rooms/great-room-classic-white.webp",
      "alt": "Classic light great room with tall windows and built-ins",
      "label": "Great Rooms"
    },
    {
      "src": "/inspiration/whitney/great-rooms/great-room-green-fireplace.webp",
      "alt": "Great room with deep green fireplace wall and layered furnishings",
      "label": "Great Rooms"
    },
    {
      "src": "/inspiration/whitney/great-rooms/great-room-minimal.webp",
      "alt": "Minimal great room with stone fireplace and floor-to-ceiling glass",
      "label": "Great Rooms"
    },
    {
      "src": "/features/lindsey-feature-great-room.webp",
      "alt": "Bright great room with fireplace, open railing, and dining area",
      "label": "Great Rooms"
    },
    {
      "src": "/residences/blackwood-estate/blackwood-great-room-double-sided.webp",
      "alt": "Great room with a double-sided stone fireplace",
      "label": "Great Rooms"
    },
    {
      "src": "/residences/blackwood-estate/blackwood-great-room-open.webp",
      "alt": "Open luxury great room with warm architectural details",
      "label": "Great Rooms"
    }
  ],
  "kitchens": [
    {
      "src": "/inspiration/whitney/kitchens/kitchen-skylight.webp",
      "alt": "Bright kitchen with skylights and a long island",
      "label": "Kitchens"
    },
    {
      "src": "/inspiration/whitney/kitchens/kitchen-white-island.webp",
      "alt": "Light kitchen with white cabinetry and island",
      "label": "Kitchens"
    },
    {
      "src": "/inspiration/whitney/kitchens/kitchen-long-island.webp",
      "alt": "Open kitchen with long island and indoor-outdoor connection",
      "label": "Kitchens"
    },
    {
      "src": "/inspiration/whitney/kitchens/kitchen-sage-island.webp",
      "alt": "Kitchen with sage island and casual dining",
      "label": "Kitchens"
    },
    {
      "src": "/inspiration/whitney/kitchens/kitchen-dark-wood.webp",
      "alt": "Dark wood kitchen with stone counters and coffered ceiling",
      "label": "Kitchens"
    },
    {
      "src": "/features/lindsey-feature-kitchen.webp",
      "alt": "Warm contemporary kitchen and dining space with tall windows and dark cabinetry",
      "label": "Kitchens"
    },
    {
      "src": "/residences/blackwood-estate/blackwood-kitchen.webp",
      "alt": "Luxury kitchen with dark cabinetry and statement finishes",
      "label": "Kitchens"
    }
  ],
  "bathrooms": [
    {
      "src": "/inspiration/whitney/bathrooms/bath-blue-tile.webp",
      "alt": "Walk-in shower with blue-gray tile and warm wood vanity",
      "label": "Bathrooms"
    },
    {
      "src": "/residences/blackwood-estate/blackwood-bath-neutral.webp",
      "alt": "Neutral luxury primary bathroom",
      "label": "Bathrooms"
    },
    {
      "src": "/residences/blackwood-estate/blackwood-bath-moody.webp",
      "alt": "Moody luxury primary bathroom",
      "label": "Bathrooms"
    },
    {
      "src": "/residences/blackwood-estate/blackwood-bath-vaulted-marble.webp",
      "alt": "Vaulted luxury bathroom with marble finishes",
      "label": "Bathrooms"
    },
    {
      "src": "/residences/blackwood-estate/blackwood-bath-vaulted-olive.webp",
      "alt": "Vaulted luxury bathroom with olive-toned finishes",
      "label": "Bathrooms"
    },
    {
      "src": "/residences/blackwood-estate/blackwood-bath-green-double.webp",
      "alt": "Green-toned primary bathroom with double shower",
      "label": "Bathrooms"
    },
    {
      "src": "/residences/blackwood-estate/blackwood-bath-brass-1.webp",
      "alt": "Primary bathroom with brass and glass details",
      "label": "Bathrooms"
    },
    {
      "src": "/residences/blackwood-estate/blackwood-bath-brass-2.webp",
      "alt": "Light primary bathroom with brass fixtures",
      "label": "Bathrooms"
    }
  ],
  "foyersMudrooms": [
    {
      "src": "/inspiration/whitney/foyers-mudrooms/foyer-arched-door.webp",
      "alt": "Formal foyer with arched wood-and-glass entry doors",
      "label": "Foyers & Mudrooms"
    },
    {
      "src": "/inspiration/whitney/foyers-mudrooms/foyer-black-door.webp",
      "alt": "Tall foyer with black glass doors, stair, and built-in bench",
      "label": "Foyers & Mudrooms"
    },
    {
      "src": "/inspiration/whitney/foyers-mudrooms/foyer-double-door.webp",
      "alt": "Warm foyer with wood double doors and brick floor detail",
      "label": "Foyers & Mudrooms"
    },,
    {
      "src": "/residences/blackwood-estate/blackwood-mudroom-green.webp",
      "alt": "Green built-in mudroom with bench, storage, and woven baskets",
      "label": "Foyers & Mudrooms"
    }
  ],
  "primaryClosets": [
    {
      "src": "/inspiration/whitney/primary-closets/closet-white-glam.webp",
      "alt": "Bright primary closet with glass cabinetry and center island",
      "label": "Primary Closets"
    },
    {
      "src": "/inspiration/whitney/primary-closets/closet-dark.webp",
      "alt": "Dark wood primary closet with long center island",
      "label": "Primary Closets"
    },
    {
      "src": "/inspiration/whitney/primary-closets/closet-warm.webp",
      "alt": "Warm wood primary closet with island and window seat",
      "label": "Primary Closets"
    }
  ],
  "pantryPrep": [
    {
      "src": "/inspiration/whitney/pantry-prep/pantry-white.webp",
      "alt": "Walk-in pantry with white cabinetry and prep counter",
      "label": "Pantry / Prep Kitchen"
    },
    {
      "src": "/inspiration/whitney/pantry-prep/pantry-wine.webp",
      "alt": "Walk-in pantry with storage and wine display",
      "label": "Pantry / Prep Kitchen"
    },
    {
      "src": "/inspiration/whitney/pantry-prep/prep-kitchen-dark.webp",
      "alt": "Dark prep kitchen with stone counters and open shelves",
      "label": "Pantry / Prep Kitchen"
    },
    {
      "src": "/inspiration/whitney/pantry-prep/pantry-dark.webp",
      "alt": "Moody pantry with full-height shelving and prep counters",
      "label": "Pantry / Prep Kitchen"
    },
    {
      "src": "/inspiration/whitney/pantry-prep/prep-kitchen-white.webp",
      "alt": "White prep kitchen and butler pantry",
      "label": "Pantry / Prep Kitchen"
    }
  ],
  "features": [
    {
      "src": "/inspiration/whitney/features/pendants-glass.webp",
      "alt": "Cluster of glass pendant lights",
      "label": "Features"
    },
    {
      "src": "/inspiration/whitney/features/chandelier-branch.webp",
      "alt": "Statement branch-style chandelier",
      "label": "Features"
    },
    {
      "src": "/inspiration/whitney/features/pendants-smoked.webp",
      "alt": "Cluster of smoked-glass pendant lights",
      "label": "Features"
    },
    {
      "src": "/inspiration/whitney/features/pendant-blue.webp",
      "alt": "Decorative blue-and-brass pendant light",
      "label": "Features"
    },
    {
      "src": "/inspiration/whitney/features/pendants-clear.webp",
      "alt": "Sculptural clear-glass pendant lighting",
      "label": "Features"
    },
    {
      "src": "/inspiration/whitney/features/copper-sink.webp",
      "alt": "Hammered copper sink and faucet detail",
      "label": "Features"
    },
    {
      "src": "/inspiration/whitney/features/faucet-brass.webp",
      "alt": "Brass bridge faucet over stone sink",
      "label": "Features"
    },
    {
      "src": "/inspiration/whitney/features/faucet-black.webp",
      "alt": "Matte black faucet and dark stone sink",
      "label": "Features"
    },
    {
      "src": "/inspiration/whitney/features/stone-sink.webp",
      "alt": "Stone farmhouse sink and polished faucet detail",
      "label": "Features"
    },
    {
      "src": "/inspiration/whitney/features/window-seat-beams.webp",
      "alt": "Window seat, warm beams, and trim detail",
      "label": "Features"
    },
    {
      "src": "/inspiration/whitney/features/fireplace-minimal.webp",
      "alt": "Minimal stone fireplace with integrated hearth",
      "label": "Features"
    },
    {
      "src": "/inspiration/whitney/features/fireplace-rustic.webp",
      "alt": "Rustic stone fireplace with timber mantel",
      "label": "Features"
    },
    {
      "src": "/inspiration/whitney/features/vaulted-ceiling.webp",
      "alt": "Vaulted ceiling with architectural plaster detail",
      "label": "Features"
    },
    {
      "src": "/inspiration/whitney/features/coffered-ceiling.webp",
      "alt": "Wood coffered ceiling with recessed lighting",
      "label": "Features"
    },
    {
      "src": "/inspiration/whitney/features/shower-brass.webp",
      "alt": "Stone shower with brass rainfall fixture",
      "label": "Features"
    },
    {
      "src": "/inspiration/whitney/features/fireplace-arched.webp",
      "alt": "Arched fireplace surround detail",
      "label": "Features"
    },
    {
      "src": "/inspiration/whitney/features/timber-trusses.webp",
      "alt": "Timber roof trusses and vaulted ceiling detail",
      "label": "Features"
    },
    {
      "src": "/inspiration/whitney/features/tray-ceiling.webp",
      "alt": "Layered tray ceiling with chandelier and cove lighting",
      "label": "Features"
    },
    {
      "src": "/inspiration/whitney/features/beams.webp",
      "alt": "Exposed ceiling beams with recessed lighting",
      "label": "Features"
    },
    {
      "src": "/inspiration/whitney/features/shower-black.webp",
      "alt": "Dark shower wall with matte black rainfall fixture",
      "label": "Features"
    },
    {
      "src": "/inspiration/whitney/features/shower-green-tile.webp",
      "alt": "Green tile shower with polished exposed fixture",
      "label": "Features"
    },
    {
      "src": "/inspiration/whitney/features/range-hood-light.webp",
      "alt": "Light sculpted range hood and stone backsplash",
      "label": "Features"
    },
    {
      "src": "/inspiration/whitney/features/range-hood-dark.webp",
      "alt": "Dark wood range hood with marble backsplash",
      "label": "Features"
    },
    {
      "src": "/inspiration/whitney/features/range-hood-copper.webp",
      "alt": "Copper range hood over dark cabinetry",
      "label": "Features"
    },
    {
      "src": "/inspiration/whitney/foyers-mudrooms/foyer-curved-stair.webp",
      "alt": "Grand foyer with curved stair and arched opening",
      "label": "Features"
    },
    {
      "src": "/inspiration/whitney/foyers-mudrooms/foyer-stair-landing.webp",
      "alt": "Light stair hall with wood treads and black balusters",
      "label": "Features"
    },
    {
      "src": "/inspiration/whitney/foyers-mudrooms/foyer-floating-stair.webp",
      "alt": "Foyer with floating wood stair and glass railing",
      "label": "Features"
    },
    {
      "src": "/inspiration/whitney/foyers-mudrooms/foyer-green-door.webp",
      "alt": "Exterior entry with green double doors and stone surround",
      "label": "Features"
    },
    {
      "src": "/inspiration/whitney/foyers-mudrooms/foyer-modern-black-door.webp",
      "alt": "Modern glass front entry with black metal doors",
      "label": "Features"
    },
    {
      "src": "/inspiration/whitney/foyers-mudrooms/foyer-wood-arched-door.webp",
      "alt": "Arched wood double-door entry with stone surround",
      "label": "Features"
    },
    {
      "src": "/inspiration/whitney/great-rooms/great-room-sunset-opening.webp",
      "alt": "Living and dining space opening to a sunset terrace",
      "label": "Features"
    },
    {
      "src": "/inspiration/whitney/great-rooms/great-room-indoor-outdoor.webp",
      "alt": "Indoor-outdoor living space opening to the pool",
      "label": "Features"
    },
    {
      "src": "/inspiration/whitney/great-rooms/great-room-arched-glass.webp",
      "alt": "Great room with oversized arched glass and garden views",
      "label": "Features"
    }
  ]
};

export const budgetPhotos = Object.values(designBuckets);
export const stockPhotoList = Object.values(designBuckets).flat();
