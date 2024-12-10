import { IconX } from "@tabler/icons-react";
import useCart from "../hooks/useCart";
import CartItem from "./CartItem";

const Cart = () => {
  const {
    state: { cart },
    isCartOpen,
    toggleCart,
    totalAmount
  } = useCart();
  return (
    <div
      className={`fixed top-0 right-0 bottom-0 w-[100%] md:w-[600px] bg-gray-800 text-white duration-300 ${
        isCartOpen ? "translate-x-0 p-4" : "translate-x-full"
      }`}
    >
      <div className="flex flex-col h-screen">
        {/* cart header */}
        <div className="flex items-center justify-between h-[60px]">
          <h3>
            Cart <span>({cart.length})</span>
          </h3>
          <IconX stroke={2} className="cursor-pointer" onClick={toggleCart} />
        </div>
        {/* cart items */}
        <div className="flex flex-col gap-4 border-b-2 border-slate-400 grow overflow-auto custom-scrollbar   pr-3">
          {cart.map((c) => (
            <CartItem c={c} key={c.id} />
          ))}
        </div>
        {/* cart total */}
        {totalAmount > 0 && <div className="flex items-center justify-between h-[100px]">
          <p>Cart Total:</p>
          <p><span>&#36;</span> {totalAmount.toFixed(2)}</p>
        </div>}
      </div>
    </div>
  );
};

export default Cart;
