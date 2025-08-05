import { BsGraphUpArrow, BsThreeDots } from "react-icons/bs";
import { FaClockRotateLeft } from "react-icons/fa6";
import { FiFilter } from "react-icons/fi";
import { IoSend, IoWarning } from "react-icons/io5";
import { MdGroups2, MdInfoOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { HashLoader } from "react-spinners";
import axios from "axios";

import DoughnutChart from "../charts/DoughnutChart";
import Table from "../charts/Table";

const AiConsoleDashboard = () => {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);

  const dummyData = {
    ai_insights: {
      total_predictions: 1000,
      accuracy_rate: 85,
      active_alerts: 10,
      automation_saves: 120,
    },
    risk_predictions: [{
      id: 1,
      project_id: 10,
      project_name: "E-commerce Platform",
      risk_type: "timeline",
      risk_level: "high",
      probability: 0.85,
      impact: "Project may be delayed by 2 weeks",
      suggested_actions: [
        "Add additional developer",
        "Reduce scope for MVP",
        "Extend deadline",
      ],
      created_at: "2024-07-08T10:00:00Z",
    },
  ],

    performance_forecasts: [
      {
          "project_id": 10,
          "metric": "completion_date",
          "predicted_value": "2024-09-05",
          "confidence": 0.78,
          "factors": ["team_velocity", "scope_changes", "dependencies"]
        },
    ],
    resource_recommendations: [
      {
          "type": "team_allocation",
          "project_id": 10,
          "message": "Consider assigning Sarah Wilson to frontend tasks",
          "impact": "Could improve delivery by 1 week",
          "confidence": 0.72
        },
    ],
    automation_rules: [
      {
          "id": 1,
          "name": "Auto-assign code reviews",
          "status": "active",
          "trigger": "pull_request_created",
          "action": "assign_reviewer",
          "executions": 45,
          "success_rate": 98
        },
    ],
  };

  useEffect(() => {
    const fetchAIConsoleData = async () => {
      try {
        setLoading(true);

        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/api/ai-console/dashboard`
        );

        if (response?.data?.response?.success) {
          setApiData(response.data.response.data);
        } else {
          setApiData(dummyData);
        }
      } catch (error) {
        console.warn("API timeout or error occurred:", error);
        setApiData(dummyData);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    };

    fetchAIConsoleData();
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-50 ml-64 max-sm:ml-0">
        <div className="text-center">
          <HashLoader
            color="#4F46E5"
            size={70}
            speedMultiplier={1.5}
            cssOverride={{ display: "block", margin: "0 auto" }}
          />
          <p className="mt-4 text-lg font-medium text-gray-700">
            Loading your dashboard...
          </p>
        </div>
      </div>
    );
  }

  const data = apiData || dummyData;

  const insights = [
    {
      title: "Risk Prediction",
      description:
        data?.risk_predictions?.[0]?.impact ||
        "Project Vega is at high risk of delay due to team overload.",
      color: "text-red-500",
      icon: (
        <IoWarning className="text-white bg-red-500 p-1.5 scale-125 rounded-md" />
      ),
    },
    {
      title: "Performance Forecast",
      description: `Forecast: ${data?.performance_forecasts?.[0]?.predicted_value} based on factors like team velocity.`,
      color: "text-green-500",
      icon: (
        <BsGraphUpArrow className="text-white bg-green-500 p-1.5 rounded-md scale-125" />
      ),
    },
    {
      title: "Resource Recommendation",
      description:
        data?.resource_recommendations?.[0]?.message ||
        "Assign Neha to Project Orion to balance design workload.",
      color: "text-yellow-500",
      icon: (
        <MdGroups2 className="text-white bg-yellow-500 p-1.5 rounded-md scale-125" />
      ),
    },
    {
      title: "Deadline Adjustment",
      description:
        "Project Apollo's timeline extended to Aug 5 based on scope.",
      color: "text-blue-500",
      icon: (
        <FaClockRotateLeft className="text-white bg-blue-500 p-1.5 scale-125 rounded-md" />
      ),
    },
  ];

  const quickActions = [
    "Show Project Summary",
    "Manage Automations",
    "Next Week Predictions",
    "AI Insight Settings",
  ];

  const doughnutData = {
    labels: [
      "Deadline Adjustment",
      "Resource Recommendation",
      "Performance Forecast",
      "Risk Prediction",
    ],
    datasets: [
      {
        label: "AI Insights",
        data: [50, 26, 15, 9],
        backgroundColor: ["#4f46e5", "#d6a700", "#009300", "#f50f0b"],
        borderWidth: 3,
        borderRadius: 50,
        borderColor: "#fff",
      },
    ],
  };

  const doughnutOptions = {
    cutout: "80%",
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context) => `${context.label}: ${context.parsed}%`,
        },
      },
    },
  };

  const automationsData = data?.automation_rules?.map((item) => ({
    ...item,
    btn: (
      <BsThreeDots className="text-gray-500 text-xl cursor-pointer rotate-90" />
    ),
  }));

  const automationColumns = [
    {
      accessorKey: "name",
      header: "Name",
      cell: (info) => <span className="font-medium">{info.getValue()}</span>,
    },
    { accessorKey: "trigger", header: "Trigger Event" },
    { accessorKey: "action", header: "Action" },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ getValue }) => {
        const status = getValue();
        const colorMap = {
          Active: "bg-green-100 text-green-800",
          Paused: "bg-yellow-100 text-yellow-800",
          Disabled: "bg-red-100 text-red-800",
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
      header: "",
      accessorFn: (row) => row.btn,
      cell: ({ getValue }) => getValue(),
    },
  ];

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen max-sm:p-3 max-sm:space-y-3">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-sm:gap-3">
        <div className="bg-white p-6 rounded-lg shadow-md max-sm:p-3">
          <h3 className="text-xl font-bold mb-4 max-sm:text-center">
            AI Insights Panel
          </h3>
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="w-full lg:w-1/2 flex my-auto h-fit justify-center items-center relative">
              <DoughnutChart data={doughnutData} options={doughnutOptions} />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <p className="w-fit text-[#737373] font-medium">Total</p>
                <span className="font-semibold text-xl w-32">
                  100% Insights Resolved
                </span>
              </div>
            </div>
            <div className="w-full lg:w-1/2 space-y-2">
              {insights.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2 px-2 py-1 rounded-md max-sm:px-1"
                >
                  <span className={`text-2xl ${item.color} p-1 rounded-full`}>
                    {item.icon}
                  </span>
                  <div>
                    <h5 className="font-semibold text-sm">{item.title}</h5>
                    <p className="text-sm text-gray-600 leading-snug">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-fit mr-auto flex items-center hover:underline cursor-pointer gap-1 mt-4">
            <MdInfoOutline className="text-gray-500" />
            <p className="text-sm text-gray-500 w-fit mr-auto">
              Get more updates
            </p>
          </div>
        </div>

        <Link
          to="/ai-console/setting"
          className="bg-gradient-to-br from-[#4F46E5CC] via-[#D6A700CC] to-[#B700FFCC] text-white p-6 rounded-lg shadow-md relative flex flex-col justify-between items-center overflow-hidden"
        >
          <div className="mt-8 flex flex-col items-center max-sm:mt-3">
            <p className="text-[15px] font-normal mb-2 max-sm:font-medium">
              Hi Varun
            </p>
            <h2 className="text-[28px] font-semibold mb-4 max-sm:tracking-tight max-sm:text-2xl">
              How Can I Help You?
            </h2>
            <div className="grid grid-cols-2 gap-3 max-sm:gap-2">
              {quickActions.map((action, i) => (
                <button
                  key={i}
                  className="bg-[#ffffff3c] text-white py-2 px-4 rounded-lg text-[16px] font-normal shadow max-sm:min-h-[100px]"
                >
                  {action}
                </button>
              ))}
            </div>
          </div>
          <div className="relative w-full max-sm:mt-3 max-sm:-mb-3">
            <input
              type="text"
              placeholder="Ask something..."
              className="w-full px-6 py-3 rounded-full text-black focus:outline-none shadow bg-[#ffffff5a] border border-white"
            />
            <IoSend className="absolute right-3 top-3 text-white text-2xl cursor-pointer" />
          </div>
        </Link>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md max-sm:p-3">
        <div className="flex justify-between items-center mb-4 max-sm:flex-col max-sm:items-start">
          <h3 className="text-xl font-semibold max-sm:mb-3 max-sm:ml-3">
            Automations List
          </h3>
          <div className="flex items-center gap-3 max-sm:ml-auto">
            <FiFilter className="w-5 h-5 text-gray-600" />
            <button className="bg-gradient-to-r from-[#4F46E5] to-[#D6A700] text-white px-4 py-2 rounded-md text-sm font-medium">
              + Create New Rule
            </button>
          </div>
        </div>
        <Table data={automationsData} columns={automationColumns} />
      </div>
    </div>
  );
};

export default AiConsoleDashboard;
