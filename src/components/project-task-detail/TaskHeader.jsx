import React from 'react'
import {
  PencilSquareIcon,
  CalendarDaysIcon,
} from '@heroicons/react/24/outline';

const TaskHeader = () => {
  return (
    <div className="bg-gray-200 rounded-lg shadow p-6 flex flex-col lg:flex-row gap-6">
                {/* LEFT PANEL */}
                <div className="flex-1">
                  {/* Breadcrumb */}
                  <div className="text-sm text-gray-500 mb-2">
                    Projects / <span className="text-black font-medium">Project Alpha</span>
                  </div>
    
                  {/* Title */}
                  <div className="flex items-start justify-between">
                    <h2 className="text-xl font-semibold text-gray-800 mb-1">
                      Task: Develop User Authentication Module
                    </h2>
                    <PencilSquareIcon className="w-5 h-5 text-gray-400 cursor-pointer hover:text-gray-600" />
                  </div>
                  <p className="text-sm text-gray-500 mb-4">
                    Assigned to: <span className="text-blue-600 font-medium">Sarah Chen</span> | Due: <span className="text-gray-700">July 15, 2024</span>
                  </p>
    
                  {/* Description */}
                  <div className="mb-6">
                    <h3 className="font-semibold mb-2">Description</h3>
                    <p className="text-sm text-gray-700">
                      Develop a secure and efficient user authentication module for the application, including registration, login, password reset, and account management functionalities.
                    </p>
                  </div>
    
                  {/* Subtasks */}
                  <div className="mb-6">
                    <h3 className="font-semibold mb-2">Subtasks</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li><input type="checkbox" className="mr-2" /> Implement user registration API</li>
                      <li><input type="checkbox" className="mr-2" /> Develop login and logout functionality</li>
                      <li><input type="checkbox" className="mr-2" /> Create password reset flow</li>
                    </ul>
                  </div>
    
                  {/* Comments */}
                  <div className="mb-6">
                    <h3 className="font-semibold mb-2">Comments</h3>
                    <div className="flex items-start gap-3">
                      <img src="https://i.pravatar.cc/40" alt="avatar" className="w-8 h-8 rounded-full" />
                      <div>
                        <p className="text-sm"><span className="font-medium">David Lee</span> • 2 days ago</p>
                        <p className="text-sm text-gray-700 mt-1">Let’s schedule a quick sync to discuss the API endpoints.</p>
                      </div>
                    </div>
                  </div>
    
                  {/* Activity Timeline */}
                  <div>
                    <h3 className="font-semibold mb-2">Activity Timeline</h3>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>📌 Task created — <span className="text-gray-500">June 1, 2024</span></li>
                      <li>👤 Assigned to Sarah Chen — <span className="text-gray-500">June 1, 2024</span></li>
                      <li>📅 Due date set to July 15, 2024 — <span className="text-gray-500">June 2, 2024</span></li>
                    </ul>
                  </div>
                </div>
    
                {/* RIGHT PANEL */}
                <div className="w-full lg:w-[300px] bg-gray-300 rounded shadow p-4 flex flex-col gap-4">
                  {/* Status */}
                  <div>
                    <p className="text-sm font-medium text-black mb-1">Status</p>
                    <div className="text-xs px-8 py-1 rounded bg-white text-yellow-500">In Progress</div>
                  </div>
    
                  {/* Assignee */}
                  <div>
                    <p className="text-sm font-medium text-black mb-1">Assignee</p>
                    <input type="text" className="w-full bg-white px-8 py-1 rounded text-sm" />
                  </div>
    
                  {/* Due Date */}
                  <div>
                    <p className="text-sm font-medium text-black mb-1">Due Date</p>
                    <div className="relative">
                      <CalendarDaysIcon className="w-4 h-4 absolute left-2 top-2.5 text-black" />
                      <input type="date" value="2025-07-10" className="w-full bg-white pl-8 py-1 rounded text-sm" />
                    </div>
                  </div>
    
                  {/* Priority */}
                  <div>
                    <p className="text-sm font-medium text-black mb-1">Priority</p>
                    <input type="text" className="w-full bg-white px-8 py-1 rounded text-sm" />
                  </div>
    
                  {/* Labels */}
                  <div>
                    <p className="text-sm font-medium text-black mb-1">Labels</p>
                    <div className="flex gap-2 flex-wrap">
                      <span className="bg-blue-100 text-gray-800 px-2 py-1 rounded text-xs">Backend</span>
                      <span className="bg-blue-100 text-gray-800 px-2 py-1 rounded text-xs">Authentication</span>
                    </div>
                  </div>
    
                  {/* Time Tracking */}
                  <div>
                    <p className="text-sm font-medium text-black mb-1">Time Tracking</p>
                    <p className="text-sm text-gray-700">0 hours logged</p>
                    <button className="bg-blue-100 text-gray-800 px-2 py-1 rounded text-xs flex items-center mt-2 gap-1">
                      Start Timer
                    </button>
                  </div>
    
                  {/* Dependencies */}
                  <div>
                    <p className="text-sm font-medium text-black mb-1">Dependencies</p>
                    <p className="text-sm text-gray-700">None</p>
                  </div>
    
                  {/* AI Suggestions */}
                  <div className="bg-blue-100 border-none rounded p-3">
                    <p className="text-sm font-medium text-black mb-1">AI Suggestions</p>
                    <div className="text-xs">
                      Consider using OAuth 2.0 for enhanced security.
                    </div>
                  </div>
                </div>
              </div>
  )
}

export default TaskHeader