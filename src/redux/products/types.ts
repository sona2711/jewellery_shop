import type { Product } from "../../types/product";

export type ProductsState = {
  items: Product[];
  filteredItems: Product[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  selectedCategory: string | null;
  searchQuery: string;
}




