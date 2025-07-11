import React from "react";
import dropdown from "../../assets/downArrow.png";
import gridMenu from "../../assets/grid.png";
import lineMenu from "../../assets/menu.png";
import add from "../../assets/add.png";
import client from "../../assets/client.png";

const ProjectHeader = ({ onViewChange, view }) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <div>
        <button className="flex items-center bg-gray-100 text-sm text-gray-700 px-4 py-2 rounded-md border hover:bg-gray-200 transition">
          Filters
          <img className="ml-2 h-4 w-4" src={dropdown} />
        </button>
      </div>

      <div className="flex justify-end items-center space-x-1">
        {/* Grid / List View Toggle */}
        <div className="flex items-center space-x-0.5">
          <button
            className={`flex items-center px-3 py-2 rounded ${
              view === "grid" ? "bg-indigo-600" : "bg-gray-100"
            }`}
            onClick={() => onViewChange("grid")}
          >
            <img className="h-5 w-5" src={gridMenu} />
          </button>

          <button
            className={`flex items-center px-3 py-2 rounded ${
              view === "list" ? "bg-indigo-600" : "bg-gray-100"
            }`}
            onClick={() => onViewChange("list")}
          >
            <img className="h-5 w-5" src={lineMenu} />
          </button>
        </div>

        <div className="flex items-center space-x-3">
          <button className="flex items-center text-white text-sm font-medium px-4 py-2 rounded-md shadow bg-gradient-to-r from-indigo-600 via-purple-500 to-yellow-500">
            <img className="h-4 w-5 mr-2" src={add} />
            New Project
          </button>

          <button className="flex items-center text-gray-800 text-sm font-medium px-4 py-2 rounded-md shadow bg-white border hover:bg-gray-50 transition">
            <img className="h-4 w-5" src={client} alt="" />
            New Client
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectHeader;
