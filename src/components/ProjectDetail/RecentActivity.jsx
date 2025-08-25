import React from "react";
import {
  BsCheckCircle,
  BsPersonPlus,
  BsLink45Deg,
  BsPencilSquare,
} from "react-icons/bs";

const activities = [
  {
    icon: <BsCheckCircle className="text-green-500 text-xl" />,
    bg: "bg-green-100 dark:bg-green-500/20",
    title: "Project Apollo marked complete",
    desc: "Final milestone reached successfully",
  },
  {
    icon: <BsPersonPlus className="text-blue-500 text-xl" />,
    bg: "bg-blue-100 dark:bg-blue-500/20",
    title: "Client Zenspace added",
    desc: "Client profile created in CRM",
  },
  {
    icon: <BsLink45Deg className="text-red-500 text-xl" />,
    bg: "bg-red-100 dark:bg-red-500/20",
    title: "File uploaded to Project Vega",
    desc: "New document shared with the team",
  },
  {
    icon: <BsPencilSquare className="text-yellow-500 text-xl" />,
    bg: "bg-yellow-100 dark:bg-yellow-500/20",
    title: "Team member updated task status",
    desc: "New document shared with the team",
  },
];

const RecentActivity = () => {
  return (
    <div
      className="w-full md:max-w-sm 
                 rounded-2xl p-5 
                 bg-white/30 dark:bg-white/10 
                 backdrop-blur-md 
                 border border-white/20 dark:border-white/10 
                 shadow-lg hover:shadow-xl 
                 transition-all duration-300"
    >
      <h2 className="text-base md:text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">
        Recent Activity
      </h2>

      <div className="space-y-3">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex items-start gap-3 
                       bg-white/40 dark:bg-white/5 
                       backdrop-blur-sm 
                       border border-white/10 
                       p-3 rounded-xl 
                       transition hover:scale-[1.02]"
          >
            <div className={`p-2 rounded-full ${activity.bg}`}>
              {activity.icon}
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                {activity.title}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {activity.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <p className="text-xs text-blue-500 mt-4 text-center cursor-pointer hover:underline">
        See all activities →
      </p>
    </div>
  );
};

export default RecentActivity;
