import React, { useEffect, useState } from "react";
import "./Header.css";
import search from "../../assets/search_icon.svg";
import cart from "../../assets/cart_icon.svg";
import logout from "../../assets/logout.svg";
import AuthModal from "../AuthModal/AuthModal";
import { useNavigate } from "react-router-dom";
import { useMyContext } from "../../Context";

export const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const navigate = useNavigate();

  const handleModal = () => {
    setShowModal(!showModal);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, [showModal]);

  const { cartCount } = useMyContext();
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
        {token ? (
          <button
            className="header_orderBtn"
            onClick={() => navigate("/orders")}
          >
            Orders
          </button>
        ) : (
          <button className="header_loginBtn" onClick={handleModal}>
            Login
          </button>
        )}

        <div
          className="header_cart_container"
          onClick={() => navigate("/cart")}
        >
          <img src={cart} alt="Cart" className="header_cartIcon" />
          <div className="headet_cart_count">{cartCount}</div>
        </div>
        {token && (
          <img
            src={logout}
            alt="Logout"
            className="logout_icon"
            onClick={handleLogout}
          />
        )}
      </div>
      {showModal && <AuthModal handleModal={handleModal} />}
    </>
  );
};

export default Header;
