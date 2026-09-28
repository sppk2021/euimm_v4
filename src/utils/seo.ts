interface PageMetadata {
  title: string;
  description: string;
}

const PAGE_METADATA_MAP: Record<string, PageMetadata> = {
  home: {
    title: 'Excel United International Co., Ltd. – FMCG Import & Distribution',
    description: 'Premier foreign import-export enterprise and authorized distributor of trusted food, beverage, snack, and personal care products across Myanmar and Thailand.',
  },
  products: {
    title: 'Certified FMCG Products Catalog – Excel United International Co., Ltd.',
    description: 'Browse our official import catalog of 100% FDA-approved food, gourmet beverages, snacks, and skincare products distributed across Myanmar.',
  },
  capabilities: {
    title: 'What We Do & Core Capabilities – Excel United International Co., Ltd.',
    description: 'Explore our comprehensive cross-border logistics, cold-chain warehousing, FDA clearance, and nationwide retail distribution capabilities.',
  },
  about: {
    title: 'About Us & Corporate Heritage – Excel United International Co., Ltd.',
    description: 'Learn about our 18+ years of bilateral trade leadership, Bangkok headquarters, Yangon operations, and sustainable FMCG partnerships.',
  },
  network: {
    title: 'Distribution Network & Retail Partners – Excel United International Co., Ltd.',
    description: 'Discover our extensive nationwide distribution footprint covering 500+ supermarket chains, hypermarkets, and wholesale depots across Myanmar.',
  },
  contact: {
    title: 'Contact Commercial Trade Desk – Excel United International Co., Ltd.',
    description: 'Connect directly with our Yangon operations hub and Bangkok headquarters for wholesale orders, distribution dealership, and brand representation.',
  },
};

export function updatePageSEO(pageId: string) {
  const metadata = PAGE_METADATA_MAP[pageId] || PAGE_METADATA_MAP['home'];

  // Update document title
  document.title = metadata.title;

  // Update meta description
  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.setAttribute('name', 'description');
    document.head.appendChild(metaDesc);
  }
  metaDesc.setAttribute('content', metadata.description);

  // Update OpenGraph tags
  let ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) {
    ogTitle.setAttribute('content', metadata.title);
  }

  let ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) {
    ogDesc.setAttribute('content', metadata.description);
  }

  let ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl) {
    ogUrl.setAttribute('content', window.location.origin + window.location.pathname);
  }

  // Update Twitter tags
  let twTitle = document.querySelector('meta[name="twitter:title"]');
  if (twTitle) {
    twTitle.setAttribute('content', metadata.title);
  }

  let twDesc = document.querySelector('meta[name="twitter:description"]');
  if (twDesc) {
    twDesc.setAttribute('content', metadata.description);
  }

  // Inject or update Schema.org JSON-LD
  let scriptLd = document.getElementById('schema-ld-json') as HTMLScriptElement | null;
  if (!scriptLd) {
    scriptLd = document.createElement('script');
    scriptLd.id = 'schema-ld-json';
    scriptLd.type = 'application/ld+json';
    document.head.appendChild(scriptLd);
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WholesaleStore',
    name: 'Excel United International Co., Ltd.',
    alternateName: 'EUI Trade',
    description: metadata.description,
    url: window.location.origin,
    logo: 'https://uploads.onecompiler.io/43924vdyc/442298qsn/logo.png',
    telephone: '+959951751759',
    email: 'admin@euimm.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Yan Naing Swe (2) Street, No. 48 Tharkayta Industrial Zone',
      addressLocality: 'Yangon',
      addressRegion: 'Yangon Region',
      addressCountry: 'MM',
    },
    areaServed: ['MM', 'TH'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'FMCG Wholesale & Retail Catalog',
      itemListElement: [
        { '@type': 'OfferCatalog', name: 'Food & Gourmet Products' },
        { '@type': 'OfferCatalog', name: 'Beverages & Wellness' },
        { '@type': 'OfferCatalog', name: 'Personal Care & Cosmetics' },
        { '@type': 'OfferCatalog', name: 'Snacks & Confectionery' },
      ],
    },
  };

  scriptLd.textContent = JSON.stringify(structuredData);
}
