import React from "react";
import "./Collections.css";
import favourite from "../../assets/favourite.svg";
import medicine from "../../assets/medicine.png";

const Collections = () => {
  return (
    <div className="collections_main">
      <h1 className="collections_headingText">Price Slash Alert</h1>
      <div className="collections_card_container">
        <div className="collections_card">
          <div className="card_image_section">
            <img src={favourite} alt="Heart" className="card_favourite" />
            <img src={medicine} alt="Item" className="card_itemImage" />
          </div>
          <div className="card_content_section">
            <p className="card_detailsText">
              MuscleBlaze Biozyme Performance Whey 750g & Creatine…
            </p>
            <span className="card_priceText">₹2,679</span>
            <button className="addToCart_btn">Add to Cart</button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Collections;
