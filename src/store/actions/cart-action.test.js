import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { items } from "../reducers/items";
import { actionTypes } from "./actionTypes/cart-actions";
import {
  addQuantity,
  addToCart,
  removeItem,
  subtractQuantity,
} from "./cart-action";

describe("test for cart-actions", () => {
  let store;
  beforeEach(() => {
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);
    store = mockStore({
      items: items,
      addedItems: [],
      total: 0,
    });
  });

  test("for addToCart action dispatch", () => {
    const expectedActions = [{ type: actionTypes.ADD_TO_CART, id: 0 }];
    store.dispatch(addToCart(0));
    expect(store.getActions()).toEqual(expectedActions);
  });

  test("for removeItem action dispatch", () => {
    const expectedActions = [{ type: actionTypes.REMOVE_ITEM, id: 0 }];
    store.dispatch(removeItem(0));
    expect(store.getActions()).toEqual(expectedActions);
  });

  test("for subtractQuantity action dispatch", () => {
    const expectedActions = [{ type: actionTypes.SUB_QUANTITY, id: 0 }];
    store.dispatch(subtractQuantity(0));
    expect(store.getActions()).toEqual(expectedActions);
  });

  test("for addQuantity action dispatch", () => {
    const expectedActions = [{ type: actionTypes.ADD_QUANTITY, id: 0 }];
    store.dispatch(addQuantity(0));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
