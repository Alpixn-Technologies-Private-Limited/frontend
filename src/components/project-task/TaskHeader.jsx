import React from "react";
import { FaPlus, FaArrowRight, FaChevronDown } from "react-icons/fa";

const TaskHeader = () => {
  return (
    <div className="w-full px-6 py-3 mb-4">
      <div className="flex justify-end items-center gap-4 flex-wrap">
        
        {/* Dropdown with icon */}
        <div className="relative">
          <select
            className="appearance-none h-10 px-4 pr-10 text-sm font-semibold rounded-md
                      bg-white/70 text-gray-700
                      dark:bg-black/40 dark:text-white dark:backdrop-blur-md
                      border border-gray-300 dark:border-white dark:border-2
                      hover:border-gray-400 dark:hover:border-white/80
                      focus:outline-none shadow-sm"
          >
            <option>Days</option>
            <option>Weeks</option>
            <option>Months</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
            <FaChevronDown
              size={12}
              className="text-indigo-600 dark:text-white"
            />
          </div>
        </div>


        {/* Zoom Section */}
        <div
          className="flex items-center h-10 rounded-md 
                    border border-gray-300 dark:border-white dark:border-2
                    shadow-md
                    bg-white/60 text-gray-700 
                    dark:bg-white/10 dark:text-white 
                    backdrop-blur-lg 
                    overflow-hidden text-sm transition-all"
        >
          <div
            className="px-2 ml-2 rounded-md 
                      border border-gray-300 dark:border-white/60 
                      flex items-center justify-center 
                      hover:bg-gray-100 dark:hover:bg-white/20"
          >
            100%
          </div>
          <div className="px-3 flex items-center justify-center font-semibold">
            Zoom
          </div>
          <div
            className="px-2 mr-0.5 rounded-md 
                      border border-gray-300 dark:border-white/60 
                      flex items-center justify-center 
                      hover:bg-gray-100 dark:hover:bg-white/20"
          >
            <button className="flex justify-center items-center text-indigo-600 dark:text-white">
              +
            </button>
          </div>
          <div
            className="px-2 mr-2 rounded-md 
                      border border-gray-300 dark:border-white/60 
                      flex items-center justify-center 
                      hover:bg-gray-100 dark:hover:bg-white/20"
          >
            <button className="flex justify-center items-center text-indigo-600 dark:text-white">
              −
            </button>
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