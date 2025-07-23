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
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ChangePasswordPage from "./components/ChangePassword"
import ClientDetailPage from "./pages/ClientDetailPage";
import ClientsListPage from "./pages/ClientsListPage";
import ClientEditFormPage from "./pages/ClientEditFormPage";
import Project from "./pages/Project";
import ProjectDetail from "./pages/ProjectDetailPage";
import TeamMembersPage from "./pages/TeamMembersPage";
import DashBoard from "./components/dashboard/projectManagement/DashBoard";
import ProjectManagerDashboard from "./pages/ProjectManagerDashboard";
import AdminDashBoardPage from "./pages/AdminDashBoardPage";
import MemberDashBoardPage from "./pages/MemberDashBoardPage";
import TeamMemberProfilePage from "./pages/TeamMemberProfile";

const ProtectedRoute = ({ isAuthenticated, children }) => {
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }
    return children;
};

const App = () => {
    const isAuthenticated = true;

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
                <Route path="/forgot-password" element={<ForgotPasswordPage />} />
                <Route path="/change-password" element={<ChangePasswordPage />} />


                {/* Client Pages */}
                <Route path="/clients" element={<ClientsListPage />} />
                <Route path="/clients/client-detail" element={<ClientDetailPage />} />
                <Route path="/clients/edit-form" element={<ClientEditFormPage />} />

                {/* Dashboard */}
                <Route path="/dashboard" element={<ProjectManagerDashboard />} />
                <Route path="/adminDashboard" element={<AdminDashBoardPage />} />
                <Route path="/memberDashboard" element={<MemberDashBoardPage />} />

                {/* Project Pages */}
                <Route path="/projects" element={<Project />} />
                <Route path="/project/:id" element={<ProjectDetail />} />

                {/* Team Management Pages */}
                <Route path="/team-management" element={<TeamMembersPage />} />
                <Route path="/team-management/memberProfile" element={<TeamMemberProfilePage />} />
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