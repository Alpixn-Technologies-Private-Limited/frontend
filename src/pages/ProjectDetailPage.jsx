import React from 'react'
import Overview from '../components/ProjectDetail/Overview'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import ProjectFooter from '../components/Project/ProjectFooter'

const ProjectDetail = () => {
    const {id} = useParams();
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <div className="sticky top-0 z-50 bg-white shadow">
          <Navbar />
        </div>
        <Overview/>
       </div>
    </div>
  )
}

export default ProjectDetail