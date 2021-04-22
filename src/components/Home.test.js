import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, storeFactory, checkProps } from "../../test/testUtils";
import Home from "./Home";

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
    addedItems: [],
    total: 0,
  }
) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Home store={store} />)
    .dive()
    .dive();
  return wrapper;
};

describe("Home Component", () => {
  test("should render component without error", () => {
    const component = findByTestAttr(setup(), "Home");
    expect(component).toHaveLength(1);
  });

  test("should render items  without error", () => {
    const component = findByTestAttr(setup(), "box");
    expect(component).toHaveLength(1);
  });

  test("should not render items when items array is empty and should render `No items found!`", () => {
    const box_component = findByTestAttr(setup({ items: [] }), "box");
    expect(box_component).toHaveLength(0);
    const no_items_found_component = findByTestAttr(
      setup({ items: [] }),
      "noitems"
    );
    expect(no_items_found_component.text()).toEqual("No items found!");
  });

  test("should render cards if items array not empty", () => {
    const card_component = findByTestAttr(setup(), "card");
    expect(card_component).toHaveLength(1);
  });
});

describe("check PropTypes", () => {
  test("does not throw warning with expected props", () => {
    const expectedProps = {
      items: [],
      addToCart: () => {},
    };
    checkProps(Home.WrappedComponent, expectedProps);
  });
});
