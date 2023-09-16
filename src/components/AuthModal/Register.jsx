import React, { useState } from "react";
import "./AuthModal.css";
import axiosApi from "../../AxiosMethod";

const Register = ({ handleModal }) => {
  const [data, setData] = useState();

  const handleRegister = (e) => {
    e.preventDefault();
    axiosApi
      .post("/register", data)
      .then((response) => {
        handleModal();
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };

  console.log(data);

  return (
    <div>
      <h1 className="authModal_secondSection_heading">Create new account</h1>
      <form action="">
        <input
          type="text"
          placeholder="Full name"
          className="authModal_inputField"
          onChange={(e) => setData({ ...data, fullName: e.target.value })}
        />
        <input
          type="text"
          placeholder="Username"
          className="authModal_inputField"
          onChange={(e) => setData({ ...data, userName: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          className="authModal_inputField"
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <button className="authModal_auth_button" onClick={handleRegister}>
          Create account
        </button>
      </form>
    </div>
  );
};

export default Register;
