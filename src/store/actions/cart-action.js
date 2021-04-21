import { actionTypes } from "./actionTypes/cart-actions";

export const addToCart = (id) => {
  return {
    type: actionTypes.ADD_TO_CART,
    id,
  };
};

export const removeItem = (id) => {
  return {
    type: actionTypes.REMOVE_ITEM,
    id,
  };
};

export const subtractQuantity = (id) => {
  return {
    type: actionTypes.SUB_QUANTITY,
    id,
  };
};

export const addQuantity = (id) => {
  return {
    type: actionTypes.ADD_QUANTITY,
    id,
  };
};
