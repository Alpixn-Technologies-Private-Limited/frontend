import React from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { MdOutlineDangerous } from "react-icons/md";
import { FaBell, FaPhone, FaRupeeSign } from "react-icons/fa";
import BarChart from "../../charts/BarChart"; // Make sure this is correct
import Footer from "../../Footer";

// Project Overview Table Data
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

// Upcoming Deadlines Table Data
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

// Utility for progress bar color
const getProgressColor = (value) => {
  if (value <= 50) return "bg-red-600";
  if (value <= 75) return "bg-yellow-600";
  return "bg-green-600";
};

// Table Columns
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

// Chart Data
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

// Generic Table Component
const Table = ({ data, columns }) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table className="min-w-full mt-2 border border-gray-300 text-sm text-left text-gray-600">
      <thead className="bg-gray-100 text-gray-800 font-medium">
        {table.getHeaderGroups().map((hg) => (
          <tr key={hg.id}>
            {hg.headers.map((header) => (
              <th key={header.id} className="px-4 py-3 text-xl border-b border-gray-300">
                {flexRender(header.column.columnDef.header, header.getContext())}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id} className="hover:bg-gray-50">
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id} className="px-4 py-3 border-b border-gray-300 text-lg">
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const DashBoard = () => {
  return (
    <div className="px-1 space-y-6">
      {/* Header */}
      <div className="flex justify-end items-center w-full">
        <button className="bg-gradient-to-r from-indigo-500 to-yellow-500 text-white px-4 py-1.5 flex gap-1 items-center justify-center rounded-lg shadow hover:opacity-90">
          <div className="font-semibold scale-125 flex items-center justify-center w-fit">+</div> New Project
        </button>
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Section */}
        <div className="w-full lg:w-[70%] space-y-6">
          {/* Project Table */}
          <div className="border border-gray-300 p-4 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">My Project Overview</h3>
            <Table data={projectData} columns={overviewColumns} />
          </div>

          {/* Chart Section */}
          <div className="border border-gray-300 p-4 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Team Performance Metrics</h3>
            <div className="flex gap-6 mb-4 text-sm text-gray-600 justify-between">
              <div className="px-4 py-6 border rounded-md border-slate-300">
                <p className="font-medium">Avg. Task Completion Time:</p>
                <p className="font-semibold text-xl text-center text-black mt-2">3.5 <span className="font-medium text-lg">Days</span></p>
              </div>
              <div className="px-4 py-6 border rounded-md border-slate-300">
                <p className="font-medium">Tasks Completed This Week:</p>
                <p className="font-semibold text-xl text-center text-black mt-2">58</p>
              </div>
              <div className="px-4 py-6 border rounded-md border-slate-300">
                <p className="font-medium">Active Members This Week:</p>
                <p className="font-semibold text-xl text-center text-black mt-2">6 out of 7</p>
              </div>
            </div>
            <div className="w-full h-[300px]">
              <BarChart data={chartData} options={chartOptions} />
            </div>
          </div>

          {/* Deadlines Table */}
          <div className="border border-gray-300 p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Upcoming Deadlines</h3>
            <Table data={deadlineData} columns={deadlineColumns} />
          </div>
        </div>

        {/* Right Section - AI Suggestions */}
        <div className="w-full lg:w-[30%] border border-gray-300 py-3 px-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-gray-800 -mb-[4.5rem]">AI Suggestions</h2>
          {[1, 2, 3, 4].map((_, i) => (
            <div key={i} className="text-gray-400 py-3 px-5 flex border-[#E0E0E0] flex-col my-20 gap-2 border-2 min-h-[200px] items-center justify-center text-center mb-3 rounded-md">
              <div className="flex items-center gap-2 font-medium">
                <MdOutlineDangerous className="text-xl" />
                Resource Reallocation
              </div>
              <p className="text-sm mt-1 font-[300] text-black">
                You have 3 underutilized team members. Consider redistributing tasks.
              </p>
              <button className="mt-2 text-sm border rounded-sm px-6 py-2 border-[#E0E0E0]">Relocate Now</button>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default DashBoard;
