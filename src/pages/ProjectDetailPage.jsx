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
    <div className="bg-gray-50 flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-y-auto">
        {/* Navbar */}
        <div className="sticky top-0 z-50 bg-white shadow">
          <Navbar />
        </div>

        {/* Overview Section */}
        <Overview />

        {/* Main Content */}
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            {/* Left Column */}
            <div className="space-y-6 lg:col-span-2">
              <Description />
              <AIInsights />
              <MilestoneChecklist />
            </div>

            {/* Right Column */}
            <div className="space-y-6 h-full md:h-[400px]">
              <RecentActivity />
              <TeamMembers />
            </div>
          </div>
          <Footer/>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;