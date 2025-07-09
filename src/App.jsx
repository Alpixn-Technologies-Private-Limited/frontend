import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import ClientDetailPage from "./pages/ClientDetailPage";
import ClientsListPage from "./pages/ClientsListPage";
import ProjectManagerDashboard from "./pages/ProjectManagerDashboard";

// 🔒 Protected Route Wrapper
const ProtectedRoute = ({ isAuthenticated, children }) => {
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

// 📘 Define All Routes
const AppRoutes = ({ isAuthenticated }) => (
  <Routes>
    <Route
      path="/"
      element={
        <Navigate to={isAuthenticated ? "/dashboard" : "/login"} replace />
      }
    />
    <Route path="/signup" element={<SignupPage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/clients" element={<ClientsListPage />} />
    <Route path="/clients/client-detail" element={<ClientDetailPage />} />

    <Route
      path="/dashboard"
      element={
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <ProjectManagerDashboard />
        </ProtectedRoute>
      }
    />
   

    {/* Catch-all route for undefined paths */}
    <Route
      path="*"
      element={
        <Navigate to={isAuthenticated ? "/dashboard" : "/login"} replace />
      }
    />
  </Routes>
);

// Main App
const App = () => {
  const isAuthenticated = true; // You can later fetch this from context/auth

  return (
    <Router>
      <AppRoutes isAuthenticated={isAuthenticated} />
    </Router>
  );
};

export default App;
