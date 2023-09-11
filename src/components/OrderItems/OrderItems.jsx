import React from "react";
import "./OrderItems.css";
import medicine from "../../assets/medicine.png";
import remove from "../../assets/trash_bin.svg";
import heart from "../../assets/favourite.svg";

const OrderItems = () => {
  return (
    <div className="orderItems_main">
      <h1 className="orderItems_heading">Your Orders ( 2 items )</h1>
      <div className="orderItems_card_container">
        <div className="orderItems_card">
          <img src={medicine} alt="" className="orderItems_card_image" />
          <div className="orderItems_card_text_container">
            <p className="orderItems_card_name_text">
              TrueBasics Fish Oil with 1250mg Omega-3 560mg EPA 400mg DHA, 60
              capsules
            </p>
            <span className="orderItems_card_price_text">₹999</span>
          </div>
          <div className="orderItems_card_actions">
            <img src={remove} alt="Delete" className="delete_icon" />
            <img src={heart} alt="Favourite" className="heart_icon" />
          </div>
        </div>

        <div className="orderItems_card">
          <img src={medicine} alt="" className="orderItems_card_image" />
          <div className="orderItems_card_text_container">
            <p className="orderItems_card_name_text">
              TrueBasics Fish Oil with 1250mg Omega-3 560mg EPA 400mg DHA, 60
              capsules
            </p>
            <span className="orderItems_card_price_text">₹999</span>
          </div>
          <div className="orderItems_card_actions">
            <img src={remove} alt="Delete" className="delete_icon" />
            <img src={heart} alt="Favourite" className="heart_icon" />
          </div>
        </div>
      </div>
      <h5 className="continueShopping_text">Continue Shopping</h5>
    </div>
  );
};

export default OrderItems;
