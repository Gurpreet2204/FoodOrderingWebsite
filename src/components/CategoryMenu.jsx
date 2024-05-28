import { useEffect, useState } from "react";
import FoodData from "../data/FoodData";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/slices/CategorySlice";
const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);
  const ListUniqueCategories = () => {
    const uniqueCategories = [...new Set(FoodData.map((food) => food.category))];
    setCategories(uniqueCategories);
  };
  useEffect(() => {
    ListUniqueCategories();
  }, []);
const dispatch = useDispatch()
const selectCategory = useSelector((state)=> state.category.category)
  return (
    <div className="mx-6 my-5">
      <h3 className="font-bold  ">Find the best food</h3>
      <div className="flex space-x-5 my-5 overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
      <button
              onClick={()=>{dispatch(setCategory("All"))}}  className={`px-3 py-2 border-2 border-blue-500 text-black font-bold rounded-lg hover:bg-blue-500 hover:text-white ${selectCategory=== "All" && " text-black   bg-blue-500"} `}>
          All
        </button>
        
        {
          categories.map((category, index)=>{
            return (
              <button
              onClick={()=>{dispatch(setCategory(category))}} key = {index} className={`px-3 py-2 text-black border-2 border-blue-500 font-bold rounded-lg hover:bg-blue-500 hover:text-white ${selectCategory=== category && "bg-blue-500 text-white"} `}>
          {category}
        </button>
            )
          })
        }
      </div>
    </div>
  );
};

export default CategoryMenu;
