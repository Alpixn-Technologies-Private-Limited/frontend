import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "../utils/axios";
import Login_page_top_image from "../assets/Login_page_top_image.png";
import { useAuth } from "../context/AuthContext";

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const navigate = useNavigate();
    const { loadUser } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            toast.error("Please fill in all fields.");
            return;
        }

        try {
            const loadingToast = toast.loading("Signing you in...");
            const res = await axios.post(
                "/auth/login",
                { email, password, remember_me: rememberMe },
                { withCredentials: true }
            );
            toast.dismiss(loadingToast);

            if (res?.data?.success) {
                toast.success("Login successful!");

                const { token, refresh_token, user } = res.data.data;

                if (rememberMe) {
                    localStorage.setItem("token", token);
                    localStorage.setItem("refresh_token", refresh_token);
                } else {
                    sessionStorage.setItem("token", token);
                    sessionStorage.setItem("refresh_token", refresh_token);
                }

                await loadUser();

                if (user.role === "admin") {
                    navigate("/dashboard/admin");
                } else if (user.role === "pm") {
                    navigate("/dashboard/pm");
                } else if (user.role === "team") {
                    navigate("/dashboard/team");
                } else {
                    navigate("/dashboard");
                }
            } else {
                toast.error(res.data.message || "Login failed. Please try again.");
            }
        } catch (error) {
            console.error("Login error:", error);
            toast.dismiss();
            toast.error(error.response?.data?.message || "Login failed. Please try again.");
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
            className="flex flex-col h-[100vh] max-w-[100vw]"
        >
            <img
                className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-[-60px] w-[90%] max-w-[829px] h-auto"
                src={Login_page_top_image}
                alt="Top Banner"
            />

            <div className="flex-grow flex items-center justify-center px-4 pt-40 pb-8">
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
                                className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm sm:text-base"
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
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm sm:text-base"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                                >
                                    {showPassword ? <FiEye /> : <FiEyeOff />}
                                </button>
                            </div>
                            <div className="flex justify-between items-center mt-2">
                                <label className="flex items-center text-xs sm:text-sm font-medium">
                                    <input
                                        type="checkbox"
                                        className="mr-2"
                                        checked={rememberMe}
                                        onChange={(e) => setRememberMe(e.target.checked)}
                                    />
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
                </div>
            </div>

            <footer className="text-center text-xs text-gray-500 py-4">
                © 2025 Alpixn Technologies Private Limited. All rights reserved.
            </footer>
        </div>
    );
};

export default LoginForm;
