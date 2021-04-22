import React, { useRef } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Recipe = ({ total, addShipping, substractShipping }) => {
  const shipping = useRef(null);

  const handleChecked = (e) => {
    if (e.target.checked) {
      addShipping();
    } else {
      substractShipping();
    }
  };
  return (
    <div className="container" data-test="Recipe">
      <div className="collection">
        <li className="collection-item">
          <label>
            <input type="checkbox" ref={shipping} onChange={handleChecked} />
            <span>Shipping(+6$)</span>
          </label>
        </li>
        <li className="collection-item">
          <b className="Total">Total: {total} $</b>
        </li>
      </div>
      <div className="checkout">
        <button className="waves-effect waves-light btn">Checkout</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    total: state.total,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addShipping: () => {
      dispatch({ type: "ADD_SHIPPING" });
    },
    substractShipping: () => {
      dispatch({ type: "SUB_SHIPPING" });
    },
  };
};

Recipe.defaultProps = {
  total: 0,
  addShipping: () => {},
  substractShipping: () => {},
};

Recipe.propTypes = {
  total: PropTypes.number.isRequired,
  addShipping: PropTypes.func,
  substractShipping: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);
