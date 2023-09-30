import React from 'react'
import "./OrderHeader.css"
import order from "../../assets/order.svg"
import { useNavigate } from 'react-router-dom'


const OrderHeader = () => {
  const navigate = useNavigate();
  return (
    <div className="orderHeader_main">
    <h1 className="orderHeader_mainText" onClick={() => navigate("/")}>MEDSTORE</h1>
    <form action="" className="header_search_form">
      <input
        type="text"
        placeholder="Search for products & brands..."
        className="header_searchInput"
      />
    </form>
    <div className="cart_icon_section">
      <img src={order} alt="Cart" className="order_icon" />
      Orders
    </div>
  </div>
  )
}

export default OrderHeader