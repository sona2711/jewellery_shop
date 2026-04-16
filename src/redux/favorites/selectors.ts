import type { RootState } from '../../redux/store';

export const selectFavorites = (state: RootState) => state.favorites.items;
export const selectIsFavorite = (state: RootState, productId: number) =>
  state.favorites.items.some(item => item.id === productId);
export const selectFavoritesCount = (state: RootState) => state.favorites.items.length;