import React, { useEffect, useState } from "react";
import "./Collections.css";
import favourite from "../../assets/favourite.svg";
import axios from "axios";
import { API_URL } from "../../config";
import { useNavigate } from "react-router-dom";

const Collections = () => {
  const [products, setProducts] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API_URL}/getallproducts`)
      .then((response) => {
        setProducts(response.data.allproducts);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }, []);

  const limitProductName = (productName) => {
    const words = productName.split(" ");
    if (words.length > 20) {
      return words.slice(0, 8).join(" ") + " ..."; 
    }
    return productName;
  };

  return (
    <div className="collections_main">
      <h1 className="collections_headingText">Price Slash Alert</h1>
      <div className="collections_card_container">
        {products?.map((product, key) => (
          <div key={key} className="collections_card" onClick={() => navigate(`/singlePage/${product?._id}`)}>
            <div className="card_image_section">
              <img src={favourite} alt="Heart" className="card_favourite" />
              <img src={product?.productImage?.[0]?.url} alt="Item" className="card_itemImage" />
            </div>
            <div className="card_content_section">
              <p className="card_detailsText">
                {limitProductName(product?.productName)}
              </p>
              <span className="card_priceText">₹{product?.price}</span>
              <button className="addToCart_btn">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collections;
