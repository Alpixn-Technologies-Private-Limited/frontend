import React, { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "../utils/axios";
import forgot_password from "../assets/forgot_password.png";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email) {
            toast.error("Please enter your registered email.");
            return;
        }
        try {
            const loadingToast = toast.loading("Sending reset instructions...");

            const res = await axios.post(
                "/auth/forgot-password",
                { email },
                { withCredentials: true }
            );

            toast.dismiss(loadingToast);

            if (res.data?.success) {
                toast.success(res.data.message || "Reset instructions sent to your email.");
            } else {
                toast.error(res.data.message || "Something went wrong, please try again.");
            }
        } catch (error) {
            toast.dismiss();
            const message = error.response?.data?.message || "Failed to send reset email.";
            toast.error(message);
        }
    };

    return (
        <div
            className="
                flex flex-col md:flex-row min-h-screen 
                bg-gradient-to-b from-[#EAE9FF] to-[#F1F8FF] 
                dark:bg-gradient-to-r dark:from-[#241f53] dark:via-[#0d0130] dark:to-[#2b1a76]
            "
        >
            {/* Left Section */}
            <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-6 sm:p-10 lg:p-16">
                <div className="max-w-md w-full relative">
                    <h1 className="text-3xl sm:text-3xl md:text-5xl font-bold text-[#4F46E5] mb-4 dark:text-white">
                        Forgot your password?
                    </h1>
                    <p className="text-gray-700 dark:text-gray-200 mb-8 text-sm sm:text-base md:text-lg">
                        Enter your registered email address and we’ll send you instructions to reset your password.
                    </p>

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 dark:text-white mb-1">
                                Email Address
                            </label>
                            <input
                                type="email"
                                placeholder="Enter Your Registered Email ID"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm sm:text-base dark:bg-black dark:border-gray-700 dark:text-white"
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
                        className="block text-center text-sm text-gray-600 hover:underline mt-4 dark:text-yellow-400"
                    >
                        Back to Sign In
                    </Link>

                </div>
                
                <p className="text-center text-xs text-gray-500 dark:text-gray-400 absolute bottom-0 mb-5">
                        © 2025 Alpixn Technologies Private Limited. All rights reserved.
                    </p>
            </div>

            {/* Right Section */}
            <div
                className="hidden md:flex justify-center items-center w-full md:w-1/2 p-6 
                           bg-white dark:bg-gradient-to-r dark:from-[#010109] dark:via-[#0d0130] dark:to-[#0a0811]"
            >
                <img
                    src={forgot_password}
                    alt="Forgot Password Illustration"
                    className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto"
                />
            </div>
        </div>
    );
};

export default ForgotPassword;
