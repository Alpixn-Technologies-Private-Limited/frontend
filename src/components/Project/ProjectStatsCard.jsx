import React from "react";

const ProjectStatsCard = ({ title, value, subtitle, icon, change, changeColor }) => {
  return (
    <div
      className="bg-white/70 dark:bg-[#1a1a1a]/40 dark:backdrop-blur-md
                 border border-gray-200 dark:border-white/10
                 rounded-xl p-4 sm:p-5 shadow-sm
                 transition-all hover:shadow-lg hover:-translate-y-1"
    >
      {/* Icon */}
      <div className="text-2xl mb-2">{icon}</div>

      {/* Value */}
      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
        {value}
      </h3>

      {/* Title + Subtitle */}
      <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
        {title} {subtitle && `- ${subtitle}`}
      </p>

      {/* Change Indicator */}
      <p className={`text-xs mt-2 ${changeColor}`}>{change}</p>
    </div>
  );
};

export default ProjectStatsCard;
