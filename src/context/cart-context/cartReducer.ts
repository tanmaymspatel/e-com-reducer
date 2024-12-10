import { actions } from "../../utility/constants/constants";
import { ICartState } from "../../utility/model/cart.model";

export const cartReducer = (state: ICartState, action: {type:string, payload:any}) => {
  let updatedCart;
  switch (action.type) {
    case actions.ADD_TO_CART: {
      const item = state?.cart?.find((c) => c?.id === action.payload.id);
      if (!item) {
        updatedCart = [...state.cart, { ...action.payload, quantity: 1 }];
      } else {
        updatedCart = state.cart.map((c) =>
          c.id === action.payload.id ? { ...c, quantity: c.quantity + 1 } : c
        );
      }
      return { ...state, cart: updatedCart }; // Return the entire state
    }

    case actions.CHANGE_QUANTITY: {
      if (action.payload.quantity === 0) {
        updatedCart = state.cart.filter((c) => c.id !== action.payload.id);
      } else {
        updatedCart = state.cart.map((c) =>
          c.id === action.payload.id
            ? { ...c, quantity: action.payload.quantity }
            : c
        );
      }
      return { ...state, cart: updatedCart }; 
    }

    case actions.REMOVE_CART_ITEM: {
      const id = action.payload.id
      updatedCart = state.cart.filter(c => c.id !== id);
      return { ...state, cart: updatedCart }; 
    }

    default:
      return state;
  }
};
