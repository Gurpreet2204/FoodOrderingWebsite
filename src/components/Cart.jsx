import { MdCloseFullscreen } from "react-icons/md";
import ItemCard from "./ItemCard";
import { useSelector } from "react-redux";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const [activeCart, setActiveCart] = useState(false);
  const cartItems = useSelector((state) => state.cart.cart);
  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.qty * item.price, 0
  );
  const navigate = useNavigate()
  return (
    <>
      <FaShoppingCart
        onClick={() => {
          setActiveCart(!activeCart);
        }}
        className={`rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-4 right-4 cursor-pointer ${
          totalQty > 0 && "animate-bounce delay-500 transition-all"
        }`}
      />
      <div
        className={`fixed right-0 top-0 w-full lg:w-[25vw] h-full p-5 bg-white ${
          activeCart ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500  `}
      >
        <div className="flex justify-between items-center my-3">
          <span className="text-xl font-bold text-gray-800 ">My Order</span>
          <MdCloseFullscreen
            onClick={() => {
              setActiveCart(!activeCart);
            }}
            className="  font-bold text-gray-800 hover:text-red-600 cursor-pointer"
          />
        </div>
        {cartItems.length > 0 ? (
          Array.from(new Set(cartItems.map((a) => a.id))).map((id) => {
            const food = cartItems.find((a) => a.id === id);
            return (
              <ItemCard
                key={id}
                id={food.id}
                name={food.name}
                price={food.price}
                img={food.img}
                qty={food.qty}
              />
            );
          })
        ) : (
          <h2 className="text-center text-xl font-bold text-gray-800">
            Your cart is empty
          </h2>
        )}
        <div className="absolute bottom-0">
          <h3 className="font-semibold text-gray-800">Items:{totalQty}</h3>
          <h3 className="font-semibold text-gray-800">
            Total Amount:{totalPrice}
          </h3>
          <hr className="w-[90vw] lg-[18vw] my-2" />
          <button onClick={()=> navigate('/success')} className="bg-green-500 font-bold px-3 py-2  rounded-lg w-[90vw] lg:w-[23vw] mb-5 text-white">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
