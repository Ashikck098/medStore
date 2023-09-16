import React, { useState } from "react";
import "./AuthModal.css";
import axiosApi from "../../AxiosMethod";
import { useNavigate } from "react-router-dom";

const Login = ({ handleModal }) => {
  const [data, setData] = useState();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    axiosApi
      .post("/login", data)
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("token", response.data.token);
        handleModal();
        if (response.data.role === "admin") {
          navigate("/dashboard");
        }
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };
  return (
    <div>
      <h1 className="authModal_secondSection_heading">Login</h1>
      <form action="">
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
        <button className="authModal_auth_button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
