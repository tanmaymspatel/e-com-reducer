import { IconTrash } from "@tabler/icons-react";
import { ICartItem } from "../utility/model/cart.model";
import { useEffect, useState } from "react";
import useCart from "../hooks/useCart";
import { actions } from "../utility/constants/constants";

const CartItem = ({ c }: { c: ICartItem }) => {

  const { dispatch } = useCart();
  const [quantity, setQuantity] = useState(c.quantity);

  useEffect(() => {
    setQuantity(c.quantity)
  }, [c.quantity]);

  const increaseQuantity = () => {
   
    setQuantity(quantity + 1);
    dispatch({
      type: actions.CHANGE_QUANTITY,
      payload: { ...c, quantity: quantity + 1 },
    });
  };
  const decreaseQuantity = () => {
    setQuantity(quantity - 1);
    dispatch({
        type: actions.CHANGE_QUANTITY,
        payload: { ...c, quantity: quantity - 1 },
      });
  };

const removeCartItem = () =>{
    dispatch({
        type: actions.REMOVE_CART_ITEM,
        payload:{id: c.id}
    })
}

  return (
    <div className="pb-3 flex items-center justify-between border-b-[1px] border-slate-500">
      <div className="flex items-center gap-3">
        <figure className="w-[60px] bg-gray-400">
          <img src={c.thumbnail} alt={c.title} />
        </figure>
        <div className="flex flex-col gap-0">
          <p>{c.title}</p>
          <p>Price: {c.price}</p>
          <p>min quantity: {c.minimumOrderQuantity}</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <button
            className="bg-blue-600 text-white px-2 py-1"
            onClick={decreaseQuantity}
          >
            -
          </button>
          <p>{quantity}</p>
          <button
            className="bg-blue-600 text-white px-2 py-1"
            onClick={increaseQuantity}
          >
            +
          </button>
          <p>
            <span>&#36;</span>
            {(c.price * c.quantity).toFixed(2)}
          </p>
        </div>
        <IconTrash color="red" size={24} onClick={removeCartItem}  className="cursor-pointer"/>
      </div>
    </div>
  );
};

export default CartItem;
