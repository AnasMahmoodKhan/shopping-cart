import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, storeFactory } from "../test/testUtils";
import App from "./App";

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<App store={store} />);
  return wrapper;
};

describe("App Component", () => {
  test("should render component without error", () => {
    const component = findByTestAttr(setup(), "App");
    expect(component).toHaveLength(1);
  });

  test("should have Route with path /cart", () => {
    const component = findByTestAttr(setup(), "Cart");
    expect(component).toHaveLength(1);
    expect(component.props().path).toEqual("/cart");
  });

  test("should have Route with path /", () => {
    const component = findByTestAttr(setup(), "Home");
    expect(component).toHaveLength(1);
    expect(component.props().path).toEqual("/");
  });
});
