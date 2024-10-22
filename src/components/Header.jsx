import { useSelector } from "react-redux";
import Cart from "../assets/cart.png";
import Logo from "../assets/logo.png";

export default function Header({ handleCartVisibility }) {
  const { totalQuantity, totalPrice } = useSelector((state) => state.cart);

  return (
    <div>
      <header className="bg-gray-800 p-4  text-white fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="h-16 flex items-center justify-start w-full">
            <img src={Logo} alt="cart icon" className="h-full px-2" />
            <h1 className="text-3xl font-bold">Stylista</h1>
          </div>
          <div className="flex items-center justify-between md:justify-end w-full px-4">
            <div className="cart-summary ">
              <p>Total Items: {totalQuantity}</p>
              <p>Total Price: ${totalPrice.toFixed(2)}</p>
            </div>
            <button
              className="  px-4 py-2 rounded h-14 opacity-80 hover:opacity-100 transition relative"
              onClick={handleCartVisibility}
            >
              <img src={Cart} alt="cart icon" className="h-full" />
              <p className="absolute top-2 right-3 text-xs font-bold bg-white text-gray-800 h-5 w-5 rounded-full flex items-center justify-center">
                {totalQuantity}
              </p>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}
