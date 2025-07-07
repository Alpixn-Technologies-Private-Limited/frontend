import React from "react";
import './App.css'
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
import ClientEditFormPage from "./pages/ClientEditFormPage";
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
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/clients/client-detail" element={<ClientDetailPage />} />
                <Route path="/clients" element={<ClientsListPage />} />
                <Route path="/client-edit-form" element={<ClientEditFormPage />} />
                {/* <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute isAuthenticated={isAuthenticated}>
                            <DashboardPage />
                        </ProtectedRoute>
                    }
                /> */}
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
