interface PageMetadata {
  title: string;
  description: string;
}

const PAGE_METADATA_MAP: Record<string, PageMetadata> = {
  home: {
    title: 'Excel United International – Authorized FMCG & Import-Export Distribution Hub',
    description: 'Premier import-export enterprise and authorized distributor of trusted food, beverage, snack, and personal care products across Myanmar and Thailand.',
  },
  products: {
    title: 'Certified FMCG Products Catalog – Excel United International',
    description: 'Browse our official import catalog of 100% FDA-approved food, gourmet beverages, snacks, and skincare products distributed across Myanmar.',
  },
  capabilities: {
    title: 'What We Do & Core Capabilities – Excel United International',
    description: 'Explore our comprehensive import-export logistics, cold-chain warehousing, regulatory clearance, and nationwide retail distribution capabilities.',
  },
  about: {
    title: 'About Us & Corporate Heritage – Excel United International',
    description: 'Learn about our 18+ years of cross-border trade leadership, Bangkok headquarters, Yangon operations, and long-term FMCG partnerships.',
  },
  network: {
    title: 'Distribution Network & Retail Partners – Excel United International',
    description: 'Discover our extensive nationwide distribution network covering 500+ retail partners, hypermarkets, and wholesale channels across Myanmar.',
  },
  contact: {
    title: 'Contact & Regional Offices – Excel United International',
    description: 'Get in touch with our Bangkok headquarters and Yangon central facility for wholesale orders, commercial inquiries, and vendor partnerships.',
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

  // Update OpenGraph tags if present
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
}
