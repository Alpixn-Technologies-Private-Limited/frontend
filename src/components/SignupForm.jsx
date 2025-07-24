import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "../utils/axios";
import Login_page_top_image from "../assets/Login_page_top_image.png";

const SignUpForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password || !confirmPassword) {
            toast.error("Please fill in all fields.");
            return;
        }
        if (password.length < 8) {
            toast.error("Password should be at least 6 characters.");
            return;
        }
        if (password !== confirmPassword) {
            toast.error("Passwords do not match.");
            return;
        }

        try {
            const loadingToast = toast.loading("Creating your account...");
            const res = await axios.post("/auth/signup", {
                email,
                password,
            });

            toast.dismiss(loadingToast);

            if (res.data?.success) {
                toast.success("Account created successfully! Please log in.");
                navigate("/login");
            } else {
                toast.error(
                    res.data?.message || "Signup failed. Please try again."
                );
            }
        } catch (error) {
            toast.dismiss();
            const message =
                error.response?.data?.message ||
                "Signup failed. Please try again.";
            toast.error(message);
        }
    };

    return (
        <div
            style={{
                backgroundImage: `
                  linear-gradient(180deg, #EAE9FF 0%, #F1F8FF 62.81%),
                  linear-gradient(213.06deg, rgba(183, 0, 255, 0.036) 9.26%, rgba(255, 255, 255, 0) 80.28%)
                `,
            }}
            className="flex flex-col relative"
        >
            <img
                className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-[-60px] w-[90%] max-w-[829px] h-auto"
                src={Login_page_top_image}
                alt="Top Banner"
            />

            <div className="flex-grow flex items-center justify-center px-4 pt-42 pb-8">
                <div className="w-full max-w-sm sm:max-w-md md:max-w-lg px-6 py-6">
                    <div className="text-center mb-6">
                        <h1 className="text-2xl sm:text-[40px] font-bold">
                            <span className="bg-gradient-to-r from-[#4F46E5] via-[#D6A700] to-[#B700FF] bg-clip-text text-transparent">
                                Project Pilot
                            </span>
                        </h1>
                        <p className="text-gray-700 mt-1 sm:mt-2 text-sm sm:text-base">
                            Smart. Scalable.{" "}
                            <span className="font-semibold">AI-powered</span>{" "}
                            Operations
                        </p>
                    </div>

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">
                                Email Address
                            </label>
                            <input
                                type="email"
                                placeholder="e.g. varun123@gmail.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-white border border-gray-200 rounded-lg  px-3 py-2 text-sm sm:text-base"
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
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    className="w-full bg-white border border-gray-200 rounded-lg  px-3 py-2 text-sm sm:text-base"
                                />
                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                                >
                                    {showPassword ? (
                                        <FiEye />
                                    ) : (
                                        <FiEyeOff />
                                    )}
                                </button>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1 mt-3">
                                Confirm Password
                            </label>
                            <div className="relative">
                                <input
                                    type={
                                        showConfirmPassword
                                            ? "text"
                                            : "password"
                                    }
                                    placeholder="Re-enter Password"
                                    value={confirmPassword}
                                    onChange={(e) =>
                                        setConfirmPassword(e.target.value)
                                    }
                                    className="w-full bg-white border border-gray-200 rounded-lg  px-3 py-2 text-sm sm:text-base"
                                />
                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowConfirmPassword(
                                            !showConfirmPassword
                                        )
                                    }
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                                >
                                    {showConfirmPassword ? (
                                        <FiEye />
                                    ) : (
                                        <FiEyeOff />
                                    )}
                                </button>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-[#4F46E5] to-[#D6A700] text-white py-2 rounded hover:opacity-90 transition text-sm sm:text-base cursor-pointer"
                        >
                            Sign Up
                        </button>
                    </form>

                    <Link
                        to="/login"
                        className="block text-center text-sm text-gray-600 hover:underline mt-4"
                    >
                        Already have an account? Sign In
                    </Link>
                </div>
            </div>
            <footer className="text-center text-xs text-gray-500 py-4">
                © 2025 Alpixn Technologies Private Limited. All rights reserved.
            </footer>
        </div>
    );
};

export default SignUpForm;
