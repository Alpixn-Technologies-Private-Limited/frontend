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

    const loadUser = () => {
        setLoading(true);
        try {
            const storedUser = localStorage.getItem("user") || sessionStorage.getItem("user");
            if (storedUser) {
                setUser(JSON.parse(storedUser));
            } else {
                setUser(null);
            }
        } catch {
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    const logout = async () => {
        try {
            await axios.post("/api/auth/logout", {
                headers: {
                    Authorization: `Bearer ${
                        localStorage.getItem("token") ||
                        sessionStorage.getItem("token")
                    }`,
                },
                withCredentials: true,
            })
        } catch {
            console.log("some error occured while logging out the user")
            toast.error("some error occured"    )
        }
        localStorage.removeItem("token");
        localStorage.removeItem("refresh_token");
        localStorage.removeItem("user");
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("refresh_token");
        sessionStorage.removeItem("user");
        setUser(null);
        toast.success("Logged out!");
    };

    const refreshToken = async () => {
        try {
            const refresh_token = localStorage.getItem("refresh_token") || sessionStorage.getItem("refresh_token");
            const res = await axios.post("/api/auth/refresh", { refresh_token }, { withCredentials: true });
            const { token, refresh_token: new_refresh_token } = res.data.data;

            if (localStorage.getItem("token")) {
                localStorage.setItem("token", token);
                localStorage.setItem("refresh_token", new_refresh_token);
            } else {
                sessionStorage.setItem("token", token);
                sessionStorage.setItem("refresh_token", new_refresh_token);
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
                setUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
