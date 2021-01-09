import {CartItem, ShopItem} from '../../types';

export enum CART_ACTIONS {
  SHOW_CART_DROPDOWN = 'SHOW_CART_DROPDOWN',
  HIDE_CART_DROPDOWN = 'HIDE_CART_DROPDOWN',
  TOGGLE_CART_DROPDOWN = 'TOGGLE_CART_DROPDOWN',
  ADD_CART_ITEM = 'ADD_CART_ITEM',
  REMOVE_CART_ITEM = 'REMOVE_CART_ITEM',
  REDUCE_CART_ITEM = 'REDUCE_CART_ITEM',
}

export interface CartActionShowCartDropdown {
  type: CART_ACTIONS.SHOW_CART_DROPDOWN,
}

export interface CartActionHideCartDropdown {
  type: CART_ACTIONS.HIDE_CART_DROPDOWN,
}

export interface CartActionToggleCartDropdown {
  type: CART_ACTIONS.TOGGLE_CART_DROPDOWN,
}

export interface CartActionAddCartItem {
  type: CART_ACTIONS.ADD_CART_ITEM,
  payload: ShopItem,
}

export interface CartActionRemoveCartItem {
  type: CART_ACTIONS.REMOVE_CART_ITEM,
  payload: CartItem,
}

export interface CartActionReduceCartItem {
  type: CART_ACTIONS.REDUCE_CART_ITEM,
  payload: CartItem,
}

export type CartAction = CartActionShowCartDropdown | CartActionHideCartDropdown | CartActionToggleCartDropdown |
  CartActionAddCartItem | CartActionRemoveCartItem | CartActionReduceCartItem;

export const showCartDropdown = (): CartAction => ({
  type: CART_ACTIONS.SHOW_CART_DROPDOWN,
});

export const hideCartDropdown = (): CartAction => ({
  type: CART_ACTIONS.HIDE_CART_DROPDOWN,
});

export const toggleCartDropdown = (): CartAction => ({
  type: CART_ACTIONS.TOGGLE_CART_DROPDOWN,
});

export const addCartItem = (item: ShopItem): CartAction => ({
  type: CART_ACTIONS.ADD_CART_ITEM,
  payload: item,
});

export const removeCartItem = (item: CartItem): CartAction => ({
  type: CART_ACTIONS.REMOVE_CART_ITEM,
  payload: item,
});

export const reduceCartItem = (item: CartItem): CartAction => ({
  type: CART_ACTIONS.REDUCE_CART_ITEM,
  payload: item,
});
