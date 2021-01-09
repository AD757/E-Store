import {RootState} from '../rootReducer';
import {createSelector} from '@reduxjs/toolkit';
import {CartItem} from '../../types';

const selectCart = (state: RootState) => state.cart;

export const selectCartItems = createSelector(
  selectCart, (cart) => cart.cartItems);

export const selectCartHidden = createSelector(
  selectCart, (cart) => cart.hidden
);

export const selectCartItemCount = createSelector(
  selectCartItems,
  (cartItems: CartItem[]) => {
    return cartItems.reduce((total, cartItem: CartItem) => cartItem.quantity + total, 0);
  }
);

export const selectCartTotal = createSelector(
  selectCartItems,
  (cartItems: CartItem[]) => {
    return cartItems.reduce((total, cartItem: CartItem) => (cartItem.quantity * cartItem.price) + total, 0);
  }
);
