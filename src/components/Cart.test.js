import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, storeFactory, checkProps } from "../../test/testUtils";
import Cart from "./Cart";

const setup = (
  initialState = {
    items: [
      {
        id: 1,
        title: "Winter body",
        desc:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
        price: 110,
      },
    ],
    addedItems: [
      {
        id: 1,
        title: "Winter body",
        desc:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
        price: 110,
        quantity: 1,
      },
    ],
    total: 110,
  }
) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Cart store={store} />)
    .dive()
    .dive();
  return wrapper;
};

describe("Home Component", () => {
  test("should render component without error", () => {
    const component = findByTestAttr(setup(), "Cart");
    expect(component).toHaveLength(1);
  });

  test("should render items without error when addedItems is not empty", () => {
    const component = findByTestAttr(setup(), "addedItem");
    expect(component).toHaveLength(1);
  });

  test("should not render items when addedItems array is empty and should render `Nothing Ordered yet.`", () => {
    const no_items_found_component = findByTestAttr(
      setup({ items: [] }),
      "noAddedItems"
    );
    expect(no_items_found_component.text()).toEqual("Nothing Ordered yet.");
  });
});

describe("check PropTypes", () => {
  test("does not throw warning with expected props", () => {
    const expectedProps = {
      items: [],
    };
    checkProps(Cart, expectedProps);
  });
});
