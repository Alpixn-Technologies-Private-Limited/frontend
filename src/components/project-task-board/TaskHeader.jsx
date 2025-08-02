import React from 'react';
import { Filter, Plus, ChevronDown } from 'lucide-react';

const TaskHeader = () => {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mt-6 mb-6">
      
      {/* Left: Heading + Dropdown */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-2 flex-wrap">
        <h2 className="text-xl font-semibold text-gray-800">
          24 Tasks Found
        </h2>

        {/* Dropdown */}
        <div className="relative w-full sm:w-auto">
          <select
            className="appearance-none border border-gray-300 rounded-md px-3 py-[6px] text-sm pr-8 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-[#5b4ef2]"
          >
            <option>Latest</option>
            <option>Oldest</option>
            <option>Priority</option>
          </select>
          <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
        </div>
      </div>

      {/* Right: Tabs + Buttons */}
      <div className="flex flex-wrap gap-2 items-center justify-start md:justify-end">
        
        {/* View Tabs */}
        <div className="flex border border-gray-300 rounded-lg overflow-hidden text-sm font-medium">
          <button className="px-4 py-[6px] bg-[#5b4ef2] text-white">Kanban</button>
          <button className="px-4 py-[6px] text-gray-700 hover:bg-gray-100">List</button>
          <button className="px-4 py-[6px] text-gray-700 hover:bg-gray-100">Calendar</button>
        </div>

        {/* Filter */}
        <button className="flex items-center gap-1 border border-gray-300 px-3 py-[6px] rounded-md text-sm text-gray-700 hover:bg-gray-100">
          <Filter className="w-4 h-4" />
        </button>

        {/* New Task */}
        <button className="flex items-center gap-2 bg-gradient-to-r from-[#5b4ef2] to-[#c9a700] text-white px-4 py-[6px] rounded-md text-sm font-medium hover:opacity-90 transition">
          <Plus className="w-4 h-4" />
          New Task
        </button>
      </div>
    </div>
  );
};

export default TaskHeader;
