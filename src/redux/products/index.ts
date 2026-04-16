export { fetchProducts, fetchProductById, searchProducts } from './thunk';
export { setCategory, setSearchQuery, clearFilters } from './slice';
export { 
  selectAllProducts, 
  selectProductsStatus, 
  selectProductsError,
  selectFilteredProducts 
} from './selectors';
export type { ProductsState } from './types';
export { default as productsReducer } from './slice';