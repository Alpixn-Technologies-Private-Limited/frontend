import React from 'react'
import { FileEdit, Check, X } from 'lucide-react'

const ClientProjectOverview = () => {
  return (
    <div className="w-full p-4 md:p-8 bg-[#f9fafb] min-h-[calc(100vh-64px-60px)]">
      {/* Breadcrumb */}
      <p className="text-sm text-gray-500 mb-2">
        Dashboard &gt; Clients &gt;{' '}
        <span className="text-sm">Clients Project Overview</span>
      </p>

      {/* Page Heading */}
      <div className="mb-4">
        <div className="flex items-center gap-2">
          <FileEdit className="w-5 h-5 text-[#5b3df1]" />
          <h2 className="text-xl font-semibold text-[#5b3df1]">
            Website Redesign Project
          </h2>
        </div>
      </div>

      {/* Main White Card Section */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mt-1">
          <p className="font-medium text-black">Project Progress</p>
          <p className="text-sm font-medium text-[#5b3df1]">65%</p>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-3 bg-gray-200 rounded-full mt-2 mb-4">
          <div
            className="h-3 bg-[#5b3df1] rounded-full transition-all duration-500"
            style={{ width: '65%' }}
          ></div>
        </div>

        {/* Timeline */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4 text-gray-800">Timeline</h2>
          <div className="space-y-6">
            {/* Item 1 */}
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 mt-1 rounded-full bg-[#5b3df1]"></div>
              <div>
                <p className="font-medium text-gray-900">Project Kickoff</p>
                <p className="text-sm text-gray-600">
                  Initial meeting and requirement gathering
                </p>
                <p className="text-sm text-[#5b3df1a0] mt-1">
                  Completed on <span>June 15, 2025</span>
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 mt-1 rounded-full border-2 border-[#5b3df1] bg-white"></div>
              <div>
                <p className="font-medium text-gray-900">Design Phase</p>
                <p className="text-sm text-gray-600">UI/UX design and prototyping</p>
                <p className="text-sm text-[#5b3df1a0] mt-1">In Progress - due June 30, 2025</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 mt-1 rounded-full border border-gray-400 bg-white"></div>
              <div>
                <p className="font-medium text-gray-900">Development</p>
                <p className="text-sm text-gray-600">Frontend and backend implementation</p>
                <p className="text-sm text-[#5b3df1a0] mt-1">Starting July 1, 2025</p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Deliverables */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-gray-800">Key Deliverables</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Deliverable 1 */}
            <div className="border border-gray-300 rounded-xl p-4 bg-white shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold text-gray-700">Homepage Design</span>
                <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">completed</span>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Final homepage design with responsive layouts
              </p>
              <div className="flex items-center gap-2">
                <img
                  src="https://i.pinimg.com/564x/c7/4c/78/c74c78c049af7061319694743ccb0f8e.jpg"
                  alt="Varun Bhatt"
                  className="w-8 h-8 rounded-full"
                />
                <p className="text-sm text-gray-700">Varun Bhatt</p>
              </div>
            </div>

            {/* Deliverable 2 */}
            <div className="border border-gray-300 rounded-xl p-4 bg-white shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold text-gray-700">User Dashboard</span>
                <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded-full">In Review</span>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Interactive dashboard with data visualization
              </p>
              <div className="flex items-center gap-2">
                <img
                  src="https://i.pinimg.com/564x/c7/4c/78/c74c78c049af7061319694743ccb0f8e.jpg"
                  alt="Varun Bhatt"
                  className="w-8 h-8 rounded-full"
                />
                <p className="text-sm text-gray-700">Varun Bhatt</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Communication, Approvals, Feedback */}
      {/* Communication Thread */}
        <div className="bg-white rounded-xl mt-8 shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Communication Thread</h2>
            <div className="flex items-start gap-4">
                <img
                    src="https://i.pinimg.com/564x/c7/4c/78/c74c78c049af7061319694743ccb0f8e.jpg"
                    alt="Varun Bhatt"
                    className="w-10 h-10 rounded-full"
                />
                <div>
                    <p className="font-semibold text-sm">Varun Bhatt <span className="text-sm text-gray-500 ml-2">2 hours ago</span></p>
                    <p className="text-sm text-gray-700 mt-3">Updated the homepage design based on client feedback. Please review the latest changes.</p>
                    <div className="text-sm mt-6 space-x-4">
                        <button className='text-[#5b3df1]'>Reply</button>
                        <button>Like</button>
                    </div>
                </div>
            </div>
        </div>

        {/* Approvals Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {/* Pending Approvals */}
            <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-lg font-semibold mb-4">Pending Approvals</h2>
                <div className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Homepage Design V2</h3>
                    <p className="text-sm text-gray-600 mb-9">Updated design with new hero section</p>
                    <div className="flex justify-center gap-20">
                        <button className="bg-[#5b3df1] text-white px-4 py-1.5 rounded-md text-sm hover:bg-[#5b3df1e0]">Approve</button>
                        <button className="border border-[#5b3df1] text-[#5b3df1] px-4 py-1.5 rounded-md text-sm hover:bg-gray-100">Reject</button>
                    </div>
                </div>
        </div>

        {/* Approval History */}
        {/* Approval History */}
        <div className="bg-white rounded-xl shadow-sm p-6">
  <h2 className="text-lg font-semibold mb-4">Approval History</h2>

  <div className="space-y-6 text-sm text-gray-700">
    {/* Approved Item */}
    <div className="flex items-start justify-between">
      <div className="flex gap-3">
        <div className="w-6 h-6 bg-green-100 text-green-700 flex items-center justify-center rounded-full">
          <Check className="w-4 h-4" />
        </div>
        <div>
          <p className="font-semibold text-gray-900">Homepage Design V2</p>
          <p className="text-xs text-gray-600 mb-1">Approved by Pooja</p>
          <p className="text-sm text-gray-600">Great work on the initial design. The colour scheme matches our brand perfectly</p>
        </div>
      </div>
      <p className="text-sm text-gray-500 min-w-max">June 25, 2025</p>
    </div>

    {/* Rejected Item */}
    <div className="flex items-start justify-between">
      <div className="flex gap-3">
        <div className="w-6 h-6 bg-red-100 text-red-700 flex items-center justify-center rounded-full">
          <X className="w-4 h-4" />
        </div>
        <div>
          <p className="font-semibold text-gray-900">Use flow Diagrams</p>
          <p className="text-xs text-gray-600 mb-1">Rejected by Pooja</p>
          <p className="text-sm text-gray-600">Need to simplify the checkout process. Too many steps involved.</p>
        </div>
      </div>
      <p className="text-sm text-gray-500 min-w-max">June 22, 2025</p>
    </div>
  </div>
</div>

        </div>

        {/* Submit Feedback */}
        <div className="bg-white rounded-xl shadow-sm p-6 mt-8">
            <h2 className="text-lg font-semibold mb-4">Submit Feedback</h2>
            <textarea
                placeholder="Type your feedback here..."
                className="w-full border rounded-lg p-3 text-sm resize-none mb-4"
                rows={4}
            ></textarea>
            <div className="flex items-center justify-between">
                <label className="flex items-center text-sm text-gray-600">
                    <input type="checkbox" className="mr-2" />
                        Attach File
                </label>
                <button className="bg-indigo-600 font-medium text-white px-4 py-2 rounded-md text-sm hover:bg-indigo-700">Send feedback</button>
            </div>
        </div>

    </div>
  )
}

export default ClientProjectOverview
