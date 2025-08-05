import { useState, useEffect } from "react";
import axios from "../utils/axios";
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
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await axios.get("/projects");
        setProjects(response.data?.data || []);
      } catch (error) {
        console.error("Error fetching projects, using dummy data:", error);
        setProjects(DummyProjectData);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="h-screen flex bg-gray-50 flex-col">
      {/* Sidebar */}
      <div className="fixed top-0 left-0 bottom-0 w-64 max-sm:w-0 z-50 border-r bg-white">
        <Sidebar />
      </div>

      {/* Main content area */}
      <div className="flex-1 flex flex-col ml-64 max-sm:ml-0">
        {/* Navbar */}
        <div className="fixed top-0 left-64 right-0 z-40 max-sm:left-0">
          <Navbar />
        </div>

        {/* Scrollable content */}
        <div className="pt-16 px-4 md:px-6 flex-1 overflow-y-auto">
          {loading ? (
            <div className="h-full flex flex-col items-center justify-center">
              <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-indigo-500 border-solid"></div>
              <p className="mt-2 text-sm text-gray-600">Loading projects...</p>
            </div>
          ) : (
            <>
              <ProjectHeader onViewChange={setView} view={view} />
              <ProjectDashboard />

              {view === "grid" ? (
                <ProjectGrid projects={projects} />
              ) : (
                <div className="space-y-4">
                  {projects.map((project) => (
                    <ProjectRowCard key={project.id} project={project} />
                  ))}
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer */}
        <div className="px-4 md:px-6 py-4 bg-gray-50">
          <ProjectFooter />
        </div>
      </div>
    </div>
  );
}
