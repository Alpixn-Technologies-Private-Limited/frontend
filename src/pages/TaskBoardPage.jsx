import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TaskHeader from '../components/project-task-board/TaskHeader'
import TaskBoard from '../components/project-task-board/TaskBoard'

const TaskBoardPage = () => {
  return (
    <div
      className="min-h-screen flex 
                 bg-gray-50 
                 dark:bg-gradient-to-r dark:from-[#241f53] dark:via-[#0d0130] dark:to-[#2b1a76]"
    >
      {/* Sidebar (Fixed for large screens, toggleable for small) */}
      <div
        className="fixed top-0 left-0 bottom-0 w-64 max-sm:w-0 z-50 
                   border-r border-gray-200 dark:border-gray-700 
                   bg-white dark:bg-[#0f172a]"
      >
        <Sidebar />
      </div>

      {/* Main content area */}
      <div
        className="flex-1 flex flex-col sm:ml-64 max-sm:ml-0 
                   bg-gray-50 
                   dark:bg-gradient-to-r dark:from-[#241f53] dark:via-[#0d0130] dark:to-[#2b1a76]"
      >
        {/* Navbar */}
        <div
          className="fixed top-0 left-64 right-0 z-40 h-16 max-sm:left-0 
                     bg-white dark:bg-[#0f172a] 
                     border-b border-gray-200 dark:border-gray-700"
        >
          <Navbar />
        </div>

        {/* Scrollable page content */}
        <main className="mt-16 flex-1 overflow-y-auto px-4 py-6 sm:px-6 max-sm:px-3 text-gray-800 dark:text-gray-100">
          <TaskHeader />
          <div className="mt-4">
            <TaskBoard />
          </div>
        </main>

        {/* Footer */}
        <div
          className="px-4 md:px-6 py-4 
                     bg-gray-50 
                     dark:bg-gradient-to-r dark:from-[#241f53] dark:via-[#0d0130] dark:to-[#2b1a76] 
                     border-gray-200 dark:border-gray-700"
        >
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default TaskBoardPage
