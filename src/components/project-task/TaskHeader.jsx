import React from "react";
import { FaPlus, FaArrowRight, FaChevronDown } from "react-icons/fa";

const TaskHeader = () => {
  return (
    <div className="w-full px-6 py-3 mb-4">
      <div className="flex justify-end items-center gap-4 flex-wrap">
        
        {/* Dropdown with icon */}
        <div className="relative">
          <select className="appearance-none h-10 px-4 pr-10 text-sm font-semibold rounded-md border border-gray-300 shadow-sm bg-white text-gray-700 hover:border-gray-400 focus:outline-none">
            <option>Days</option>
            <option>Weeks</option>
            <option>Months</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500">
            <FaChevronDown size={12} className="text-indigo-600" />
          </div>
        </div>

        {/* Zoom Section */}
        <div className="flex items-center h-10 rounded-md border border-gray-300 shadow-sm bg-white overflow-hidden text-sm text-gray-700">
          <div className="px-2 ml-2 rounded-md border border-gray-300 flex items-center justify-center hover:bg-gray-100">100%</div>
          <div className="px-3 flex items-center justify-center font-semibold">Zoom</div>
          <div className="px-2 mr-0.5 rounded-md border border-gray-300 flex items-center justify-center hover:bg-gray-100">
            <button className="flex justify-center items-center text-indigo-600">+</button>
          </div>
          <div className="px-2 mr-2 rounded-md border border-gray-300 flex items-center justify-center hover:bg-gray-100">
            <button className="flex justify-center items-center text-indigo-600">−</button>
          </div>
        </div>

        {/* New Task Button */}
        <button className="flex items-center gap-2 h-10 text-white text-sm font-medium px-4 rounded-md shadow bg-gradient-to-r from-indigo-600 via-purple-500 to-yellow-500">
          <FaPlus size={15} />
          New Task
        </button>

        {/* Export Button */}
        <button className="flex items-center gap-2 h-10 text-sm font-medium px-4 rounded-md border border-gray-300 shadow-sm bg-white text-black hover:bg-gray-100 ">
          <FaArrowRight size={14} />
          Export
        </button>

      </div>
    </div>
  );
};

export default TaskHeader;