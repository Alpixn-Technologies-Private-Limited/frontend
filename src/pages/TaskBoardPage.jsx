import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TaskHeader from '../components/project-task-board/TaskHeader'
import TaskBoard from '../components/project-task-board/TaskBoard'

const TaskBoardPage = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden bg-gray-50">
        <Navbar />
        <div className="flex-1 overflow-y-auto p-6">
          <TaskHeader />
          <div className="text-gray-400 italic">
            <TaskBoard/>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default TaskBoardPage
