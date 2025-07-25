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
            style={{
                backgroundImage: `
                    linear-gradient(170.76deg, rgba(255, 255, 255, 0) 7%, rgba(183, 0, 255, 0.008) 100%),
                    linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(168, 162, 255, 0.2) 100%)
                `,
            }}
            className="flex flex-col md:flex-row min-h-screen"
        >
            <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-6 sm:p-12">
                <div className="max-w-md w-full relative">
                    <h1 className="text-[50px] sm:text-3xl md:text-4xl font-bold text-[#4F46E5] bg-clip-text mb-4">
                        Forgot your password?
                    </h1>
                    <p className="text-gray-700 mb-8 text-sm sm:text-base">
                        Enter your registered email address and we’ll send you instructions to reset your password.
                    </p>

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">
                                Email Address
                            </label>
                            <input
                                type="email"
                                placeholder="Enter Your Registered Email ID"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-white border border-gray-200 rounded-lg  px-3 py-2 text-sm sm:text-base"
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

                    <p className="text-center text-xs text-gray-500 relative -bottom-44">
                        © 2025 Alpixn Technologies Private Limited. All rights reserved.
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
