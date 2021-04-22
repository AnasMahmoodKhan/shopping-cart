import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  removeItem,
  addQuantity,
  subtractQuantity,
} from "../store/actions/cart-action";
import Recipe from "./Recipe";

const Cart = ({ items, removeItem, addQuantity, subtractQuantity }) => {
  const handleRemove = (id) => {
    removeItem(id);
  };

  const handleAddQuantity = (id) => {
    addQuantity(id);
  };

  const handleSubtractQuantity = (id) => {
    subtractQuantity(id);
  };

  return (
    <div className="container" data-test="Cart">
      <div className="cart">
        <h5>You have ordered:</h5>
        <ul className="collection">
          {items.length > 0 ? (
            items.map((item) => {
              return (
                <li
                  className="collection-item avatar"
                  data-test="addedItem"
                  key={item.id}
                >
                  <div className="item-img">
                    <img src={item.img} alt={item.img} className="" />
                  </div>

                  <div className="item-desc">
                    <span className="title">{item.title}</span>
                    <p>{item.desc}</p>
                    <p>
                      <b>Price: {item.price}$</b>
                    </p>
                    <p>
                      <b>Quantity: {item.quantity}</b>
                    </p>
                    <div className="add-remove">
                      <Link to="/cart">
                        <i
                          className="material-icons"
                          data-test="AddClick"
                          onClick={() => {
                            handleAddQuantity(item.id);
                          }}
                        >
                          arrow_drop_up
                        </i>
                      </Link>
                      <Link to="/cart">
                        <i
                          className="material-icons"
                          onClick={() => {
                            handleSubtractQuantity(item.id);
                          }}
                        >
                          arrow_drop_down
                        </i>
                      </Link>
                    </div>
                    <button
                      className="waves-effect waves-light btn pink remove"
                      onClick={() => {
                        handleRemove(item.id);
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </li>
              );
            })
          ) : (
            <p data-test="noAddedItems">Nothing Ordered yet.</p>
          )}
        </ul>
      </div>
      <Recipe />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.addedItems,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (id) => {
      dispatch(removeItem(id));
    },
    addQuantity: (id) => {
      dispatch(addQuantity(id));
    },
    subtractQuantity: (id) => {
      dispatch(subtractQuantity(id));
    },
  };
};

Cart.defaultProps = {
  items: [],
  removeItem: () => {},
  addQuantity: () => {},
  subtractQuantity: () => {},
};

Cart.propTypes = {
  items: PropTypes.array.isRequired,
  removeItem: PropTypes.func,
  addQuantity: PropTypes.func,
  subtractQuantity: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
