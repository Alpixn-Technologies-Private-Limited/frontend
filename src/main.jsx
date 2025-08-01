import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./context/AuthContext.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import "./App.css";
import { SidebarProvider } from "./context/SidebarContext.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <SidebarProvider>
        <ThemeProvider>
          <App />
          <Toaster />
        </ThemeProvider>
      </SidebarProvider>
    </AuthProvider>
  </StrictMode>
);
