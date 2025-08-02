import React from 'react';

const BasicInformation = () => {
  return (
    <form className="space-y-4 px-4 sm:px-0">
      {/* Project Name */}
      <div>
        <label htmlFor="projectName" className="block text-sm font-medium text-gray-700">
          Project Name (Max 50 characters)
        </label>
        <input
          type="text"
          id="projectName"
          name="projectName"
          maxLength={50}
          placeholder="Enter project name"
          className="mt-1 block h-12 w-full sm:w-100 px-3 py-2 border bg-white border-gray-300 rounded-md shadow-sm text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Project Description */}
      <div>
        <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-700">
          Project Description
        </label>
        <textarea
          id="projectDescription"
          name="projectDescription"
          rows={4}
          placeholder="Enter project description"
          className="mt-1 block h-40 w-full sm:w-100 px-3 py-2 border bg-white border-gray-300 rounded-md shadow-sm text-sm resize-none focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-end gap-3 mt-6">
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
    </form>
  );
};

export default BasicInformation;
