import { actionTypes } from "./actionTypes/cart-actions";

export const addToCart = (id) => {
  return {
    type: actionTypes.ADD_TO_CART,
    id,
  };
};
