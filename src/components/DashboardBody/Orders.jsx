import React, { useEffect, useState } from "react";
import "./DashboardBody.css";
import medicine from "../../assets/medicine.png";
import axiosApi from "../../AxiosMethod";

const Orders = () => {
  const [orders, setOreders] = useState();

  useEffect(() => {
    axiosApi
      .get("/getallorders")
      .then((response) => {
        console.log(response.data);
        setOreders(response.data);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }, []);

  const order = orders?.Order;
  console.log(order);

  return (
    <div className="orders_main">
      <div className="orders_card_container">
        {order?.map((order, key) => (
          <div className="orders_card">
            <img src={medicine} alt="Product" className="orders_card_image" />
            <div className="orders_card_content">
              <h5 className="orders_card_nameText">
                {order?.product?.productName}
              </h5>
              <p className="orders_card_priceText">₹9{order?.totalPay}</p>
              <div className="orders_card_customer_details">
                <label
                  htmlFor=""
                  className="orders_card_customer_details_label"
                >
                  Customer name :
                </label>
                <p className="orders_card_customer_details_data name_data">
                  {order?.address?.[0]?.name}
                </p>
              </div>
              <div className="orders_card_customer_details">
                <label
                  htmlFor=""
                  className="orders_card_customer_details_label"
                >
                  Mobile number :
                </label>
                <p className="orders_card_customer_details_data">
                  {order?.address?.[0]?.mobileNo}
                </p>
              </div>
              <div className="orders_card_customer_details">
                <label
                  htmlFor=""
                  className="orders_card_customer_details_label"
                >
                  Address :
                </label>
                <p className="orders_card_customer_details_data">
                  {order?.address?.[0]?.areaAndAdress}
                </p>
              </div>
              <div className="orders_card_customer_details">
                <label
                  htmlFor=""
                  className="orders_card_customer_details_label"
                >
                  Quantity :
                </label>
                <p className="orders_card_customer_details_data">
                  {order?.purchasedCount}
                </p>
              </div>
            </div>
            <div className="cashRecieved">Cash Received</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
