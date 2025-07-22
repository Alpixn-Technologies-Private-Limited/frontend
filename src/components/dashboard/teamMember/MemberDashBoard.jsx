import React from "react";
import Table from "../../charts/Table";
import { CalendarDays } from "lucide-react";
import { FaArrowRight } from "react-icons/fa";
import Footer from "../../Footer";

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

const timelineData = [
  { event: "Team Review Call", project: "App Migration", date: "2 July 2025" },
  { event: "Design QA Handoff", project: "Web Redesign", date: "5 July 2025" },
  {
    event: "Campaign Asset Due",
    project: "Q3 Campaign Launch",
    date: "6 July 2025",
  },
];

const collaborationData = [
  {
    comment: "Website Redesign",
    from: "Raj Sharma",
    link: "Web Redesign",
    time: "2h ago",
  },
  {
    comment: "App Migration",
    from: "Ananya Menon",
    link: "Q3 Campaign Launch",
    time: "5h ago",
  },
  {
    comment: "Q3 Campaign Launch",
    from: "You",
    link: "App Mitigation",
    time: "1d ago",
  },
];

const getProgressColor = (value) => {
  if (value <= 50) return "text-red-600";
  if (value <= 75) return "text-yellow-600";
  return "text-green-600";
};

const overviewColumns = [
  {
    header: "Project Name",
    accessorKey: "project",
  },
  {
    header: "Client",
    accessorKey: "client",
    cell: ({ getValue }) => <div className="py-1.5">{getValue()}</div>,
  },
  {
    header: "Progress",
    accessorKey: "progress",
    cell: ({ getValue }) => {
      const value = getValue();
      const color = getProgressColor(value);
      const label =
        value < 50 ? "Pending" : value < 90 ? "In progress" : "Completed";
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
    header: "Deadline",
    accessorKey: "deadline",
  },
];

const MemberDashBoard = () => {
  return (
    <div className="p-5 flex flex-col gap-5 font-[Segoe UI]">
      <div className="flex gap-5">
        <div className="w-full lg:w-2/3 border border-gray-200 py-3 px-5 rounded-lg shadow bg-white">
          <h3 className="text-lg font-semibold mb-5">My Project Overview</h3>
          <Table data={projectData} columns={overviewColumns} />
          <button className="mt-6 bg-gradient-to-r from-indigo-600 to-yellow-600 text-white px-4 py-2.5 flex gap-1 items-center justify-center rounded-lg shadow hover:opacity-90">
            <span className="font-semibold scale-125">+</span> Add Project
          </button>
        </div>

        <div className="w-full lg:w-1/3 border border-gray-200 p-5 rounded-lg shadow bg-white">
          <h3 className="text-lg font-semibold mb-3">Project Timeline View</h3>
          <div className="text-sm border border-gray-200 py-2 rounded-lg">
            <div className="font-medium text-[16px] text-gray-800 px-3 py-2 border-b border-gray-300">
              Milestone/Events
            </div>
            {timelineData.map((item, index) => (
              <span
                key={index}
                className="flex justify-between py-2 border-b border-gray-300 last:border-0"
              >
                <span className="px-3">
                  <p className="font-medium text-gray-800">{item.event}</p>
                  <p className="text-gray-500 text-sm">{item.project}</p>
                </span>
                <p className="text-black mt-1 text-sm px-3">{item.date}</p>
              </span>
            ))}
          </div>
          <button className="mt-6 border border-gray-300 px-4 font-semibold py-2 w-fit mx-auto rounded-md text-sm flex justify-center items-center gap-2 hover:bg-gray-50">
            <CalendarDays size={18} /> View Calendar
          </button>
        </div>
      </div>

      <div className="flex gap-5">
        <div className="w-full lg:w-2/3 border border-gray-200 p-5 rounded-lg shadow bg-white">
          <h3 className="text-lg font-semibold mb-3">Recent Collaboration</h3>
          <div className="overflow-x-auto border pt-5 pb-2 rounded-lg border-gray-300">
            <table className="w-full text-left text-sm">
              <thead className="text-gray-600 border-b border-gray-300">
                <tr>
                  <th className="pb-2 pl-3">Comment/File</th>
                  <th className="pb-2">From Whom</th>
                  <th className="pb-2">Linked to</th>
                  <th className="pb-2">Time ago</th>
                </tr>
              </thead>
              <tbody>
                {collaborationData.map((item, idx) => (
                  <tr key={idx} className="border-b hover:bg-gray-50 last:border-0 border-gray-300 text-gray-600">
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

        <div className="w-full lg:w-1/3 border border-gray-200 p-5 rounded-lg shadow bg-white">
          <h3 className="text-lg font-semibold mb-3">Personal Productivity</h3>
          <div className="text-sm text-gray-700 space-y-4 border border-gray-300 py-4 rounded-lg ">
            <div className="flex justify-between border-b px-4 py-1 text-sm font-semibold">
              <span>On-Line Task</span>
              <span className="text-xl font-bold text-black">72%</span>
            </div>
            <div className="flex justify-between items-center border-b px-4 py-1 text-sm font-semibold">
              <span>Completed Task</span>
              <span className="text-xl font-bold text-black">18 Task</span>
            </div>
            <div className="flex justify-between items-center px-4 py-1 text-sm font-semibold">
              <span>Productive Time (Last Week)</span>
              <span className="text-xl font-bold text-black">54 Hrs</span>
            </div>
          </div>
          <button className="mt-6 border border-gray-300 px-3 py-2 w-fit mx-auto shadow-md rounded-md text-sm flex justify-center items-center gap-2 hover:bg-gray-50">
            <FaArrowRight /> View My Productivity Summary
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MemberDashBoard;
