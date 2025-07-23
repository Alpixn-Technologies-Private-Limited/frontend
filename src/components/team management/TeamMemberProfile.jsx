import React, { useState } from "react";
import Overview from "./Overview";
import CurrentProjects from "./CurrentProjects";
import TaskHistory from "./TaskHistory";
import PerformanceAnalytics from "./PerformanceAnalytics";
import SkillsAndCertifications from "./SkillsAndCertifications";

const TeamMemberProfile = () => {
  const [isActive,setIsActive]=useState("Overview");
    return (
        <div className="min-h-screen bg-white p-4 rounded-lg shadow-lg ">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-5">
                    <img
                        src="https://cdn-icons-png.freepik.com/512/6833/6833605.png"
                        alt="Sophia Bennett"
                        className="w-[128px] h-32 ml-10 rounded-full object-cover"
                    />
                    <div>
                        <h2 className="text-xl font-bold">
                            Sophia Bennett
                        </h2>
                        <p className="text-sm text-gray-700 font-semibold">
                            Senior Project Manager
                        </p>
                        <p className="text-sm text-gray-700 font-semibold">
                            sophia.bennett@email.com | (555) 123-4567 |
                            Available
                        </p>
                    </div>
                </div>
                <button className="mt-4 md:mt-0 bg-[#E8EDF5] hover:bg-gray-200 text-gray-800 font-medium px-6 py-2 rounded-lg shadow-sm w-[500px] cursor-pointer mr-24">
                    Message
                </button>
            </div>
            <div className="">
              <ul className="flex gap-14 ml-10 mt-4 font-semibold text-gray-700">
                <li onClick={() => setIsActive("Overview")} className={`cursor-pointer pb-2 ${isActive==="Overview" ? "text-black border-b-3" : "text-gray-700"}`}>Overview</li>
                <li onClick={() => setIsActive("Current Projects")} className={`cursor-pointer pb-2 ${isActive==="Current Projects" ? "text-black border-b-3" : "text-gray-700"}`}>Current Projects</li>
                <li onClick={() => setIsActive("Task History")} className={`cursor-pointer pb-2 ${isActive==="Task History" ? "text-black border-b-3" : "text-gray-700"}`}>Task History</li>
                <li onClick={() => setIsActive("Performance Analytics")} className={`cursor-pointer pb-2 ${isActive==="Performance Analytics" ? "text-black border-b-3" : "text-gray-700"}`}>Performance Analytics</li>
                <li onClick={() => setIsActive("Skills and Certifications")} className={`cursor-pointer pb-2 ${isActive==="Skills and Certifications" ? "text-black border-b-3" : "text-gray-700"}`}>Skills and Certifications</li>
              </ul>
              <hr className="text-gray-500"></hr>
            </div>
            {isActive=="Overview"&&<Overview/>}
            {isActive=="Current Projects"&&<CurrentProjects/>}
            {isActive=="Task History"&&<TaskHistory/>}
            {isActive=="Performance Analytics"&&<PerformanceAnalytics/>}
            {isActive=="Skills and Certifications"&&<SkillsAndCertifications/>}
        </div>
    );
};

export default TeamMemberProfile;
