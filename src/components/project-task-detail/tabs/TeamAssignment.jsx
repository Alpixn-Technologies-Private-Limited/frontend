import React from "react";
import { useNavigate } from "react-router-dom";

const TeamAssignment = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/project/task-details/timeline-milestones");
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Team Assignment</h2>

      <div className="mb-6">
        <label className="block mb-1 font-medium">Assign Team Members</label>
        <input
          type="text"
          placeholder="Select team members"
          className="h-12 w-100 px-3 py-2 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-6">
        <label className="block mb-1 font-medium">Define Roles</label>
        <input
          type="text"
          placeholder="Enter role definitions"
          className="h-12 w-100 px-3 py-2 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex justify-end gap-3 mt-6">
        <button
          type="button"
          className="text-sm px-4 py-2 text-gray-600 hover:text-black rounded"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="text-sm bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TeamAssignment;