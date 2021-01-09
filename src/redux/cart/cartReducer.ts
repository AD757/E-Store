import {createReducer} from '@reduxjs/toolkit';

import {
  CART_ACTIONS,
  CartActionAddCartItem,
  CartActionRemoveCartItem,
  CartActionReduceCartItem
} from './cartActions';

import {CartItem} from '../../types';
import {addItemToCart, removeItemFromCart, reduceItemInCart} from '.';

export interface CartState {
  hidden: boolean,
  cartItems: CartItem[],
}

const INITIAL_STATE: CartState = {
  hidden: true,
  cartItems: [],
};

export const cartReducer = createReducer(INITIAL_STATE, {
  [CART_ACTIONS.SHOW_CART_DROPDOWN]: (state) => ({...state, hidden: false}),
  [CART_ACTIONS.HIDE_CART_DROPDOWN]: (state) => ({...state, hidden: true}),
  [CART_ACTIONS.TOGGLE_CART_DROPDOWN]: (state) => ({...state, hidden: !state.hidden}),
  [CART_ACTIONS.ADD_CART_ITEM]: (state, action: CartActionAddCartItem) => ({...state, cartItems: addItemToCart(state.cartItems, action.payload)}),
  [CART_ACTIONS.REMOVE_CART_ITEM]: (state, action: CartActionRemoveCartItem) => ({...state, cartItems: removeItemFromCart(state.cartItems, action.payload)}),
  [CART_ACTIONS.REDUCE_CART_ITEM]: (state, action: CartActionReduceCartItem) => ({...state, cartItems: reduceItemInCart(state.cartItems, action.payload)}),
});
