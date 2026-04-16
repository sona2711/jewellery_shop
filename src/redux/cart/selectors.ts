import type { RootState } from '../../redux/store';
import { createSelector } from '@reduxjs/toolkit';

export const selectCartItems = (state: RootState) => state.cart.items;
export const selectCartTotalItems = (state: RootState) => state.cart.totalItems;
export const selectCartTotalAmount = (state: RootState) => state.cart.totalAmount;


export const selectCartItemQuantity = createSelector(
  [selectCartItems, (_state: RootState, productId: number) => productId],
  (items, productId) => items.find(item => item.id === productId)?.quantity || 0
);