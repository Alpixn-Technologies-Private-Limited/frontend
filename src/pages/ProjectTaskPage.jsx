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
    <div className="min-h-screen flex bg-gray-50">
      <div className="fixed top-0 left-0 bottom-0 w-64 max-sm:w-0 z-50 border-r bg-white">
        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col ml-64 max-sm:ml-0">
        <div className="fixed top-0 left-64 right-0 z-40 h-16 max-sm:left-0 bg-white border-b">
          <Navbar />
        </div>

        <div className="pt-16 px-4 md:px-6 flex-1">
          <TaskHeader/>
          <TaskTimeline tasks={tasks}/>
        </div>

        <div className="px-4 md:px-6 py-4 bg-gray-50">
          <Footer />
        </div>
      </div>
    </div>
  )
};

export default ProjectTaskPage;