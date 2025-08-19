import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "../../utils/axios";
import { FaRegEdit, FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdKeyboardArrowDown } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { HashLoader } from "react-spinners";

const tabs = [
    "Overview",
    "Projects",
    "Contacts",
    "Documents",
    "Communication History",
];

const colorClassMap = {
    green: "bg-green-500",
    blue: "bg-blue-500",
    red: "bg-red-500",
    yellow: "bg-yellow-500",
};

const ClientDetails = () => {
    const { id } = useParams();
    const [client, setClient] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showAllActivities, setShowAllActivities] = useState(false);

    useEffect(() => {
        const fetchClientData = async () => {
            try {
                const res = await axios.get(`/api/clients/${id}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token") ||
                            sessionStorage.getItem("token")
                            }`,
                    },
                    withCredentials: true,
                });
                const data = res.data?.data;
                console.log(data);
                setClient(data);
            } catch (error) {
                console.error("Error fetching client data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchClientData();
    }, [id]);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-gradient-to-r dark:from-[#241f53] dark:via-[#0d0130] dark:to-[#2b1a76]">
                <HashLoader size={40} color="#6366F1" />
            </div>
        );
    }

    if (!client) {
        return (
            <div className="text-center py-10 text-gray-500 dark:text-gray-300 dark:bg-gradient-to-r dark:from-[#241f53] dark:via-[#0d0130] dark:to-[#2b1a76] min-h-screen">
                Client data not found.
            </div>
        );
    }

    return (
        <div className="p-2 w-full bg-gray-50 dark:bg-gradient-to-r dark:from-[#241f53] dark:via-[#0d0130] dark:to-[#2b1a76] min-h-screen">
            <div className="text-sm text-gray-500 dark:text-gray-300 mb-2">
                <Link to="/dashboard/pm">Dashboard</Link> &gt;{" "}
                <Link to="/clients">Clients</Link> &gt;{" "}
                <span className="text-blue-800 dark:text-yellow-400">
                    Client Details
                </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-2">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
                    Client Details
                </h2>
                <Link to={`/clients/${id}/edit-form`}>
                    <button className="cursor-pointer flex items-center gap-2 border border-gray-300 dark:border-gray-600 rounded-lg py-1 px-3 text-xs hover:bg-gray-100 dark:hover:bg-gray-700 w-fit text-gray-700 dark:text-white">
                        Edit Details <FaRegEdit />
                    </button>
                </Link>
            </div>

            <div className="bg-white dark:bg-[#1c144a] p-6 rounded-2xl border border-gray-300 dark:border-gray-600 mb-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <img
                            src={client.logo || "https://via.placeholder.com/40"}
                            alt="Logo"
                            className="rounded-full w-10 h-10 object-cover"
                        />
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                                {client.name || "N/A"}
                            </h3>
                            <span className="text-green-600 border w-fit border-green-600 text-xs px-2 py-0.5 rounded-full">
                                {client.status || "N/A"}
                            </span>
                        </div>
                    </div>

                    <div className="text-sm text-gray-600 dark:text-gray-300 flex flex-col gap-1 md:items-end">
                        <div>
                            <FaPhoneAlt className="inline mr-1" />
                            {client.phone || "N/A"}
                        </div>
                        <div>
                            <MdEmail className="inline mr-1" />
                            {client.email || "N/A"}
                        </div>
                        <div>
                            <IoLocationSharp className="inline mr-1" />
                            {client.address?.city || "N/A"},{" "}
                            {client.address?.state || client.address?.country || "N/A"}
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap justify-start sm:justify-around gap-2 mb-4">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        className={`px-4 py-2 rounded-full text-xs border ${tab === "Overview"
                                ? "bg-purple-600 text-white"
                                : "border-gray-300 text-gray-600 dark:text-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-4">
                <div className="lg:col-span-2 bg-white dark:bg-[#1c144a] p-4 rounded-xl border border-gray-300 dark:border-gray-600">
                    <h4 className="text-lg font-semibold text-gray-700 dark:text-white mb-2">
                        {client.name || "N/A"}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                        {client.description || "No description available."}
                    </p>
                    <div className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                        <p>
                            <span className="font-medium">Industry:</span>{" "}
                            {client.industry || "N/A"}
                        </p>
                        <p>
                            <span className="font-medium">Founded:</span>{" "}
                            {client.created_at ? client.created_at.slice(0, 4) : "N/A"}
                        </p>
                        <p>
                            <span className="font-medium">Headquarters:</span>{" "}
                            {client.address?.city || "N/A"},{" "}
                            {client.address?.country || "N/A"}
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-sm text-left border border-gray-300 flex flex-col justify-between dark:text-white">
                        <p className="text-sm text-gray-600 dark:text-white">Total Projects</p>
                        <p className="text-3xl font-semibold text-purple-700">
                            {client?.stats?.total || "N/A"}
                        </p>
                    </div>
                    <div className="p-4 rounded-sm text-left border border-gray-300 flex flex-col justify-between dark:text-white">
                        <p className="text-sm text-gray-600 dark:text-white">Active Projects</p>
                        <p className="text-3xl font-semibold text-green-700">
                            {client?.stats?.active || "N/A"}
                        </p>
                    </div>
                    <div className="p-4 rounded-sm text-left border border-gray-300 flex flex-col justify-between">
                        <p className="text-sm text-gray-600 dark:text-white">Completed Projects</p>
                        <p className="text-3xl font-semibold text-blue-700">
                            {client?.stats?.completed || "N/A"}
                        </p>
                    </div>
                    <div className="p-4 border border-gray-300 rounded-sm text-left flex flex-col justify-between ">
                        <p className="text-sm text-gray-600 dark:text-white">Pending Projects</p>
                        <p className="text-3xl font-semibold text-yellow-700">
                            {client?.stats?.pending || "N/A"}
                        </p>
                    </div>
                </div>
            </div>


            {/* Recent Activity */}
            {client.recentActivity?.length > 0 ? (
                <div className="bg-white dark:bg-[#1c144a] py-4 rounded-2xl shadow px-4 border border-gray-300 dark:border-gray-600">
                    <div className="flex justify-between items-center mb-2">
                        <h4 className="text-md font-bold text-gray-700 dark:text-white">
                            Recent Activity
                        </h4>
                        <button
                            onClick={() => setShowAllActivities(!showAllActivities)}
                            className="text-sm text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                        >
                            {showAllActivities ? "Collapse" : "View All"}{" "}
                            <MdKeyboardArrowDown className="inline text-xl" />
                        </button>
                    </div>

                    <div
                        className={`transition-all duration-300 space-y-1 border border-gray-300 dark:border-gray-600 rounded-lg ${showAllActivities
                                ? "max-h-64 overflow-y-auto"
                                : "max-h-32 overflow-hidden"
                            }`}
                    >
                        {client.recentActivity.map((item, index) => (
                            <div
                                key={index}
                                className="flex justify-between items-center p-3 hover:bg-gray-50 dark:hover:bg-gray-700"
                            >
                                <div className="flex items-center gap-3">
                                    <div
                                        className={`w-3 h-3 rounded-full ${colorClassMap[item.color] || "bg-gray-300"
                                            }`}
                                    ></div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-700 dark:text-white">
                                            {item.text || "N/A"}
                                        </p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">
                                            {item.sub || "N/A"}
                                        </p>
                                    </div>
                                </div>
                                <div className="text-xs text-gray-400 dark:text-gray-300 whitespace-nowrap">
                                    {item.date || "N/A"}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="bg-white dark:bg-[#1c144a] py-4 rounded-2xl shadow px-4 border border-gray-300 dark:border-gray-600">
                    <h4 className="text-md font-bold text-gray-700 dark:text-white">
                        Recent Activity
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">N/A</p>
                </div>
            )}
        </div>
    );
};

export default ClientDetails;
