import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import ClientsList from '../components/client/ClientsList'
const ClientsListPage = () => {
  return (
    <div className="h-screen flex flex-col">
      <div className="fixed top-0 left-64 right-0 z-40 max-sm:left-0">
        <Navbar />
      </div>

      <div className="flex flex-1 pt-[64px]">
        <div className="fixed top-0 left-0 bottom-0 w-64 max-sm:w-0 z-50 border-r bg-white">
          <Sidebar />
        </div>
        <main className="ml-64 max-sm:ml-0 flex-1 overflow-y-auto bg-gray-50 p-4 md:p-6 max-sm:p-1 max-sm:mx-auto max-sm:w-full">
          <ClientsList />
        </main>
      </div>
      {/* <div className="pb-5 bg-gray-50 ml-64 max-sm:ml-0 max-sm:px-3">
        <Footer />
      </div> */}
    </div>
  )
}

export default ClientsListPage