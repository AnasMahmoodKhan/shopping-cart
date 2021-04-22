import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, storeFactory, checkProps } from "../../test/testUtils";
import Recipe from "./Recipe";

const setup = (
  initialState = {
    total: 110,
  }
) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Recipe store={store} />)
    .dive()
    .dive();
  return wrapper;
};

describe("Recipe Component", () => {
  test("should render component without error", () => {
    const component = findByTestAttr(setup(), "Recipe");
    expect(component).toHaveLength(1);
  });

  test("should update total checkbox click on click", () => {
    const store = storeFactory({
      total: 110,
    });
    const wrapper = shallow(<Recipe store={store} />)
      .dive()
      .dive();
    const checkbox = wrapper.find("input");
    checkbox.simulate("change", { target: { checked: true } });
    expect(store.getState().total).toBe(116);

    checkbox.simulate("change", { target: { checked: false } });
    expect(store.getState().total).toBe(110);
  });
});

describe("check PropTypes", () => {
  test("does not throw warning with expected props", () => {
    const expectedProps = {
      total: 0,
      addShipping: () => {},
      substractShipping: () => {},
    };
    checkProps(Recipe.WrappedComponent, expectedProps);
  });
});
