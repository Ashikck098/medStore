import React, { useEffect, useState } from "react";
import "./SingleItem.css";
import cart from "../../assets/yellow_cart.svg";
import heart from "../../assets/favourite.svg";
import bestPrice from "../../assets/bestPrice.png";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../config";

const SingleItem = () => {
  const [count, setCount] = useState(1);
  const params = useParams();
  const [product, setProduct] = useState();
  const [selectedImage, setSelectedImage] = useState("");

  const handleIncrease = () => {
    if (count < 10) {
    setCount(count + 1);}
  };

  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleThumbnailClick = (imageURL) => {
    setSelectedImage(imageURL);
  };

  const itemId = params?.id;

  useEffect(() => {
    axios
      .post(`${API_URL}/getproductsingle/${itemId}`)
      .then((response) => {
        setProduct(response.data);
        setSelectedImage(response.data.productImage[0]?.url);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }, [itemId]);

  return (
    <div className="singleItem_main">
      <div className="singleItem_first_section">
        <div className="singleItem_select_images_container">
          {product?.productImage.map((image, index) => (
            <div
              key={index}
              className={`singleItem_select_images_box ${
                selectedImage === image.url ? "active" : ""
              }`}
              onClick={() => handleThumbnailClick(image.url)} // Handle thumbnail click
            >
              <img src={image.url} alt="" />
            </div>
          ))}
        </div>

        <div className="singleItem_image_box">
          <img
            src={selectedImage}
            alt=""
            className="singleItem_image_box_image"
          />
          <img src={bestPrice} alt="" className="bestPrice_image" />
        </div>
      </div>

      <div className="singleItem_second_section">
        <h2 className="singleItem_name_text">{product?.productName}</h2>
        <div className="singleItem_price_container">
          <p className="singleItem_price_text">
            Price: <span>₹{product?.price}</span>
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
