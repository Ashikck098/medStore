import React, { useState } from "react";
import "./AuthModal.css";
import authImage from "../../assets/auth_image.png";
import Login from "./Login";
import Register from "./Register";

const AuthModal = (props) => {
  const [showLogin, setShowLogin] = useState(true);
  const [linkText, setLinkText] = useState("+Create new account");

  const toggleAuthComponent = () => {
    setShowLogin(!showLogin);
    setLinkText(showLogin ? "Already registered?" : "+Create new account");
  };

  return (
    <div className="authModal_main">
      <div className="authModal_card">
        <div className="authModal_firstSection">
          <img
            src={authImage}
            alt="authImage"
            className="authModal_firstSection_image"
          />
          <h2 className="authModal_firstSection_mainText">
            Great offers on Top Brands
          </h2>
          <p className="authModal_firstSection_paraText">
            14 days hassle-free return policy
          </p>
        </div>
        <div className="authModal_secondSection">
          {showLogin ? <Login  handleModal={props.handleModal}/> : <Register handleModal={props.handleModal}/>}
          <p className="authModal_link_text" onClick={toggleAuthComponent}>
            {" "}
            {linkText}
          </p>
        </div>
      </div>
      <div className="modal_closer" onClick={props.handleModal}></div>
    </div>
  );
};

export default AuthModal;
