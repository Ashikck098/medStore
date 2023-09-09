import React from "react";
import "./AuthModal.css";

const Login = () => {
  return (
    <div>
      <h1 className="authModal_secondSection_heading">Login</h1>
      <form action="">
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
        <button className="authModal_auth_button">Login</button>
      </form>
    </div>
  );
};

export default Login;
