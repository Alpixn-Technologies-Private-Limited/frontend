import React from "react";
import { Link } from "react-router-dom";

const ProjectRowCard = ({ project }) => {
  return (
    <Link to={`/project/${project.id}`}>
      <div className="bg-white p-4 mt-5 border border-gray-300 rounded-lg shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-3 hover:shadow-md transition">

        {/* Project Name */}
        <div className="flex items-center gap-4 sm:w-1/4">
          <div className="w-10 h-10 bg-indigo-600 text-white rounded-md flex items-center justify-center text-xl font-bold">
            {project.name.charAt(0)}
          </div>
          <div>
            <h3 className="font-semibold text-green-600">{project.name}</h3>
            <p className="text-sm text-gray-500">{project.client}</p>
          </div>
        </div>

        {/* Due Date */}
        <div className="text-sm text-indigo-500">
          Due {project.dueDate}
        </div>

        {/* Progress */}
        <div className="flex items-center gap-2 sm:w-1/4 w-full">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className={`${project.progressColor} h-2 rounded-full`}
              style={{ width: `${project.progress}%` }}
            ></div>
          </div>
          <span className="text-sm text-green-600">{project.progress}%</span>
        </div>

        {/* Team */}
        <div>
          <p className="text-sm text-gray-500 font-medium mb-1">Team</p>
          <div className="flex items-center gap-1 flex-wrap">
            {project.team.map((user, index) => (
              <img
                key={index}
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

        {/* Status */}
        <div>
          <p className="text-sm text-gray-500 font-medium mb-1">Status</p>
          <p className="text-sm text-blue-600 font-medium">{project.status}</p>
        </div>

        {/* AI Health */}
        <div>
          <p className="text-sm text-gray-500 font-medium mb-1">AI Health Indicator</p>
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
