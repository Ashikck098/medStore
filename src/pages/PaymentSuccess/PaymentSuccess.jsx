import React from 'react'
import "./PaymentSuccess.css"
import doctor from "../../assets/doctor.png"

const PaymentSuccess = () => {
  return (
    <div className='paymentSuccess_main'>
      <img src={doctor} alt="Doctor" className='paymentSuccess_image'/>
      <h1 className='paymentSuccess_main_text'>Payment Success and Order Placed!</h1>
      <p className='countinue_shoping_text'>Continue Shopping</p>
    </div>
  )
}

export default PaymentSuccess