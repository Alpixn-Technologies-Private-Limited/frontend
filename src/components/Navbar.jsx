import { FaBell, FaSearch, FaSun } from "react-icons/fa";
import { IoReorderThree } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useSidebar } from "../context/SidebarContext";
import { FaMoon } from "react-icons/fa6";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { toggleSidebar } = useSidebar();

  return (
    <div className="w-full bg-white border-b border-gray-300 shadow px-6 py-4 flex items-center justify-between max-sm:px-3 max-sm:py-2 ">
      <IoReorderThree
        className="sm:hidden max-sm:text-xl scale-[135%] bg-gray-200 rounded-sm ml-2 p-[2px]"
        onClick={toggleSidebar}
      />
      <div className="flex items-center space-x-4 max-sm:hidden">
        <img
          src="https://i.pinimg.com/564x/c7/4c/78/c74c78c049af7061319694743ccb0f8e.jpg"
          alt="Logo"
          className="w-10 h-10 object-cover rounded-full"
        />
        <Link to={"/settings/user"}>
          <div className="text-gray-700 text-lg max-sm:hidden">
            <span>Hello,</span>{" "}
            <span className="font-semibold text-black">Katherine</span>
          </div>
        </Link>
      </div>

      <div className="flex items-center space-x-6 max-sm:space-x-2 max-sm:scale-95">
        <span className="text-gray-600 text-xl cursor-pointer hover:text-black transition duration-200">
          <FaBell />
        </span>

        <button
          onClick={toggleTheme}
          className="text-gray-600 text-xl cursor-pointer hover:text-yellow-500 transition duration-200"
        >
          {theme === "dark" ? (
            <FaSun className="text-yellow-500" />
          ) : (
            <FaMoon className="text-gray-400" />
          )}
        </button>

        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 max-sm:px-2 max-sm:border max-sm:border-gray-400">
          <FaSearch className="text-gray-500 mr-2 max-sm:mr-1" />
          <input
            type="text"
            placeholder="Search projects, client, tasks..."
            className="bg-transparent outline-none text-sm text-gray-700 w-64 placeholder:text-gray-400 max-sm:w-24"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
