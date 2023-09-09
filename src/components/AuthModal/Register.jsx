import React from "react";
import "./AuthModal.css";

const Register = () => {
  return (
    <div>
      <h1 className="authModal_secondSection_heading">Create new account</h1>
      <form action="">
        <input
          type="text"
          placeholder="Full name"
          className="authModal_inputField"
        />
        <input
          type="text"
          placeholder="Username"
          className="authModal_inputField"
        />
        <input
          type="password"
          placeholder="Password"
          className="authModal_inputField"
        />
        <button className="authModal_auth_button">Create account</button>
      </form>
    </div>
  );
};

export default Register;
