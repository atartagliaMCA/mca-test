import { createContext, useState } from "react";
import { getStorageValue } from "../services/storage";

export const CartContext = createContext(null);

export const CartContextProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState(
    getStorageValue("cartProducts") || 0
  );

  const value = { cartProducts, setCartProducts };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
