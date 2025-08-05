import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../utils/axios';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Overview from '../components/ProjectDetail/Overview';
import Description from '../components/ProjectDetail/Description';
import AIInsights from '../components/ProjectDetail/AIInsights';
import MilestoneChecklist from '../components/ProjectDetail/MilestoneChecklist';
import RecentActivity from '../components/ProjectDetail/RecentActivity';
import TeamMembers from '../components/ProjectDetail/TeamMembers';
import Footer from '../components/Footer';
import DummyProjectData from '../data/DummyProjectData';

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await axios.get(`/projects/${id}`);
        setProject(res.data?.data);
      } catch (err) {
        console.warn("Backend down, using dummy data");
        const dummy = DummyProjectData.find(p => p.id === parseInt(id));
        setProject(dummy);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  return (
    <div className="h-screen flex bg-gray-50 flex-col">
      {/* Sidebar */}
      <div className="fixed top-0 left-0 bottom-0 w-64 max-sm:w-0 z-50 border-r bg-white">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col ml-64 max-sm:ml-0">
        {/* Navbar */}
        <div className="fixed top-0 left-64 right-0 z-40 h-16 max-sm:left-0 bg-white border-b">
          <Navbar />
        </div>

        {/* Scrollable Content Area */}
        <div className="pt-16 px-4 md:px-6 pb-6 flex-1">
          {loading ? (
            <div className="flex items-center justify-center h-full">
              <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-indigo-500 border-solid"></div>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <Overview project={project} />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
                <div className="space-y-6 lg:col-span-2">
                  <Description project={project} />
                  <AIInsights project={project} />
                  <MilestoneChecklist project={project} />
                </div>

                <div className="space-y-6 w-full md:max-w-sm">
                  <RecentActivity project={project} />
                  <TeamMembers project={project} />
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="px-4 md:px-6 py-4 bg-gray-50 mt-auto">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
