import React, { useEffect, useState } from "react";
import "./Collections.css";
import favourite from "../../assets/favourite.svg";
import { useNavigate } from "react-router-dom";
import axiosApi from "../../AxiosMethod";
import { useCart } from "../../CartContext";

const Collections = () => {
  const [products, setProducts] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axiosApi
      .get("/getallproducts")
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

  const { handleAddToCart } = useCart();
  const handleAddProductToCart = (productId) => {
    handleAddToCart(productId);
  };

  return (
    <div className="collections_main">
      <h1 className="collections_headingText">Price Slash Alert</h1>
      <div className="collections_card_container">
        {products?.map((product, key) => (
          <div key={key} className="collections_card">
            <div
              className="card_image_section"
              onClick={() => navigate(`/singlePage/${product?._id}`)}
            >
              <img
                src={product?.productImage?.[0]?.url}
                alt="Item"
                className="card_itemImage"
              />
            </div>
            <img src={favourite} alt="Heart" className="card_favourite" />
            <div className="card_content_section">
              <div
                className="card_text_contents"
                onClick={() => navigate(`/singlePage/${product?._id}`)}
              >
                <p className="card_detailsText">
                  {limitProductName(product?.productName)}
                </p>
                <span className="card_priceText">₹{product?.price}</span>
              </div>
              <button
                className="addToCart_btn"
                onClick={() => handleAddProductToCart(product?._id)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collections;
