import React from 'react'
import "./PaymentHeader.css"
import process from "../../assets/payment_process.png"

const PaymentHeader = () => {
  return (
    <div className='paymentHeader_main'>
    <h1 className="paymentHeader_mainText">MEDSTORE</h1>
    <img src={process} alt="Process" className='process_image'/>
</div>
  )
}

export default PaymentHeader