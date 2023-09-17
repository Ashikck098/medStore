import { createContext, useContext, useEffect, useState } from "react";
import axiosApi from "./AxiosMethod";

const CartContext = createContext();

export const useMyContext = () => {
    return useContext(CartContext);
}

export const CartContextProvider = ({children}) =>{

    const [cartCount, setCartCount] = useState(0);

    const allObj = {
        cartCount, setCartCount,
    }

    useEffect(() => {
        axiosApi
          .get("/getSingleCart")
          .then((response) => {
            setCartCount(response.data?.totalcount);
          })
          .catch((error) => {
            console.error("Error", error);
          });
      }, []);

    return (
        <CartContext.Provider value={allObj}>
            {children}
        </CartContext.Provider>
    )

}