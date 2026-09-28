import { Product } from '../types';

export const COMPANY_INFO = {
  name: 'Excel United International Co., Ltd.',
  shortName: 'EUI Trade',
  tagline: 'Premier Import, Export & Nationwide FMCG Distribution in Southeast Asia',
  bangkokOffice: {
    city: 'Bangkok, Thailand',
    role: 'Corporate Headquarters & Global Sourcing Center',
  },
  yangonOffice: {
    address: 'Yan Naing Swe (2) Street, No. 48 Tharkayta Industrial Zone, Tharkayta Township, Yangon Region, Myanmar',
    phone: '+ (959) 951-751-759',
    phoneRaw: '+959951751759',
    email: 'admin@euimm.com',
    role: 'Myanmar Operations Hub & Central Logistics Warehouse',
  },
  socials: {
    facebook: 'https://www.facebook.com/excelunitedinternational',
    instagram: 'https://www.instagram.com/excelunitedinternational',
    linkedin: 'https://www.linkedin.com/company/excelunitedinternational',
  },
  stats: [
    { label: 'Years of Trade Excellence', value: '18+' },
    { label: 'Distribution & Retail Partners', value: '500+' },
    { label: 'Countries & Brand Networks', value: '25+' },
    { label: 'Regulatory & FDA Approval Rate', value: '100%' },
  ],
  logoUrl: 'https://uploads.onecompiler.io/43924vdyc/442298qsn/logo.png',
  logoSquareUrl: 'https://uploads.onecompiler.io/43924vdyc/442298qsn/logo.png',
  teamPhotoUrl: '/team.jpg',
};

export const PRODUCTS: Product[] = [
  {
    id: 'mighty-sardine',
    name: 'MIGHTY Brand Sardine in Tomato Sauce',
    brand: 'MIGHTY',
    category: 'food',
    categoryLabel: 'Food & Gourmet',
    image: 'https://uploads.onecompiler.io/43924vdyc/442fmmhju/1.jpg',
    description: 'A bright red advertisement for MIGHTY Brand Sardines in Tomato Sauce emphasizing tasty, nutritious sardines in rich tomato sauce.',
    packaging: 'Available in 120g & 155g cans with easy-pull ring. Perfect for meals and snacks.',
    origin: 'Thailand',
    highlights: ['Rich in Omega-3', 'High Protein', 'Rich Savory Tomato Sauce', 'Ready to Eat'],
    usageInstructions: [
      'Open the can carefully using the pull-ring and drain any excess liquid if preferred.',
      'Enjoy directly as a savory snack with warm bread, toast, or steamed jasmine rice.',
      'Great for making sandwiches, fried rice, noodle dishes, or quick salads.',
      'Perfect for quick, wholesome lunch boxes and family meals.'
    ],
    availableChannels: 'Leading supermarkets, convenience stores, and wholesale distribution centers across Myanmar.',
    netWeight: '155g / 120g Net Weight',
    casePack: '50 Cans / Master Carton (GW: 9.8 kg)',
    shelfLife: '36 Months from Production Date',
    storageCondition: 'Ambient Dry Storage (15°C–28°C)',
    fdaRegNumber: 'MM-FDA-FOOD-2024-88412',
  },
  {
    id: 'royal-nest',
    name: 'Royal Nest – 100% Natural Bird’s Nest',
    brand: 'Royal Nest',
    category: 'beverage',
    categoryLabel: 'Beverages & Wellness',
    image: 'https://uploads.onecompiler.io/43924vdyc/442fmmhju/3.jpg',
    description: 'Premium Thai bird’s nest drink made from 100% natural ingredients for health, vitality, and beauty.',
    packaging: 'Available in 250ml glass bottles & premium luxury presentation gift sets.',
    origin: 'Thailand',
    highlights: ['100% Natural Bird’s Nest', 'Natural Collagen & Amino Acids', 'No Preservatives', 'Immunity & Skin Vitality'],
    usageInstructions: [
      'Shake gently before consuming to distribute natural bird’s nest strands.',
      'Drink 1–2 times daily on an empty stomach for maximum nutrient absorption.',
      'Can be served refreshing chilled from the refrigerator or at room temperature.',
      'Ideal for daily health, postpartum wellness, and nourishing gifts.'
    ],
    availableChannels: 'Supermarkets, pharmacies, specialty wellness stores, and executive gift retailers.',
    netWeight: '250ml per bottle',
    casePack: '24 Bottles / Master Carton (GW: 11.2 kg)',
    shelfLife: '24 Months (Hermetically Sealed)',
    storageCondition: 'Cool & Dry (Refrigerate after opening)',
    fdaRegNumber: 'MM-FDA-BEV-2023-41092',
  },
  {
    id: 'zale-cosmetics',
    name: 'Zale Cosmetics – Whitening & Sun Block',
    brand: 'Zale',
    category: 'cosmetics',
    categoryLabel: 'Personal Care & Cosmetics',
    image: 'https://uploads.onecompiler.io/43924vdyc/442fmmhju/5.jpg',
    description: 'Whitening and sunblock cream for smooth, bright, and protected skin under tropical sunlight.',
    packaging: 'Available in 50g tubes. Travel-friendly and hygienic applicator.',
    origin: 'Thailand',
    highlights: ['UV Defense & Sunblock', 'Tone Brightening Action', 'Non-Greasy Absorption', 'Daily Skin Protection'],
    usageInstructions: [
      'Cleanse face and neck thoroughly with mild cleanser before application.',
      'Apply a small amount evenly across the face and exposed neck area.',
      'Gently massage until the cream is fully and evenly absorbed.',
      'Use every morning 15 minutes before stepping out for optimal protection.'
    ],
    availableChannels: 'Cosmetics shops, pharmacies, beauty salons, and modern retail stores.',
    netWeight: '50g Tube',
    casePack: '48 Tubes / Master Carton (GW: 4.2 kg)',
    shelfLife: '36 Months',
    storageCondition: 'Store below 30°C away from direct sunlight',
    fdaRegNumber: 'MM-FDA-COS-2024-11029',
  },
  {
    id: 'zale-hair-oil',
    name: 'ZALE Coconut Nourishing Hair Oil',
    brand: 'Zale',
    category: 'cosmetics',
    categoryLabel: 'Personal Care & Cosmetics',
    image: 'https://uploads.onecompiler.io/43924vdyc/442fmmhju/7.jpg',
    description: 'Natural coconut hair oil that nourishes and strengthens hair, keeping it soft, smooth, and lustrous.',
    packaging: 'Available in 100ml ergonomic dispenser bottles.',
    origin: 'Thailand',
    highlights: ['100% Pure Coconut Essence', 'Strengthens Hair Follicles', 'Softens & Tames Frizz', 'Deep Scalp Care'],
    usageInstructions: [
      'Apply a generous amount to scalp and hair strands from root to tip.',
      'Gently massage scalp for 5–10 minutes to stimulate blood micro-circulation.',
      'Leave on for at least 30 minutes, or overnight for intensive deep conditioning.',
      'Wash off with mild shampoo. Use 2–3 times a week for silky, resilient hair.'
    ],
    availableChannels: 'Beauty supply distributors, hair salons, and supermarkets nationwide.',
    netWeight: '100ml Bottle',
    casePack: '36 Bottles / Master Carton (GW: 5.1 kg)',
    shelfLife: '36 Months',
    storageCondition: 'Room Temperature (Solidifies below 24°C naturally)',
    fdaRegNumber: 'MM-FDA-COS-2023-77291',
  },
  {
    id: 'placenta-darin',
    name: 'Placenta Dr. Darin – Whitening & Anti-Aging Cream',
    brand: 'Dr. Darin',
    category: 'cosmetics',
    categoryLabel: 'Personal Care & Cosmetics',
    image: 'https://uploads.onecompiler.io/43924vdyc/442fmmhju/9.jpg',
    description: 'Placenta-based cream that reduces dark spots and wrinkles while keeping skin thoroughly hydrated and glowing.',
    packaging: 'Available in 50g luxury protective jars.',
    origin: 'Thailand',
    highlights: ['Bio-Placenta Complex', 'Wrinkle & Spot Reduction', 'Intense Cellular Hydration', 'Youthful Elasticity'],
    usageInstructions: [
      'Apply a small amount to clean face, neck, and décolletage.',
      'Gently pat and smooth until absorbed, focusing on areas with fine lines or dark spots.',
      'Use morning and evening consistently for best rejuvenation results.',
      'Complement with daily sun protection during daytime use.'
    ],
    availableChannels: 'Premium aesthetic clinics, beauty boutiques, and department store counters.',
    netWeight: '50g Luxury Jar',
    casePack: '48 Jars / Master Carton (GW: 6.8 kg)',
    shelfLife: '36 Months',
    storageCondition: 'Cool, dry location below 28°C',
    fdaRegNumber: 'MM-FDA-COS-2024-33910',
  },
  {
    id: 'darin-goat-milk',
    name: 'DARIN Goat Milk Facial Cleansing Foam',
    brand: 'Dr. Darin',
    category: 'cosmetics',
    categoryLabel: 'Personal Care & Cosmetics',
    image: 'https://uploads.onecompiler.io/43924vdyc/442fmmhju/11.JPG',
    description: 'Facial cleanser made with goat milk extract that deeply cleanses, moisturizes, and refreshes the skin.',
    packaging: 'Available in 150ml pump bottles with rich foam dispenser.',
    origin: 'Thailand',
    highlights: ['Natural Goat Milk Extract', 'Deep Pore Cleansing', 'Moisture-Retaining Foam', 'Gentle for Sensitive Skin'],
    usageInstructions: [
      'Wet face gently with lukewarm water.',
      'Dispense a small amount of rich foam into your palm.',
      'Gently massage onto face and neck in circular motions for 1 minute.',
      'Rinse thoroughly with clean water and pat dry. Use daily morning and evening.'
    ],
    availableChannels: 'Pharmacies, modern trade supermarkets, and cosmetic retail stores.',
    netWeight: '150ml Pump Bottle',
    casePack: '36 Bottles / Master Carton (GW: 7.2 kg)',
    shelfLife: '30 Months',
    storageCondition: 'Dry Room Temperature',
    fdaRegNumber: 'MM-FDA-COS-2024-55821',
  },
  {
    id: 'song-heng',
    name: 'SONG HENG Sour Pickled Green Mustard',
    brand: 'SONG HENG',
    category: 'food',
    categoryLabel: 'Food & Gourmet',
    image: 'https://uploads.onecompiler.io/43924vdyc/442fmmhju/13.jpg',
    description: 'Authentic Thai-style sour pickled green mustard available in spicy and non-spicy varieties, imported and distributed by EUI.',
    packaging: 'Available in 250g glass jars and bulk catering packs. Great for seasoning.',
    origin: 'Thailand',
    highlights: ['Authentic Thai Recipe', 'Spicy & Original Options', 'Crisp Tender Greens', 'Versatile Cooking Condiment'],
    usageInstructions: [
      'Use as a zesty appetizer or side condiment with steamed rice, congee, or soup noodles.',
      'Add to stir-fry meats (pork, chicken, or beef) to impart a tangy, umami flavor.',
      'Serve alongside grilled meats or fried fish to cleanse the palate.',
      'Can be enjoyed directly from the jar without additional seasoning.'
    ],
    availableChannels: 'Wholesalers, wet markets, modern supermarkets, and food service partners.',
    netWeight: '250g Glass Jar',
    casePack: '24 Jars / Master Carton (GW: 10.5 kg)',
    shelfLife: '18 Months',
    storageCondition: 'Ambient (Keep in cool dry pantry)',
    fdaRegNumber: 'MM-FDA-FOOD-2023-66201',
  },
  {
    id: 'stick-biscuit',
    name: 'Stick Biscuit – Lotus Thailand',
    brand: 'Lotus Thailand',
    category: 'snack',
    categoryLabel: 'Snacks & Confectionery',
    image: 'https://uploads.onecompiler.io/43924vdyc/4457cz2hr/Stick.jpg',
    description: 'Crispy & Light Texture – Delightfully crunchy stick biscuits that are easy to snack on anytime. Authentic Thai Flavor – Made in Thailand with quality ingredients for a tasty and unique snack experience.',
    packaging: 'Available in sealed foil pouches preserving crisp freshness for retail display.',
    origin: 'Thailand',
    highlights: ['Crispy & Light Texture', 'Authentic Thai Flavor', 'Perfect for All Ages', 'Convenient & Portable Snack'],
    usageInstructions: [
      'Enjoy directly from the pack as a delightfully crunchy anytime snack.',
      'Pair with your morning tea, afternoon coffee, milk tea, or chilled drinks.',
      'Ideal for school lunchboxes, office breaks, travel, and road trips.',
      'Great for sharing with friends and family during gatherings and movie nights.'
    ],
    availableChannels: 'Major supermarkets, convenience chain stores, school canteens, and general retail stores across Myanmar.',
    netWeight: '55g Foil Pouch',
    casePack: '60 Pouches / Master Carton (GW: 4.8 kg)',
    shelfLife: '12 Months',
    storageCondition: 'Store in dry place, avoid humidity',
    fdaRegNumber: 'MM-FDA-SNACK-2024-90144',
  }
];

export const CAPABILITIES = [
  {
    id: 'distribution',
    title: 'Nationwide FMCG Distribution',
    description: 'Direct distribution network supplying wholesalers, hypermarkets, supermarkets, and general retail channels across all major regions in Myanmar.',
    icon: 'Network',
    metrics: '500+ Outlets Served',
    details: [
      'Covering Yangon, Mandalay, Naypyitaw, Mawlamyine, Taunggyi, and Bago',
      'Modern trade key account management & dedicated merchandisers',
      'Direct-to-store logistics and wholesale dispatch network',
    ]
  },
  {
    id: 'import-export',
    title: 'Cross-Border Import & Export',
    description: 'Seamless international trade bridge connecting Bangkok production centers and international suppliers with Southeast Asian consumer markets.',
    icon: 'Globe',
    metrics: '25+ Brand Lines Handled',
    details: [
      'Bangkok headquarters oversees direct manufacturer procurement',
      'Multimodal sea, air, and overland border transport corridors',
      'End-to-end cargo insurance, tracking, and consignment handling',
    ]
  },
  {
    id: 'compliance',
    title: 'FDA & Regulatory Compliance',
    description: 'Comprehensive regulatory expertise in product registration, customs documentation, and Myanmar Food and Drug Administration (FDA) approvals.',
    icon: 'ShieldCheck',
    metrics: '100% Legal & Tested',
    details: [
      'Complete lab testing, labeling, and legal compliance',
      'Fast-track documentation for food, beverage, and cosmetic imports',
      'Transparent customs clearance and tariff classification',
    ]
  },
  {
    id: 'warehousing',
    title: 'Warehousing & Supply Chain',
    description: 'Modern, climate-controlled warehousing facilities located in Tharkayta Industrial Zone, ensuring optimal product freshness and rapid replenishment.',
    icon: 'Boxes',
    metrics: 'High Capacity Storage',
    details: [
      'Industrial-grade temperature-controlled storage rooms',
      'Strict FIFO inventory tracking and batch traceability',
      'Dedicated logistics fleet for prompt dispatch',
    ]
  }
];

export interface DistributionHub {
  id: string;
  name: string;
  city: string;
  country: string;
  role: string;
  capacity: string;
  activeAccounts: string;
  leadTime: string;
  temperatureControl: string;
  description: string;
  majorPartners: string[];
}

export const DISTRIBUTION_HUBS: DistributionHub[] = [
  {
    id: 'yangon-central',
    name: 'Yangon Central Logistics & Cold Hub',
    city: 'Yangon',
    country: 'Myanmar',
    role: 'Central Operations, Modern Trade Consolidation & Delta Dispatch',
    capacity: '12,000+ CBM Climate-Controlled Space',
    activeAccounts: '350+ Modern Trade Outlets & Wholesalers',
    leadTime: 'Same-day to 24h within Yangon Metro',
    temperatureControl: 'Multi-zone: Ambient (22°C), Chilled (+4°C), Frozen (-18°C)',
    description: 'Situated in the strategic Tharkayta Industrial Zone with rapid access to Yangon Port and regional ring highways, this central facility coordinates FMCG replenishment across lower Myanmar.',
    majorPartners: ['City Mart Supermarket', 'Ocean Supercenter', 'Marketplace', 'Makro Wholesale Yangon', 'G&G Convenience Stores'],
  },
  {
    id: 'mandalay-depot',
    name: 'Mandalay Upper Myanmar Depot',
    city: 'Mandalay',
    country: 'Myanmar',
    role: 'Regional Transshipment to Shan State, Sagaing & Kachin',
    capacity: '6,500 CBM Dry & Chilled Storage',
    activeAccounts: '180+ Regional Wholesalers & Department Stores',
    leadTime: '24h – 48h Delivery to Upper Myanmar Townships',
    temperatureControl: 'Ambient & Chilled (+4°C)',
    description: 'Acts as the primary trading springboard for upper Myanmar commercial distribution, supplying key regional depots, hypermarkets, and local market cooperatives.',
    majorPartners: ['Ocean Supercenter Mandalay', 'Diamond Plaza', 'Regional Wholesale Cooperatives', 'Shan State Distributors'],
  },
  {
    id: 'bangkok-sourcing',
    name: 'Bangkok Sourcing & Export HQ',
    city: 'Bangkok',
    country: 'Thailand',
    role: 'Manufacturer Procurement, Quality Audit & Cross-Border Staging',
    capacity: 'Direct Factory Line Allocation & Consolidation',
    activeAccounts: '25+ Certified Thai Food & Cosmetic Manufacturers',
    leadTime: 'Factory-direct containerization in 48h',
    temperatureControl: 'Reefer Container & Ambient Pallet Loading',
    description: 'Corporate headquarters directly liaising with certified Thai food, snack, and wellness producers, ensuring strict batch quality control and export documentation.',
    majorPartners: ['Authorized Brand Principals', 'Samut Prakan Export Staging', 'Thai FDA Certified Laboratories'],
  },
  {
    id: 'myawaddy-corridor',
    name: 'Mae Sot – Myawaddy Border Gateway',
    city: 'Myawaddy / Mae Sot',
    country: 'Myanmar / Thailand',
    role: 'Primary Overland Customs Clearance & Cross-Dock Port',
    capacity: 'Dedicated Bonded Clearance Lane',
    activeAccounts: 'Daily Overland Cross-Border Convoys',
    leadTime: '24h – 36h expedited border turnaround',
    temperatureControl: 'Active Reefer Trucks & Insulated Box Fleet',
    description: 'The premier bilateral overland trade bridge connecting Central Thailand industrial clusters with Myanmar highway networks, managed with full legal import-export documentation.',
    majorPartners: ['Myanmar Customs Department', 'Thai Customs Department', 'Licensed Bonded Transporters'],
  },
  {
    id: 'mawlamyine-hub',
    name: 'Mawlamyine Southeastern Corridor',
    city: 'Mawlamyine',
    country: 'Myanmar',
    role: 'Southern Coastal Distribution & Mon / Karen Regional Supply',
    capacity: '3,200 CBM Distribution Depot',
    activeAccounts: '90+ Supermarkets & General Trade Grocers',
    leadTime: '24h dispatch to Mon State and Tanintharyi',
    temperatureControl: 'Ambient & Controlled Ventilation',
    description: 'Strategically positioned to service retail stores, coastal distributors, and local trade networks along the southern economic corridor.',
    majorPartners: ['Ocean Supercenter Mawlamyine', 'Regional Supermarkets', 'Local General Grocers'],
  },
];
