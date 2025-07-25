import React, { createContext, useContext, useState, useEffect } from "react";
import toast from "react-hot-toast";
import axios from "../utils/axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        setLoading(true);
        try {
            const res = await axios.get("/auth/user", {
                headers: {
                    Authorization: `Bearer ${
                        localStorage.getItem("token") || sessionStorage.getItem("token")
                    }`,
                },
                withCredentials: true,
            });
            setUser(res.data.user);
        } catch {
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    const logout = async () => {
        try {
            await axios.post("/auth/logout", {}, { withCredentials: true });
            localStorage.removeItem("token");
            localStorage.removeItem("refresh_token");
            sessionStorage.removeItem("token");
            sessionStorage.removeItem("refresh_token");
            setUser(null);
            toast.success("Logged out!");
        } catch {
            toast.error("Failed to logout.");
        }
    };

    const refreshToken = async () => {
        try {
            const res = await axios.post("/auth/refresh", {}, { withCredentials: true });
            const { token, refresh_token } = res.data.data;

            if (localStorage.getItem("token")) {
                localStorage.setItem("token", token);
                localStorage.setItem("refresh_token", refresh_token);
            } else {
                sessionStorage.setItem("token", token);
                sessionStorage.setItem("refresh_token", refresh_token);
            }
        } catch {
            setUser(null);
        }
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                loading,
                logout,
                refreshToken,
                loadUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
