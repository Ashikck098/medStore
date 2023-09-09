import React from "react";
import "./CartHeader.css";
import cart from "../../assets/cart.svg";

const CartHeader = () => {
  return (
    <div className="header_main">
      <h1 className="header_mainText">MEDSTORE</h1>
      <form action="" className="header_search_form">
        <input
          type="text"
          placeholder="Search for products & brands..."
          className="header_searchInput"
        />
      </form>
      <div className="cart_icon_section">
        <img src={cart} alt="Cart" className="cart_icon" />
        Cart
      </div>
    </div>
  );
};

export default CartHeader;
