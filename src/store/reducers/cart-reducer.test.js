import { actionTypes } from "../actions/actionTypes/cart-actions";
import cartReducer from "./cart-reducer";
import { items } from "./items";

const initState = {
  items: items,
  addedItems: [],
  total: 0,
};

test("should return default initial state when no action is passed", () => {
  const newState = cartReducer(undefined, {});
  expect(newState).toStrictEqual(initState);
});

test('should add item to addedItems state object upon receiving an action of type "ADD_TO_CART"', () => {
  const newState = cartReducer(initState, {
    type: actionTypes.ADD_TO_CART,
    id: 2,
  });

  expect(newState).toStrictEqual({
    ...initState,
    addedItems: [{ ...items[1], quantity: 1 }],
    total: items[1].price,
  });
});

test('should remove item to addedItems state object upon receiving an action of type "REMOVE_CART"', () => {
  const newState = cartReducer(
    {
      ...initState,
      addedItems: [{ ...items[1], quantity: 1 }],
      total: items[1].price,
    },
    {
      type: actionTypes.REMOVE_ITEM,
      id: 2,
    }
  );

  expect(newState).toStrictEqual(initState);
});

test('should increase item quantitiy by 1 state object upon receiving an action of type "ADD_QUANTITY"', () => {
  const initStateCopy = Object.assign({}, initState);
  const newState = cartReducer(
    {
      ...initStateCopy,
      addedItems: [
        {
          id: 2,
          title: "Adidas",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
          price: 80,
          img: "item2.jpg",
          quantity: 1,
        },
      ],
      total: items[1].price,
    },
    {
      type: actionTypes.ADD_QUANTITY,
      id: 2,
    }
  );

  expect(newState).toStrictEqual({
    ...initStateCopy,
    addedItems: [{ ...items[1], quantity: 2 }],
    total: items[1].price * 2,
  });
});

test('should reduce item quantitiy by 1 state object upon receiving an action of type "SUB_QUANTITY"', () => {
  const initStateCopy = Object.assign({}, initState);
  const newState = cartReducer(
    {
      ...initStateCopy,
      addedItems: [{ ...items[1], quantity: 1 }],
      total: items[1].price,
    },
    {
      type: actionTypes.SUB_QUANTITY,
      id: 2,
    }
  );

  expect(newState).toStrictEqual(initState);
});

test('should add 6$ to total state object upon receiving an action of type "ADD_SHIPPING"', () => {
  const newState = cartReducer(initState, {
    type: actionTypes.ADD_SHIPPING,
  });

  expect(newState).toStrictEqual({ ...initState, total: 6 });
});

test('should remove 6$ from total state object upon receiving an action of type "SUB_SHIPPING"', () => {
  const newState = cartReducer(
    { ...initState, total: 6 },
    {
      type: actionTypes.SUB_SHIPPING,
    }
  );

  expect(newState).toStrictEqual(initState);
});
