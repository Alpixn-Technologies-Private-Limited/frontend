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
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navbar */}
       <div className="fixed top-0 left-64 right-0 z-40 max-sm:left-0">
          <Navbar />
      </div>

      {/* Content Wrapper */}
      <div className="flex flex-1 pt-16">
        {/* Sidebar for large screens only */}
        <div className="fixed top-0 left-0 bottom-0 w-64 max-sm:w-0 z-50 border-r bg-white">
          <Sidebar />
        </div>

        {/* Main content */}
        <main className="flex-1 flex flex-col w-full lg:ml-64">
          {/* Task Header */}
          <div className="px-4 sm:px-6 md:px-8 pt-6">
            <TaskHeader />
          </div>

          {/* Tabs Area */}
          <div className="flex-grow overflow-y-auto px-4 sm:px-6 md:px-8 py-6">
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
          <div className="px-4 sm:px-6 md:px-8 pb-6">
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProjectTaskDetailsPage;
