import axios from "axios";
import { CalendarDays } from "lucide-react";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { HashLoader } from "react-spinners";
import Table from "../../charts/Table";
import axiosInstance from "../../../utils/axios";

// Dummy data for fallback
const dummyProjectData = [
  {
    id: 1,
    title: "Website Redesign",
    project: "Website Redesign",
    client: "Acme Retail Pvt. Ltd.",
    progress: 75,
    deadline: "30 June 2025",
    priority: "medium",
    status: "in_progress",
    estimated_hours: 8,
  },
  {
    id: 2,
    title: "App Migration",
    project: "App Migration",
    client: "Nova FinServe Ltd.",
    progress: 40,
    deadline: "5 July 2025",
    priority: "high",
    status: "in_progress",
    estimated_hours: 12,
  },
  {
    id: 3,
    title: "Q3 Campaign Launch",
    project: "Q3 Campaign Launch",
    client: "Sparks Events Agency",
    progress: 90,
    deadline: "28 June 2025",
    priority: "low",
    status: "completed",
    estimated_hours: 6,
  },
];

const dummyTimelineData = [
  {
    project_id: 1,
    project_name: "Website Redesign",
    current_phase: "Design",
    next_milestone: "Client Review",
    milestone_date: "2024-07-10",
  },
  {
    project_id: 2,
    project_name: "App Migration",
    current_phase: "Development",
    next_milestone: "QA Testing",
    milestone_date: "2024-07-15",
  },
  {
    project_id: 3,
    project_name: "Q3 Campaign Launch",
    current_phase: "Final Review",
    next_milestone: "Launch",
    milestone_date: "2024-07-20",
  },
];

const dummyCollaborationData = [
  {
    id: 1,
    comment: "Website Redesign - Design Feedback",
    from: "Raj Sharma",
    link: "Web Redesign",
    time: "2h ago",
  },
  {
    id: 2,
    comment: "App Migration - API Documentation",
    from: "Ananya Menon",
    link: "App Migration",
    time: "5h ago",
  },
  {
    id: 3,
    comment: "Q3 Campaign Launch - Assets Approval",
    from: "You",
    link: "Q3 Campaign",
    time: "1d ago",
  },
];

const dummyProductivityMetrics = {
  tasks_completed_today: 5,
  hours_logged: 7.5,
  streak_days: 8,
};

const getProgressColor = (value) => {
  if (value <= 50) return "text-red-600";
  if (value <= 75) return "text-yellow-600";
  return "text-green-600";
};

const getPriorityColor = (priority) => {
  switch (priority) {
    case "high":
      return "bg-red-100 text-red-800";
    case "medium":
      return "bg-yellow-100 text-yellow-800";
    case "low":
      return "bg-green-100 text-green-800";
    default:
      return "bg-gray-100 text-gray-800";
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
    header: "Task",
    accessorKey: "title",
  },
  {
    header: "Project",
    accessorKey: "project",
    cell: ({ getValue }) => <div className="py-1.5">{getValue()}</div>,
  },
  {
    header: "Priority",
    accessorKey: "priority",
    cell: ({ getValue }) => {
      const value = getValue();
      const color = getPriorityColor(value);
      return (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${color}`}>
          {value.charAt(0).toUpperCase() + value.slice(1)}
        </span>
      );
    },
  },
  {
    header: "Status",
    accessorKey: "status",
    cell: ({ getValue }) => {
      const value = getValue();
      const progress =
        value === "completed" ? 100 : value === "in_progress" ? 50 : 0;
      const color = getProgressColor(progress);
      const label =
        value === "completed"
          ? "Completed"
          : value === "in_progress"
          ? "In Progress"
          : "Not Started";
      return (
        <span
          className={`px-2 py-1.5 rounded-full text-sm font-semibold ${color} bg-opacity-10`}
        >
          {label}
        </span>
      );
    },
  },
  {
    header: "Due Date",
    accessorKey: "due_date",
    cell: ({ getValue }) => formatDate(getValue()),
  },
];

const MemberDashBoard = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    const fetchTeamDashboardData = async () => {
      try {
        setLoading(true);

        const response = await axiosInstance.get(`/api/dashboard/team`, {
          headers: {
            Authorization: `Bearer ${
              localStorage.getItem("token") || sessionStorage.getItem("token")
            }`,
          },
        });
        console.log("Team Dashboard Data Response:", response);

        let apiData = null;
        if (response?.data?.success && response.data?.data) {
          apiData = response.data.data;
        }

        // Merge API data or dummy data with extra fields
        const finalData = apiData;
        setDashboardData(finalData);
      } catch (error) {
        console.warn("API timeout or error occurred:", error);
        setDashboardData(null);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }
    };

    fetchTeamDashboardData();
  }, []);

  
  // Use API data or fallback to dummy data
  const projectData =
  dashboardData?.my_tasks_today?.length > 0
  ? dashboardData.my_tasks_today
  : dummyProjectData;
  
  const timelineData =
  dashboardData?.project_timeline?.length > 0
  ? dashboardData.project_timeline
  : dummyTimelineData;
  
  const collaborationData = dummyCollaborationData; // Always use dummy since not in API
  
  const productivityMetrics = dashboardData?.productivity_metrics
  ? dashboardData.productivity_metrics
  : dummyProductivityMetrics;
  
  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-50 dark:bg-gradient-to-r dark:from-[#241f53] dark:via-[#0d0130] dark:to-[#2b1a76] ml-64 max-sm:ml-0">
        <div className="text-center">
          <HashLoader
            color="#4F46E5"
            size={70}
            speedMultiplier={1.5}
            cssOverride={{
              display: "block",
              margin: "0 auto",
            }}
          />
          <p className="mt-4 text-lg font-medium text-gray-700 dark:text-white">
            Loading your dashboard...
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="p-5 flex flex-col gap-5 font-[Segoe UI] max-sm:p-2 max-sm:gap-3 dark:bg-white/10 dark:backdrop-blur-md rounded-xl">
      <div className="flex gap-5 flex-col lg:flex-row max-sm:gap-3">
        <div className="w-full lg:w-2/3 border border-gray-200 py-3 px-5 rounded-lg shadow bg-white dark:bg-white/10 dark:backdrop-blur-md max-sm:px-3">
          <h3 className="text-lg font-semibold mb-5 max-sm:mb-2 dark:text-white">My Tasks Today</h3>
          <Table data={projectData} columns={overviewColumns} />
          <button className="mt-6 bg-gradient-to-r from-indigo-600 to-yellow-600 text-white px-4 py-2.5 flex gap-1 items-center justify-center rounded-lg shadow hover:opacity-90 max-sm:mt-2.5 max-sm:px-3 max-sm:py-1.5 max-sm:mx-auto w-[60%] md:w-fit md:px-6">
            <span className="font-semibold scale-125 md:scale-100">+ Add Task</span>
          </button>
        </div>

        <div className="w-full lg:w-1/3 border border-gray-200 p-5 rounded-lg shadow bg-white dark:bg-white/10 dark:backdrop-blur-md max-sm:p-3">
          <h3 className="text-lg font-semibold mb-3 max-sm:mb-1.5 dark:text-white">Project Timeline</h3>
          <div className="text-sm border border-gray-200 py-2 rounded-lg bg-white dark:bg-white/20">
            <div className="font-medium text-[16px] text-gray-800 dark:text-white px-3 py-2 border-b border-gray-300 max-sm:px-1.5 max-sm:tracking-tight max-sm:text-center">
              Current Phase / Next Milestone
            </div>
            {timelineData.map((item, index) => (
              <span
                key={item.project_id || index}
                className="flex justify-between py-2 border-b border-gray-300 last:border-0"
              >
                <span className="px-3">
                  <p className="font-medium text-gray-800 dark:text-white">
                    {item.current_phase}
                  </p>
                  <p className="text-gray-500 text-sm dark:text-gray-300">{item.project_name}</p>
                </span>
                <div className="px-3 text-right">
                  <p className="text-black mt-1 text-sm dark:text-white">
                    {item.next_milestone}
                  </p>
                  <p className="text-gray-500 text-xs dark:text-gray-300">
                    {formatDate(item.milestone_date)}
                  </p>
                </div>
              </span>
            ))}
          </div>
          <button className="mt-6 border border-gray-300 px-4 font-semibold py-2 w-fit mx-auto rounded-md text-sm flex justify-center items-center gap-2 dark:bg-slate-100 hover:bg-gray-50 max-sm:mt-3">
            <CalendarDays size={18} /> View Calendar
          </button>
        </div>
      </div>

      <div className="flex gap-5 flex-col lg:flex-row max-sm:gap-3">
        <div className="w-full lg:w-2/3 border border-gray-200 p-5 rounded-lg shadow bg-white dark:bg-white/10 dark:backdrop-blur-md max-sm:p-3">
          <h3 className="text-lg font-semibold mb-3 max-sm:mb-1.5 dark:text-white">Recent Collaboration</h3>
          <div className="overflow-x-auto border pt-5 pb-2 rounded-lg border-gray-300 bg-white dark:bg-white/10">
            <table className="w-full text-left text-sm max-sm:w-[110vw]">
              <thead className="text-gray-600 dark:text-white border-b border-gray-300">
                <tr>
                  <th className="pb-2 pl-3">Comment/File</th>
                  <th className="pb-2">From Whom</th>
                  <th className="pb-2">Linked to</th>
                  <th className="pb-2">Time ago</th>
                </tr>
              </thead>
              <tbody>
                {collaborationData.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b hover:bg-gray-50 dark:hover:bg-white/30 last:border-0 border-gray-300 text-gray-600 dark:text-white"
                  >
                    <td className="py-3 pl-3">{item.comment}</td>
                    <td className="py-3">{item.from}</td>
                    <td className="py-3">{item.link}</td>
                    <td className="py-3">{item.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="w-full lg:w-1/3 border border-gray-200 p-5 rounded-lg shadow bg-white dark:bg-white/10 dark:backdrop-blur-md max-sm:p-3">
          <h3 className="text-lg font-semibold mb-3 max-sm:mb-1.5 dark:text-white">Today's Productivity</h3>
          <div className="text-sm text-gray-700 space-y-4 bg-white dark:bg-white/10 dark:text-white border border-gray-300 py-4 rounded-lg max-sm:space-y-2">
            <div className="flex justify-between border-b px-4 py-1 text-sm font-semibold max-sm:px-2">
              <span>Tasks Completed</span>
              <span className="text-xl font-bold text-black dark:text-gray-200">
                {productivityMetrics.tasks_completed_today} Task(s)
              </span>
            </div>
            <div className="flex justify-between items-center border-b px-4 py-1 text-sm font-semibold max-sm:px-2">
              <span>Hours Logged</span>
              <span className="text-xl font-bold text-black dark:text-gray-200">
                {productivityMetrics.hours_logged} Hrs
              </span>
            </div>
            <div className="flex justify-between items-center px-4 py-1 text-sm font-semibold max-sm:px-2">
              <span>Current Streak</span>
              <span className="text-xl font-bold text-black dark:text-gray-200">
                {productivityMetrics.streak_days} Days
              </span>
            </div>
          </div>
          <button className="mt-6 border border-gray-300 px-3 py-2 w-fit mx-auto shadow-md rounded-md text-sm flex justify-center items-center gap-2 hover:bg-gray-50 dark:bg-slate-100 max-sm:mt-2 max-sm:px-2 max-sm:w-full">
            <FaArrowRight /> View My Productivity Summary
          </button>
        </div>
      </div>
    </div>
  );
};

export default MemberDashBoard;
