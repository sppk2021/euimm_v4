export interface Product {
  id: string;
  name: string;
  brand: string;
  category: 'food' | 'beverage' | 'snack' | 'cosmetics';
  categoryLabel: string;
  image: string;
  description: string;
  packaging: string;
  origin: string;
  highlights: string[];
  usageInstructions: string[];
  availableChannels: string;
  // Enhanced technical specifications for B2B buyers
  netWeight?: string;
  casePack?: string;
  shelfLife?: string;
  storageCondition?: string;
  fdaRegNumber?: string;
}

export interface WholesaleInquiry {
  productId?: string;
  productName?: string;
  brand?: string;
  buyerName: string;
  companyName: string;
  businessType: 'supermarket' | 'wholesaler' | 'distributor' | 'retail_chain' | 'foodservice' | 'other';
  email: string;
  phone: string;
  destinationCity: string;
  orderVolume: string;
  incoterm: 'CIF_Yangon' | 'FOB_Bangkok' | 'DDP_Myanmar' | 'EXW_Bangkok';
  notes?: string;
}
