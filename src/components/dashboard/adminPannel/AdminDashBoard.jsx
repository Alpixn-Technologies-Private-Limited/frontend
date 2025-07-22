import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { CiGlobe, CiSettings } from "react-icons/ci";
import { FaCalendar, FaChevronDown } from "react-icons/fa";
import { IoTimerOutline } from "react-icons/io5";
import { MdGroup, MdOutlineTask } from "react-icons/md";
import { PiCube } from "react-icons/pi";
import { TbMoneybag } from "react-icons/tb";
import BarChart from "../../charts/BarChart";
import Footer from "../../Footer";
import { DotLoader } from "react-spinners";

const AdminDashboard = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showAll, setShowAll] = useState(false);
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/api/dashboard/admin`
        );
        if (response.data.response.success) {
          setDashboardData(response.data.response.data);
        }
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  const visibleActivities = showAll
    ? dashboardData?.recent_activities || []
    : dashboardData?.recent_activities?.slice(0, 4) || [];

  const barData = {
    labels: ["Healthy", "At Risk", "Critical"],
    datasets: [
      {
        label: "Project Health",
        data: [
          dashboardData?.project_health?.healthy || 0,
          dashboardData?.project_health?.at_risk || 0,
          dashboardData?.project_health?.critical || 0,
        ],
        backgroundColor: ["#4ADE80", "#FACC15", "#F87171"],
      },
    ],
  };

  const barChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
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
        ticks: {
          stepSize: 10,
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

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-50 bg-opacity-75 z-50">
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

  return (
    <div className="px-6 space-y-4 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center flex-wrap gap-4">
        <div className="flex items-center gap-2 relative text-white bg-[#4F46E5] py-2 w-fit rounded-lg shadow-sm">
          <FaCalendar className="absolute left-4 top-3" />
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="dd MMMM, yyyy"
            className="outline-none bg-transparent text-center w-fit p-0 cursor-pointer"
          />
          <FaChevronDown className="absolute top-3 right-3" />
        </div>
        <div className="flex gap-4">
          <button className="bg-gradient-to-r from-indigo-600 to-yellow-600 text-white px-4 py-1.5 flex gap-1 items-center justify-center rounded-lg shadow hover:opacity-90">
            <div className="font-semibold scale-125">+</div> New Project
          </button>
          <button className="flex items-center gap-2 border text-lg border-gray-300 bg-white text-black px-4 py-2 rounded-lg shadow hover:bg-gray-50">
            <MdGroup className="scale-110" /> New Client
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white shadow-sm border border-gray-300 rounded-xl p-5">
          <div className="flex justify-between items-center text-gray-500">
            <span className="font-semibold">Active Projects</span>
            <span className="text-2xl text-[#4F46E5] bg-gray-100 border-gray-300 rounded-full p-2 border">
              <PiCube />
            </span>
          </div>
          <div className="mt-3 flex items-center gap-2">
            <span className="text-xl font-bold text-gray-800">
              {dashboardData?.kpi_metrics?.total_active_projects || 0}
            </span>
          </div>
        </div>
        <div className="bg-white shadow-sm border border-gray-300 rounded-xl p-5">
          <div className="flex justify-between items-center text-gray-500">
            <span className="font-semibold">Total Clients</span>
            <span className="text-2xl text-[#4F46E5] bg-gray-100 border-gray-300 rounded-full p-2 border">
              <CiGlobe />
            </span>
          </div>
          <div className="mt-3 text-xl font-bold text-gray-800">
            {dashboardData?.kpi_metrics?.total_clients || 0}
          </div>
        </div>
        <div className="bg-white shadow-sm border border-gray-300 rounded-xl p-5">
          <div className="flex justify-between items-center text-gray-500">
            <span className="font-semibold">Team Utilisation</span>
            <span className="text-2xl text-[#4F46E5] bg-gray-100 border-gray-300 rounded-full p-2 border">
              <IoTimerOutline />
            </span>
          </div>
          <div className="mt-3 text-xl font-bold text-gray-800">
            {dashboardData?.kpi_metrics?.team_utilization || 0}%
          </div>
        </div>
        <div className="bg-white shadow-sm border border-gray-300 rounded-xl p-5">
          <div className="flex justify-between items-center text-gray-500">
            <span className="font-semibold">Monthly Revenue</span>
            <span className="text-2xl text-[#4F46E5] bg-gray-100 border-gray-300 rounded-full p-2 border">
              <TbMoneybag />
            </span>
          </div>
          <div className="mt-3 text-xl font-bold text-gray-800">
            ₹{dashboardData?.kpi_metrics?.monthly_revenue || 0}
          </div>
        </div>
      </div>

      <div className="h-[24rem] mt-8 flex justify-between flex-col md:flex-row text-gray-500 gap-6">
        <div className="w-full bg-white md:w-2/3 border border-gray-300 p-4 rounded-lg shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Project Health Overview
            </h3>
          </div>
          <div className="h-[20rem] w-full flex justify-center items-center">
            <BarChart options={barChartOptions} data={barData} />
          </div>
        </div>

        <div className="w-full flex flex-col justify-between border border-gray-300 shadow-sm rounded-lg bg-white md:w-1/3 p-3 max-w-sm text-left">
          <h4 className="text-lg font-semibold text-gray-800 mb-4">
            Recent Activity
          </h4>

          <div
            className={`space-y-3 ${
              showAll ? "max-h-80 overflow-y-auto pr-1" : ""
            }`}
          >
            {visibleActivities.map((item, index) => (
              <div
                key={item.id || index}
                className="flex items-center gap-3 bg-gray-100 py-1.5 px-3 rounded-lg shadow-md border border-gray-300 hover:bg-gray-50 transition"
              >
                <div className="text-2xl text-indigo-500 mt-2">
                  <MdOutlineTask />
                </div>
                <div className="flex-1">
                  <h5 className="font-medium text-gray-700">{item.message}</h5>
                  <p className="text-sm text-gray-500">{item.user}</p>
                </div>
                <CiSettings className="text-xl text-gray-400 hover:text-indigo-500 cursor-pointer" />
              </div>
            ))}
          </div>

          {!showAll && dashboardData?.recent_activities?.length > 4 && (
            <button
              onClick={() => setShowAll(true)}
              className="mt-3 text-indigo-600 text-md font-semibold"
            >
              {"Show more >"}
            </button>
          )}
          {showAll && dashboardData?.recent_activities?.length > 4 && (
            <button
              onClick={() => setShowAll(false)}
              className="mt-3 text-indigo-600 text-md hover:underline font-semibold"
            >
              Show less
            </button>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminDashboard;
