import React from 'react';
import { AiFillAlert } from 'react-icons/ai';
import { MdOutlineAccessTime } from 'react-icons/md';
import { FaChartLine } from 'react-icons/fa';
import { RiFlag2Fill } from 'react-icons/ri';

import riskGraph from '../../assets/graphs/risk-alert.png';
import deadlineGraph from '../../assets/graphs/deadline-prediction.png';
import performanceGraph from '../../assets/graphs/performance-insight.png';
import milestoneGraph from '../../assets/graphs/milestone-progress.png';

const AIInsights = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow space-y-4 mt-4">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">AI Insights</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Risk Alert */}
        <div className="border border-gray-200 shadow rounded-lg p-4">
          <div className="flex items-center gap-2 text-red-600 font-semibold text-sm mb-1">
            <AiFillAlert className="text-lg" /> Risk Alert
          </div>
          <p className="text-sm font-bold text-black">3 Projects at Risk</p>
          <p className="text-xs text-gray-500 mt-1">Delayed timelines likely</p>
          <img src={riskGraph} alt="Risk Chart" className="w-full h-16 object-contain mt-2" />
        </div>

        {/* Deadline Prediction */}
        <div className="border border-gray-200 shadow rounded-lg p-4">
          <div className="flex items-center gap-2 text-yellow-600 font-semibold text-sm mb-1">
            <MdOutlineAccessTime className="text-lg" /> Deadline Prediction
          </div>
          <p className="text-sm font-bold text-black">Delta Project Late</p>
          <p className="text-xs text-gray-500 mt-1">May miss July 15 deadline</p>
          <img src={deadlineGraph} alt="Deadline Chart" className="w-full h-16 object-contain mt-2" />
        </div>

        {/* Performance Insight */}
        <div className="border border-gray-200 shadow rounded-lg p-4">
          <div className="flex items-center gap-2 text-green-600 font-semibold text-sm mb-1">
            <FaChartLine className="text-lg" /> Performance Insight
          </div>
          <p className="text-sm font-bold text-black">+8% Revenue/Employee</p>
          <p className="text-xs text-gray-500 mt-1">Based on past 30 days</p>
          <img src={performanceGraph} alt="Performance Chart" className="w-full h-16 object-contain mt-2" />
        </div>

        {/* Milestone Progress */}
        <div className="border border-gray-200 shadow rounded-lg p-4">
          <div className="flex items-center gap-2 text-indigo-600 font-semibold text-sm mb-1">
            <RiFlag2Fill className="text-lg" /> Milestone Progress
          </div>
          <p className="text-sm font-bold text-black">Beta Launch</p>
          <p className="text-xs text-gray-500 mt-1">May miss July 15 deadline</p>
          <img src={milestoneGraph} alt="Milestone Chart" className="w-full h-16 object-contain mt-2" />
        </div>
      </div>
    </div>
  );
};

export default AIInsights;