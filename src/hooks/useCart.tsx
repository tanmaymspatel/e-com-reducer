import { useContext } from "react";
import { CartCtx } from "../context/cart-context/CartContext";

const useCart = () => {
  return useContext(CartCtx);
};

export default useCart;
