/* eslint-disable react/prop-types */
import { FaPlus, FaMinus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { decrementQty, incrementQty, removeFromCart } from "../redux/slices/CartSlice";

const ItemCard = ({ id, name, price, img, qty }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromCart({ id }));
  };

  return (
    <div className="flex gap-2 shadow-md rounded-lg p-2 mb-4 relative">
      <MdDelete
        onClick={handleRemove}
        className="absolute right-7 top-2 text-gray-600 hover:text-red-500 cursor-pointer"
      />
      <img src={img} alt={name} className="w-[50px] h-[50px]" />
      <div className="leading-5">
        <h2 className="font-bold text-gray-800">{name}</h2>
        <div className="flex justify-between gap-2">
          <span>₹{price}</span>
          <div className="flex justify-center items-center gap-2 absolute right-7">
            <FaMinus onClick={()=> qty>1? dispatch(decrementQty({id})) : (qty=0)} className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-red-500 hover:border-none rounded-md text-xl p-1 transition-all ease-linear cursor-pointer" />
            <span>{qty}</span>
            <FaPlus onClick={()=> dispatch(incrementQty({id}))} className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 bg-white hover:border-none rounded-md text-xl p-1 transition-all ease-linear cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
