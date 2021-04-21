import { actionTypes } from "../actions/actionTypes/cart-actions";
import { items } from "./items";

const initState = {
  items: items,
  addedItems: [],
  total: 0,
};

const cartReducer = (state = initState, action) => {
  if (action.type === actionTypes.ADD_TO_CART) {
    let addedItem = state.items.find((item) => item.id === action.id);
    let existed_item = state.addedItems.find((item) => action.id === item.id);
    if (existed_item) {
      addedItem.quantity += 1;
      return {
        ...state,
        total: state.total + addedItem.price,
      };
    } else {
      addedItem.quantity = 1;
      let newTotal = state.total + addedItem.price;

      return {
        ...state,
        addedItems: [...state.addedItems, addedItem],
        total: newTotal,
      };
    }
  }

  if (action.type === actionTypes.REMOVE_ITEM) {
    return {
      ...state,
    };
  }

  if (action.type === actionTypes.ADD_QUANTITY) {
    return {
      ...state,
    };
  }

  if (action.type === actionTypes.SUB_QUANTITY) {
    return {
      ...state,
    };
  }

  if (action.type === actionTypes.ADD_SHIPPING) {
    return {
      ...state,
    };
  }

  if (action.type === actionTypes.SUB_SHIPPING) {
    return {
      ...state,
    };
  }
  return state;
};

export default cartReducer;
