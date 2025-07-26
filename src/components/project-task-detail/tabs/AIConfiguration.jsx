import React from 'react';

const AIConfiguration = () => {
  return (
    <div className="p-6">
      {/* Section Heading */}
      <h4 className="text-lg font-semibold mb-6">AI Configuration</h4>

      {/* Purple Gradient Block */}
      <div className="bg-gradient-to-r from-purple-400 to-indigo-500 text-white px-4 py-4 rounded-lg mb-8">
        <div className="flex items-center justify-between">
          <span className="font-medium text-sm">AI Suggestions</span>
          <div className="relative inline-block w-10 align-middle select-none">
            <div className="bg-white w-10 h-5 rounded-full shadow-inner"></div>
            <div className="absolute w-4 h-4 bg-purple-600 rounded-full top-0.5 left-5 transition"></div>
          </div>
        </div>
        <p className="text-xs mt-2 text-white opacity-90">Enable AI suggestions for task management</p>
      </div>

      {/* Static Line for AI Parameter */}
      <div className="mb-10 flex items-center gap-4">
        <label className="text-sm font-medium text-gray-700 whitespace-nowrap">
            AI Parameter 1
        </label>
        <div className="flex items-center w-full gap-2">
            <div className="flex ml-130 w-100 h-1 rounded overflow-hidden">
                <div className="bg-black w-50"></div>
                <div className="bg-gray-300 w-50"></div> 
            </div>
            <span className="text-sm text-gray-700">50</span>
        </div>
      </div>

      {/* Textareas One Below Another */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Customize AI Automation
        </label>
        <input
          rows={4}
          className="h-35 w-120 px-3 py-2 border bg-white border-gray-300 rounded-md"
        />
      </div>

      <div className="mb-10">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Rules for Task Assignment and Prioritization
        </label>
        <input
          rows={4}
          className="h-35 w-120 px-3 py-2 border bg-white border-gray-300 rounded-md"
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-4">
        <button className="text-sm text-gray-600 hover:text-black px-4 py-2 rounded">
          Cancel
        </button>
        <button className="text-sm bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700">
          Next
        </button>
      </div>
    </div>
  );
};

export default AIConfiguration;
