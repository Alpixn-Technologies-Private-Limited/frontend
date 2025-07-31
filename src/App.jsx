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
import ProjectTaskDetailsPage from "./pages/ProjectTaskDetailsPage";
import TeamMemberProfilePage from "./pages/TeamMemberProfile";
import { TeamWorkloadPage } from "./pages/TeamWorkloadPage";
import AIConsole from "./pages/AIConsole";
import AiSettingPage from "./pages/AiSettingPage";
import SystemSettingsPage from "./pages/SystemSettingsPage";
import UserProfileSettingPage from "./pages/UserProfileSettingPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import Access from "./components/clientPortal/Access";

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

                {/* Client Portal Pages */}
                <Route path="/access" element={<Access/>}/>

                {/* Dashboard */}
                <Route path="/dashboard/admin" element={<AdminDashBoardPage />} />
                <Route path="/dashboard/pm" element={<ProjectManagerDashboard />} />
                <Route path="/dashboard/team" element={<MemberDashBoardPage />} />

                {/* AI Console */}
                <Route path="/ai-console" element={<AIConsole />} />
                <Route path="/ai-console/setting" element={<AiSettingPage />} />

                {/* Analytics Pages */}
                <Route path="/analytics" element={<AnalyticsPage />} />

                {/* Project Pages */}
                <Route path="/projects" element={<Project />} />
                <Route path="/project/:id" element={<ProjectDetail />} />
                <Route path="/project/tasks" element={<ProjectTaskPage />} />
                <Route path="/project/task-board" element={<TaskBoardPage />} />
                <Route path="/project/task-details/*" element={<ProjectTaskDetailsPage />} /> 

                {/* Team Management Pages */}
                <Route path="/team-management" element={<TeamMembersPage />} />
                <Route path="/team-management/member-profile" element={<TeamMemberProfilePage />} />
                <Route path="/team-management/teamWorkload" element={<TeamWorkloadPage />} />

                {/* Setting and Configuration */}
                <Route path="/settings/system" element={<SystemSettingsPage />} />
                <Route path="/settings/user" element={<UserProfileSettingPage />} />
                
                {/* Catch All Route */}
                <Route path="*" element={<Navigate to="/login" replace />}/>
            </Routes>
        </Router>
    );
};

export default App;