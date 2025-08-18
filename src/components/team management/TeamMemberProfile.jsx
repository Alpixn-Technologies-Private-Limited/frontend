import React, { useState, useEffect } from "react";
import Overview from "./Overview";
import CurrentProjects from "./CurrentProjects";
import TaskHistory from "./TaskHistory";
import PerformanceAnalytics from "./PerformanceAnalytics";
import SkillsAndCertifications from "./SkillsAndCertifications";
import { useParams } from "react-router-dom";
import axios from "../../utils/axios";
import { HashLoader } from "react-spinners";

const TeamMemberProfile = () => {
    const [isActive, setIsActive] = useState("Overview");
    const [member, setMember] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams();

    const fetchMember = async (id) => {
        if (!id) {
            setError("No team ID provided");
        }

        try {
            setLoading(true);
            const res = await axios.get(`/api/team/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token") ||
                        sessionStorage.getItem("token")
                        }`,
                },
            });
            const data = res?.data;
            setMember(data);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        if (id) {
            fetchMember(id);
        }
    }, [id]);

    if (loading) {
        return (
            <div className="absolute md:left-30 inset-0 flex items-center justify-center">
                <HashLoader size={60} color="#6366F1" />
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center text-red-500">
                <p>{error}</p>
            </div>
        );
    }

    if (!member) {
        return (
            <div className="min-h-screen flex items-center justify-center text-gray-500">
                <p>No member data found</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen p-4 sm:p-6 rounded-lg shadow-md sm:shadow-lg m-2 sm:m-5 
                        bg-white dark:bg-gradient-to-r dark:from-[#241f53] dark:via-[#0d0130] dark:to-[#2b1a76]">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 flex-wrap">
                    <img
                        src={
                            member.avatarUrl ||
                            "https://cdn-icons-png.freepik.com/512/6833/6833605.png"
                        }
                        alt={member.name}
                        className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full object-cover"
                    />
                    <div className="text-center sm:text-left max-w-full">
                        <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                            {member.name}
                        </h2>
                        <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                            {member.role || "No Role Assigned"}
                        </p>
                        <p className="text-sm text-gray-700 dark:text-gray-300 font-medium break-words">
                            {member.email || "No Email"}{" "}
                            {member.phone ? `| ${member.phone}` : ""}{" "}
                            {member.availability
                                ? `| ${member.availability
                                    .charAt(0)
                                    .toUpperCase() +
                                member.availability.slice(1)
                                }`
                                : ""}
                        </p>
                    </div>
                </div>
                <div className="w-full sm:w-auto">
                    <button className="w-full md:w-fit bg-[#E8EDF5] hover:bg-gray-200 dark:bg-[#312c68] dark:hover:bg-[#3f387a] text-gray-800 dark:text-white font-medium px-4 py-2 rounded-lg shadow-sm transition lg:w-[500px] lg:ml-10">
                        Message
                    </button>
                </div>
            </div>
            <div className="mt-6 overflow-x-auto">
                <ul className="flex whitespace-nowrap gap-4 sm:gap-8 font-semibold text-gray-700 dark:text-gray-300 px-1 sm:px-2">
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
                            className={`cursor-pointer pb-2 transition ${isActive === tab
                                    ? "text-black dark:text-white border-b-3 border-black dark:border-white"
                                    : "text-gray-700 dark:text-gray-400 hover:text-black dark:hover:text-white"
                                }`}
                        >
                            {tab}
                        </li>
                    ))}
                </ul>
                <hr className="border-gray-300 dark:border-gray-600" />
            </div>
            <div className="mt-6">
                {isActive === "Overview" && <Overview member={member} />}
                {isActive === "Current Projects" && (
                    <CurrentProjects memberId={member.id} />
                )}
                {isActive === "Task History" && (
                    <TaskHistory memberId={member.id} />
                )}
                {isActive === "Performance Analytics" && (
                    <PerformanceAnalytics memberId={member.id} />
                )}
                {isActive === "Skills and Certifications" && (
                    <SkillsAndCertifications member={member} />
                )}
            </div>
        </div>
    );
};

export default TeamMemberProfile;
