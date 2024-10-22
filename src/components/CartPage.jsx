import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../features/cartSlice";

function CartPage() {
  const dispatch = useDispatch();
  const { cartItems, totalPrice } = useSelector((state) => state.cart);

  const handleIncrease = (item) => {
    dispatch(addToCart(item));
  };

  const handleDecrease = (item) => {
    dispatch(removeFromCart(item));
  };

  return (
    <div className="container mx-auto text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Cart</h1>

      <div className="overflow-x-auto shadow-md rounded-lg">
        <div className="grid grid-cols-4 md:grid-cols-6 text-center font-semibold p-4 rounded-t-lg">
          <p>Product</p>
          <p className="hidden md:block col-span-2">Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
        </div>
        <hr />

        {cartItems.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-4 md:grid-cols-6 items-center place-items-center p-4 border-b last:border-b-0"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-16 h-16 object-cover rounded "
            />
            <p className="hidden md:block col-span-2 text-gray-800 text-center">
              {item.title}
            </p>
            <p className="text-gray-800">${item.price.toFixed(2)}</p>
            <div className="flex flex-col md:flex-row items-center justify-center">
              <button
                className="bg-red-600 text-white px-3 py-1 rounded-md font-bold hover:bg-red-700 transition duration-200"
                onClick={() => handleDecrease(item)}
              >
                -
              </button>
              <span className="text-lg px-2">{item.quantity}</span>
              <button
                className="bg-green-600 text-white px-2.5 py-1 rounded-md  font-bold hover:bg-green-700 transition duration-200"
                onClick={() => handleIncrease(item)}
              >
                +
              </button>
            </div>
            <p className="text-gray-800">${item.totalPrice.toFixed(2)}</p>
          </div>
        ))}

        <div className=" py-4 px-8 mt-4 rounded-lg">
          <h2 className="text-lg font-bold mb-2">Cart Totals</h2>
          <div className="flex justify-between mb-2">
            <p>Subtotal:</p>
            <p className="font-semibold">${totalPrice.toFixed(2)}</p>
          </div>
          <div className="flex justify-between mb-2">
            <p>Shipping Fee:</p>
            <p className="font-semibold">Free</p>
          </div>
          <div className="flex justify-between font-bold">
            <h3>Total:</h3>
            <h3>${totalPrice.toFixed(2)}</h3>
          </div>
          <button className="mt-4 w-full bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition duration-200 text-center">
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
