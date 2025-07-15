import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow border border-gray-400">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-indigo-600">{project.name}</h3>
          <p className="text-sm text-gray-500">{project.client}</p>
        </div>
        <p className="text-sm text-indigo-600">Due {project.dueDate}</p>
      </div>

      <div className="mt-4">
        <p className="text-sm text-gray-600 font-semibold mb-1">Progress</p>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className={`h-2 rounded-full ${project.progressColor}`}
            style={{ width: `${project.progress}%` }}
          ></div>
        </div>
        <p className="text-xs text-gray-500 mt-1">Status: <span className="text-blue-600">{project.status}</span></p>
      </div>

      <div className="mt-3">
        <p className="text-sm font-medium">Team</p>
        <div className="flex items-center mt-1">
          {project.team.map((imgSrc, index) => (
            <img
              key={index}
              src={imgSrc}
              alt="team member"
              className={`w-6 h-6 rounded-full border-2 border-white -ml-1 ${index === 0 ? 'ml-0' : ''}`}
            />
          ))}
          <div className="w-6 h-6 rounded-full bg-purple-600 text-white text-xs flex items-center justify-center -ml-1">
            +{project.extra}
          </div>
        </div>
      </div>
      <div className={`text-xs mt-3 px-2 py-1 rounded w-fit ${project.healthColor}`}>
        {project.healthLabel}
      </div>
    </div>
  );
};

export default ProjectCard;
