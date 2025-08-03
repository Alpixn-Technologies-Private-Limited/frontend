import { useState } from "react";
import DummyProjectData from "../data/DummyProjectData";
import ProjectHeader from "../components/Project/ProjectHeader";
import ProjectDashboard from "../components/Project/ProjectDashboard";
import ProjectGrid from "../components/Project/ProjectGrid";
import ProjectRowCard from "../components/Project/ProjectRowCard";
import ProjectFooter from "../components/Project/ProjectFooter";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Project() {
  const [view, setView] = useState("grid");

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <div className="fixed top-0 left-0 bottom-0 w-64 z-50 border-r bg-white max-sm:hidden">
        <Sidebar />
      </div>

      {/* Main content area */}
      <div className="flex-1 flex flex-col ml-64 max-sm:ml-0">
        {/* Navbar */}
        <div className="fixed top-0 left-64 right-0 z-40 h-16 max-sm:left-0 bg-white border-b">
          <Navbar />
        </div>

        {/* Scrollable content */}
        <div className="pt-16 px-4 md:px-6 flex-1 overflow-y-auto">
          <ProjectHeader onViewChange={setView} view={view} />
          <ProjectDashboard />

          {view === "grid" ? (
            <ProjectGrid projects={DummyProjectData} />
          ) : (
            <div className="space-y-4">
              {DummyProjectData.map((project) => (
                <ProjectRowCard key={project.id} project={project} />
              ))}
            </div>
          )}
        </div>

        {/* Footer always at bottom */}
        <div className="px-4 md:px-6 py-4 bg-gray-50">
          <ProjectFooter />
        </div>
      </div>
    </div>
  );
}
