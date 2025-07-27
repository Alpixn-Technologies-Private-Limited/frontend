import React, { useState } from "react";
import Overview from "./Overview";
import CurrentProjects from "./CurrentProjects";
import TaskHistory from "./TaskHistory";
import PerformanceAnalytics from "./PerformanceAnalytics";
import SkillsAndCertifications from "./SkillsAndCertifications";

const TeamMemberProfile = () => {
    const [isActive, setIsActive] = useState("Overview");
    return (
        <div className="min-h-screen bg-white p-6 rounded-lg shadow-lg m-3 sm:m-5">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between lg:mr-40">
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                    <img
                        src="https://cdn-icons-png.freepik.com/512/6833/6833605.png"
                        alt="Sophia Bennett"
                        className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover"
                    />
                    <div className="text-center sm:text-left w-[419px]">
                        <h2 className="text-lg sm:text-xl font-bold">Sophia Bennett</h2>
                        <p className="text-sm text-gray-700 font-semibold">Senior Project Manager</p>
                        <p className="text-sm text-gray-700 font-semibold break-all">sophia.bennett@email.com | (555) 123-4567 | Available</p>
                    </div>
                </div>
                <button className="mt-2 sm:mt-0 bg-[#E8EDF5] hover:bg-gray-200 text-gray-800 font-medium px-4 sm:px-6 py-2 rounded-lg shadow-sm cursor-pointer lg:w-[500px] sm:w-full md:w-fit">Message</button>
            </div>
            <div className="mt-4 overflow-x-auto">
                <ul className="flex whitespace-nowrap gap-4 sm:gap-8 font-semibold text-gray-700 px-2">
                    {['Overview','Current Projects','Task History','Performance Analytics','Skills and Certifications'].map((tab, idx) => (
                        <li
                            key={idx}
                            onClick={() => setIsActive(tab)}
                            className={`cursor-pointer pb-2 ${isActive === tab ? "text-black border-b-2 border-black" : "text-gray-700"}`}
                        >
                            {tab}
                        </li>
                    ))}
                </ul>
                <hr className="border-gray-300" />
            </div>
            <div className="mt-4">
                {isActive === "Overview" && <Overview />}
                {isActive === "Current Projects" && <CurrentProjects />}
                {isActive === "Task History" && <TaskHistory />}
                {isActive === "Performance Analytics" && <PerformanceAnalytics />}
                {isActive === "Skills and Certifications" && <SkillsAndCertifications />}
            </div>
        </div>
    );
};

export default TeamMemberProfile;