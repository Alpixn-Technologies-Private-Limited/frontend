import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
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
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navbar */}
      <div className="sticky top-0 z-40">
        <Navbar />
      </div>

      <div className="flex flex-1">
        {/* Sidebar for large screens */}
        <aside className="hidden lg:block lg:w-64 border-r bg-white">
          <Sidebar />
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col overflow-hidden">
          {/* Task Header */}
          <div className="p-4 sm:p-6">
            <TaskHeader />
          </div>

          {/* Nested Routes Content */}
          <div className="flex-grow overflow-y-auto p-2 sm:p-4 md:p-6">
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

          {/* Footer */}
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default ProjectTaskDetailsPage;
