import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TaskHeader from '../components/project-task-board/TaskHeader'
import TaskBoard from '../components/project-task-board/TaskBoard'

const TaskBoardPage = () => {
  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar (Fixed for large screens, toggleable for small) */}
      <div className="sm:fixed sm:top-0 sm:left-0 sm:bottom-0 sm:w-64 z-50 border-r bg-white max-sm:hidden">
        <Sidebar />
      </div>

      {/* Main content area */}
      <div className="flex-1 flex flex-col sm:ml-64 max-sm:ml-0">
        {/* Navbar */}
        <div className="fixed top-0 left-0 right-0 z-40 h-16 bg-white border-b">
          <Navbar />
        </div>

        {/* Scrollable page content */}
       <main className="mt-16 flex-1 overflow-y-auto px-4 py-6 sm:px-6 bg-gray-50 max-sm:px-3">
          <TaskHeader />
          <div className="mt-4">
            <TaskBoard />
          </div>
        </main>

        {/* Footer */}
        <div className="pb-5 mt-4 max-sm:px-3">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default TaskBoardPage
