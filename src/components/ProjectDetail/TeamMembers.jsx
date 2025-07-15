import React from "react";
import { FaUser } from "react-icons/fa";

const teamMembers = [
  { name: "Designer 1", role: "UX Lead", color: "bg-red-100", iconColor: "text-red-600" },
  { name: "Designer 2", role: "Team Member", color: "bg-green-100", iconColor: "text-green-600" },
  { name: "Designer 3", role: "Team Member", color: "bg-yellow-100", iconColor: "text-yellow-600" },
  { name: "Designer 4", role: "Team Member", color: "bg-purple-100", iconColor: "text-red-600" },
  { name: "Designer 5", role: "Team Member", color: "bg-blue-100", iconColor: "text-green-600" },
];

const TeamMembers = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow w-full md:w-[380px]">
      <h2 className="text-md font-semibold mb-4">Team Members</h2>
      <div className="space-y-3">
        {teamMembers.map((member, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${member.color}`}>
              <FaUser className={`${member.iconColor} text-sm`} />
            </div>
            <div>
              <p className="text-sm font-medium">{member.name}</p>
              <p className="text-xs text-gray-500">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;