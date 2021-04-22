import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-wrapper" data-test="Navbar">
      <div className="container">
        <Link to="/" data-test="Logo" className="brand-logo">
          Shopping
        </Link>

        <ul className="right">
          <li>
            <Link data-test="shop" to="/">
              Shop
            </Link>
          </li>
          <li>
            <Link data-test="cart" to="/cart">
              My cart
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <i className="material-icons">shopping_cart</i>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
