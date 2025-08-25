import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import ClientProjectOverview from '../components/clientPortal/ClientProjectOverview'

const ClientPortalPage = () => {
  return (
    <div className="min-h-screen flex bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <div className="fixed top-0 left-0 bottom-0 w-64 max-sm:w-0 z-50 border-r bg-white dark:bg-gray-800 dark:border-gray-700">
        <Sidebar />
      </div>

      {/* Main content area */}
      <div className="flex-1 flex flex-col ml-64 max-sm:ml-0">
        {/* Navbar */}
        <div className="fixed top-0 left-64 right-0 z-40 h-16 max-sm:left-0 bg-white dark:bg-gray-800 border-b dark:border-gray-700">
          <Navbar />
        </div>

        {/* Scrollable content */}
        <div className="pt-16 px-4 md:px-6 flex-1 text-gray-900 dark:text-gray-100">
          <ClientProjectOverview />
        </div>

        {/* Footer */}
        <div className="px-4 md:px-6 py-4 bg-gray-50 dark:bg-gray-900 dark:border-gray-700 text-gray-600 dark:text-gray-400">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default ClientPortalPage
