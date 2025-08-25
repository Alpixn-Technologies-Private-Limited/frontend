import React from "react";
import { useParams } from "react-router-dom";
import DummyProjectData from "../../data/DummyProjectData";

const Overview = () => {
  const { id } = useParams();
  const project = DummyProjectData.find((proj) => proj.id === parseInt(id));

  const tabs = ["Overview", "Tasks", "Timelines", "Teams", "Files", "Communications", "Analytics"];

  return (
    <div className="
                    dark:bg-gradient-to-r dark:from-[#241f53] dark:via-[#0d0130] dark:to-[#2b1a76] 
                    md:p-6 py-6">
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 md:gap-6 pb-4 mb-6 border-gray-200 dark:border-white/20">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            className={`text-sm font-medium px-2 py-1 border-b-2 transition-all duration-200 ${
              tab === "Overview"
                ? "border-indigo-500 text-indigo-600 dark:text-indigo-400"
                : "border-transparent text-gray-600 dark:text-gray-300 hover:border-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-400"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Project Card */}
      <div
        className="bg-white/80 dark:bg-white/10 dark:backdrop-blur-md
             border border-gray-100 dark:border-white/60
             md:border-2
             p-4 rounded-lg shadow-sm flex flex-wrap gap-4 md:gap-6 
             justify-between items-start mb-3 transition-all hover:shadow-md hover:-translate-y-1"
      >
        {/* Logo & Name */}
        <div className="flex items-center gap-4 flex-1 min-w-[200px]">
          <div className="w-10 h-10 bg-indigo-600 text-white rounded-md flex items-center justify-center text-xl font-bold">
            {project.name.charAt(0)}
          </div>
          <div>
            <h3 className="font-semibold text-green-600 dark:text-green-400">{project.name}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-300">{project.client}</p>
          </div>
        </div>

        {/* Due Date */}
        <div className="text-sm text-indigo-500 dark:text-indigo-400 min-w-[120px]">
          Due {project.dueDate}
        </div>

        {/* Progress */}
        <div className="flex items-center gap-2 flex-1 min-w-[200px]">
          <div className="w-full bg-gray-200 dark:bg-white/20 rounded-full h-2">
            <div
              className={`${project.progressColor} h-2 rounded-full`}
              style={{ width: `${project.progress}%` }}
            ></div>
          </div>
          <span className="text-sm text-green-600 dark:text-green-400">{project.progress}%</span>
        </div>

        {/* Team + Status */}
        <div className="flex flex-wrap gap-4 w-full sm:w-auto">
          {/* Team */}
          <div className="min-w-[150px]">
            <p className="text-sm text-gray-500 dark:text-gray-300 font-medium mb-1">Team</p>
            <div className="flex flex-wrap items-center gap-1">
              {project.team.map((user, idx) => (
                <img
                  key={idx}
                  src={user}
                  alt="team"
                  className="w-6 h-6 rounded-full border-2 border-white dark:border-white/20 -ml-1"
                />
              ))}
              <div className="bg-purple-600 text-white text-xs rounded-md px-2 py-0.5">
                +{project.extra}
              </div>
            </div>
          </div>

          {/* Status */}
          <div className="min-w-[80px] sm:min-w-[100px] shrink">
            <p className="text-sm text-gray-500 dark:text-gray-300 font-medium mb-1">Status</p>
            <p className="text-sm text-blue-600 dark:text-blue-400 font-medium truncate">{project.status}</p>
          </div>
        </div>

        {/* AI Health */}
        <div className="min-w-[150px] w-full sm:w-auto">
          <p className="text-sm text-gray-500 dark:text-gray-300 font-medium mb-1">AI Health Indicator</p>
          <span
            className={`text-xs px-3 py-1 rounded-md ${project.healthColor}`}
          >
            ✅ {project.healthLabel}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Overview;
