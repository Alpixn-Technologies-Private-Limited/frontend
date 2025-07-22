import React from "react";
import { HandCoins, TrendingUpDown, TriangleAlert } from "lucide-react";
import { FaBell, FaPhone, FaRupeeSign } from "react-icons/fa";
import BarChart from "../../charts/BarChart";
import Footer from "../../Footer";
import Table from "../../charts/Table";

const projectData = [
  {
    project: "Website Redesign",
    client: "Acme Retail Pvt. Ltd.",
    progress: 75,
    deadline: "30 June 2025",
  },
  {
    project: "App Migration",
    client: "Nova FinServe Ltd.",
    progress: 40,
    deadline: "5 July 2025",
  },
  {
    project: "Q3 Campaign Launch",
    client: "Sparks Events Agency",
    progress: 90,
    deadline: "28 June 2025",
  },
];

const deadlineData = [
  {
    icon: <FaBell />,
    event: "Website Redesign",
    date: "27 June 2025",
    time: "--:--",
  },
  {
    icon: <FaPhone />,
    event: "App Migration",
    date: "28 June 2025",
    time: "3:00 PM",
  },
  {
    icon: <FaRupeeSign />,
    event: "Q3 Campaign Launch",
    date: "30 June 2025",
    time: "11:00 AM",
  },
];

const getProgressColor = (value) => {
  if (value <= 50) return "bg-red-600";
  if (value <= 75) return "bg-yellow-600";
  return "bg-green-600";
};

const overviewColumns = [
  {
    header: "Project Name",
    accessorKey: "project",
  },
  {
    header: "Client",
    accessorKey: "client",
  },
  {
    header: "Progress",
    accessorKey: "progress",
    cell: ({ getValue }) => {
      const value = getValue();
      const color = getProgressColor(value);
      return (
        <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
          <div
            className={`h-full text-white text-xs text-center transition-all duration-500 ${color}`}
            style={{ width: `${value}%` }}
          >
            {value}%
          </div>
        </div>
      );
    },
  },
  {
    header: "Deadline",
    accessorKey: "deadline",
  },
];

const deadlineColumns = [
  {
    header: "Event",
    accessorKey: "event",
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        {deadlineData[row.index].icon}
        {row.original.event}
      </div>
    ),
  },
  {
    header: "Date",
    accessorKey: "date",
  },
  {
    header: "Time",
    accessorKey: "time",
  },
];

const chartData = {
  labels: ["Raj", "Ananya", "Mehul", "Priya", "Karan", "Sneha"],
  datasets: [
    {
      label: "Progress",
      data: [75, 90, 65, 90, 70, 80],
      backgroundColor: "#6366F1",
      borderRadius: 4,
      barThickness: 40,
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: true,
  aspectRatio: 3,
  plugins: {
    legend: {
      display: true,
      position: "top",
      labels: {
        color: "#374151",
        font: { size: 14, weight: "bold" },
      },
    },
    tooltip: {
      callbacks: {
        label: (context) => `${context.parsed.y}%`,
      },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      max: 100,
      ticks: {
        stepSize: 20,
        callback: (value) => `${value}%`,
        color: "#6B7280",
        font: { size: 12, weight: "bold" },
      },
      grid: { color: "#E5E7EB" },
    },
    x: {
      ticks: { color: "#6B7280", font: { size: 12, weight: "bold" } },
      grid: { display: false },
    },
  },
};

const suggestions = [
  {
    icon: <TriangleAlert className="text-xl" />,
    title: "Resource Allocation",
    message:
      "You have 3 underutilized team members. Consider redistributing tasks.",
    button: "Relocate Now",
  },
  {
    icon: <TrendingUpDown className="text-xl" />,
    title: "Forecasted Delay",
    message:
      "Testing team bandwidth is low between 2-4 July. Reschedule milestone accordingly.",
    button: "Reschedule Milestone",
  },
  {
    icon: <HandCoins className="text-xl" />,
    title: "Budget Alert",
    message: "Marketing costs exceeded Q2 estimates by ₹15,000.",
    button: "View Budget Summary",
  },
  {
    icon: <TriangleAlert className="text-xl" />,
    title: "Missed Tasks Follow-up Alerts",
    message:
      "5 tasks haven't been updated in over 3 days. Follow up to avoid bottlenecks.",
    button: "Follow Up Now",
  },
];

const DashBoard = () => {
  return (
    <div className="px-1 space-y-6 font-[Segoe UI]">
      <div className="flex justify-end items-center w-full">
        <button className="bg-gradient-to-r from-indigo-600 to-yellow-600 text-white px-4 py-1.5 flex gap-1 items-center justify-center rounded-lg shadow hover:opacity-90">
          <div className="font-semibold scale-125">+</div> New Project
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 h-full">
        <div className="w-full lg:w-[70%] space-y-6">
          <div className="border border-gray-300 p-4 bg-white rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              My Project Overview
            </h3>
            <Table data={projectData} columns={overviewColumns} />
          </div>

          <div className="border border-gray-300 p-4 rounded-lg shadow-sm bg-white">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Team Performance Metrics
            </h3>
            <div className="flex gap-6 mb-4 text-sm text-gray-600 justify-between">
              <div className="px-4 py-6 border rounded-md border-slate-300">
                <p className="font-medium">Avg. Task Completion Time:</p>
                <p className="font-semibold text-xl text-center text-black mt-2">
                  3.5 <span className="font-medium text-lg">Days</span>
                </p>
              </div>
              <div className="px-4 py-6 border rounded-md border-slate-300">
                <p className="font-medium">Tasks Completed This Week:</p>
                <p className="font-semibold text-xl text-center text-black mt-2">
                  58
                </p>
              </div>
              <div className="px-4 py-6 border rounded-md border-slate-300">
                <p className="font-medium">Active Members This Week:</p>
                <p className="font-semibold text-xl text-center text-black mt-2">
                  6 out of 7
                </p>
              </div>
            </div>
            <div className="w-full h-[300px]">
              <BarChart data={chartData} options={chartOptions} />
            </div>
          </div>

          <div className="border border-gray-300 p-4 rounded-lg shadow-sm bg-white">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Upcoming Deadlines
            </h3>
            <Table data={deadlineData} columns={deadlineColumns} />
          </div>
        </div>

        <div className="w-full lg:w-[30%] border border-gray-300 bg-white py-3 px-6 rounded-lg shadow-sm min-h-[700px] flex flex-col justify-between">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            AI Suggestions
          </h2>
          <div className="flex flex-col gap-4 flex-1 justify-between">
            {suggestions.map((item, i) => (
              <div
                key={i}
                className="text-gray-600 px-8 py-3 flex flex-col gap-5 border items-center border-[#E0E0E0] rounded-md shadow-md shadow-gray-300 min-h-[150px]"
              >
                <div className="flex items-center gap-2 text-[15px] font-medium mt-3">
                  {item.icon}
                  {item.title}
                </div>
                <p className="text-[14px] font-normal leading-relaxed px-3 text-gray-500">
                  {item.message}
                </p>
                {item.button && (
                  <button
                    className="text-sm font-medium text-black border border-gray-300 px-4 py-2 mb-6 cursor-pointer bg-white rounded hover:bg-gray-50 w-fit"
                    style={{
                      boxShadow:
                        "inset 0 1px 2px rgba(0,0,0,0.1), 0 2px 6px rgba(0,0,0,0.2)",
                    }}
                  >
                    {item.button}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DashBoard;
