import React, { useState } from "react";
import "./AuthModal.css";
import axiosApi from "../../AxiosMethod";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

const Login = ({ handleModal }) => {
  const [data, setData] = useState();
  const navigate = useNavigate();
 
  const SuccessNotify = () => toast.success('Successfully logined!')


  const handleLogin = (e) => {
    e.preventDefault();

    axiosApi
      .post("/login", data)
      .then((response) => {
         
        SuccessNotify()

        localStorage.setItem("token", response.data.token);
        localStorage.setItem("role", response.data.role);
         setTimeout(() => {
          handleModal();
          if (response.data.role === "admin") {
            navigate("/dashboard");
          }
          window.location.reload();
         }, 2000);
    
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
      <Toaster  position="top-right" />
    </div>
  );
};

export default Login;
