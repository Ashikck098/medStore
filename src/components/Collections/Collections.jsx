import React, { useEffect, useState } from "react";
import "./Collections.css";
import heartWhite from "../../assets/favourite.svg";
import heartPink from "../../assets/Heart.svg";
import { useNavigate } from "react-router-dom";
import axiosApi from "../../AxiosMethod";
import { useMyContext } from "../../Context";

const Collections = () => {
  const [products, setProducts] = useState();
  const [favourite, setFavourite] = useState(true);
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
  const { setCartCount } = useMyContext();

  const handleAddToCart = (productId) => {
    const data = {
      cart: [
        {
          product: productId,
          selectedCount: 1,
        },
      ],
    };
    axiosApi
      .post("/addCart", data)
      .then((response) => {
        setCartCount(response.data.cart.length);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };


  const handleClick = (id) => {
    setFavourite({ ...favourite, [id]: !favourite[id] });
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
            <img src={favourite[key] ? heartPink : heartWhite} alt="Heart" className="card_favourite" onClick={() => handleClick(key)}/>
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
                onClick={() => handleAddToCart(product?._id)}
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
