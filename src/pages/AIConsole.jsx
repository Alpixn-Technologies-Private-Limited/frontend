import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import AiConsoleDashboard from '../components/aiConsole/AiConsoleDashboard'

const AIConsole = () => {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gray-50">
        <Navbar />
        <div className="flex-1 overflow-y-auto py-6 px-3">
          <AiConsoleDashboard/>
        </div>
      </div>
    </div>
  )
}

export default AIConsole
