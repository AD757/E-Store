import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce((accQuantity, { quantity }) => accQuantity + quantity, 0)
);

export const selectIsCartDropdownHidden = createSelector(
  [selectCart],
  cart => cart.isCartDropdownHidden
);

export const selectCartTotal = createSelector([selectCartItems], cartItems =>
  cartItems.reduce(
    (accSumm, { price, quantity }) => accSumm + price * quantity,
    0
  )
);
