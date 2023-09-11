import React from "react";
import "./AddressBody.css";

const AddressBody = () => {
  return (
    <div className="addressBody_main">
      <div className="address_form_card">
        <form action="">
          <div className="address_form_input_section">
            <div className="address_form_input_container">
              <label htmlFor="" className="address_form_label">
                Name
              </label>
              <input type="text" className="address_form_inputField" />
            </div>
            <div className="address_form_input_container">
              <label htmlFor="" className="address_form_label">
                Mobile No.
              </label>
              <input type="number" className="address_form_inputField" />
            </div>
          </div>
          <label htmlFor="" className="address_form_label">
            Address(Area & Street)
          </label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="2"
            placeholder="Type Your Address"
            className="address_form_inputField"
          ></textarea>
          <button className="address_form_button">Save & Deliver</button>
        </form>
      </div>

      <div className="orderSummary_card">
        <h2 className="orderSummary_card_heading">
          Order Summary <span> (2 items)</span>
        </h2>

        <div className="orderSummary_card_text_container">
          <p className="orderSummary_card_leftText">Total MRP</p>{" "}
          <span className="orderSummary_card_rightText">₹999</span>
        </div>

        <div className="orderSummary_card_text_container">
          <p className="orderSummary_card_leftText">Shipping Charges</p>{" "}
          <span className="orderSummary_card_rightText freeText">FREE</span>
        </div>

        <div className="orderSummary_card_Bottomtext_container">
          <p className="orderSummary_card_Bottomtext">Payable Amount</p>{" "}
          <span className="orderSummary_card_Bottomtext">₹999</span>
        </div>
      </div>
    </div>
  );
};

export default AddressBody;
