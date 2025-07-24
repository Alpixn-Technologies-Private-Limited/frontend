import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import TaskHeader from "../components/project-task/TaskHeader";
import TaskTimeline from "../components/project-task/TaskTimeline";

const ProjectTaskPage = () => {
  const tasks = [
    {
      id: 1,
      name: "Research and Requirement",
      startDate: "2025-06-01",
      endDate: "2025-06-07",
      status: "Done",
    },
    {
      id: 2,
      name: "Wireframe Design",
      startDate: "2025-06-08",
      endDate: "2025-06-14",
      status: "Done",
    },
    {
      id: 3,
      name: "UI Design",
      startDate: "2025-06-15",
      endDate: "2025-06-20",
      status: "In Progress",
    },
    {
      id: 4,
      name: "API Integration",
      startDate: "2025-06-21",
      endDate: "2025-06-30",
      status: "Critical",
    },
    {
      id: 5,
      name: "Final QA & Review",
      startDate: "2025-07-01",
      endDate: "2025-07-10",
      status: "In Progress",
    }
  ];

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden bg-gray-50">
        <Navbar />
        <main className="flex-1 overflow-y-auto overflow-x-hidden p-6">
          <div className="w-full overflow-x-auto">
            <TaskHeader />
            <TaskTimeline tasks={tasks} />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default ProjectTaskPage;