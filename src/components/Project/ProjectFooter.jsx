import React from "react";

const ProjectFooter = () => {
  return (
    <div className="mt-8 flex flex-col items-center justify-center space-y-4 text-sm text-gray-600">

      <div className="flex items-center space-x-2">
        <button className="px-2 py-1 rounded bg-gray-200 text-black hover:bg-gray-300">&lt;</button>
        <button className="px-3 py-1 rounded bg-gray-200 text-black hover:bg-gray-300">1</button>
        <button className="px-3 py-1 rounded bg-indigo-600 text-white">2</button>
        <button className="px-3 py-1 rounded bg-gray-200 text-black hover:bg-gray-300">3</button>
        <button className="px-2 py-1 rounded bg-gray-200 text-black hover:bg-gray-300">&gt;</button>
      </div>

      <div className="text-center">
        <p className="font-medium">
          Terms of Use | Browser and Display Compatibility
        </p>
        <p className="text-xs mt-1">
          Copyright © 2025 Alpion Technologies Private Limited
        </p>
      </div>
    </div>
  );
};

export default ProjectFooter;
