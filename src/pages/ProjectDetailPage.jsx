import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Overview from '../components/ProjectDetail/Overview';
import Description from '../components/ProjectDetail/Description';
import AIInsights from '../components/ProjectDetail/AIInsights';
import MilestoneChecklist from '../components/ProjectDetail/MilestoneChecklist';
import RecentActivity from '../components/ProjectDetail/RecentActivity';
import TeamMembers from '../components/ProjectDetail/TeamMembers';
import Footer from '../components/Footer';

const ProjectDetail = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar (fixed on desktop, hidden on mobile) */}
      <div className="fixed top-0 left-0 bottom-0 w-64 z-50 border-r bg-white max-sm:hidden">
        <Sidebar />
      </div>

      {/* Main content area */}
      <div className="flex-1 flex flex-col ml-64 max-sm:ml-0">
        {/* Navbar (fixed) */}
        <div className="fixed top-0 left-64 right-0 z-40 h-16 max-sm:left-0 bg-white border-b">
          <Navbar />
        </div>

        {/* Scrollable Content */}
        <div className="pt-16 px-4 md:px-6 pb-6 flex-1">
          {/* Overview Section with margin bottom */}
          <div className="mb-6">
            <Overview />
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            {/* Left Column */}
            <div className="space-y-6 lg:col-span-2">
              <Description />
              <AIInsights />
              <MilestoneChecklist />
            </div>

            {/* Right Column */}
            <div className="space-y-6 w-full md:max-w-sm">
              <RecentActivity />
              <TeamMembers />
            </div>
          </div>
        </div>

        {/* Footer always at the bottom */}
        <div className="px-4 md:px-6 py-4 bg-gray-50 mt-auto">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
