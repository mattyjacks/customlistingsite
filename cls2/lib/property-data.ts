export interface PropertySpec {
  address: string;
  city: string;
  state: string;
  zip: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  lotAcres: number;
  yearBuilt: number;
  propertyType: string;
  mlsNumber: string;
  brokerName: string;
  agentName: string;
  agentPhone: string;
  agentEmail: string;
  description: string;
  headline: string;
}

export const PROPERTY_DATA: PropertySpec = {
  address: "77 Example Road",
  city: "Chester",
  state: "NH",
  zip: "03036",
  price: 849900,
  beds: 4,
  baths: 3.5,
  sqft: 3850,
  lotAcres: 2.5,
  yearBuilt: 2021,
  propertyType: "Single Family Architectural Residence",
  mlsNumber: "NH-994821",
  brokerName: "Example Realty",
  agentName: "Matthew Jackson",
  agentPhone: "(603) 555-0199",
  agentEmail: "Matt@MattyJacks.com",
  headline: "Architectural Haven on 2.5 Secluded Acres",
  description: "Welcome to 77 Example Road in desirable Chester, NH. Presented by Example Realty, this exquisite 4-bedroom, 3.5-bath residence combines modern architectural clarity with 2.5 acres of secluded natural surroundings. The gourmet kitchen features custom slate-blue cabinetry, quartz waterfall island, commercial gas range, and butler's pantry, creating a harmonious environment for daily living and grand entertaining."
};

export interface GalleryPhoto {
  id: string;
  src: string;
  title: string;
  category: "Exterior" | "Interior" | "Kitchen" | "Dining" | "Suite" | "Map" | "Blueprint";
  badge: string;
  width?: number;
  height?: number;
}

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: "hero",
    src: "/images/hero.jpg",
    title: "Main Residence Frontage & Landscaped Grounds",
    category: "Exterior",
    badge: "Main Residence"
  },
  {
    id: "google-map",
    src: "/images/google_map.jpg",
    title: "Satellite Parcel View & Boundary Pin",
    category: "Map",
    badge: "Satellite Map"
  },
  {
    id: "street-view",
    src: "/images/street_view.jpg",
    title: "Street View 360° Approach Angle",
    category: "Map",
    badge: "Street View"
  },
  {
    id: "living-room",
    src: "/images/living_room.jpg",
    title: "Sun-Filled Great Room with Exposed Beams & Fireplace",
    category: "Interior",
    badge: "Great Room"
  },
  {
    id: "kitchen",
    src: "/images/kitchen.jpg",
    title: "Gourmet Kitchen with Quartz Waterfall Island",
    category: "Kitchen",
    badge: "Chef's Kitchen"
  },
  {
    id: "dining-room",
    src: "/images/dining_room.jpg",
    title: "Formal Dining Room with Panoramic Forest Outlook",
    category: "Dining",
    badge: "Dining Room"
  },
  {
    id: "master-suite",
    src: "/images/master_suite.jpg",
    title: "Primary Sanctuary Suite with Designer Spa En-Suite",
    category: "Suite",
    badge: "Master Suite"
  },
  {
    id: "patio",
    src: "/images/patio_backyard.jpg",
    title: "Outdoor Flagstone Patio with Stone Fireplace & Pergola",
    category: "Exterior",
    badge: "Outdoor Living"
  },
  {
    id: "aerial",
    src: "/images/aerial.jpg",
    title: "Aerial Parcel Survey & Private Wooded Canopy",
    category: "Exterior",
    badge: "Aerial View"
  },
  {
    id: "floorplan",
    src: "/images/floorplan.jpg",
    title: "Architectural 2D Dimensioned CAD Floorplan",
    category: "Blueprint",
    badge: "Blueprint"
  }
];

export interface FloorplanPin {
  id: string;
  top: string;
  left: string;
  label: string;
  roomSize: string;
  description: string;
  img: string;
}

export const FLOORPLAN_LEVELS: Record<string, { name: string; pins: FloorplanPin[] }> = {
  main: {
    name: "Main Level (2,240 SqFt)",
    pins: [
      {
        id: "m1",
        top: "45%",
        left: "32%",
        label: "Sun-Filled Living Great Room",
        roomSize: "24' x 18'",
        description: "Cathedral ceilings with floor-to-ceiling Andersen architectural windows and direct patio walkout.",
        img: "/images/living_room.jpg"
      },
      {
        id: "m2",
        top: "35%",
        left: "68%",
        label: "Gourmet Waterfall Kitchen",
        roomSize: "20' x 15'",
        description: "Calacatta quartz waterfall counters, 6-burner gas range, walk-in butler's pantry.",
        img: "/images/kitchen.jpg"
      },
      {
        id: "m3",
        top: "60%",
        left: "75%",
        label: "Formal Dining Gallery",
        roomSize: "16' x 14'",
        description: "Surrounded by 180° tree-lined views and bespoke light sculpture pendant.",
        img: "/images/dining_room.jpg"
      },
      {
        id: "m4",
        top: "70%",
        left: "48%",
        label: "Grand Entrance Foyer",
        roomSize: "12' x 10'",
        description: "Double-height stone entrance with direct sightline through the forest.",
        img: "/images/hero.jpg"
      }
    ]
  },
  upper: {
    name: "Upper Sanctuary (1,610 SqFt)",
    pins: [
      {
        id: "u1",
        top: "40%",
        left: "38%",
        label: "Primary Bedroom Suite",
        roomSize: "22' x 16'",
        description: "Private balcony overlook, dual walk-in custom California closets, and reading alcove.",
        img: "/images/master_suite.jpg"
      },
      {
        id: "u2",
        top: "55%",
        left: "70%",
        label: "Mezzanine Open Loft",
        roomSize: "18' x 12'",
        description: "Overlooks the main great room below with built-in executive study bookshelves.",
        img: "/images/living_room.jpg"
      }
    ]
  },
  grounds: {
    name: "Grounds & 2.5 Private Acres",
    pins: [
      {
        id: "g1",
        top: "68%",
        left: "26%",
        label: "Private Acreage & Forest Trails",
        roomSize: "2.5 Acres",
        description: "Dense mature maple and pine woods with private walking trail buffer.",
        img: "/images/aerial.jpg"
      },
      {
        id: "g2",
        top: "50%",
        left: "60%",
        label: "Outdoor Flagstone Hearth",
        roomSize: "850 SqFt Patio",
        description: "Built-in masonry stone wood fireplace and cedar pergola dining area.",
        img: "/images/patio_backyard.jpg"
      }
    ]
  }
};

export interface NeighborhoodItem {
  id: string;
  category: "schools" | "nature" | "commute" | "dining";
  title: string;
  detail: string;
  scoreOrDistance: string;
  icon: string;
  badge?: string;
}

export const NEIGHBORHOOD_ITEMS: NeighborhoodItem[] = [
  {
    id: "nb1",
    category: "schools",
    title: "Chester Academy",
    detail: "Public Elementary & Middle (Grades K-8)",
    scoreOrDistance: "1.2 mi • 3 min drive",
    icon: "GraduationCap",
    badge: "Rating: 9/10 GreatSchools"
  },
  {
    id: "nb2",
    category: "schools",
    title: "Pinkerton Academy",
    detail: "Historic Comprehensive High School (Grades 9-12)",
    scoreOrDistance: "6.5 mi • 11 min drive",
    icon: "School",
    badge: "Rating: 8/10 Top NH High"
  },
  {
    id: "nb3",
    category: "nature",
    title: "Raymond Town Forest & Trailhead",
    detail: "1,200 acres of protected hiking, biking & cross-country skiing trails",
    scoreOrDistance: "1.1 mi • 3 min drive",
    icon: "Trees",
    badge: "1,200 Ac Conservation"
  },
  {
    id: "nb4",
    category: "nature",
    title: "North Pond Waterfront & Boat Launch",
    detail: "Freshwater kayaking, paddleboarding, swimming beach & fishing",
    scoreOrDistance: "1.5 mi • 4 min drive",
    icon: "Waves",
    badge: "Recreation Hub"
  },
  {
    id: "nb5",
    category: "commute",
    title: "Manchester-Boston Regional Airport (MHT)",
    detail: "Domestic terminal with nonstop flights to major US business hubs",
    scoreOrDistance: "16.4 mi • 22 min drive",
    icon: "Plane",
    badge: "Fast Regional Access"
  },
  {
    id: "nb6",
    category: "commute",
    title: "Downtown Boston, Massachusetts",
    detail: "Financial District & Seaport Innovation corridor via I-93 South",
    scoreOrDistance: "51.5 mi • 55 min drive",
    icon: "Building2",
    badge: "Major Metro Corridor"
  }
];

export interface PriceRecord {
  date: string;
  event: string;
  price: number;
  pricePerSqft: number;
  source: string;
}

export const PRICE_HISTORY: PriceRecord[] = [
  { date: "Aug 22, 2026", event: "Active Listing for Sale", price: 849900, pricePerSqft: 220, source: "Prime MLS (Rockingham)" },
  { date: "May 14, 2021", event: "Sold", price: 615000, pricePerSqft: 160, source: "Public Deed Records" },
  { date: "Feb 02, 2021", event: "Newly Built Architectural Delivery", price: 589000, pricePerSqft: 153, source: "Builder Disclosure" }
];

export interface TemplateDefinition {
  id: "editorial" | "midnight" | "coastal" | "swiss" | "heritage" | "blueprint";
  name: string;
  subtitle: string;
  icon: string;
  vibe: string;
  badge: string;
  themeColor: string;
}

export const TEMPLATES: TemplateDefinition[] = [
  {
    id: "editorial",
    name: "Editorial Magazine",
    subtitle: "Architectural Digest high-fashion editorial story layout",
    icon: "BookOpen",
    vibe: "Warm cream, serif typography, poetic narrative prose",
    badge: "Editorial Feature",
    themeColor: "#d97706"
  },
  {
    id: "midnight",
    name: "Midnight Luxury Dashboard",
    subtitle: "Obsidian glassmorphism cyber-executive showcase",
    icon: "Moon",
    vibe: "Dark obsidian, glowing cyan badges, telemetry metrics ribbon",
    badge: "Cyber Luxury",
    themeColor: "#38bdf8"
  },
  {
    id: "coastal",
    name: "Coastal Hamptons Walkthrough",
    subtitle: "Airy beachfront aesthetic with multi-room tabs",
    icon: "Waves",
    vibe: "Deep maritime navy, sand gold accents, room-by-room journey",
    badge: "Hamptons Resort",
    themeColor: "#0284c7"
  },
  {
    id: "swiss",
    name: "Swiss Modernist Grid",
    subtitle: "High-contrast geometric precision and structured data",
    icon: "Grid",
    vibe: "Strict monochrome lines, bold grotesk headers, clinical clarity",
    badge: "Modernist Grid",
    themeColor: "#ef4444"
  },
  {
    id: "heritage",
    name: "Heritage Manor Estate",
    subtitle: "Timeless gold filigree and regal estate presentation",
    icon: "Crown",
    vibe: "Burnished gold borders, Cinzel classical roman headings, heirloom aura",
    badge: "Manor Heritage",
    themeColor: "#f59e0b"
  },
  {
    id: "blueprint",
    name: "Blueprint Architectural Studio",
    subtitle: "Technical CAD grid, dimensional markers, and spec callouts",
    icon: "Compass",
    vibe: "Deep navy CAD background, glowing cyan line work, structural coordinates",
    badge: "CAD Architectural",
    themeColor: "#64ffda"
  }
];

export interface WorkingFeature {
  id: string;
  title: string;
  category: "SEO & Traffic" | "AI & Conversion" | "Speed & Infrastructure" | "Lead Capture";
  badge: string;
  description: string;
  icon: string;
  benchmark: string;
  interactiveDemoId?: string;
}

export const WORKING_FEATURES: WorkingFeature[] = [
  {
    id: "bandit-engine",
    title: "Bayesian Multi-Armed Bandit CTR Engine",
    category: "AI & Conversion",
    badge: "Autonomous Self-Learning",
    description: "Replaces static A/B testing with continuous Thompson Sampling. Automatically tests multiple hero angles, copy headlines, and CTAs, routing 85%+ traffic to the highest-converting combination.",
    icon: "Cpu",
    benchmark: "+312% More Showing Bookings",
    interactiveDemoId: "bandit"
  },
  {
    id: "url-schema",
    title: "Programmatic SEO RealEstateListing Schema",
    category: "SEO & Traffic",
    badge: "Schema.org & Deep-Linking",
    description: "Generates semantic JSON-LD RealEstateListing & SingleFamilyResidence schemas, dynamic OpenGraph social cards, and UTM-preserving QR slugs for flyers.",
    icon: "Globe",
    benchmark: "Indexed in < 4 Hours on Google",
    interactiveDemoId: "url-schema"
  },
  {
    id: "speed-lead",
    title: "Sub-5-Second Speed-to-Lead Webhook Dispatch",
    category: "Lead Capture",
    badge: "MIT Lead Study Compliant",
    description: "Instant webhook triggers connecting buyer requests directly to ElevenLabs AI voice agents and Twilio SMS within 4.2 seconds—crushing the 48-hour industry response lag.",
    icon: "Zap",
    benchmark: "21x Higher Buyer Qualification",
    interactiveDemoId: "speed-lead"
  },
  {
    id: "edge-ttfb",
    title: "Sub-100ms Edge TTFB on Vercel & Cloudflare",
    category: "Speed & Infrastructure",
    badge: "Next.js 15 Server Components",
    description: "Zero bloated WordPress PHP plugins or heavy MLS iframes. Blazing fast edge caching delivers instant page paint globally with 99/100 Core Web Vitals score.",
    icon: "Gauge",
    benchmark: "85ms TTFB vs 3,800ms Legacy WP",
    interactiveDemoId: "performance"
  },
  {
    id: "clarity-telemetry",
    title: "Client-Side Clarity Heatmap & Intent Telemetry",
    category: "AI & Conversion",
    badge: "Privacy-Preserving (NH RSA 507-H)",
    description: "Real-time mouse trajectory, velocity tracking, click wave ripples, and heatmaps running locally in the browser to quantify buyer purchase intent without selling data.",
    icon: "Activity",
    benchmark: "100% Client-Side Private",
    interactiveDemoId: "clarity"
  },
  {
    id: "agentic-pipeline",
    title: "Human-In-The-Loop Antigravity AI Cloud Harness",
    category: "AI & Conversion",
    badge: "Agentic Engineering",
    description: "Google Antigravity autonomous subagents generate bespoke copy, layouts, and color palettes from MLS data, gated by a 1-click human broker approval cockpit.",
    icon: "ShieldCheck",
    benchmark: "100% Quality Controlled",
    interactiveDemoId: "pipeline"
  },
  {
    id: "dual-streetview",
    title: "Interactive Dual Satellite & 360° Street View",
    category: "Speed & Infrastructure",
    badge: "GIS & Pan-Zoom Engine",
    description: "Smooth pan-zoom Street View and aerial satellite imagery with split-screen side-by-side or stacked view modes and live Google Maps embed.",
    icon: "MapPin",
    benchmark: "Zero Third-Party Lag"
  },
  {
    id: "interactive-floorplan-pins",
    title: "Dimensioned Vector Floorplan Hotspot Pins",
    category: "SEO & Traffic",
    badge: "Multi-Level Walkthrough",
    description: "Clickable pins mapped to exact room coordinates that pop open high-res photography and architectural room measurements.",
    icon: "LayoutDashboard",
    benchmark: "4.8x Higher Dwell Time"
  },
  {
    id: "mortgage-calc",
    title: "Dynamic P&I, Tax & Insurance Stacked Modeler",
    category: "Lead Capture",
    badge: "Real-Time Payment Engine",
    description: "Interactive sliders calculate monthly payments with visual stacked bars separating principal & interest, local property taxes, and insurance.",
    icon: "Calculator",
    benchmark: "Engages 74% of First-Time Buyers"
  },
  {
    id: "realtor-roi",
    title: "Realtor Listing Commission ROI Modeler",
    category: "Lead Capture",
    badge: "Client Pitch Weapon",
    description: "Empowers agents to prove to home sellers that investing in a bespoke single-property website yields an estimated 42x ROI on listing day.",
    icon: "TrendingUp",
    benchmark: "42x ROI Against $499 Site Cost"
  },
  {
    id: "nh-privacy",
    title: "New Hampshire RSA 507-H Privacy Architecture",
    category: "Speed & Infrastructure",
    badge: "Legally Compliant",
    description: "Strict consumer rights handling (Access, Correct, Delete, Opt-out) for MattyJacks LLC with zero data broker selling and transparent cookie controls.",
    icon: "Lock",
    benchmark: "Full NH Statutory Compliance"
  },
  {
    id: "multi-device-studio",
    title: "Free Instant Control Panel & Live Studio",
    category: "Lead Capture",
    badge: "Free Interactive SaaS",
    description: "Prospective clients can test the site creation engine for free, tune AI tone, toggle bandit settings, and live-preview responsive viewports across Desktop, Tablet, and Mobile.",
    icon: "Sliders",
    benchmark: "Instant 5-Second Cloud Deploy"
  }
];

export interface BanditVariant {
  id: number;
  headline: string;
  subheadline: string;
  ctaText: string;
  badgeText: string;
  themeStyle: "editorial" | "midnight" | "coastal" | "swiss" | "heritage" | "blueprint";
  accentColor: string;
  targetFocus: string;
  currentScore: number;
  sampleTrafficShare: number;
}

export const BANDIT_VARIANTS: BanditVariant[] = [
  {
    id: 1,
    headline: "Where Architectural Prestige Meets Autonomous Conversion Science",
    subheadline: "Single-property showcase websites engineered with Next.js edge performance, self-optimizing multi-armed bandits, and hyper-local SEO schemas that out-convert standard MLS portals 4:1.",
    ctaText: "Explore Self-Optimizing Studio",
    badgeText: "BANDIT VARIANT #1 • 34.8% CONVERSION PROBABILITY (LEADER)",
    themeStyle: "editorial",
    accentColor: "#d97706",
    targetFocus: "Architectural Prestige & Conversion Science",
    currentScore: 94.6,
    sampleTrafficShare: 38
  },
  {
    id: 2,
    headline: "The Intelligent Single-Property Engine That Out-Sells Zillow 4:1",
    subheadline: "Stop losing listing leads to competing agents on legacy portals. Give every luxury listing a dedicated, lightning-fast edge web app with sub-5-second speed-to-lead automation.",
    ctaText: "Try Free Control Panel",
    badgeText: "BANDIT VARIANT #2 • 28.2% CONVERSION PROBABILITY (EXPLORING)",
    themeStyle: "midnight",
    accentColor: "#38bdf8",
    targetFocus: "Competitive Portal Disruption",
    currentScore: 89.2,
    sampleTrafficShare: 28
  },
  {
    id: 3,
    headline: "Turn Every Luxury Home Into an Irresistible High-Conversion Experience",
    subheadline: "Powered by the Google Antigravity cloud harness with a human-in-the-loop quality gate, delivering bespoke magazine-grade aesthetic storytelling with interactive 360° Street View and CAD blueprints.",
    ctaText: "Launch Property Showcase",
    badgeText: "BANDIT VARIANT #3 • 21.4% CONVERSION PROBABILITY",
    themeStyle: "coastal",
    accentColor: "#0284c7",
    targetFocus: "Human-in-the-Loop Antigravity AI",
    currentScore: 82.5,
    sampleTrafficShare: 21
  },
  {
    id: 4,
    headline: "Precision Real Estate Engineering: Sub-100ms Edge Performance",
    subheadline: "Zero bloated WordPress scripts. Built on React 19, Tailwind, and Vercel edge infrastructure. Programmatic RealEstateListing schema indexes in hours, capturing high-intent Google buyers.",
    ctaText: "Inspect Tech Stack & Benchmarks",
    badgeText: "BANDIT VARIANT #4 • 15.6% CONVERSION PROBABILITY",
    themeStyle: "blueprint",
    accentColor: "#64ffda",
    targetFocus: "Speed & Technical Superiority",
    currentScore: 78.9,
    sampleTrafficShare: 13
  }
];
