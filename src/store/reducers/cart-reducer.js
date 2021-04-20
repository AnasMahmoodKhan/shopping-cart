import Item1 from "../../images/item1.jpg";
import Item2 from "../../images/item2.jpg";
import Item3 from "../../images/item3.jpg";
import Item4 from "../../images/item4.jpg";
import Item5 from "../../images/item5.jpg";
import Item6 from "../../images/item6.jpg";
import { actionTypes } from "../actions/actionTypes/cart-actions";

const initState = {
  items: [
    {
      id: 1,
      title: "Winter body",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 110,
      img: Item1,
    },
    {
      id: 2,
      title: "Adidas",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 80,
      img: Item2,
    },
    {
      id: 3,
      title: "Vans",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 120,
      img: Item3,
    },
    {
      id: 4,
      title: "White",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 260,
      img: Item4,
    },
    {
      id: 5,
      title: "Cropped-sho",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 160,
      img: Item5,
    },
    {
      id: 6,
      title: "Blues",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 90,
      img: Item6,
    },
  ],
  addedItems: [],
  total: 0,
};

const cartReducer = (state = initState, action) => {
  if (action.type === actionTypes.ADD_TO_CART) {
    return {
      ...state,
    };
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
