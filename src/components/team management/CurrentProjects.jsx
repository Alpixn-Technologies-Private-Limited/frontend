import React from "react";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";
const CurrentProjects = () => {
    const projects = [
        {
            id: 1,
            title: "Project Phoenix",
            role: "Team Lead",
            timeline: "Jan 15, 2024 - Dec 15, 2024",
            tasks: 120,
            deadline: "In 30 days",
            image: project3,
        },
        {
            id: 2,
            title: "Project Aurora",
            role: "Developer",
            timeline: "Feb 20, 2024 - Nov 20, 2024",
            tasks: 90,
            deadline: "In 60 days",
            image: project1,
        },
        {
            id: 3,
            title: "Project Nebula",
            role: "Designer",
            timeline: "Mar 10, 2024 - Oct 10, 2024",
            tasks: 75,
            deadline: "In 90 days",
            image: project2,
        },
    ];

    return (
        <div className="flex flex-col gap-8 m-3 ml-10 mt-8">
            <h2 className="text-[32px] font-bold text-gray-900">
                Current Projects
            </h2>
            {projects.map((project) => (
                <div
                    key={project.id}
                    className="flex flex-col md:flex-row gap-6 items-center md:items-start justify-between"
                >
                    <div className="flex-1">
                        <p className="text-sm text-[#4A739C]">
                            Timeline: {project.timeline} · {project.tasks} Tasks
                            · Deadline: {project.deadline}
                        </p>
                        <h3 className="text-lg font-bold text-gray-900 mt-1">
                            {project.title}
                        </h3>
                        <p className="text-sm text-[#4A739C] mb-3">
                            Role: {project.role}
                        </p>
                        <button className="px-4 py-2 bg-[#E8EDF5] rounded-md text-sm font-medium text-gray-900 hover:bg-gray-200 transition">
                            View Project
                        </button>
                    </div>
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-[320px] h-[171px] rounded-lg object-cover"
                    />
                </div>
            ))}
        </div>
    );
};

export default CurrentProjects;
