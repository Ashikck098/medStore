import React from "react";
import "./PaymentBody.css";

const PaymentBody = () => {
  return (
    <div className="paymentBody_main">
      <div className="payment_card">
        <h2 className="payment_card_heading">Payment Method</h2>
        <div className="payment_card_content_section">
          <div className="payment_card_first_section">
            <div className="payment_card_first_section_firstCard">
              <h2 className="payment_card_heading">Pay Using UPI</h2>
            </div>
            <div className="payment_card_first_section_card">Debit Card</div>
            <div className="payment_card_first_section_card">Credit Card</div>
            <div className="payment_card_first_section_card">Simpl</div>
            <div className="payment_card_first_section_card">Wallets</div>
            <div className="payment_card_first_section_card">
              Internet Banking
            </div>
            <div className="payment_card_first_section_card">
              EMI or Pay Later
            </div>
            <div className="payment_card_first_section_card">
              Cash On Delivery
            </div>
          </div>

          <div className="payment_card_second_section">
          <h2 className="payment_card_heading">Add a new UPI</h2>
          <p className="payment_card_second_section_para">You need to have a registered UPI ID</p>
          <input type="text" placeholder="Enter UPI ID" className="payment_card_second_section_input"/>
          <button className="payment_card_second_section_button">Securely Pay ₹999</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentBody;
