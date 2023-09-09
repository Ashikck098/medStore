import React, { useState } from "react";
import "./Header.css";
import search from "../../assets/search_icon.svg";
import cart from "../../assets/cart_icon.svg";
import AuthModal from "../AuthModal/AuthModal";

export const Header = () => {

  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
   console.log("hello");
  }

  return (
    <>
    <div className="header_main">
      <h1 className="header_mainText">MEDSTORE</h1>
      <form action="" className="header_search_form">
        <img src={search} alt="Icon" className="header_searchIcon" />
        <input
          type="text"
          placeholder="Search for products & brands..."
          className="header_searchInput"
        />
      </form>
      <button className="header_loginBtn" onClick={handleModal}>Login</button>
      <div className="header_cart_container">
        <img src={cart} alt="Cart" className="header_cartIcon" />
        <div className="headet_cart_count">0</div>
      </div>
    </div>
    {showModal && <AuthModal handleModal={handleModal}/>}
    </>
  );
};


export default Header