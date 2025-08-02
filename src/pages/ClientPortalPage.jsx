import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import ClientProjectOverview from '../components/clientPortal/ClientProjectOverview'

const ClientPortalPage = () => {
  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <div className="fixed top-0 left-0 bottom-0 w-64 z-50 border-r bg-white max-sm:hidden">
        <Sidebar />
      </div>

      {/* Main content area */}
      <div className="flex-1 flex flex-col ml-64 max-sm:ml-0">
        {/* Navbar */}
        <div className="fixed top-0 left-64 right-0 z-40 h-16 max-sm:left-0 bg-white border-b">
          <Navbar />
        </div>

        {/* Scrollable content */}
        <div className="pt-16 px-4 md:px-6 flex-1">
          <ClientProjectOverview />
        </div>

        {/* Footer always at the bottom */}
        <div className="px-4 md:px-6 py-4 bg-gray-50">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default ClientPortalPage
