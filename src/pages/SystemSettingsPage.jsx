import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import SystemSettings from '../components/setting and configurations/SystemSettings'
import Footer from '../components/Footer'

const SystemSettingsPage = () => {
  return (
    <div className="h-screen flex flex-col">
            <div className="fixed top-0 left-64 right-0 z-50">
                <Navbar />
            </div>

            <div className="flex flex-1 pt-[64px]">
                <div className="fixed top-0 left-0 bottom-0 w-64 z-40 border-r bg-white">
                    <Sidebar />
                </div>
                <main className="ml-64 flex-1 overflow-y-auto bg-gray-50 p-4 md:p-6">
                    <SystemSettings />
                </main>
            </div>
            <div className="pb-5 bg-gray-50">
                <Footer />
            </div>
        </div>
  )
}

export default SystemSettingsPage