import type { ProductCategory, CollectionGender , ProductOption} from "../../../types/product";



export type CollectionConfig = {
  collection: string;
  gender: CollectionGender;
  categories: ProductCategory[];
  metals: string[];
  stones?: string[];
  purity?: "14K" | "18K" | "22K";
  priceRange: [number, number];
  isExclusive?: boolean;
  options?: {
    sizes?: ProductOption[];
    metals?: ProductOption[];
  };
  images?: string[]
};