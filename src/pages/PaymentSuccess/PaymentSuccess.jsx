import React, { useEffect, useState } from "react";
import "./PaymentSuccess.css";
import doctor from "../../assets/doctor.png";
import { useNavigate } from "react-router-dom";
import Animation from "../Animation/Animation";

const PaymentSuccess = () => {
  const [show, setShow] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 6500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="paymentSuccess_main">
      {show && (
        <div className="animation_container">
          <Animation />
        </div>
      )}
      <img src={doctor} alt="Doctor" className="paymentSuccess_image" />
      <h1 className="paymentSuccess_main_text">
        Payment Success and Order Placed!
      </h1>
      <p className="countinue_shoping_text" onClick={() => navigate("/")}>
        Continue Shopping
      </p>
    </div>
  );
};

export default PaymentSuccess;
