import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import Login_page_top_image from "../assets/Login_page_top_image.png";
const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#EAE9FF] to-[#F1F8FF] p-4 relative">
            <img
                className="absolute -top-20 max-w-[60%]"
                src={Login_page_top_image}
                alt="Top Banner"
            />
            <div className="w-full max-w-[90%] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[517px] mt-40 backdrop-blur px-6 py-2">
                <div className="text-center mb-6">
                    <h1 className=" text-2xl sm:text-[50px] font-bold space-x-3">
                        <span className="bg-gradient-to-r  from-[#4F46E5] via-[#D6A700] to-[#B700FF] bg-clip-text text-transparent">
                            Project Pilot
                        </span>
                    </h1>
                    <p className="text-gray-700 mt-1 sm:mt-2 text-sm sm:text-base">
                        Smart. Scalable.{" "}
                        <span className="font-semibold">AI-powered</span>{" "}
                        Operations
                    </p>
                </div>

                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                            Email Address
                        </label>
                        <input
                            type="email"
                            placeholder="e.g. varun123@gmail.com"
                            className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:border-blue-400 text-sm sm:text-base"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1 mt-3">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter Password"
                                className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 pr-10 focus:outline-none focus:ring focus:border-blue-400 text-sm sm:text-base"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                            >
                                {showPassword ? <FiEyeOff /> : <FiEye />}
                            </button>
                        </div>
                        <div className="flex justify-between items-center mt-2">
                            <label className="flex items-center text-xs sm:text-sm font-medium">
                                <input type="checkbox" className="mr-2" />{" "}
                                Remember Me
                            </label>
                            <Link
                                to="/forgot-password"
                                className="text-blue-600 text-xs sm:text-sm hover:underline"
                            >
                                Forgot Password?
                            </Link>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-[#4F46E5] to-[#D6A700] text-white py-2 rounded hover:opacity-90 transition text-sm sm:text-base cursor-pointer"
                    >
                        Sign In
                    </button>
                </form>

                <div className="flex items-center my-6 sm:my-8">
                    <hr className="flex-grow border-gray-400" />
                    <span className="mx-2 text-gray-500 text-sm">Or</span>
                    <hr className="flex-grow border-gray-400" />
                </div>

                <button className="w-full border border-gray-300 py-2 rounded-lg flex items-center justify-center hover:bg-gray-100 transition mb-3 text-sm sm:text-base cursor-pointer bg-white">
                    <FcGoogle className="mr-2 text-lg sm:text-xl" /> Sign In
                    with Google
                </button>

                <button className="w-full border border-gray-300 py-2 rounded-lg flex items-center justify-center hover:bg-gray-100 transition text-sm sm:text-base cursor-pointer bg-white ">
                    <FaGithub className="mr-2 text-lg sm:text-xl" /> Sign In
                    with GitHub
                </button>

                <p className="text-center text-xs text-gray-500 mt-8 sm:mt-12">
                    © 2025 Alpixn Technologies Private Limited. All rights
                    reserved.
                </p>
            </div>
        </div>
    );
};

export default LoginForm;
