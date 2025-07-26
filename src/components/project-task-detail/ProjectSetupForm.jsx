import React from 'react';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';

const tabList = [
  { label: "Basic Information", path: "basic-info" },
  { label: "Client Selection", path: "client-selection" },
  { label: "Team Assignment", path: "team-assignment" },
  { label: "Timeline & Milestones", path: "timeline-milestones" },
  { label: "Project Template", path: "project-template" },
  { label: "AI Configuration", path: "ai-configuration" },
];

const ProjectSetupForm = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const activeTab = location.pathname.split("/").filter(Boolean).pop();

  return (
    <div className="bg-gray-200 rounded shadow p-6 mt-6">
      <h3 className="text-lg font-semibold text-black mb-4">Project Setup</h3>
      <p className="text-sm text-gray-500 mb-6">Follow the steps below to configure your project.</p>

      {/* Tab Header */}
      <div className="flex gap-4 text-sm font-medium border-b border-gray-200 mb-6 overflow-x-auto">
        {tabList.map((tab) => (
          <button
            key={tab.path}
            onClick={() => navigate(tab.path)}
            className={`pb-2 whitespace-nowrap ${
              activeTab === tab.path
                ? "border-b-2 border-black text-black"
                : "text-gray-500 hover:text-black"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-4">
        <Outlet />
      </div>
    </div>
  );
};

export default ProjectSetupForm;