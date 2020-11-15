import { cartActionTypes } from "./cartTypes";
import { addItemToCart, removeItemFromCart } from "./cartUtils";
const INITIAL_STATE = {
  isCartDropdownHidden: true,
  cartItems: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_DROPDOWN:
      return { ...state, isCartDropdownHidden: !state.isCartDropdownHidden };
    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    case cartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== action.payload.id
        )
      };
    case cartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      };
    default:
      return state;
  }
};
