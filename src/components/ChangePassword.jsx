import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import toast from "react-hot-toast";
import axios from "../utils/axios";
import change_password from "../assets/change_password.png";

const ChangePassword = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const { token } = useParams();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!password || !confirmPassword) {
            toast.error("Please fill in all fields.");
            return;
        }
        if (password.length < 8) {
            toast.error("Password must be at least 8 characters.");
            return;
        }
        if (password !== confirmPassword) {
            toast.error("Passwords do not match.");
            return;
        }

        try {
            const loadingToast = toast.loading("Resetting password...");

            const res = await axios.post(
                "/auth/reset-password",
                {
                    token,
                    new_password: password,
                    confirm_password: confirmPassword,
                },
                { withCredentials: true }
            );

            toast.dismiss(loadingToast);

            if (res.data?.success) {
                toast.success(
                    res.data.message || "Password reset successfully."
                );
                navigate("/login");
            } else {
                toast.error(res.data.message || "Failed to reset password.");
            }
        } catch (error) {
            toast.dismiss();
            const message =
                error.response?.data?.message || "Failed to reset password.";
            toast.error(message);
        }
    };

    return (
        <div className="flex flex-col md:flex-row min-h-screen">
            <div className="flex flex-col justify-center items-center w-full md:w-1/2 bg-gradient-to-b from-white to-[#EAE9FF] p-6 sm:p-12">
                <div className="max-w-md w-full relative">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#4F46E5] to-[#B700FF] bg-clip-text text-transparent mb-4">
                        Set a New Password
                    </h1>
                    <p className="text-gray-700 mb-8 text-sm sm:text-base">
                        Your new password should be different from your old one.
                    </p>

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">
                                New Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password must contain 8 letters"
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
                                    {showPassword ? <FiEye/> : <FiEyeOff />}
                                </button>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">
                                Confirm New Password
                            </label>
                            <div className="relative">
                                <input
                                    type={
                                        showConfirmPassword
                                            ? "text"
                                            : "password"
                                    }
                                    placeholder="Re-enter new password"
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
                                        <FiEye/>
                                    ) : (
                                        <FiEyeOff/>
                                    )}
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-[#4F46E5] to-[#D6A700] text-white py-2 rounded hover:opacity-90 transition text-sm sm:text-base cursor-pointer"
                        >
                            Reset Password
                        </button>
                    </form>

                    <Link
                        to="/login"
                        className="block text-center text-sm text-gray-600 hover:underline mt-4"
                    >
                        Back to Sign In
                    </Link>

                    <p className="text-center text-xs text-gray-500 relative -bottom-40">
                        © 2025 Alpixn Technologies Private Limited. All rights
                        reserved.
                    </p>
                </div>
            </div>
            <div className="hidden md:flex justify-center items-center w-full md:w-1/2 p-6 bg-white">
                <img
                    src={change_password}
                    alt="Reset Password Illustration"
                    className="max-w-full h-auto"
                />
            </div>
        </div>
    );
};

export default ChangePassword;
