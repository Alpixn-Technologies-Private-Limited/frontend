import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white dark:bg-white/10 dark:backdrop-blur-md 
                    p-4 rounded-lg shadow border border-gray-300 
                    dark:border-white/20 
                    transition-all hover:shadow-md hover:-translate-y-1">
      
      {/* Title & Client & Due Date */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-indigo-600 dark:text-indigo-400 truncate">
            {project.name}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            {project.client}
          </p>
        </div>
        <p className="text-sm text-indigo-600 dark:text-indigo-400 sm:text-right">
          Due {project.dueDate}
        </p>
      </div>

      {/* Progress Section */}
      <div className="mt-4">
        <p className="text-sm text-gray-600 dark:text-gray-200 font-semibold mb-1">
          Progress
        </p>
        <div className="w-full bg-gray-200 dark:bg-white/20 rounded-full h-2">
          <div
            className={`h-2 rounded-full ${project.progressColor}`}
            style={{ width: `${project.progress}%` }}
          ></div>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-300 mt-1">
          Status:{" "}
          <span className="text-blue-600 dark:text-blue-400">
            {project.status}
          </span>
        </p>
      </div>

      {/* Team Avatars */}
      <div className="mt-3">
        <p className="text-sm font-medium dark:text-gray-200">Team</p>
        <div className="flex items-center mt-1 flex-wrap">
          {project.team.map((imgSrc, index) => (
            <img
              key={index}
              src={imgSrc}
              alt="team member"
              className={`w-6 h-6 rounded-full border-2 border-white dark:border-white/20 -ml-1 ${
                index === 0 ? "ml-0" : ""
              }`}
            />
          ))}
          <div className="w-6 h-6 rounded-full bg-purple-600 text-white text-xs flex items-center justify-center -ml-1">
            +{project.extra}
          </div>
        </div>
      </div>

      {/* Health Label */}
      <div
        className={`text-xs mt-3 px-2 py-1 rounded w-fit ${project.healthColor}`}
      >
        {project.healthLabel}
      </div>
    </div>
  );
};

export default ProjectCard;
