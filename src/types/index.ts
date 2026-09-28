export type ProductCategory = 'all' | 'bouquets' | 'potted' | 'keychains' | 'stems';

export interface Product {
  id: string;
  name: string;
  category: 'bouquets' | 'potted' | 'keychains' | 'stems';
  price: number;
  originalPrice?: number;
  description: string;
  longDescription: string;
  image: string;
  tag?: string;
  inStock: boolean;
  rating: number;
  reviewsCount: number;
  dimensions?: string;
  craftTime: string;
  colorOptions: string[];
  features: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor: string;
  customNote?: string;
  initialCharm?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  occasion: string;
}

export interface Review {
  id: string;
  name: string;
  city: string;
  rating: number;
  text: string;
  productName: string;
  date: string;
}
