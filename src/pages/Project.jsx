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
    <div className="bg-gray-50 flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <div className="sticky top-0 z-50 bg-white shadow">
          <Navbar />
        </div>

        <div className="p-6 space-y-6 overflow-y-auto">
          <ProjectHeader onViewChange={setView} view={view} />
          <ProjectDashboard />

          {view === "grid" ? (
            <ProjectGrid projects={DummyProjectData} />
          ) : (
            <div className="space-y-2">
              {DummyProjectData.map((project) => (
                <ProjectRowCard key={project.id} project={project} />
              ))}
            </div>
          )}

          <ProjectFooter />
        </div>
      </div>
    </div>
  );
}