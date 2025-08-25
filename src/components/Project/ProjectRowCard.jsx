import React from "react";
import { Link } from "react-router-dom";

const ProjectRowCard = ({ project }) => {
  return (
    <Link to={`/project/${project.id}`}>
      <div
        className="bg-white/80 dark:bg-white/10 dark:backdrop-blur-md
                   p-4 mt-5 border border-gray-200 dark:border-white/20
                   rounded-lg shadow-sm flex flex-col sm:flex-row 
                   sm:items-center sm:justify-between gap-4 mb-3
                   transition-all hover:shadow-md hover:-translate-y-1"
      >
        {/* Project Name */}
        <div className="flex items-center gap-4 sm:w-1/4">
          <div className="w-10 h-10 bg-indigo-600 text-white rounded-md flex items-center justify-center text-xl font-bold">
            {project.name.charAt(0)}
          </div>
          <div>
            <h3 className="font-semibold text-green-600 dark:text-green-400">
              {project.name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-300">
              {project.client}
            </p>
          </div>
        </div>

        {/* Due Date */}
        <div className="text-sm text-indigo-600 dark:text-indigo-400">
          Due {project.dueDate}
        </div>

        {/* Progress */}
        <div className="flex items-center gap-2 sm:w-1/4 w-full">
          <div className="w-full bg-gray-200 dark:bg-white/20 rounded-full h-2">
            <div
              className={`${project.progressColor} h-2 rounded-full`}
              style={{ width: `${project.progress}%` }}
            ></div>
          </div>
          <span className="text-sm text-green-600 dark:text-green-400">
            {project.progress}%
          </span>
        </div>

        {/* Team */}
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-300 font-medium mb-1">
            Team
          </p>
          <div className="flex items-center gap-1 flex-wrap">
            {project.team.map((user, index) => (
              <img
                key={index}
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
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-300 font-medium mb-1">
            Status
          </p>
          <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
            {project.status}
          </p>
        </div>

        {/* AI Health */}
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-300 font-medium mb-1">
            AI Health Indicator
          </p>
          <span
            className={`text-xs px-3 py-1 rounded-md ${project.healthColor}`}
          >
            ✅ {project.healthLabel}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProjectRowCard;
