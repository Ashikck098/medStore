import React from "react";
import "./CartItems.css";
import medicine from "../../assets/medicine.png";
import remove from "../../assets/trash_bin.svg";
import heart from "../../assets/favourite.svg";

const CartItems = () => {
  return (
    <div className="cartItems_main">
      <h1 className="cartItems_heading">Shopping Cart ( 2 items )</h1>
      <div className="cartItems_card_container">
        <div className="cartItems_card">
          <img src={medicine} alt="" className="cartItems_card_image" />
          <div className="cartItems_card_text_container">
            <p className="cartItems_card_name_text">
              TrueBasics Fish Oil with 1250mg Omega-3 560mg EPA 400mg DHA, 60
              capsules
            </p>
            <span className="cartItems_card_price_text">₹999</span>
          </div>
          <div className="cartItems_card_actions">
            <img src={remove} alt="Delete" className="delete_icon" />
            <img src={heart} alt="Favourite" className="heart_icon" />
          </div>
        </div>


        <div className="cartItems_card">
          <img src={medicine} alt="" className="cartItems_card_image" />
          <div className="cartItems_card_text_container">
            <p className="cartItems_card_name_text">
              TrueBasics Fish Oil with 1250mg Omega-3 560mg EPA 400mg DHA, 60
              capsules
            </p>
            <span className="cartItems_card_price_text">₹999</span>
          </div>
          <div className="cartItems_card_actions">
            <img src={remove} alt="Delete" className="delete_icon" />
            <img src={heart} alt="Favourite" className="heart_icon" />
          </div>
        </div>
      </div>
      <h5 className="continueShopping_text">Continue Shopping</h5>
    </div>
  );
};

export default CartItems;
