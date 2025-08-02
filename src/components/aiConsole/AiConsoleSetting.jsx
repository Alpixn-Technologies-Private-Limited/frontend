import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Tooltip,
} from "chart.js";
import { BoxIcon, InfoIcon, Plus } from "lucide-react";
import { Bar } from "react-chartjs-2";
import { BsThreeDots } from "react-icons/bs";
import { FaSquareArrowUpRight } from "react-icons/fa6";
import Table from "../charts/Table";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const data = {
  labels: [
    "Mar 08",
    "Mar 12",
    "Mar 16",
    "Mar 20",
    "Mar 24",
    "Mar 28",
    "Apr 02",
    "Apr 06",
    "Apr 10",
    "Apr 14",
    "Apr 20",
    "Apr 24",
    "Apr 28",
  ],
  datasets: [
    {
      label: "Normal Sync",
      data: [95, 70, 40, 65, 60, 55, 75, 40, 50, 65, 100, 75, 55],
      backgroundColor: "#D2CFFF",
      borderRadius: 20,
    },
    {
      label: "System Overrides",
      data: [75, 60, 85, 55, 50, 45, 60, 30, 40, 45, 85, 60, 45],
      backgroundColor: "#4F46E5",
      borderRadius: 20,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  aspectRatio: 3.2,
  plugins: {
    legend: {
      position: "bottom",
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: "#4B5563",
      },
    },
    y: {
      beginAtZero: true,
      ticks: {
        color: "#4B5563",
        stepSize: 20,
      },
      grid: {
        color: "#D2CFFF",
        borderDash: [8, 8],
      },
    },
  },
  elements: {
    bar: {
      borderRadius: {
        topLeft: 999,
        topRight: 999,
        bottomLeft: 0,
        bottomRight: 0,
      },
    },
  },
};

const tableColumns = [
  {
    accessorKey: "source",
    header: "Source",
    cell: (info) => <span className="font-medium">{info.getValue()}</span>,
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "lastSynced",
    header: "Last Synced",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ getValue }) => {
      const status = getValue();
      const colorMap = {
        Active: "bg-green-100 text-green-800",
        Failed: "bg-red-100 text-red-800",
      };
      return (
        <span
          className={`text-sm px-3 py-1 rounded-full font-semibold ${colorMap[status]}`}
        >
          {status}
        </span>
      );
    },
  },
  {
    id: "actions",
    header: "", // optional header
    accessorFn: (row) => row.btn, // ensures value passes through
    cell: ({ getValue }) => getValue(), // renders the button
  },
];

const TableData = [
  {
    source: "Jira (Projects)",
    type: "Task data",
    lastSynced: "Jul 1, 2025",
    status: "Active",
    btn: (
      <BsThreeDots className="text-gray-500 text-xl cursor-pointer rotate-90" />
    ),
  },
  {
    source: "Timesheets (Zoho)",
    type: "Utilization",
    lastSynced: "Jun 30, 2025",
    status: "Active",
    btn: (
      <BsThreeDots className="text-gray-500 text-xl cursor-pointer rotate-90" />
    ),
  },
  {
    source: "Design Hub",
    type: "Client Created",
    lastSynced: "Jun 20, 2025",
    status: "Failed",
    btn: (
      <BsThreeDots className="text-gray-500 text-xl cursor-pointer rotate-90" />
    ),
  },
  {
    source: "Salesforce CRM",
    type: "Client Info",
    lastSynced: "Jul 1, 2025",
    status: "Active",
    btn: (
      <BsThreeDots className="text-gray-500 text-xl cursor-pointer rotate-90" />
    ),
  },
  {
    source: "Feedback Logs",
    type: "Manual Reviews",
    lastSynced: "Notify project manager",
    status: "Active",
    btn: (
      <BsThreeDots className="text-gray-500 text-xl cursor-pointer rotate-90" />
    ),
  },
];

const AiConsoleSetting = () => {
  return (
    <div className="min-h-screen bg-white p-6 text-gray-800 space-y-8 max-sm:p-3 max-sm:space-y-3">
      {/* Top Settings */}
      <div>
        <h2 className="text-lg font-semibold text-black">Model Behavior</h2>
        <p className="text-sm text-black">Control how your AI operates</p>
      </div>
      <div className="flex gap-8 max-sm:gap-4 max-sm:flex-col">
        <div className="w-[85%] flex gap-8 max-sm:w-full max-sm:flex-wrap max-sm:items-center max-sm:justify-between max-sm:gap-2">
          <div className="border border-gray-300 rounded-xl p-4 shadow-sm w-1/3 max-sm:w-[48%] max-sm:h-[180px]">
            <div className="flex items-center gap-2 mb-2 justify-between">
              <h4 className="text-sm font-normal text-[#535353]">
                Prediction Sensitivity
              </h4>
              <BoxIcon className="text-[#4F46E5] p-[5px] scale-150 bg-gray-100 rounded-full border border-gray-200 max-sm:p-[3px]" />
            </div>
            <p className="text-2xl font-semibold text-black mt-1">
              Medium (7/10)
            </p>
            <p className="text-xs font-semibold text-[#4F46E5] mt-1">
              Accuracy vs noise trade-off
            </p>
          </div>
          <div className="border border-gray-300 rounded-xl p-4 shadow-sm w-1/3 max-sm:w-[48%] max-sm:h-[180px]">
            <div className="flex items-center gap-2 mb-2 justify-between">
              <h4 className="text-sm font-normal text-[#535353]">
                Automation Level
              </h4>
              <BoxIcon className="text-[#4F46E5] p-[5px] scale-150 bg-gray-100 rounded-full border border-gray-200 max-sm:p-[3px]" />
            </div>
            <p className="text-2xl font-semibold text-black mt-1">
              Smart Assist
            </p>
            <p className="text-xs font-semibold text-[#009300] mt-1">
              Allows semi-automated tasking
            </p>
          </div>
          <div className="border border-gray-300 rounded-xl p-4 shadow-sm w-1/3 max-sm:w-[48%] max-sm:h-[180px] max-sm:mx-auto">
            <div className="flex items-center gap-2 mb-2 justify-between">
              <h4 className="text-sm font-normal text-[#535353]">
                Learning Frequency
              </h4>
              <BoxIcon className="text-[#4F46E5] p-[5px] scale-150 bg-gray-100 rounded-full border border-gray-200 max-sm:p-[3px]" />
            </div>
            <p className="text-xl font-semibold text-purple-700 mt-1">Weekly</p>
            <p className="text-xs font-semibold text-[#D6A700] mt-1">
              AI updates its model every 7 days
            </p>
          </div>
        </div>
        <div className="border border-gray-300 rounded-xl p-4 shadow-sm w-[15%] flex flex-col items-center justify-center cursor-pointer max-sm:w-full">
          <button className="px-4 py-2 rounded-lg text-sm font-medium flex flex-col items-center text-[#535353] gap-3 cursor-pointer">
            <Plus className="bg-gray-100 text-[2px] p-1 rounded-full border border-gray-200 scale-150 mx-auto text-[#4F46E5]" />
            Customize
          </button>
        </div>
      </div>

      {/* Chart Section */}
      <div className="bg-gray-50 p-4 rounded-xl shadow-md border-2 border-gray-200 relative">
        <div className="flex justify-between items-center mb-5 max-sm:flex-col">
          <h2 className="text-[16px] font-semibold text-black">
            Training Data Usage
          </h2>
          <p className="text-sm text-black">
            AI Model Sync Activity:{" "}
            <span className="font-semibold">Last 30 Days</span>
          </p>
        </div>
        <div className="max-sm:w-[82vw] max-sm:overflow-x-auto">
        <div className="h-[50vh] w-full relative max-sm:h-[45vh] max-sm:mb-4 max-sm:w-[110vw]">
          <Bar data={data} options={options} />
        </div></div>
        <div className="flex absolute bottom-3 left-3 gap-1 items-center cursor-pointer">
          <InfoIcon className="text-gray-500" />{" "}
          <span className="text-sm text-gray-500">Get Details</span>
        </div>
      </div>

      {/* Data Sources Table */}
      <div className="bg-gray-50 p-4 rounded-xl shadow-md">
        <div className="flex justify-between items-center mb-4 max-sm:flex-col">
          <h2 className="text-lg font-semibold text-gray-800 max-sm:text-xl max-sm:mb-3">
            Connected Data Sources
          </h2>
          <button className="bg-gradient-to-r from-[#4F46E5] to-[#D6A700] text-white px-4 py-2 rounded-md text-sm font-medium flex items-center gap-1 cursor-pointer max-sm:px-2 max-sm:py-1.5">
            <FaSquareArrowUpRight className="bg-transparent text-white text-2xl p-1" />
            Export Settings
          </button>
        </div>
        <div className="overflow-x-auto">
          <Table data={TableData} columns={tableColumns} />
        </div>
      </div>
    </div>
  );
};

export default AiConsoleSetting;
