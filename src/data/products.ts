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
    availableChannels: 'Leading supermarkets, convenience stores, and wholesale distribution centers across Myanmar.'
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
    availableChannels: 'Supermarkets, pharmacies, specialty wellness stores, and executive gift retailers.'
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
    availableChannels: 'Cosmetics shops, pharmacies, beauty salons, and modern retail stores.'
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
    availableChannels: 'Beauty supply distributors, hair salons, and supermarkets nationwide.'
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
    availableChannels: 'Premium aesthetic clinics, beauty boutiques, and department store counters.'
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
    availableChannels: 'Pharmacies, modern trade supermarkets, and cosmetic retail stores.'
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
    availableChannels: 'Wholesalers, wet markets, modern supermarkets, and food service partners.'
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
    availableChannels: 'Major supermarkets, convenience chain stores, school canteens, and general retail stores across Myanmar.'
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
