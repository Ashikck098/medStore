import React from 'react'
import "./PaymentSuccess.css"
import doctor from "../../assets/doctor.png"
import { useNavigate } from 'react-router-dom'

const PaymentSuccess = () => {
  const navigate = useNavigate();
  return (
    <div className='paymentSuccess_main'>
      <img src={doctor} alt="Doctor" className='paymentSuccess_image'/>
      <h1 className='paymentSuccess_main_text'>Payment Success and Order Placed!</h1>
      <p className='countinue_shoping_text' onClick={()=> navigate("/")}>Continue Shopping</p>
    </div>
  )
}

export default PaymentSuccess