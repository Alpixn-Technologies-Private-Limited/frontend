import axios from "axios";
import { HandCoins, TrendingUpDown, TriangleAlert } from "lucide-react";
import { useEffect, useState } from "react";
import { FaBell, FaPhone, FaRupeeSign } from "react-icons/fa";
import { DotLoader } from "react-spinners";
import BarChart from "../../charts/BarChart";
import Table from "../../charts/Table";

// Dummy data for fallback
const dummyProjectData = [
  {
    name: "Website Redesign",
    client: "Acme Retail Pvt. Ltd.",
    progress: 75,
    deadline: "30 June 2025",
    status: "in_progress",
    health: "healthy",
  },
  {
    name: "App Migration",
    client: "Nova FinServe Ltd.",
    progress: 40,
    deadline: "5 July 2025",
    status: "in_progress",
    health: "at_risk",
  },
  {
    name: "Q3 Campaign Launch",
    client: "Sparks Events Agency",
    progress: 90,
    deadline: "28 June 2025",
    status: "in_progress",
    health: "healthy",
  },
];

const dummyDeadlineData = [
  {
    icon: <FaBell />,
    milestone: "Website Redesign - Beta Release",
    deadline: "27 June 2025",
    days_remaining: "2",
  },
  {
    icon: <FaPhone />,
    milestone: "App Migration - Client Review",
    deadline: "28 June 2025",
    days_remaining: "3",
  },
  {
    icon: <FaRupeeSign />,
    milestone: "Q3 Campaign Launch - Final Delivery",
    deadline: "30 June 2025",
    days_remaining: "11",
  },
];

const dummyTeamPerformance = {
  total_tasks_completed: 58,
  average_completion_time: 3.5,
  team_satisfaction: 4.5,
  active_members: "6 out of 7",
};

const getProgressColor = (value) => {
  if (value <= 50) return "bg-red-600";
  if (value <= 75) return "bg-yellow-600";
  return "bg-green-600";
};

const getHealthColor = (health) => {
  switch (health) {
    case "healthy":
      return "bg-green-500";
    case "at_risk":
      return "bg-yellow-500";
    case "critical":
      return "bg-red-500";
    default:
      return "bg-gray-500";
  }
};

const formatDate = (dateString) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

const overviewColumns = [
  {
    header: "Project Name",
    accessorKey: "name",
  },
  {
    header: "Client",
    accessorKey: "client",
  },
  {
    header: "Status",
    accessorKey: "status",
    cell: ({ getValue }) => {
      const value = getValue();
      return (
        <span
          className={`px-2 py-1 rounded-full text-xs ${
            value === "completed"
              ? "bg-green-100 text-green-800"
              : value === "in_progress"
              ? "bg-blue-100 text-blue-800"
              : "bg-gray-100 text-gray-800"
          }`}
        >
          {value === "completed"
            ? "Completed"
            : value === "in_progress"
            ? "In Progress"
            : "Not Started"}
        </span>
      );
    },
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
    header: "Health",
    accessorKey: "health",
    cell: ({ getValue }) => {
      const value = getValue();
      const color = getHealthColor(value);
      return (
        <div className="flex items-center gap-2">
          <div className={`w-3 h-3 rounded-full ${color}`}></div>
          <span className="capitalize">
            {value?.replace("_", " ") || "N/A"}
          </span>
        </div>
      );
    },
  },
  {
    header: "Deadline",
    accessorKey: "deadline",
    cell: ({ getValue }) => formatDate(getValue()),
  },
];

const deadlineColumns = [
  {
    header: "Milestone",
    accessorKey: "milestone",
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        {row.index === 0 ? (
          <FaBell />
        ) : row.index === 1 ? (
          <FaPhone />
        ) : (
          <FaRupeeSign />
        )}
        {row.original.project_name} - {row.original.milestone}
      </div>
    ),
  },
  {
    header: "Deadline",
    accessorKey: "deadline",
    cell: ({ getValue }) => formatDate(getValue()),
  },
  {
    header: "Days Left",
    accessorKey: "days_remaining",
    cell: ({ getValue }) => (
      <span className={getValue() <= 3 ? "text-red-600 font-semibold" : ""}>
        {getValue()} days
      </span>
    ),
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
  maintainAspectRatio: false,
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
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    let dataFetched = false;

    const fallbackData = {
      my_projects: dummyProjectData,
      upcoming_deadlines: dummyDeadlineData,
      team_performance: dummyTeamPerformance,
    };

    const fetchDashboardData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/api/dashboard/pm`
        );
        if (response.data?.response?.success && isMounted) {
          setDashboardData(response.data.response.data);
          dataFetched = true;
        }
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchDashboardData();

    const timeoutId = setTimeout(() => {
      if (!dataFetched && isMounted) {
        console.warn("API timeout: Using dummy fallback data.");
        setDashboardData(fallbackData);
      }
      setLoading(false);
    }, 5000); // 2 seconds

    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
    };
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-100 ml-64 max-sm:ml-0">
        <div className="text-center">
          <DotLoader
            color="#4F46E5"
            size={70}
            speedMultiplier={1.5}
            cssOverride={{
              display: "block",
              margin: "0 auto",
            }}
          />
          <p className="mt-4 text-lg font-medium text-gray-700">
            Loading dashboard data...
          </p>
        </div>
      </div>
    );
  }

  // Use API data or fallback to dummy data
  const projectData =
    dashboardData?.my_projects?.length > 0
      ? dashboardData.my_projects
      : dummyProjectData;

  const deadlineData =
    dashboardData?.upcoming_deadlines?.length > 0
      ? dashboardData.upcoming_deadlines
      : dummyDeadlineData;

  const teamPerformance = dashboardData?.team_performance
    ? dashboardData.team_performance
    : dummyTeamPerformance;

  return (
    <div className="px-1 space-y-6 font-[Segoe UI]">
      <div className="flex justify-end items-center w-full">
        <button className="bg-gradient-to-r from-indigo-600 to-yellow-600 text-white px-4 py-1.5 flex gap-1 items-center justify-center rounded-lg shadow hover:opacity-90">
          <div className="font-semibold scale-125">+</div> New Project
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 h-full">
        <div className="w-full lg:w-[70%] space-y-6">
          <div className="border border-gray-300 p-4 bg-white rounded-lg shadow-sm max-sm:p-3">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              My Project Overview
            </h3>
            <Table data={projectData} columns={overviewColumns} />
          </div>

          <div className="border border-gray-300 p-4 rounded-lg shadow-sm bg-white max-sm:p-3">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Team Performance Metrics
            </h3>
            <div className="flex gap-6 mb-4 text-sm text-gray-600 justify-between max-sm:flex-wrap max-sm:gap-2 max-sm:items-center">
              <div className="px-4 py-6 border rounded-md border-slate-300 max-sm:px-2 max-sm:py-3 max-sm:w-[48%] max-sm:text-center">
                <p className="font-medium">Avg. Task Completion Time:</p>
                <p className="font-semibold text-xl text-center text-black mt-2">
                  {teamPerformance.average_completion_time}{" "}
                  <span className="font-medium text-lg">Days</span>
                </p>
              </div>
              <div className="px-4 py-6 border rounded-md border-slate-300 max-sm:px-2 max-sm:py-3 max-sm:w-[48%] max-sm:text-center">
                <p className="font-medium">Tasks Completed This Week:</p>
                <p className="font-semibold text-xl text-center text-black mt-2">
                  {teamPerformance.total_tasks_completed}
                </p>
              </div>
              <div className="px-4 py-6 border rounded-md border-slate-300 max-sm:px-2 max-sm:py-3 max-sm:w-[48%] max-sm:text-center max-sm:mx-auto">
                <p className="font-medium">Active Members This Week:</p>
                <p className="font-semibold text-xl text-center text-black mt-2">
                  {teamPerformance.active_members || "6 out of 7"}
                </p>
              </div>
            </div>
            <div className="w-full overflow-x-auto max-sm:mt-3">
              <div className="min-w-[500px] h-[300px] max-sm:h-[250px]">
                <BarChart data={chartData} options={chartOptions} />
              </div>
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
    </div>
  );
};

export default DashBoard;
