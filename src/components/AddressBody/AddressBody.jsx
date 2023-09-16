import React, { useState } from "react";
import "./AddressBody.css";
import { useLocation, useNavigate } from "react-router-dom";
import axiosApi from "../../AxiosMethod";

const AddressBody = () => {
  const [about, setAbout] = useState();
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const dataString = queryParams.get("data");
  const data = JSON.parse(dataString);
  const itemId = data?.orderedproductid;
  const details = data?.createOrderedProduct;

  const handleDeliver = (e) => {
    e.preventDefault();
    const data = {
      orderId: itemId,
      address: [
        {
          name: about?.name,
          mobileNo: about?.mobileNo,
          areaAndAdress: about?.address,
        },
      ],
    };

    axiosApi
      .post("/address/", data)
      .then((response) => {
        navigate(`/payment/${itemId}`);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };

  return (
    <div className="addressBody_main">
      <div className="address_form_card">
        <form action="">
          <div className="address_form_input_section">
            <div className="address_form_input_container">
              <label htmlFor="" className="address_form_label">
                Name
              </label>
              <input
                type="text"
                className="address_form_inputField"
                onChange={(e) => setAbout({ ...about, name: e.target.value })}
              />
            </div>
            <div className="address_form_input_container">
              <label htmlFor="" className="address_form_label">
                Mobile No.
              </label>
              <input
                type="number"
                className="address_form_inputField"
                onChange={(e) =>
                  setAbout({ ...about, mobileNo: e.target.value })
                }
              />
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
            onChange={(e) => setAbout({ ...about, address: e.target.value })}
          ></textarea>
          <button className="address_form_button" onClick={handleDeliver}>
            Save & Deliver
          </button>
        </form>
      </div>

      <div className="orderSummary_card">
        <h2 className="orderSummary_card_heading">
          Order Summary{" "}
          <span>
            {" "}
            ( {details?.purchasedCount}{" "}
            {details?.purchasedCount < 2 ? "item" : "items"} )
          </span>
        </h2>

        <div className="orderSummary_card_text_container">
          <p className="orderSummary_card_leftText">Total MRP</p>{" "}
          <span className="orderSummary_card_rightText">
            ₹{details?.totalPay}
          </span>
        </div>

        <div className="orderSummary_card_text_container">
          <p className="orderSummary_card_leftText">Shipping Charges</p>{" "}
          <span className="orderSummary_card_rightText freeText">FREE</span>
        </div>

        <div className="orderSummary_card_Bottomtext_container">
          <p className="orderSummary_card_Bottomtext">Payable Amount</p>{" "}
          <span className="orderSummary_card_Bottomtext">
            ₹{details?.totalPay}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AddressBody;
