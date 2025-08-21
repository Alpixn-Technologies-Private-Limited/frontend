import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import TaskHeader from '../components/project-task-detail/TaskHeader';
import ProjectSetupForm from '../components/project-task-detail/ProjectSetupForm';

import BasicInformation from '../components/project-task-detail/tabs/BasicInformation';
import AIConfiguration from '../components/project-task-detail/tabs/AIConfiguration';
import ClientSelection from '../components/project-task-detail/tabs/ClientSelection';
import ProjectTemplate from '../components/project-task-detail/tabs/ProjectTemplate';
import TeamAssignment from '../components/project-task-detail/tabs/TeamAssignment';
import TImelineMilestone from '../components/project-task-detail/tabs/TImelineMilestone';

const ProjectTaskDetailsPage = () => {
  return (
    <div
      className="min-h-screen flex 
                 bg-gray-50 
                 dark:bg-gradient-to-r dark:from-[#241f53] dark:via-[#0d0130] dark:to-[#2b1a76]"
    >
      {/* Sidebar (Fixed for large screens, toggleable for small) */}
      <div
        className="fixed top-0 left-0 bottom-0 w-64 max-sm:w-0 z-50 
                   border-r border-gray-200 dark:border-gray-700 
                   bg-white dark:bg-[#0f172a]"
      >
        <Sidebar />
      </div>

      {/* Main content */}
      <div
        className="flex-1 flex flex-col sm:ml-64 max-sm:ml-0 
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

        {/* Page content */}
        <main className="mt-16 flex-1 overflow-y-auto px-4 py-6 sm:px-6 md:px-8 text-gray-800 dark:text-gray-100">
          {/* Task Header */}
          <TaskHeader />

          {/* Tabs Area */}
          <div className="mt-6">
            <Routes>
              <Route path="/" element={<ProjectSetupForm />}>
                <Route path="basic-info" element={<BasicInformation />} />
                <Route path="client-selection" element={<ClientSelection />} />
                <Route path="team-assignment" element={<TeamAssignment />} />
                <Route path="timeline-milestones" element={<TImelineMilestone />} />
                <Route path="project-template" element={<ProjectTemplate />} />
                <Route path="ai-configuration" element={<AIConfiguration />} />
              </Route>
            </Routes>
          </div>
        </main>

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

export default ProjectTaskDetailsPage;
