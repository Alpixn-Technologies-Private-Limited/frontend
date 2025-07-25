import React from "react";
import { MdDangerous } from "react-icons/md";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FiFilter } from "react-icons/fi";
import DoughnutChart from "../charts/DoughnutChart";
import Table from "../charts/Table";

const AiConsoleDashboard = () => {
  const insights = [
    {
      title: "Risk Prediction",
      description: "Project Vega is at high risk of delay due to team overlead.",
      color: "text-red-500",
    },
    {
      title: "Performance Forecast",
      description: "C3 revenue expected to rise 12% based on current burn rate.",
      color: "text-green-500",
    },
    {
      title: "Resource Recommendation",
      description: "Assign Neha to Project Orion to balance design workload.",
      color: "text-yellow-500",
    },
    {
      title: "Deadline Adjustment",
      description: "Project Apollo's timeline extended to Aug 5 based on scope.",
      color: "text-blue-500",
    },
  ];

  const quickActions = [
    "Show Project Summary",
    "Manage Automations",
    "Next Week Predictions",
    "AI Insight Settings",
  ];

  const data = {
    labels: [
      "Risk Prediction",
      "Performance Forecast",
      "Resource Recommendation",
      "Deadline Adjustment",
    ],
    datasets: [
      {
        label: "AI Insights",
        data: [25, 25, 25, 25],
        backgroundColor: [
          "#F04438",
          "#12B76A",
          "#FEC84B",
          "#5E4AE3",
        ],
        borderWidth: 2,
        borderColor: "#fff",
      },
    ],
  };

  const options = {
    cutout: "70%",
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.label}: ${context.parsed}%`;
          },
        },
      },
    },
  };

  const automationsData = [
    {
      name: "Low Utilization Email",
      trigger: "Utilization < 60%",
      action: "Email team lead",
      status: "Disabled",
    },
    {
      name: "New Client Welcome Flow",
      trigger: "Client Created",
      action: "Send onboarding email",
      status: "Paused",
    },
    {
      name: "Auto Assign Designer",
      trigger: "Design task created",
      action: "Assign to 'Ravi Kumar'",
      status: "Active",
    },
    {
      name: "Inactive Project Reminder",
      trigger: "No activity for 10 days",
      action: "Notify project manager",
      status: "Active",
    },
    {
      name: "Missed Deadline Escalation",
      trigger: "Task due date passed",
      action: "Send escalation email to admin",
      status: "Disabled",
    },
    {
      name: "Urgent Task Alert",
      trigger: "New task with 'Urgent' priority",
      action: "Push notification to supervisor",
      status: "Active",
    },
    {
      name: "Reopen Stale Bug",
      trigger: "Bug marked 'Closed' & reopened",
      action: "Notify QA team",
      status: "Paused",
    },
  ];

  const automationColumns = [
    {
      accessorKey: "name",
      header: "Name",
      cell: (info) => <span className="font-medium">{info.getValue()}</span>,
    },
    {
      accessorKey: "trigger",
      header: "Trigger Event",
    },
    {
      accessorKey: "action",
      header: "Action",
    },
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
  ];

  return (
    <div className="p-6 space-y-6 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* AI Insights Panel */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">AI Insights Panel</h3>
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="w-full lg:w-1/2 flex justify-center items-center">
              <DoughnutChart data={data} options={options} />
            </div>
            <div className="w-full lg:w-1/2 space-y-3">
              {insights.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2 border p-2 rounded-md shadow-sm"
                >
                  <MdDangerous className={`text-xl ${item.color} mt-1`} />
                  <div>
                    <h5 className="font-semibold text-sm">{item.title}</h5>
                    <p className="text-sm text-gray-600 leading-snug">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
              <p className="text-sm text-gray-400 hover:underline cursor-pointer">
                Get more updates
              </p>
            </div>
          </div>
        </div>

        {/* Chat Help Panel */}
        <div className="bg-gradient-to-br from-[#e0c3fc] to-[#8ec5fc] text-white p-6 rounded-lg shadow-md relative overflow-hidden">
          <p className="text-lg mb-2">Hi Varun</p>
          <h2 className="text-2xl font-bold mb-4">How Can I Help You?</h2>
          <div className="grid grid-cols-2 gap-2 mb-4">
            {quickActions.map((action, i) => (
              <button
                key={i}
                className="bg-white text-black py-1 px-2 rounded-md text-sm font-medium shadow hover:bg-gray-100"
              >
                {action}
              </button>
            ))}
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Ask something..."
              className="w-full px-4 py-2 rounded-full text-black focus:outline-none shadow"
            />
            <FaArrowAltCircleRight className="absolute right-3 top-2 text-indigo-600 text-2xl cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Automations List */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Automations List</h3>
          <div className="flex items-center gap-3">
            <FiFilter className="w-5 h-5 text-gray-600" />
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700">
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