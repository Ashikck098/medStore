// CartContext.js
import React, { createContext, useContext, useState } from "react";
import axiosApi from "./AxiosMethod";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);


 console.log(cartCount);
  const handleAddToCart = (productId) => {
    const data = {
      cart: [
        {
          product: productId,
          selectedCount: 1,
        },
      ],
    };
  
    axiosApi
      .post("/addCart", data)
      .then((response) => {
        console.log(response.data);
        setCartCount(cartCount + 1);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };

  return (
    <CartContext.Provider value={{ cartCount, handleAddToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
