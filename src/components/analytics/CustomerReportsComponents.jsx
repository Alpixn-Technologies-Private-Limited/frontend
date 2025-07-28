// CustomReportsComponent.jsx
import {
    ArcElement,
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Tooltip,
} from "chart.js";
import { useState } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import { BiSave } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";
import Table from "../charts/Table";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  ArcElement
);

const CustomReportsComponent = () => {
  const [selectedMetrics, setSelectedMetrics] = useState([]);
  const [chartType, setChartType] = useState("bar");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const reportsPerPage = 5;

  const toggleMetric = (metric) => {
    setSelectedMetrics((prev) =>
      prev.includes(metric)
        ? prev.filter((m) => m !== metric)
        : [...prev, metric]
    );
  };

  const chartData = {
    labels: ["Ava", "Jordan", "Taylor", "Casey", "Megan"],
    datasets: [
      {
        label: "Tasks",
        data: [28, 24, 20, 22, 26],
        backgroundColor: "#6366F1",
        borderColor: "#6366F1",
        fill: false,
        tension: 0.4,
      },
    ],
  };

  const pieData = {
    labels: ["Completed", "In Progress", "Overdue"],
    datasets: [
      {
        data: [40, 35, 25],
        backgroundColor: ["#10B981", "#3B82F6", "#EF4444"],
      },
    ],
  };

  const reports = [
    {
      name: "Project Overview",
      owner: "Sophia Clark",
      modified: "2023-07-13",
      status: "Active",
    },
    {
      name: "Team Performance",
      owner: "Ethan Miller",
      modified: "2023-07-11",
      status: "Active",
    },
    {
      name: "Budget Tracking",
      owner: "Caleb Davis",
      modified: "2023-07-09",
      status: "Inactive",
    },
    {
      name: "Resource Allocation",
      owner: "Liam Moore",
      modified: "2023-07-08",
      status: "Active",
    },
    {
      name: "Client Satisfaction",
      owner: "Ava Martinez",
      modified: "2023-07-07",
      status: "Inactive",
    },
    {
      name: "Productivity Trends",
      owner: "Noah Smith",
      modified: "2023-07-05",
      status: "Active",
    },
    {
      name: "Workload Insights",
      owner: "Mia Johnson",
      modified: "2023-07-04",
      status: "Inactive",
    },
  ];

  const templates = [
    {
      title: "Project Status Report",
      desc: "Includes project timelines and milestones.",
      image:
        "https://cdn.prod.website-files.com/63f6e52346a353ca1752970e/643e32918d1560dfa30e4e8f_project-status-reports.jpeg",
    },
    {
      title: "Team Performance Analysis",
      desc: "Analyze team productivity and efficiency.",
      image:
        "https://images.squarespace-cdn.com/content/v1/5b048119f2e6b103db959419/1586785575712-47T4FEX91PC489X2XSRA/Sports+Performance+Analysis+-+Role+of+a+Performance+Analyst",
    },
    {
      title: "Budget Overview",
      desc: "Monitor project expenses and budget usage.",
      image: "https://camphouse.io/wp-content/uploads/advertising-budget.webp",
    },
    {
      title: "Resource Management",
      desc: "Manage allocation and workload.",
      image:
        "https://4squareviews.com/wp-content/uploads/2012/08/082812_2055_1.png?w=584",
    },
    {
      title: "Client Feedback",
      desc: "Analyze client satisfaction data.",
      image:
        "https://cdn-static.findly.com/wp-content/uploads/sites/1392/2022/07/11183623/KenJDblog_full.jpg",
    },
    {
      title: "Custom Report",
      desc: "Build custom reports tailored to your needs.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCy8rQNyW9f4fRAJytiNuUXoa81jRdYSQ24XL_elgZfQ3tF31-IJE6f_49aZiGy0kjXK4&usqp=CAU",
    },
  ];

  const tableData = chartData.labels.map((label, index) => ({
  name: label,
  value: chartData.datasets[0].data[index],
}));

const tableColumns = [
  {
    header: "Name",
    accessorKey: "name",
  },
  {
    header: "Tasks",
    accessorKey: "value",
  },
];


  const indexOfLastReport = currentPage * reportsPerPage;
  const indexOfFirstReport = indexOfLastReport - reportsPerPage;
  const currentReports = reports
    .filter((r) => r.name.toLowerCase().includes(search.toLowerCase()))
    .slice(indexOfFirstReport, indexOfLastReport);

  const totalPages = Math.ceil(
    reports.filter((r) => r.name.toLowerCase().includes(search.toLowerCase()))
      .length / reportsPerPage
  );

  return (
    <div className="p-6 border border-gray-400 rounded-2xl space-y-8 -mt-4">
      <div className="flex justify-between items-center">
        <h5 className="text-2xl font-semibold text-indigo-600">
          Report Builder
        </h5>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded flex items-center gap-1">
          <BiSave /> Save
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-1 space-y-4">
          <h3 className="text-lg font-medium">Report Builder</h3>
          <div>
            <p className="font-medium text-sm mb-1">Metrics</p>
            {[
              "Tasks Completed",
              "Tasks In Progress",
              "Tasks Overdue",
              "Total Project Hours",
              "Team Member Performance",
            ].map((metric) => (
              <label key={metric} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedMetrics.includes(metric)}
                  onChange={() => toggleMetric(metric)}
                />
                <span>{metric}</span>
              </label>
            ))}
          </div>

          <div>
            <p className="font-medium text-sm mb-1">Visualization</p>
            <div className="flex gap-2 flex-wrap">
              {["line", "bar", "pie", "table"].map((type) => (
                <button
                  key={type}
                  onClick={() => setChartType(type)}
                  className={`px-3 py-1 border rounded capitalize ${
                    chartType === type ? "bg-indigo-100" : ""
                  }`}
                >
                  {type} Chart
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="font-medium text-sm mb-1">Schedule</p>
            <input
              type="text"
              placeholder="e.g. Weekly, Monthly"
              className="border rounded-lg p-2 w-full bg-indigo-50"
            />
          </div>
        </div>

        <div className="col-span-2">
          <h3 className="text-lg font-medium mb-2">Report Preview</h3>
          <div className="border p-4 rounded shadow bg-white">
            <h4 className="text-md font-semibold mb-2">
              Tasks Completed by Team Member
            </h4>
            <p className="text-sm text-gray-500 mb-4">120 - Last Week +15%</p>
            <div className="h-64 w-full">
              {chartType === "bar" && (
                <Bar data={chartData} options={{ responsive: true, maintainAspectRatio: true, aspectRatio: 2.8, }} />
              )}
              {chartType === "line" && (
                <Line data={chartData} options={{ responsive: true, maintainAspectRatio: true, aspectRatio: 2.8, }} />
              )}
              {chartType === "pie" && (
                <Pie data={pieData} options={{ responsive: true, maintainAspectRatio: true, aspectRatio: 2.8, }} />
              )}
              {chartType === "table" && (
                <Table data={tableData} columns={tableColumns} />
              )}
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg font-semibold">All Reports</h3>
          <button className="bg-indigo-600 text-white px-3 py-1.5 rounded flex items-center gap-1">
            <IoMdAdd /> New Report
          </button>
        </div>
        <input
          type="text"
          placeholder="Search reports"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-3 py-2 border rounded mb-4"
        />
        <div className="overflow-x-auto">
          <table className="w-full text-left border">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2">Name</th>
                <th className="p-2">Owner</th>
                <th className="p-2">Last Modified</th>
                <th className="p-2">Status</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentReports.map((report, i) => (
                <tr key={i} className="border-t">
                  <td className="p-2">{report.name}</td>
                  <td className="p-2">{report.owner}</td>
                  <td className="p-2">{report.modified}</td>
                  <td className="p-2">{report.status}</td>
                  <td className="p-2 text-indigo-600 cursor-pointer">View</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: totalPages }, (_, idx) => idx + 1).map(
            (num) => (
              <button
                key={num}
                onClick={() => setCurrentPage(num)}
                className={`px-3 py-1 border rounded ${
                  currentPage === num ? "bg-indigo-600 text-white" : ""
                }`}
              >
                {num}
              </button>
            )
          )}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Templates</h3>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-5">
          {templates.map((t, i) => (
            <div
              key={i}
              className="min-w-[250px] border p-4 rounded shadow-sm bg-white hover:shadow-md"
            >
              <img
                src={t.image}
                alt={"picture"}
                className="w-full h-36 object-cover rounded mb-2"
              />
              <h4 className="font-medium text-lg mb-1">{t.title}</h4>
              <p className="text-sm text-gray-500">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomReportsComponent;