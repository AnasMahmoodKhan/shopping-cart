import { applyMiddleware, createStore } from "redux";
import ReduxThunk from "redux-thunk";
import cartReducer from "./store/reducers/cart-reducer";

export const middlewares = [ReduxThunk];
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

export default createStoreWithMiddleware(
  cartReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
