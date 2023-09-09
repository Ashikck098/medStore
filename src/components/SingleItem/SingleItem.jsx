import React, { useState } from "react";
import "./SingleItem.css";
import cart from "../../assets/yellow_cart.svg";
import heart from "../../assets/favourite.svg";
import medicine from "../../assets/medicine.png";
import bestPrice from "../../assets/bestPrice.png";

const SingleItem = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="singleItem_main">
      <div className="singleItem_first_section">
        <div className="singleItem_select_images_container">
          <div className="singleItem_select_images_box active">
            <img src={medicine} alt="" />
          </div>
          <div className="singleItem_select_images_box">
            <img src={medicine} alt="" />
          </div>
          <div className="singleItem_select_images_box">
            <img src={medicine} alt="" />
          </div>
          <div className="singleItem_select_images_box">
            <img src={medicine} alt="" />
          </div>
        </div>

        <div className="singleItem_image_box">
          <img src={medicine} alt="" className="singleItem_image_box_image" />
          <img src={bestPrice} alt="" className="bestPrice_image" />
        </div>
      </div>

      <div className="singleItem_second_section">
        <h2 className="singleItem_name_text">
          TrueBasics Heart Omega-3 Antarctic Krill Oil, 30 capsules
        </h2>
        <div className="singleItem_price_container">
          <p className="singleItem_price_text">
            Price: <span>₹799</span>
          </p>
          <div className="favourite">
            <img src={heart} alt="" />
          </div>
        </div>
        <div className="singleItem_buttons_container">
          <div className="counter_box">
            <button className="counter_btn decrease" onClick={handleDecrease}>
              -
            </button>
            <span>{count}</span>
            <button className="counter_btn increase" onClick={handleIncrease}>
              +
            </button>
          </div>

          <button className="singleItem_addTocart_btn">
            <img src={cart} alt="" className="cart_icon" /> Add To Cart
          </button>
          <button className="singleItem_buyNow_btn">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default SingleItem;
