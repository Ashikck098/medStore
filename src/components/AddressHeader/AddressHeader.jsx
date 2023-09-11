import React from 'react'
import "./AddressHeader.css"
import process from "../../assets/address_process.png"

const AddressHeader = () => {
  return (
    <div className='addressHeader_main'>
         <h1 className="addressHeader_mainText">MEDSTORE</h1>
         <img src={process} alt="Process" className='process_image'/>
    </div>
  )
}

export default AddressHeader