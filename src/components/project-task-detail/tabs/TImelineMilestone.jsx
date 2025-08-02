import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TimelineMilestone = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/project/task-details/project-template");
  };

  return (
    <div className="p-4 sm:p-6">
      <h2 className="text-lg sm:text-xl font-semibold mb-4">Timeline & Milestones</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block mb-1 font-medium">Project Start Date</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="h-12 w-full sm:w-60 px-3 py-2 border bg-white border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Project End Date</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="h-12 w-full sm:w-60 px-3 py-2 border bg-white border-gray-300 rounded-md"
          />
        </div>
      </div>

      <div className="border border-dashed border-gray-300 rounded-md h-40 flex flex-col items-center justify-center mb-6 text-center">
        <p className="font-bold text-black mb-2">Gantt Chart</p>
        <p className="text-sm text-black mb-4">Visualize project timeline here</p>
        <button className="px-4 py-2 text-black border border-gray-300 rounded-md hover:bg-gray-100">
          Create Milestone
        </button>
      </div>

      <div className="flex flex-col sm:flex-row justify-end gap-3 mt-6">
        <button
          type="button"
          className="text-sm px-4 py-2 text-gray-600 hover:text-black rounded"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="text-sm bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TimelineMilestone;
