import React from 'react'
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import TaskHeader from '../components/project-task-detail/TaskHeader';
import ProjectSetupForm from '../components/project-task-detail/ProjectSetupForm';

const ProjectTaskDetailsPage = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden bg-gray-50">
        <Navbar />

        {/* ---------- Main Content ---------- */}
        <div className="flex-grow overflow-y-auto p-6 space-y-6">
          {/* ---------- Task Details Section ---------- */}
          <TaskHeader/>

          {/* ---------- Project Setup Form Section ---------- */}
          <ProjectSetupForm/>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default ProjectTaskDetailsPage;
