import React from "react";
import { Link } from "react-router-dom";
import forgot_password from "../assets/forgot_password.png";

const ForgotPassword = () => {
    return (
        <div className="flex flex-col md:flex-row min-h-screen">
            <div className="flex flex-col justify-center items-center w-full md:w-1/2 bg-gradient-to-b from-white to-[#EAE9FF] p-6 sm:p-12">
                <div className="max-w-md w-full">
                    <h1 className="text-[50px] sm:text-3xl md:text-4xl font-bold text-[#4F46E5] bg-clip-text mb-4">
                        Forgot your password?
                    </h1>
                    <p className="text-gray-700 mb-8 text-sm sm:text-base">
                        Enter your registered email address and we’ll send you
                        instructions to reset your password.
                    </p>

                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">
                                Email Address
                            </label>
                            <input
                                type="email"
                                placeholder="Enter Your Registered Email ID"
                                className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:border-blue-400 text-sm sm:text-base placeholder-gray-400"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-[#4F46E5] to-[#D6A700] text-white py-2 rounded hover:opacity-90 transition text-sm sm:text-base cursor-pointer"
                        >
                            Submit
                        </button>
                    </form>

                    <Link
                        to="/login"
                        className="block text-center text-sm text-gray-600 hover:underline mt-4"
                    >
                        Back to Sign In
                    </Link>

                    <p className="text-center text-xs text-gray-500 absolute bottom-10">
                        © 2025 Alpixn Technologies Private Limited. All rights
                        reserved.
                    </p>
                </div>
            </div>
            <div className="hidden md:flex justify-center items-center w-full md:w-1/2 p-6 bg-white">
                <img
                    src={forgot_password}
                    alt="Forgot Password Illustration"
                    className="max-w-full h-auto"
                />
            </div>
        </div>
    );
};

export default ForgotPassword;
