import React, { useEffect, useState } from "react";
import "./SingleItem.css";
import cart from "../../assets/yellow_cart.svg";
import heart from "../../assets/favourite.svg";
import bestPrice from "../../assets/bestPrice.png";
import { useNavigate, useParams } from "react-router-dom";
import axiosApi from "../../AxiosMethod";
import { useMyContext } from "../../Context";

const SingleItem = () => {
  const [count, setCount] = useState(1);
  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState();
  const [selectedImage, setSelectedImage] = useState("");

  const handleIncrease = () => {
    if (count < 10) {
      setCount(count + 1);
    }
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
    axiosApi
      .post(`/getproductsingle/${itemId}`)
      .then((response) => {
        setProduct(response.data);
        setSelectedImage(response.data.productImage[0]?.url);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }, [itemId]);

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

  const handleOrder = (productId) => {
    const data = {
      product: productId,
      purchasedCount: count,
    };
    axiosApi
      .post("/addorder", data)
      .then((response) => {
        navigate(`/address?data=${JSON.stringify(response.data)}`);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };

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
              onClick={() => handleThumbnailClick(image.url)}
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

          <button
            className="singleItem_addTocart_btn"
            onClick={() => handleAddToCart(itemId)}
          >
            <img src={cart} alt="" className="cart_icon" /> Add To Cart
          </button>
          <button
            className="singleItem_buyNow_btn"
            onClick={() => handleOrder(itemId)}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleItem;
