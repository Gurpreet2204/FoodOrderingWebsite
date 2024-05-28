import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";
const Navbar = () => {
  const dispatch = useDispatch()
  return (
    <nav className="flex flex-col lg:flex-row justify-between py-3 mx-6">
      <div>
        <h3 className="text-xl font-bold text-gray-600">Foodies fav app</h3>
        <h1 className="text-2xl font-bold">Foodies Food</h1>
      </div>
      <div>
        <input
        onChange={(e)=>dispatch(setSearch(e.target.value))}
          type="search"
          name="search"
          id=""
          placeholder="search.."
          autoComplete="off"
          className="p-3 border border-blue-500 text-sm rounded-lg outline-none w-full lg:w-[25vw] "
        />
      </div>
    </nav>
  );
};

export default Navbar;
