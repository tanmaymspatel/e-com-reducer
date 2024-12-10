import { IconGardenCart } from "@tabler/icons-react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/cart.png";
import useCart from "../../hooks/useCart";
import { links } from "../../utility/constants/constants";
import Cart from "../Cart";

const Header = () => {
  const { state, isCartOpen, toggleCart } = useCart();

  const cartCount = state.cart.length;
  // console.log(state.cart);
  

  return (
    <div className="bg-blue-50 sticky top-0 z-10">
      <header className="container-box flex items-center justify-between py-2">
        <NavLink to="/" className="flex items-center">
          <figure className="w-[50px] h-auto">
            <img className="w-[100%] h-auto" src={logo} alt="e-com logo" />
          </figure>
          <p className="text-lg font-bold">E Commerce</p>
        </NavLink>
        <nav>
          <ul className="flex items-center gap-8">
            {/* links */}
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  isActive ? "font-bold text-blue-600" : ""
                }
              >
                {label}
              </NavLink>
            ))}
            {/* cart icon */}
            <div className="relative cursor-pointer" onClick={toggleCart}>
              <IconGardenCart stroke={2} size={28} />
              {cartCount > 0 && (
                <p className="absolute -top-[5%] -right-[10%] bg-blue-600 text-white h-4 w-4 flex item-center justify-center rounded-full text-[10px]">
                  {cartCount}
                </p>
              )}
            </div>
            {/* cart items  */}
            <div
              className={`fixed w-full top-0 bottom-0 right-0 backdrop-blur-sm duration-300 ${
                isCartOpen ? "translate-x-0 p-4" : "translate-x-full"
              }`}
              onClick={toggleCart}
            ></div>
            <Cart />
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
