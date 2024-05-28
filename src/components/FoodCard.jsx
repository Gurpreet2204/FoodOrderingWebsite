/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";
const FoodCard = ({ id, name, price, desc, rating, img, handleToast }) => {
  const Dispatch = useDispatch();

  return (
    <div className="font-bold w-[250px] bg-white text-gray-800 p-5 flex-col rounded-lg gap-2">
      <img
        src={img}
        alt=""
        className="w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out"
      />
      <div className="text-sm flex justify-between">
        <h2 className="font-semibold">{name}</h2>
        <span className="">₹{price}</span>
      </div>
      <p className="text-sm font-normal">{desc.slice(0, 60)}...</p>
      <div className="flex justify-between">
        <span className="flex justify-center items-center">
          {" "}
          <FaStar className="mr-1 text-yellow-400" />
          {rating}
        </span>
        <button
          onClick={() => {
            Dispatch(addToCart({ id, name, price, img, rating, qty: 1 }));
            handleToast()
          }}
          className="p-1 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm"
        >
          {" "}
          Cart Item
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
