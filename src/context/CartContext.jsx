import { createContext, useMemo, useState } from "react";
import { getStorageValue } from "../services/storage";

export const CartContext = createContext(null);

export function CartContextProvider({ children }) {
  const [cartProducts, setCartProducts] = useState(
    getStorageValue("cartProducts") || 0,
  );

  const value = useMemo(
    () => ({
      cartProducts,
      setCartProducts,
    }),
    [cartProducts, setCartProducts],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
