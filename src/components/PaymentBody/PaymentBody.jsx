import React, { useState } from "react";
import "./PaymentBody.css";
import axiosApi from "../../AxiosMethod";
import { useNavigate, useParams } from "react-router-dom";

const PaymentBody = () => {
  const [upiId, setUpiId] = useState();
  const params = useParams();
  const navigate = useNavigate();

  const productId = params?.id;

  const handlePayment = () => {
    const data = {
      orderId: productId,
      paymentData: {
        paymentMethod: "upi",
        paymentId: upiId,
      },
    };
    axiosApi
      .post("/payment/", data)
      .then((response) => {
        navigate("/paymentSuccess");
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };

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
            <p className="payment_card_second_section_para">
              You need to have a registered UPI ID
            </p>
            <input
              type="text"
              placeholder="Enter UPI ID"
              className="payment_card_second_section_input"
              onChange={(e) => setUpiId(e.target.value)}
            />
            <button
              className="payment_card_second_section_button"
              onClick={handlePayment}
            >
              Securely Pay ₹999
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentBody;
