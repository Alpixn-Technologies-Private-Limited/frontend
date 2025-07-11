import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Pages
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import ClientsListPage from "./pages/ClientsListPage";
import ClientDetailPage from "./pages/ClientDetailPage";
import ProjectManagerDashboard from "./pages/ProjectManagerDashboard";
import Project from "./pages/Project";
import ProjectDetailPage from "./pages/ProjectDetailPage";

// 🔒 Protected Route Wrapper
const ProtectedRoute = ({ isAuthenticated, children }) => {
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

const App = () => {
  const isAuthenticated = true; // You can replace this with real auth logic

  return (
    <Router>
      <Routes>
        {/* Default */}
        <Route
          path="/"
          element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} replace />}
        />

        {/* Auth Routes */}
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Client Routes */}
        <Route path="/clients" element={<ClientsListPage />} />
        <Route path="/clients/client-detail" element={<ClientDetailPage />} />

        {/* Project Routes */}
        <Route path="/projects" element={<Project />} />
        <Route path="/project/:id" element={<ProjectDetailPage />} />

        {/* Protected Dashboard Route */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <ProjectManagerDashboard />
            </ProtectedRoute>
          }
        />

        {/* Catch-all Route */}
        <Route
          path="*"
          element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} replace />}
        />
      </Routes>
    </Router>
  );
};

export default App;
