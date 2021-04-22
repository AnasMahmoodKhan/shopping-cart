import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addToCart } from "../store/actions/cart-action";

const Home = ({ items, addToCart }) => {
  const handleClick = (id) => {
    addToCart(id);
  };

  return (
    <div className="container" data-test="Home">
      <h3 className="center">Our items</h3>
      {items.length > 0 ? (
        <div className="box" data-test="box">
          {items.map((item) => (
            <div className="card" data-test="card" key={item.id}>
              <div className="card-image">
                <img src={item.img} alt={item.title} />
                <span className="card-title">{item.title}</span>
                <span
                  to="/"
                  className="btn-floating halfway-fab waves-effect waves-light red"
                  onClick={() => {
                    handleClick(item.id);
                  }}
                >
                  <i className="material-icons">add</i>
                </span>
              </div>

              <div className="card-content">
                <p>{item.desc}</p>
                <p>
                  <b>Price: {item.price}$</b>
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <span data-test="noitems">No items found!</span>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(addToCart(id));
    },
  };
};

Home.defaultProps = {
  items: [],
  addToCart: () => {},
};

Home.propTypes = {
  items: PropTypes.array.isRequired,
  addToCart: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
