import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Home = ({ items }) => {
  const handleClick = (id) => {
    console.log(id);
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
  return {};
};

Home.defaultProps = {
  items: [],
};

Home.propTypes = {
  items: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
