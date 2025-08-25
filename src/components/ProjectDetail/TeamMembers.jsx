import React from "react";
import { FaUser } from "react-icons/fa";

const teamMembers = [
  { name: "Designer 1", role: "UX Lead", color: "bg-red-100 dark:bg-red-500/20", iconColor: "text-red-600 dark:text-red-400" },
  { name: "Designer 2", role: "Team Member", color: "bg-green-100 dark:bg-green-500/20", iconColor: "text-green-600 dark:text-green-400" },
  { name: "Designer 3", role: "Team Member", color: "bg-yellow-100 dark:bg-yellow-500/20", iconColor: "text-yellow-600 dark:text-yellow-400" },
  { name: "Designer 4", role: "Team Member", color: "bg-purple-100 dark:bg-purple-500/20", iconColor: "text-purple-600 dark:text-purple-400" },
  { name: "Designer 5", role: "Team Member", color: "bg-blue-100 dark:bg-blue-500/20", iconColor: "text-blue-600 dark:text-blue-400" },
];

const TeamMembers = () => {
  return (
    <div
      className="w-full max-w-md 
                 rounded-2xl p-6 
                 bg-white/30 dark:bg-white/10 
                 backdrop-blur-md 
                 border border-white/20 dark:border-white/10 
                 shadow-lg hover:shadow-xl 
                 transition-all duration-300"
    >
      <h2 className="text-md font-semibold mb-4 text-gray-800 dark:text-gray-100">
        Team Members
      </h2>

      <div className="space-y-3">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 
                       bg-white/40 dark:bg-white/5 
                       backdrop-blur-sm 
                       border border-white/10 
                       p-3 rounded-xl 
                       hover:scale-[1.02] transition"
          >
            <div className={`w-9 h-9 rounded-full flex items-center justify-center ${member.color}`}>
              <FaUser className={`${member.iconColor} text-base`} />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                {member.name}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;
