import React, { ReactNode, useMemo, useReducer, useState } from "react";
import { CartCtx } from "./CartContext";
import { cartReducer } from "./cartReducer";
import { ICartState } from "../../utility/model/cart.model";

const initialState: ICartState = {
  cart: [],
};

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [isCartOpen, setIstCartOpen] = useState(false);
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const toggleCart = () => {
    setIstCartOpen((prev) => !prev);
  };

  const totalAmount = useMemo(()=>{
    return  state.cart.reduce((acc, c) => {
      return acc + c.price * c.quantity;
    }, 0);
  },[state.cart])

  return (
    <CartCtx.Provider value={{ isCartOpen, toggleCart, state, dispatch, totalAmount }}>
      {children}
    </CartCtx.Provider>
  );
};

export default CartProvider;
