import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, storeFactory } from "../../test/testUtils";
import Navbar from "./Navbar";

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Navbar store={store} />);
  return wrapper;
};

describe("Navbar Component", () => {
  test("should render component without error", () => {
    const component = findByTestAttr(setup(), "Navbar");
    expect(component).toHaveLength(1);
  });

  test("should render Logo on mount with correct route", () => {
    const component = findByTestAttr(setup(), "Logo");
    expect(component).toHaveLength(1);
    expect(component.text()).toEqual("Shopping");
    expect(component.props().to).toEqual("/");
  });

  test("should render shop Link with correct route", () => {
    const component = findByTestAttr(setup(), "shop");
    expect(component).toHaveLength(1);
    expect(component.text()).toEqual("Shop");
    expect(component.props().to).toEqual("/");
  });

  test("should render cart Link with correct route", () => {
    const component = findByTestAttr(setup(), "cart");
    expect(component).toHaveLength(1);
    expect(component.text()).toEqual("My cart");
    expect(component.props().to).toEqual("/cart");
  });
});
