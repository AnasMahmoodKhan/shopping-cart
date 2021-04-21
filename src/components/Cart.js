import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  removeItem,
  addQuantity,
  subtractQuantity,
} from "../store/actions/cart-action";

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
    <div className="container">
      <div className="cart">
        <h5>You have ordered:</h5>
        <ul className="collection">
          {items.length > 0 ? (
            items.map((item) => {
              return (
                <li className="collection-item avatar" key={item.id}>
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
            <p>Nothing Ordered yet.</p>
          )}
        </ul>
      </div>
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
};

Cart.propTypes = {
  items: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
