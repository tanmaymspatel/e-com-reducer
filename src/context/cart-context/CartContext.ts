import { createContext,  } from "react";
import { ICartState } from "../../utility/model/cart.model";

interface ICartCtx {
    isCartOpen: boolean;
    toggleCart: () => void;
    state: ICartState;
    dispatch: any;
    totalAmount:number
  }

export const CartCtx = createContext<ICartCtx>({} as ICartCtx)