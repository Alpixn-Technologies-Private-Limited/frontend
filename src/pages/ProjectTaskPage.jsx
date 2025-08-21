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
    },
  ];

  return (
    <div
      className="min-h-screen flex 
                 bg-gray-50 
                 dark:bg-gradient-to-r dark:from-[#241f53] dark:via-[#0d0130] dark:to-[#2b1a76]"
    >
      {/* Sidebar */}
      <div
        className="fixed top-0 left-0 bottom-0 w-64 max-sm:w-0 z-50 
                   border-r border-gray-200 dark:border-gray-700 
                   bg-white dark:bg-[#0f172a]"
      >
        <Sidebar />
      </div>

      {/* Main Content */}
      <div
        className="flex-1 flex flex-col ml-64 max-sm:ml-0 
                   bg-gray-50 
                   dark:bg-gradient-to-r dark:from-[#241f53] dark:via-[#0d0130] dark:to-[#2b1a76]"
      >
        {/* Navbar */}
        <div
          className="fixed top-0 left-64 right-0 z-40 h-16 max-sm:left-0 
                     bg-white dark:bg-[#0f172a] 
                     border-b border-gray-200 dark:border-gray-700"
        >
          <Navbar />
        </div>

        {/* Page Content */}
        <div className="pt-16 px-4 md:px-6 flex-1 text-gray-800 dark:text-gray-100">
          <TaskHeader />
          <TaskTimeline tasks={tasks} />
        </div>

        {/* Footer */}
        <div
          className="px-4 md:px-6 py-4 
                    bg-gray-50 
                    dark:bg-gradient-to-r dark:from-[#241f53] dark:via-[#0d0130] dark:to-[#2b1a76]
                    border-gray-200 dark:border-gray-700"
        >
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ProjectTaskPage;
