import React from "react";
import { useParams } from "react-router-dom";
import DummyProjectData from "../../data/DummyProjectData";

const Overview = () => {
  const { id } = useParams();
  const project = DummyProjectData.find((proj) => proj.id === parseInt(id));

  const tabs = ["Overview", "Tasks", "Timelines", "Teams", "Files", "Communications", "Analytics"];

  return (
    <div className="bg-gray-50 p-6">
      {/* Tabs with only Overview active */}
      <div className="flex justify-center gap-6 pb-2 mb-6">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            className={`text-sm font-medium px-2 py-1 border-b-2 transition-all duration-200 ${
              tab === "Overview"
                ? "border-indigo-500 text-indigo-600"
                : "border-transparent text-gray-600 hover:border-indigo-400 hover:text-indigo-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Project Card */}
      <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-between mb-3">
        <div className="flex items-center gap-4 w-1/4">
          <div className="w-10 h-10 bg-indigo-600 text-white rounded-md flex items-center justify-center text-xl font-bold">
            {project.name.charAt(0)}
          </div>
          <div>
            <h3 className="font-semibold text-green-600">{project.name}</h3>
            <p className="text-sm text-gray-500">{project.client}</p>
          </div>
        </div>

        <div className="text-sm text-indigo-500 w-[120px]">Due {project.dueDate}</div>

        <div className="flex items-center gap-2 w-1/4">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className={`${project.progressColor} h-2 rounded-full`}
              style={{ width: `${project.progress}%` }}
            ></div>
          </div>
          <span className="text-sm text-green-600">{project.progress}%</span>
        </div>

        <div>
          <p className="text-sm text-gray-500 font-medium mb-1">Team</p>
          <div className="flex items-center gap-1">
            {project.team.map((user, idx) => (
              <img
                key={idx}
                src={user}
                alt="team"
                className="w-6 h-6 rounded-full"
              />
            ))}
            <div className="bg-purple-600 text-white text-xs rounded-md px-2 py-0.5">
              +{project.extra}
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm text-gray-500 font-medium mb-1">Status</p>
          <p className="text-sm text-blue-600 font-medium">{project.status}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500 font-medium mb-1">AI Health Indicator</p>
          <span className={`text-xs px-3 py-1 rounded-md ${project.healthColor}`}>
            ✅ {project.healthLabel}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Overview;