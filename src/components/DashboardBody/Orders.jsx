import React from "react";
import "./DashboardBody.css";
import medicine from "../../assets/medicine.png";

const Orders = () => {
  return (
    <div className="orders_main">
        <div className="orders_card_container">
      <div className="orders_card">
        <img src={medicine} alt="Product" className="orders_card_image" />
        <div className="orders_card_content">
          <h5 className="orders_card_nameText">
            TrueBasics Fish Oil with 1250mg Omega-3 560mg EPA 400mg DHA, 60
            capsules
          </h5>
          <p className="orders_card_priceText">₹999</p>
          <div className="orders_card_customer_details">
            <label htmlFor="" className="orders_card_customer_details_label">
              Customer name :
            </label>
            <p className="orders_card_customer_details_data name_data">
              Sharath Kumar
            </p>
          </div>
          <div className="orders_card_customer_details">
            <label htmlFor="" className="orders_card_customer_details_label">
              Mobile number :
            </label>
            <p className="orders_card_customer_details_data">9675435489</p>
          </div>
          <div className="orders_card_customer_details">
            <label htmlFor="" className="orders_card_customer_details_label">
              Address :
            </label>
            <p className="orders_card_customer_details_data">
              Madras Home 17A, Number 20 Madras mail
            </p>
          </div>
          <div className="orders_card_customer_details">
            <label htmlFor="" className="orders_card_customer_details_label">
              Quantity :
            </label>
            <p className="orders_card_customer_details_data">
              23
            </p>
          </div>
        </div>
        <div className="cashRecieved">Cash Received</div>
      </div>
      </div>
    </div>
  );
};

export default Orders;
