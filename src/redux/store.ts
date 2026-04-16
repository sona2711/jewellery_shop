import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './products/slice';
import cartReducer from './cart/slice';
import favoritesReducer from './favorites/slice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    favorites: favoritesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;