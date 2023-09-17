import React, { useEffect, useState } from "react";
import "./OrderItems.css";
import remove from "../../assets/trash_bin.svg";
import heart from "../../assets/favourite.svg";
import { useNavigate } from "react-router-dom";
import axiosApi from "../../AxiosMethod";

const OrderItems = () => {
  const [details, setDetails] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axiosApi
      .get("/getsingleorders")
      .then((response) => {
        setDetails(response.data);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }, []);
  const detail = details?.Order;

  const handleRemoveOrder = (orderId) => {
    axiosApi
      .delete(`/cancelorder/${orderId}`)
      .then((response) => {
        axiosApi.get("/getsingleorders").then((response) => {
          setDetails(response.data);
        });
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };

  return (
    <div className="orderItems_main">
      <h1 className="orderItems_heading">
        Your Orders ( {details?.Orderscount} items )
      </h1>
      <div className="orderItems_card_container">
        {detail?.map((order, key) => (
          <div key={key} className="orderItems_card">
            <img
              src={order?.product?.productImage?.[0]?.url}
              alt=""
              className="orderItems_card_image"
            />
            <div className="orderItems_card_text_container">
              <p className="orderItems_card_name_text">
                {order?.product?.productName}
              </p>
              <span className="orderItems_card_price_text">
                ₹{order?.totalPay}
              </span>
              <span className="orderItems_card_name_text">
                Quantity: {order?.purchasedCount}
              </span>
            </div>
            <div className="orderItems_card_actions">
              <img
                src={remove}
                alt="Delete"
                className="delete_icon"
                onClick={() => handleRemoveOrder(order?._id)}
              />
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

export default OrderItems;
