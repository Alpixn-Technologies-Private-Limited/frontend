import React from "react";

const ProjectFooter = () => {
  return (
    <div className="mt-8 flex flex-col items-center justify-center space-y-4 text-sm text-gray-600 dark:text-gray-300">
      
      {/* Pagination buttons */}
      <div className="flex items-center space-x-2">
        <button className="px-2 py-1 rounded bg-gray-200 text-black hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">
          &lt;
        </button>
        <button className="px-3 py-1 rounded bg-gray-200 text-black hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">
          1
        </button>
        <button className="px-3 py-1 rounded bg-indigo-600 text-white dark:bg-indigo-500">
          2
        </button>
        <button className="px-3 py-1 rounded bg-gray-200 text-black hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">
          3
        </button>
        <button className="px-2 py-1 rounded bg-gray-200 text-black hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">
          &gt;
        </button>
      </div>

      {/* Footer text */}
      <div className="text-center">
        <p className="font-medium dark:text-gray-200">
          Terms of Use | Browser and Display Compatibility
        </p>
        <p className="text-xs mt-1 dark:text-gray-400">
          Copyright © 2025 Alpion Technologies Private Limited
        </p>
      </div>
    </div>
  );
};

export default ProjectFooter;
