import React from "react";
import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import ClientDetailPage from "./pages/ClientDetailPage";
import ClientsListPage from "./pages/ClientsListPage";
import Project from "./pages/Project";
import ProjectDetail from "./pages/ProjectDetailPage";

const ProtectedRoute = ({ isAuthenticated, children }) => {
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }
    return children;
};

const App = () => {
    const isAuthenticated = false;

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        isAuthenticated ? (
                            <Navigate to="/dashboard" replace />
                        ) : (
                            <Navigate to="/login" replace />
                        )
                    }
                />

                {/* Auth Pages */}
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/login" element={<LoginPage />} />

                {/* Client Pages */}
                <Route path="/clients/client-detail" element={<ClientDetailPage />} />
                <Route path="/clients" element={<ClientsListPage />} />

                {/* Project Pages */}
                <Route path="/projects" element={<Project />} />
                <Route path="/project/:id" element={<ProjectDetail />} />

                {/* Catch All Route */}
                <Route
                    path="*"
                    element={
                        isAuthenticated ? (
                            <Navigate to="/dashboard" replace />
                        ) : (
                            <Navigate to="/login" replace />
                        )
                    }
                />
            </Routes>
        </Router>
    );
};

export default App;
