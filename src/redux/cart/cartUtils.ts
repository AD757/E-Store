import {CartItem, ShopItem} from '../../types';

export const addItemToCart = (cartItems: CartItem[], item: ShopItem | CartItem): CartItem[] => {
  const index = cartItems.findIndex((cartItem: CartItem) => cartItem.id === item.id);
  if (index === -1) {
    return [
      ...cartItems,
      {
        ...item,
        quantity: 1,
      }
    ];
  } else {
    const cartItem = cartItems[index];
    const newCartItems = [...cartItems];
    newCartItems[index] = {
      ...cartItem,
      quantity: 1 + cartItem.quantity,
    };
    return newCartItems;
  }
};

export const reduceItemInCart = (cartItems: CartItem[], item: CartItem): CartItem[] => {
  const index = cartItems.findIndex((cartItem: CartItem) => cartItem.id === item.id);
  if (index !== -1) {
    const cartItem = cartItems[index];
    if (cartItem.quantity > 1) {
      const newCartItems = [...cartItems];
      newCartItems[index] = {
        ...cartItem,
        quantity: cartItem.quantity - 1,
      };
      return newCartItems;
    }
  }
  return [...cartItems];
};

export const removeItemFromCart = (cartItems: CartItem[], item: CartItem): CartItem[] =>
  cartItems.filter(cItem => cItem.id !== item.id);