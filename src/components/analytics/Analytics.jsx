// Analytics.jsx
import {
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Tooltip,
} from "chart.js";
import { RefreshCwIcon } from "lucide-react";
import { Bar, Line } from "react-chartjs-2";
import { CiExport } from "react-icons/ci";
import CustomReportsComponent from "./CustomerReportsComponents";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  LineElement,
  PointElement
);

const Analytics = () => {
  const timelineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Not Started",
        data: [3, 2, 4, 2, 1, 3, 2],
        backgroundColor: "#FBBF24",
        stack: "stack1",
      },
      {
        label: "In Progress",
        data: [4, 6, 5, 6, 7, 5, 6],
        backgroundColor: "#60A5FA",
        stack: "stack1",
      },
      {
        label: "Completed",
        data: [2, 3, 4, 6, 5, 7, 8],
        backgroundColor: "#4ADE80",
        stack: "stack1",
      },
    ],
  };

  const utilizationData = {
    labels: ["Engineering", "Development", "Design", "QA", "Marketing"],
    datasets: [
      {
        label: "Utilization",
        data: [120, 130, 100, 90, 80],
        backgroundColor: [
          "#4F46E5",
          "#60A5FA",
          "#FBBF24",
          "#34D399",
          "#F472B6",
        ],
      },
    ],
  };

  const budgetData = {
    labels: ["Q1", "Q2", "Q3", "Q4"],
    datasets: [
      {
        label: "Budget",
        data: [300, 400, 500, 600],
        backgroundColor: "#A5B4FC",
      },
      {
        label: "Actual",
        data: [280, 450, 480, 650],
        backgroundColor: "#6366F1",
      },
      {
        label: "Variance",
        data: [20, -50, 20, -50],
        type: "line",
        borderColor: "#F87171",
        borderWidth: 2,
        fill: false,
        yAxisID: "y",
      },
    ],
  };

  const performanceData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Efficiency",
        data: [70, 75, 72, 78, 80, 82, 85],
        borderColor: "#6366F1",
        backgroundColor: "transparent",
        fill: false,
        tension: 0.4,
      },
      {
        label: "Quality",
        data: [65, 68, 70, 72, 75, 78, 80],
        borderColor: "#34D399",
        backgroundColor: "transparent",
        fill: false,
        tension: 0.4,
      },
      {
        label: "Delivery",
        data: [60, 64, 66, 70, 74, 77, 79],
        borderColor: "#F59E0B",
        backgroundColor: "transparent",
        fill: false,
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="px-6 py-4 space-y-6">
      <div className="flex justify-between items-start flex-wrap gap-4">
        <div>
          <h2 className="text-2xl font-bold text-black">Analytics</h2>
          <p className="text-sm text-gray-600">
            Track your team&apos;s performance and project metrics
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <select className="border px-3 py-1 rounded-md text-sm">
            <option value="7">Last 7 days</option>
            <option value="15">Last 15 days</option>
            <option value="30">Last Month</option>
            <option value="180">Last 6 Months</option>
            <option value="365">Last Year</option>
          </select>
          <button className="flex items-center gap-1 text-sm bg-indigo-100 px-3 py-1 rounded-md text-indigo-700 font-medium">
            <CiExport /> Export
          </button>
          <button className="flex items-center gap-1 text-sm bg-gray-100 px-3 py-1 rounded-md text-gray-700 font-medium">
            <RefreshCwIcon className="w-4 h-4" /> Refresh
          </button>
        </div>
      </div>

      {/* KPI cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="p-4 bg-white border border-gray-300 rounded-xl shadow-sm">
          <h4 className="text-sm text-gray-600">Active Projects</h4>
          <p className="text-2xl font-semibold text-black">12 Projects</p>
          <p className="text-xs font-semibold text-green-600 mt-1">
            +1 this week
          </p>
        </div>
        <div className="p-4 bg-white border border-gray-300 rounded-xl shadow-sm">
          <h4 className="text-sm text-gray-600">Total Clients</h4>
          <p className="text-2xl font-semibold text-black">18 Clients</p>
          <p className="text-xs font-semibold text-green-600 mt-1">+5 new</p>
        </div>
        <div className="p-4 bg-white border border-gray-300 rounded-xl shadow-sm">
          <h4 className="text-sm text-gray-600">Team Utilization</h4>
          <p className="text-2xl font-semibold text-black">78%</p>
          <p className="text-xs font-semibold text-yellow-600 mt-1">+2%</p>
        </div>
        <div className="p-4 bg-white border border-gray-300 rounded-xl shadow-sm">
          <h4 className="text-sm text-gray-600">This Month Revenue (in Lac)</h4>
          <p className="text-2xl font-semibold text-black">₹4.30</p>
          <p className="text-xs font-semibold text-green-600 mt-1">
            +12% this month
          </p>
        </div>
      </div>

      {/* Charts section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-300 p-4 rounded-lg shadow-sm">
          <h3 className="text-sm font-semibold mb-2 text-gray-700">
            Project Timeline Analysis
          </h3>
          <Bar
            data={timelineData}
            options={{
              responsive: true,
              plugins: { legend: { position: "bottom" } },
            }}
          />
        </div>
        <div className="bg-white border border-gray-300 p-4 rounded-lg shadow-sm">
          <h3 className="text-sm font-semibold mb-2 text-gray-700">
            Resource Utilization
          </h3>
          <Bar
            data={utilizationData}
            options={{
              responsive: true,
              plugins: { legend: { position: "bottom" } },
            }}
          />
        </div>
        <div className="bg-white border border-gray-300 p-4 rounded-lg shadow-sm">
          <h3 className="text-sm font-semibold mb-2 text-gray-700">
            Budget VS Actual
          </h3>
          <Bar
            data={budgetData}
            options={{
              responsive: true,
              plugins: { legend: { position: "bottom" } },
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            }}
          />
        </div>
        <div className="bg-white border border-gray-300 p-4 rounded-lg shadow-sm">
          <h3 className="text-sm font-semibold mb-2 text-gray-700">
            Performance Trends
          </h3>
          <Line
            data={performanceData}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: "bottom",
                },
              },
              scales: {
                y: {
                  beginAtZero: true,
                  max: 100,
                },
              },
            }}
          />
        </div>
      </div>
        {/* Custom Reports Section */}
        <h3 className="text-2xl font-semibold mt-12">Custom Reports</h3>
        <CustomReportsComponent />
    </div>
  );
};

export default Analytics;