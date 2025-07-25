import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
    try {
      const res = await axios.get("/auth/user");
      setUser(res.data.user);
    } catch (err) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };
  const login = async (email, password, remember_me) => {
    try {
      const res = await axios.post("/auth/login", {
        email,
        password,
        remember_me,
      });
      toast.success("Loged in successfully!");
      setUser(res.data.data.user);
      navigate("/dashboard"); 
    } catch (err) {
      toast.error(
        err?.response?.data?.message || "Invalid credentials. Try again."
      );
    }
  };
  const logout = async () => {
    try {
      await axios.post("/auth/logout");
      setUser(null);
      toast.success("Logged out!");
      navigate("/login");
    } catch {
      toast.error("Failed to logout.");
    }
  };
  const refreshToken = async () => {
    try {
      await axios.post("/auth/refresh");
    } catch {
      setUser(null);
    }
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
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
