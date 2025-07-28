import { BsGraphUpArrow, BsThreeDots } from "react-icons/bs";
import { FaClockRotateLeft } from "react-icons/fa6";
import { FiFilter } from "react-icons/fi";
import { IoSend, IoWarning } from "react-icons/io5";
import { MdDangerous, MdGroups2, MdInfoOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import DoughnutChart from "../charts/DoughnutChart";
import Table from "../charts/Table";

const AiConsoleDashboard = () => {
  const insights = [
    {
      title: "Risk Prediction",
      description:
        "Project Vega is at high risk of delay due to team overlead.",
      color: "text-red-500",
      icon: (
        <IoWarning className="text-white bg-red-500 p-1.5 scale-125 rounded-md" />
      ),
    },
    {
      title: "Performance Forecast",
      description:
        "C3 revenue expected to rise 12% based on current burn rate.",
      color: "text-green-500",
      icon: (
        <BsGraphUpArrow className="text-white bg-green-500 p-1.5 rounded-md scale-125" />
      ),
    },
    {
      title: "Resource Recommendation",
      description: "Assign Neha to Project Orion to balance design workload.",
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

  const data = {
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

  const options = {
    cutout: "80%",
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
      btn: (
        <BsThreeDots className="text-gray-500 text-xl cursor-pointer rotate-90" />
      ),
    },
    {
      name: "New Client Welcome Flow",
      trigger: "Client Created",
      action: "Send onboarding email",
      status: "Paused",
      btn: (
        <BsThreeDots className="text-gray-500 text-xl cursor-pointer rotate-90" />
      ),
    },
    {
      name: "Auto Assign Designer",
      trigger: "Design task created",
      action: "Assign to 'Ravi Kumar'",
      status: "Active",
      btn: (
        <BsThreeDots className="text-gray-500 text-xl cursor-pointer rotate-90" />
      ),
    },
    {
      name: "Inactive Project Reminder",
      trigger: "No activity for 10 days",
      action: "Notify project manager",
      status: "Active",
      btn: (
        <BsThreeDots className="text-gray-500 text-xl cursor-pointer rotate-90" />
      ),
    },
    {
      name: "Missed Deadline Escalation",
      trigger: "Task due date passed",
      action: "Send escalation email to admin",
      status: "Disabled",
      btn: (
        <BsThreeDots className="text-gray-500 text-xl cursor-pointer rotate-90" />
      ),
    },
    {
      name: "Urgent Task Alert",
      trigger: "New task with 'Urgent' priority",
      action: "Push notification to supervisor",
      status: "Active",
      btn: (
        <BsThreeDots className="text-gray-500 text-xl cursor-pointer rotate-90" />
      ),
    },
    {
      name: "Reopen Stale Bug",
      trigger: "Bug marked 'Closed' & reopened",
      action: "Notify QA team",
      status: "Paused",
      btn: (
        <BsThreeDots className="text-gray-500 text-xl cursor-pointer rotate-90" />
      ),
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
    {
      id: "actions",
      header: "", // optional header
      accessorFn: (row) => row.btn, // ensures value passes through
      cell: ({ getValue }) => getValue(), // renders the button
    },
  ];

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* AI Insights Panel */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">AI Insights Panel</h3>
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="w-full lg:w-1/2 flex my-auto h-fit justify-center items-center relative">
              <DoughnutChart data={data} options={options} />
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
                  className="flex items-start gap-2 px-2 py-1 rounded-md"
                >
                  {item.icon ? (
                    <span className={`text-2xl ${item.color} p-1 rounded-full`}>
                      {item.icon}
                    </span>
                  ) : (
                    <MdDangerous className="text-red-500 text-2xl p-1.5 rounded-md scale-125" />
                  )}
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
          <div className="mt-8 flex flex-col items-center">
            <p className="text-[15px] font-normal mb-2">Hi Varun</p>
            <h2 className="text-[28px] font-semibold mb-4">
              How Can I Help You?
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {quickActions.map((action, i) => (
                <button
                  key={i}
                  className="bg-[#ffffff3c] text-white py-2 px-4 rounded-lg text-[16px] font-normal shadow"
                >
                  {action}
                </button>
              ))}
            </div>
          </div>
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Ask something..."
              className="w-full px-6 py-3 rounded-full text-black focus:outline-none shadow bg-[#ffffff5a] border border-white"
            />
            <IoSend className="absolute right-3 top-3 text-white text-2xl cursor-pointer" />
          </div>
        </Link>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Automations List</h3>
          <div className="flex items-center gap-3">
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
