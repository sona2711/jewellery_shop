import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { FavoritesState } from './types';
import type { Product } from '../../types/product';

const loadFavoritesFromStorage = (): Product[] => {
  const saved = localStorage.getItem('favorites');
  return saved ? JSON.parse(saved) : [];
};

const initialState: FavoritesState = {
  items: loadFavoritesFromStorage(),
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<Product>) => {
      const exists = state.items.some(item => item.id === action.payload.id);
      if (!exists) {
        state.items.push(action.payload);
        localStorage.setItem('favorites', JSON.stringify(state.items));
      }
    },
    removeFromFavorites: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      localStorage.setItem('favorites', JSON.stringify(state.items));
    },
    toggleFavorite: (state, action: PayloadAction<Product>) => {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index === -1) {
        state.items.push(action.payload);
      } else {
        state.items.splice(index, 1);
      }
      localStorage.setItem('favorites', JSON.stringify(state.items));
    },
    clearFavorites: (state) => {
      state.items = [];
      localStorage.setItem('favorites', JSON.stringify(state.items));
    },
  },
});

export const { addToFavorites, removeFromFavorites, toggleFavorite, clearFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;