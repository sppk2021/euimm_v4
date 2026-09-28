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
}
