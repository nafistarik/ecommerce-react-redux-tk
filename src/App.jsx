import { useState } from "react";
import CartPage from "./components/CartPage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import "./index.css";
function App() {
  const [cartVisible, setCartVisible] = useState(false);
  const handleCartVisibility = () => {
    setCartVisible(!cartVisible);
  };
  return (
    <>
      <Header
        cartVisible={cartVisible}
        handleCartVisibility={handleCartVisibility}
      />
      <ProductList />
      {cartVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 rounded-lg">
          <div className="bg-white md:w-10/12 w-full h-3/4 p-6  shadow-lg relative overflow-x-scroll">
            <button
              className="absolute top-4 right-4 text-4xl font-bold text-gray-500 hover:text-gray-800"
              onClick={handleCartVisibility}
            >
              &times;
            </button>
            <CartPage />
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

export default App;
