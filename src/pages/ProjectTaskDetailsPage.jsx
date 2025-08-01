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
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden bg-gray-50">
        <Navbar />

        {/* ---------- Main Content ---------- */}
        <div className="flex-grow overflow-y-auto p-6 space-y-6">
          <TaskHeader />

          {/* ---------- Nested Routing Setup ---------- */}
          <Routes>
            <Route path="/" element={<ProjectSetupForm />}>
              <Route index element={<Navigate to="basic-info" replace />} />
              <Route path="basic-info" element={<BasicInformation />} />
              <Route path="client-selection" element={<ClientSelection />} />
              <Route path="team-assignment" element={<TeamAssignment />} />
              <Route path="timeline-milestones" element={<TImelineMilestone />} />
              <Route path="project-template" element={<ProjectTemplate />} />
              <Route path="ai-configuration" element={<AIConfiguration />} />
            </Route>
          </Routes>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default ProjectTaskDetailsPage;