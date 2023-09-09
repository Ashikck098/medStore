import React from 'react'
import "./Banner.css"
import banner from "../../assets/banner.png"

const Banner = () => {
  return (
    <div className='banner_main'>
        <h2 className='banner_text'>Pick Your Meds Online. Meds on Your Doorstep</h2>
        <div className='banner_imageContainer'>
            <img src={banner} alt="Banner" />
        </div>
    </div>
  )
}

export default Banner