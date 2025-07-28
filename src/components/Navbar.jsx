import React from "react";
import { FaBell, FaSearch, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="w-full bg-white border-b border-gray-300 shadow px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
                <img
                    src="https://i.pinimg.com/564x/c7/4c/78/c74c78c049af7061319694743ccb0f8e.jpg"
                    alt="Logo"
                    className="w-10 h-10 object-cover rounded-full"
                />
                <Link to={"/settings/user"}>
                    <div className="text-gray-700 text-lg">
                        Hello,{" "}
                        <span className="font-semibold text-black">
                            Katherine
                        </span>
                    </div>
                </Link>
            </div>

            <div className="flex items-center space-x-6">
                <span className="text-gray-600 text-xl cursor-pointer hover:text-black transition duration-200">
                    <FaBell />
                </span>

                <span className="text-gray-600 text-xl cursor-pointer hover:text-yellow-500 transition duration-200">
                    <FaSun />
                </span>

                <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
                    <FaSearch className="text-gray-500 mr-2" />
                    <input
                        type="text"
                        placeholder="Search projects, client, tasks..."
                        className="bg-transparent outline-none text-sm text-gray-700 w-64 placeholder:text-gray-400"
                    />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
