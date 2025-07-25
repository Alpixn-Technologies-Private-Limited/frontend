import React from 'react'

const ProjectSetupForm = () => {
  return (
    <div className="bg-gray-200 rounded shadow p-6 mt-6">
            <h3 className="text-lg font-semibold text-black mb-4">Project Setup</h3>
            <p className="text-sm text-gray-500 mb-6">Follow the steps below to configure your project.</p>

            {/* Tab Header */}
            <div className="flex gap-4 text-sm font-medium border-b border-gray-200 mb-6 overflow-x-auto">
              {["Basic Information", "Client Selection", "Team Assignment", "Timeline & Milestones", "Project Template", "AI Configuration"].map((tab, i) => (
                <button
                  key={i}
                  className={`pb-2 ${i === 0 ? "border-b-2 border-black text-black" : "text-gray-500 hover:text-black"}`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Basic Info Form */}
            <form className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-1">
                  Project Name (Max 50 characters)
                </label>
                <input
                  type="text"
                  placeholder="Enter project name"
                  maxLength={50}
                  className="w-100 h-15 border-none bg-white rounded px-3 py-2 text-sm"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 block mb-1">Project Description</label>
                <input
                  rows={4}
                  className="w-100 h-35 border-none bg-white rounded px-3 py-2 text-sm"
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
            </form>
          </div>
  )
}

export default ProjectSetupForm