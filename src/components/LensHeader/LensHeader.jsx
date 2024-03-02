import React from 'react'
import { useNavigate } from 'react-router-dom'
import scanner from "../../assets/scanner2.png";
import './LensHeader.css'
const LensHeader = () => {

    const navigate = useNavigate()
     
  return (
    <div className="header_main">
      <h1 className="header_mainText" onClick={() => navigate("/")}>MEDSTORE</h1>
      <form action="" className="header_search_form">
        <input
          type="text"
          placeholder="Search for products & brands..."
          className="header_searchInput"
        />
      </form>
      <div className="cart_icon_section">
        <img src={scanner} alt="Cart" className="cart_icon" />
        Med lens
      </div>
    </div>
  )
}

export default LensHeader