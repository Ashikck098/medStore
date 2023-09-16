import React, { useEffect, useState } from "react";
import "./CartItems.css";
import remove from "../../assets/trash_bin.svg";
import heart from "../../assets/favourite.svg";
import { useNavigate } from "react-router-dom";
import axiosApi from "../../AxiosMethod";

const CartItems = () => {
  const [items, setItems] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axiosApi
      .get("/getSingleCart")
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }, []);
  const details = items?.addedCart;
  return (
    <div className="cartItems_main">
      <h1 className="cartItems_heading">
        Shopping Cart ( {items?.totalcount} items )
      </h1>
      <div className="cartItems_card_container">
        {details?.map((detail, key) => (
          <div key={key} className="cartItems_card">
            <img
              src={detail?.product?.productImage?.[0]?.url}
              alt=""
              className="cartItems_card_image"
            />
            <div className="cartItems_card_text_container">
              <p className="cartItems_card_name_text">
                {detail?.product?.name}
              </p>
              <span className="cartItems_card_price_text">
                ₹{detail?.product?.price}
              </span>
            </div>
            <div className="cartItems_card_actions">
              <img src={remove} alt="Delete" className="delete_icon" />
              <img src={heart} alt="Favourite" className="heart_icon" />
            </div>
          </div>
        ))}
      </div>
      <h5 className="continueShopping_text" onClick={() => navigate("/")}>
        Continue Shopping
      </h5>
    </div>
  );
};

export default CartItems;
