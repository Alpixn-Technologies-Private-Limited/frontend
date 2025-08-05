import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { AiFillWarning } from "react-icons/ai";
import { BsGraphUp } from "react-icons/bs";
import { CiGlobe, CiSettings } from "react-icons/ci";
import {
  FaCalendar,
  FaCalendarAlt,
  FaCaretUp,
  FaChevronDown,
} from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa6";
import { GrGroup } from "react-icons/gr";
import { IoMdCloudUpload } from "react-icons/io";
import { HashLoader } from "react-spinners";
import { IoTimerOutline } from "react-icons/io5";
import { MdGroup, MdTrendingUp } from "react-icons/md";
import { PiCube } from "react-icons/pi";
import { RxCountdownTimer } from "react-icons/rx";
import { TbMoneybag } from "react-icons/tb";
import deadlineGraph from "../../../assets/graphs/deadline-prediction.png";
import performanceGraph from "../../../assets/graphs/performance-insight.png";
import riskGraph from "../../../assets/graphs/risk-alert.png";
import BarChart from "../../charts/BarChart";
import { Link } from "react-router-dom";


const AdminDashboard = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showAll, setShowAll] = useState(false);
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    let dataFetched = false;

    const dummyData = {
      kpi_metrics: {
        total_active_projects: 5,
        total_clients: 8,
        team_utilization: 78,
        monthly_revenue: 4200000,
      },
      ai_insights: {
        risk_alerts: [{}, {}],
        deadline_predictions: [{ project_id: "Apollo", confidence: 0.7 }],
      },
      recent_activities: [
        {
          type: "Dummy Project Initiated",
          message: "Demo data used as fallback.",
          icon: <MdGroup />,
        },
      ],
    };

    const fetchDashboardData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/api/dashboard/admin`
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
        console.warn("API timeout: Using fallback dummy data.");
        setDashboardData(dummyData);
      }
      setLoading(false);
    }, 2000); // 2 seconds

    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
    };
  }, []);

  // Stats data combining API and frontend values
  const stats = [
    {
      title: "Active Projects",
      value: `${
        dashboardData?.kpi_metrics?.total_active_projects || 0
      } Projects`,
      change: "+3 this week", // Frontend value
      icon: <PiCube />,
    },
    {
      title: "Total Clients",
      value: `${dashboardData?.kpi_metrics?.total_clients || 0} Clients`,
      change: "+5 New", // Frontend value
      icon: <CiGlobe />,
    },
    {
      title: "Team Utilisation",
      value: `${dashboardData?.kpi_metrics?.team_utilization || 0}%`,
      change: "Stable", // Frontend value
      icon: <IoTimerOutline />,
    },
    {
      title: "This month revenue (in Lac)",
      value: `₹${
        dashboardData?.kpi_metrics?.monthly_revenue
          ? (dashboardData.kpi_metrics.monthly_revenue / 100000).toFixed(2)
          : "0.00"
      }`,
      change: "+12% from last month", // Frontend value
      icon: <TbMoneybag />,
    },
  ];

  // AI Insights data combining API and frontend values
  const aiInsights = [
    {
      title: "Risk Alert",
      detail: dashboardData?.ai_insights?.risk_alerts?.length
        ? `Project(s) ${dashboardData.ai_insights.risk_alerts.length} at Risk`
        : "No current risks",
      change: dashboardData?.ai_insights?.risk_alerts?.length
        ? `+${dashboardData.ai_insights.risk_alerts.length} risk this week`
        : "No changes",
      icon: (
        <AiFillWarning className="p-[3px] bg-red-500 text-white rounded-md scale-[160%] mr-1" />
      ),
      timeGap: "Delayed timeliness likely", // Frontend value
      img: riskGraph,
    },
    {
      title: "Deadline Prediction",
      detail: dashboardData?.ai_insights?.deadline_predictions?.length
        ? `Project(s) ${
            dashboardData.ai_insights.deadline_predictions[0]?.project_id || "-"
          } late`
        : "No deadline predictions",
      change: dashboardData?.ai_insights?.deadline_predictions?.length
        ? `-${Math.round(
            (1 -
              dashboardData.ai_insights.deadline_predictions[0]?.confidence) *
              100
          )}% On Time Confidence`
        : "No changes",
      icon: (
        <RxCountdownTimer className="p-[3px] bg-yellow-500 text-white rounded-md scale-[160%] mr-1" />
      ),
      timeGap: "May miss deadline", // Frontend value
      img: deadlineGraph,
    },
    {
      title: "Performance Insight",
      detail: "+8% Revenue/Employee", // Frontend value
      change: "Steady growth trend", // Frontend value
      icon: (
        <BsGraphUp className="p-[3px] bg-green-700 text-white rounded-md scale-[160%] mr-1" />
      ),
      timeGap: "Based on last 30 days", // Frontend value
      img: performanceGraph,
    },
  ];

  const quickActions = [
    {
      title: "Add New Task",
      desc: "Create and Assign a Task",
      icon: <FaClipboardList />,
    },
    {
      title: "Add Team Member",
      desc: "Invite Someone to the team",
      icon: <GrGroup />,
    },
    {
      title: "Schedule Meeting",
      desc: "Setup a new meeting",
      icon: <FaCalendarAlt />,
    },
    {
      title: "Upload File",
      desc: "Add files to a project",
      icon: <IoMdCloudUpload />,
    },
  ];

  // Bar chart data (frontend values)
  const barData = {
    labels: ["Apollo", "Vega", "Orion", "Nova", "Zenith", "Helix", "Lumen"],
    datasets: [
      {
        label: "Forcasted Completion",
        data: [60, 35, 65, 25, 40, 70, 55],
        backgroundColor: "#D2CFFF", // Light Lavender
      },
      {
        label: "Actual Completion",
        data: [85, 65, 35, 55, 80, 40, 90],
        backgroundColor: "#4F46E5", // Indigo
      },
    ],
  };

  const barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 2.3,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          boxWidth: 20,
          color: "#374151",
          padding: 15,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 10,
          callback: (value) => `${value}%`,
          color: "#6B7280",
        },
        grid: {
          color: "#E5E7EB",
        },
      },
      x: {
        ticks: {
          color: "#6B7280",
        },
        grid: {
          display: false,
        },
      },
    },
  };

  // Recent activities (frontend values)
  const activities = [dashboardData?.recent_activities[0]] || [
    {
      title: "Project Apollo Marked Complete",
      desc: "Final Milestone Reached Successfully",
      icon: <MdGroup />,
    },
    {
      title: "Nova Budget Approved",
      desc: "Finance team confirmed the funding",
      icon: <MdGroup />,
    },
    {
      title: "Vega Client Feedback Received",
      desc: "Positive feedback with suggestions",
      icon: <MdGroup />,
    },
    {
      title: "Zenith Kickoff Meeting Scheduled",
      desc: "Initial team briefing set",
      icon: <MdGroup />,
    },
    {
      title: "Orion Phase 2 Started",
      desc: "Development resumed as planned",
      icon: <MdGroup />,
    },
    {
      title: "Helix Delayed Report",
      desc: "Blocked due to external dependency",
      icon: <MdGroup />,
    },
  ];

  const visibleActivities = showAll ? activities : activities.slice(0, 4);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-50 ml-64 max-sm:ml-0">
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
          <p className="mt-4 text-lg font-medium text-gray-700">
            Loading your dashboard...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="px-6 py-3 rounded-md space-y-4 bg-gray-50 dark:bg-gray-200 min-h-screen h-fit max-sm:px-3 max-sm:w-full">
      {/* Header */}
      <div className="flex justify-between items-center flex-wrap gap-4 max-sm:pt-2">
        <div className="flex items-center gap-2 relative text-white bg-[#4F46E5] py-2 w-fit rounded-lg shadow-sm max-sm:mx-auto max-sm:w-[90%]">
          <FaCalendar className="absolute left-4 top-3" />
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="dd MMMM, yyyy"
            className="outline-none bg-transparent text-center w-fit p-0 cursor-pointer"
          />
          <FaChevronDown className="absolute top-3 right-3" />
        </div>
        <div className="flex gap-4 max-sm:mx-auto">
          <Link to="/project/add-new" className="bg-gradient-to-r from-indigo-600 to-yellow-600 text-white px-4 py-1.5 flex gap-1 items-center justify-center rounded-lg shadow hover:opacity-90 max-sm:px-2 max-sm:py-1">
            <div className="font-semibold scale-125">+</div> New Project
          </Link>
          <button className="flex items-center gap-2 border text-lg border-gray-300 bg-white text-black px-4 py-2 rounded-lg shadow hover:bg-gray-50 max-sm:px-2 max-sm:py-1">
            <MdGroup className="scale-110" /> New Client
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-sm:gap-3">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-sm border border-gray-300 rounded-xl p-5 transition-transform hover:-translate-y-1 duration-200 max-sm:p-3"
          >
            <div className="flex justify-between items-center text-gray-500">
              <span className="font-semibold">{item.title}</span>
              <span className="text-2xl text-[#4F46E5] bg-gray-100 border-gray-300 rounded-full p-2 border max-sm:scale-110 max-sm:p-1.5">
                {item.icon}
              </span>
            </div>
            <div className="mt-3 flex items-center gap-2">
              <span className="text-xl font-bold text-gray-800">
                {item.value}
              </span>
              <FaCaretUp className="text-green-500" />
              <span className="text-sm text-green-500">{item.change}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col justify-between lg:flex-row gap-6 w-full">
        <div className="w-[49%] bg-white shadow-sm border border-gray-300 h-fit rounded-xl p-5 space-y-5 pt-3 max-sm:w-full">
          <div className="flex justify-between items-center mt-1">
            <h5 className="text-2xl font-semibold text-black">AI Insights</h5>
            <div className="relative inline-block">
              <select className="appearance-none px-3 pr-6 py-1 rounded-md w-fit outline-none font-medium text-center text-sm">
                <option>Daily</option>
                <option>Weekly</option>
                <option>Monthly</option>
                <option>Yearly</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500 text-sm">
                <FaChevronDown />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-3 -mt-2">
            {aiInsights.map((item, index) => (
              <div
                key={index}
                className="py-1 px-2 border border-gray-200 flex justify-between items-center rounded-lg hover:bg-gray-50 bg-white transition shadow-sm"
              >
                <div>
                  <div className="flex items-center gap-2 p-1 rounded-lg font-semibold">
                    {item.icon}
                    <span>{item.title}</span>
                  </div>
                  <div className="text-gray-700 font-semibold text-xl flex gap-1 max-sm:font-medium max-sm:text-lg max-sm:leading-6">
                    {item.detail}
                    <span className="ml-2 text-green-600 text-xs flex items-center gap-1">
                      <MdTrendingUp /> {item.change}
                    </span>
                  </div>
                  <div className="text-gray-500 text-xs flex items-center gap-1 mt-1">
                    {item.timeGap}
                  </div>
                </div>
                <img
                  src={item.img}
                  alt="img"
                  className="w-32 h-20 object-cover rounded-lg max-sm:hidden"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="w-[49%] h-[fit] bg-[tranparent] rounded-xl p-0 max-sm:w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-sm:gap-2">
            {quickActions.map((task, i) => (
              <div
                key={i}
                className="border border-gray-300 h-[11rem] px-4 rounded-lg bg-white transition shadow-sm flex flex-col items-center justify-center gap-2 hover:shadow-lg cursor-pointer"
              >
                <span className="text-[#4F46E5] bg-[#6b64f42c] text-4xl rounded-md mb-1 p-2 border mt-6">
                  {task.icon}
                </span>
                <span className="font-semibold text-lg">{task.title}</span>
                <p className="text-sm text-gray-600 mb-6">{task.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="h-[24rem] mt-8 flex justify-between flex-col md:flex-row text-gray-500 gap-6 max-sm:h-fit max-sm:gap-2">
        <div className="w-full bg-white md:w-2/3 border border-gray-300 p-4 max-sm:p-2 rounded-lg shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Project Health Overview
            </h3>
            <select className="border border-gray-300 rounded-md px-2 py-1 text-sm focus:ring-2 focus:ring-indigo-400 outline-none max-sm:px-1">
              <option value="">Last 6 Months</option>
              <option value="">Last Year</option>
              <option value="">This Quarter</option>
            </select>
          </div>
          <div className="h-[20rem] w-full flex justify-center items-center max-sm:h-[15rem] max-sm:p-0 overflow-x-auto">
            <BarChart options={barChartOptions} data={barData} />
          </div>
        </div>

        <div className="w-full flex flex-col border border-gray-300 shadow-sm rounded-lg bg-white md:w-1/3 p-3 max-w-sm text-left">
          <h4 className="text-lg font-semibold text-gray-800 mb-4">
            Recent Activity
          </h4>

          <div
            className={`space-y-3 max-sm:min-h-40 ${
              showAll ? "max-h-80 overflow-y-auto pr-1" : ""
            }`}
          >
            {visibleActivities.map((item, index) => (
              <div
                key={index}
                className="flex w-full items-center gap-3 bg-gray-100 py-1.5 px-3 rounded-lg shadow-md border border-gray-300 hover:bg-gray-50 transition max-sm:gap-1.5 max-sm:px-1 max-sm:tracking-tight"
              >
                {item.icon ? (
                  <span className="text-2xl text-gray-600">{item.icon}</span>
                ) : (
                  <MdGroup className="text-2xl text-gray-600" />
                )}
                <div className="flex-1">
                  <h5 className="font-medium text-gray-700">{item.type}</h5>
                  <p className="text-sm text-gray-500">{item.message}</p>
                </div>
                <CiSettings className="text-xl text-gray-400 hover:text-indigo-500 cursor-pointer" />
              </div>
            ))}
          </div>

          {!showAll && activities.length > 4 && (
            <button
              onClick={() => setShowAll(true)}
              className="mt-3 text-indigo-600 text-md font-semibold"
            >
              {"Show more >"}
            </button>
          )}
          {showAll && activities.length > 4 && (
            <button
              onClick={() => setShowAll(false)}
              className="mt-3 text-indigo-600 text-md hover:underline font-semibold"
            >
              Show less
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
