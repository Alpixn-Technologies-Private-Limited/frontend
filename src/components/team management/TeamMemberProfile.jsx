import React, { useState } from "react";
import Overview from "./Overview";
import CurrentProjects from "./CurrentProjects";
import TaskHistory from "./TaskHistory";
import PerformanceAnalytics from "./PerformanceAnalytics";
import SkillsAndCertifications from "./SkillsAndCertifications";

const TeamMemberProfile = () => {
  const [isActive, setIsActive] = useState("Overview");

  return (
    <div className="min-h-screen bg-white p-4 sm:p-6 rounded-lg shadow-md sm:shadow-lg m-2 sm:m-5">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 flex-wrap">
          <img
            src="https://cdn-icons-png.freepik.com/512/6833/6833605.png"
            alt="Sophia Bennett"
            className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full object-cover"
          />
          <div className="text-center sm:text-left max-w-full">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">Sophia Bennett</h2>
            <p className="text-sm text-gray-700 font-medium">Senior Project Manager</p>
            <p className="text-sm text-gray-700 font-medium break-words">
              sophia.bennett@email.com | (555) 123-4567 | Available
            </p>
          </div>
        </div>
        <div className="w-full sm:w-auto">
          <button className="w-full md:w-fit bg-[#E8EDF5] hover:bg-gray-200 text-gray-800 font-medium px-4 py-2 rounded-lg shadow-sm transition lg:w-[500px] lg:ml-10">
            Message
          </button>
        </div>
      </div>

      <div className="mt-6 overflow-x-auto">
        <ul className="flex whitespace-nowrap gap-4 sm:gap-8 font-semibold text-gray-700 px-1 sm:px-2">
          {[
            "Overview",
            "Current Projects",
            "Task History",
            "Performance Analytics",
            "Skills and Certifications",
          ].map((tab, idx) => (
            <li
              key={idx}
              onClick={() => setIsActive(tab)}
              className={`cursor-pointer pb-2 transition ${
                isActive === tab
                  ? "text-black border-b-3 border-black"
                  : "text-gray-700 hover:text-black"
              }`}
            >
              {tab}
            </li>
          ))}
        </ul>
        <hr className="border-gray-300" />
      </div>

      <div className="mt-6">
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
