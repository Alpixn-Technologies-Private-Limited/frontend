import React from "react";
import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

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
import ProjectTaskPage from "./pages/ProjectTaskPage";
import TaskBoardPage from "./pages/TaskBoardPage";
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
                            <Navigate to="/dashboard/pm" replace />
                        ) : (
                            <Navigate to="/login" replace />
                        )
                    }
                />

                {/* Auth Pages */}
                <Route path="/login" element={<LoginPage />} />
                <Route path="/forgot-password" element={<ForgotPasswordPage />} />
                <Route path="/change-password" element={<ChangePasswordPage />} />


                {/* Client Pages */}
                <Route path="/clients" element={<ClientsListPage />} />
                <Route path="/clients/client-detail" element={<ClientDetailPage />} />
                <Route path="/clients/edit-form" element={<ClientEditFormPage />} />

                {/* Dashboard */}
                <Route path="/dashboard/admin" element={<AdminDashBoardPage />} />
                <Route path="/dashboard/pm" element={<ProjectManagerDashboard />} />
                <Route path="/dashboard/team" element={<MemberDashBoardPage />} />

                {/* Project Pages */}
                <Route path="/projects" element={<Project />} />
                <Route path="/project/:id" element={<ProjectDetail />} />
                <Route path="/project/tasks" element={<ProjectTaskPage />} />
                <Route path="/project/task-board" element={<TaskBoardPage />} />

                {/* Team Management Pages */}
                <Route path="/team-management" element={<TeamMembersPage />} />
                <Route path="/team-management/memberProfile" element={<TeamMemberProfilePage />} />
                {/* Catch All Route */}
                <Route
                    path="*"
                    element={
                        isAuthenticated ? (
                            <Navigate to="/dashboard/admin" replace />
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