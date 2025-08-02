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
    bg: "bg-green-100",
    title: "Project Apollo marked complete",
    desc: "Final milestone reached successfully",
  },
  {
    icon: <BsPersonPlus className="text-blue-500 text-xl" />,
    bg: "bg-blue-100",
    title: "Client Zenspace added",
    desc: "Client profile created in CRM",
  },
  {
    icon: <BsLink45Deg className="text-red-500 text-xl" />,
    bg: "bg-red-100",
    title: "File uploaded to Project Vega",
    desc: "New document shared with the team",
  },
  {
    icon: <BsPencilSquare className="text-yellow-500 text-xl" />,
    bg: "bg-yellow-100",
    title: "Team member updated task status",
    desc: "New document shared with the team",
  },
];

const RecentActivity = () => {
  return (
    <div className="w-full md:max-w-sm bg-white p-4 rounded-lg shadow-sm">
      <h2 className="text-base md:text-lg font-semibold mb-4">
        Recent Activity
      </h2>
      <div className="space-y-3">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex items-start gap-3 bg-gray-50 p-3 shadow-sm rounded-lg hover:bg-gray-100 transition"
          >
            <div className={`p-2 rounded-full ${activity.bg}`}>
              {activity.icon}
            </div>
            <div>
              <p className="text-sm font-medium">{activity.title}</p>
              <p className="text-xs text-gray-500">{activity.desc}</p>
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
