import React from "react";
import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";

const ProjectGrid = ({ projects }) => {
  return (
    <div
      className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 mt-6 
                 bg-white dark:bg-white/5 dark:backdrop-blur-md
                 text-gray-900 dark:text-gray-100 
                 p-2 sm:p-4 rounded-xl transition-colors duration-300"
    >
      {projects.map((project) => (
        <Link to={`/project/${project.id}`} key={project.id}>
          <ProjectCard project={project} />
        </Link>
      ))}
    </div>
  );
};

export default ProjectGrid;
