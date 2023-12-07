import React, { useState } from "react";
import "./AuthModal.css";
import axiosApi from "../../AxiosMethod";
import toast, { Toaster } from 'react-hot-toast';




const Register = ({ handleModal }) => {
  const [data, setData] = useState();
   
  const SuccessNotify = () => toast.success('Successfully registered!')
  const ErrorNotify = () => toast.error("password is not strong.")
 
  function validation(data) {
    const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    
    console.log(data);
  
     if (regex.test(data.password)) {
      return true
     }
    
     ErrorNotify()
     return false 
  }

  const handleRegister = (e) => {
    e.preventDefault();
    const valid = validation(data)
    if (valid) {
      axiosApi
      .post("/register", data)
      .then((response) => {
        SuccessNotify()
        setTimeout(() => {
        handleModal();
        }, 2000);        
      })
      .catch((error) => {
        console.error("Error", error);
      });
    }
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
      <Toaster  position="top-right" />
    </div>
  );
};

export default Register;
