import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '../../redux/store';


export const selectAllProducts = (state: RootState) => state.products.items;
export const selectFilteredProducts = (state: RootState) => state.products.filteredItems;
export const selectProductsStatus = (state: RootState) => state.products.status;
export const selectProductsError = (state: RootState) => state.products.error;
export const selectSelectedCategory = (state: RootState) => state.products.selectedCategory;
export const selectSearchQuery = (state: RootState) => state.products.searchQuery;



export const selectProductsByCategory = createSelector(
  [selectFilteredProducts, (_state: RootState, category: string) => category],
  (products, category) => products.filter(p => p.category === category)
);

export const selectProductsByPriceRange = createSelector(
  [selectFilteredProducts, (_state: RootState, min: number, max: number) => ({ min, max })],
  (products, { min, max }) => products.filter(p => p.price >= min && p.price <= max)
);