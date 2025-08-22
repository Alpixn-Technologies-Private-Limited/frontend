import React, { useEffect, useState } from "react";
import {
    FiEye,
    FiEdit,
    FiTrash2,
    FiPlus,
    FiChevronLeft,
    FiChevronRight,
} from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../utils/axios";
import { toast } from "react-hot-toast";
import { HashLoader } from "react-spinners";
import { useTheme } from "../../context/ThemeContext";

const ClientsList = () => {
    const { theme } = useTheme();
    const [clients, setClients] = useState([]);
    const [industryFilter, setIndustryFilter] = useState("Select");
    const [statusFilter, setStatusFilter] = useState("Select");
    const [currentPage, setCurrentPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const fetchClients = async () => {
        setLoading(true);
        try {
            const res = await axios.get("/api/clients", {
                params: {
                    page: currentPage - 1,
                    size: 8,
                    status:
                        statusFilter !== "Select"
                            ? statusFilter.toLowerCase()
                            : "",
                    industry:
                        industryFilter !== "Select"
                            ? industryFilter.toLowerCase()
                            : "",
                    sort: "name,asc",
                },
                headers: {
                    Authorization: `Bearer ${
                        localStorage.getItem("token") ||
                        sessionStorage.getItem("token")
                    }`,
                },
                withCredentials: true,
            });

            const responseData = res.data.data;
            setClients(responseData?.content || []);
            setLastPage(responseData?.totalPages || 1);
        } catch (error) {
            toast.error("Failed to fetch clients.");
            console.error("API error:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchClients();
    }, [currentPage, industryFilter, statusFilter]);

    const handleDeleteClient = async (id) => {
        console.log(" delete button is clciked");
        const confirm = window.confirm(
            "Are you sure you want to delete this client?"
        );
        if (!confirm) return;

        try {
            const res = await axios.delete(`/api/clients/${id}`, {
                headers: {
                    Authorization: `Bearer ${
                        localStorage.getItem("token") ||
                        sessionStorage.getItem("token")
                    }`,
                },
                withCredentials: true,
            });
            console.log(res);
            if (res.data.success) {
                toast.success("Client deleted successfully");
                setClients((prev) => prev.filter((client) => client.id !== id));
            } else {
                toast.error("Failed to delete client.");
            }
        } catch (error) {
            console.error("Error deleting client:", error);
            toast.error("An error occurred while deleting the client.");
        }
    };

    const StatusBadge = ({ status }) => {
        const isActive = status?.toLowerCase() === "active";
        return (
            <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                    isActive
                        ? "text-green-600 bg-green-100"
                        : "text-red-600 bg-red-100"
                }`}
            >
                {status
                    ? status.charAt(0).toUpperCase() + status.slice(1)
                    : "N/A"}
            </span>
        );
    };

    const ActionButton = ({ icon: Icon, onClick, className = "" }) => (
        <button
            onClick={onClick}
            className={`p-2 rounded-lg hover:bg-gray-100 transition-colors ${className}`}
        >
            <Icon size={16} className="text-gray-600" />
        </button>
    );

    return (
        <div className="min-h-screen bg-gray-50 p-4 dark:bg-gradient-to-r dark:from-[#241f53] dark:via-[#0d0130] dark:to-[#2b1a76]">
            {loading ? (
                <div className="absolute md:left-30 inset-0 flex items-center justify-center">
                    <HashLoader size={60} color="#6366F1" />
                </div>
            ) : clients.length === 0 ? (
                <p className="text-center py-6 text-gray-500 dark:text-white">
                    No clients found.
                </p>
            ) : (
                <div>
                    <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        <div className="text-sm text-gray-600 dark:text-white">
                            <Link to="/dashboard/pm">Dashboard</Link> &gt;{" "}
                            <span className="text-blue-800 dark:text-yellow-400">Clients</span>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <div className="flex items-center gap-2">
                                <label className="text-sm font-medium text-gray-700 dark:text-white">
                                    Industry
                                </label>
                                <select
                                    value={industryFilter}
                                    onChange={(e) =>
                                        setIndustryFilter(e.target.value)
                                    }
                                    className="px-2 py-1 border border-gray-300 rounded text-sm bg-white"
                                >
                                    <option>Select</option>
                                    <option>Technology</option>
                                    <option>Healthcare</option>
                                    <option>Finance</option>
                                </select>
                            </div>
                            <div className="flex items-center gap-2">
                                <label className="text-sm font-medium text-gray-700 dark:text-white">
                                    Status
                                </label>
                                <select
                                    value={statusFilter}
                                    onChange={(e) =>
                                        setStatusFilter(e.target.value)
                                    }
                                    className="px-2 py-1 border border-gray-300 rounded text-sm bg-white"
                                >
                                    <option>Select</option>
                                    <option>Active</option>
                                    <option>Inactive</option>
                                </select>
                            </div>
                            <Link
                                className="flex items-center gap-1 bg-gradient-to-r from-purple-700 to-yellow-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition"
                            >
                                <FiPlus size={16} />
                                Add Project
                            </Link>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 dark:bg-gradient-to-r dark:from-[#241f53] dark:via-[#0d0130] dark:to-[#2b1a76]">
                        <div className="p-4 sm:p-6">
                            <h2 className="text-lg font-semibold text-gray-900 mb-4 dark:text-white">
                                Client List
                            </h2>
                            <div className="overflow-x-auto border border-gray-300 rounded-lg">
                                <table className="w-full text-sm">
                                    <thead className="bg-gray-50 dark:bg-[#2b1a76] dark:text-white">
                                        <tr className="border-b border-gray-200 dark:text-white">
                                            <th className="text-left py-3 px-4 font-medium text-gray-700 dark:text-white">
                                                Client
                                            </th>
                                            <th className="dark:text-white text-left py-3 px-4 font-medium text-gray-700">
                                                Email
                                            </th>
                                            <th className="dark:text-white text-left py-3 px-4 font-medium text-gray-700">
                                                Industry
                                            </th>
                                            <th className="dark:text-white text-left py-3 px-4 font-medium text-gray-700">
                                                Projects
                                            </th>
                                            <th className="dark:text-white text-left py-3 px-4 font-medium text-gray-700">
                                                Last Interaction
                                            </th>
                                            <th className="dark:text-white text-left py-3 px-4 font-medium text-gray-700">
                                                Status
                                            </th>
                                            <th className="dark:text-white text-left py-3 px-4 font-medium text-gray-700">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {clients.map((client) => (
                                            <tr
                                                key={client.id}
                                                className="border-b border-gray-100 dark:text-white"
                                            >
                                                <td className="py-3 px-4 text-gray-900 font-medium dark:text-white">
                                                    {client.name}
                                                </td>
                                                <td className="py-3 px-4 text-gray-700 dark:text-white">
                                                    {client.email || "N/A"}
                                                </td>
                                                <td className="py-3 px-4 text-gray-700 dark:text-white">
                                                    {client.industry || "N/A"}
                                                </td>
                                                <td className="py-3 px-4 text-gray-700 dark:text-white">
                                                    {client.active_projects ??
                                                        0}
                                                </td>
                                                <td className="py-3 px-4 text-gray-700 dark:text-white">
                                                    {client.last_interaction
                                                        ? new Date(
                                                              client.last_interaction
                                                          ).toLocaleDateString()
                                                        : "N/A"}
                                                </td>
                                                <td className="py-3 px-4 dark:text-white">
                                                    <StatusBadge
                                                        status={client.status}
                                                    />
                                                </td>
                                                <td className="py-3 px-4 dark:text-white">
                                                    <div className="flex items-center gap-2 dark:text-white">
                                                        <ActionButton
                                                            icon={FiEye}
                                                            className="hover:bg-green-100 cursor-pointer"
                                                            onClick={() =>
                                                                navigate(
                                                                    `/clients/${client.id}`
                                                                )
                                                            }
                                                        />
                                                        <ActionButton
                                                            icon={FiEdit}
                                                            className="hover:bg-yellow-100 cursor-pointer"
                                                            onClick={() =>
                                                                navigate(
                                                                    `/clients/${client.id}/edit-form`
                                                                )
                                                            }
                                                        />
                                                        <ActionButton
                                                            icon={FiTrash2}
                                                            className="hover:bg-red-500 cursor-pointer dark:text-white"
                                                            onClick={() =>
                                                                handleDeleteClient(
                                                                    client?.id
                                                                )
                                                            }
                                                        />
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            {/* Pagination Controls */}
                            <div className="flex items-center justify-center mt-6 gap-2">
                                <button
                                    onClick={() =>
                                        setCurrentPage((prev) =>
                                            Math.max(prev - 1, 1)
                                        )
                                    }
                                    className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                                    disabled={currentPage === 1}
                                >
                                    <FiChevronLeft
                                        size={16}
                                        className="text-gray-600"
                                    />
                                </button>

                                {[...Array(lastPage)].map((_, idx) => {
                                    const page = idx + 1;
                                    return (
                                        <button
                                            key={page}
                                            onClick={() => setCurrentPage(page)}
                                            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                                                currentPage === page
                                                    ? "bg-blue-600 text-white"
                                                    : "text-gray-700 hover:bg-gray-100"
                                            }`}
                                        >
                                            {page}
                                        </button>
                                    );
                                })}

                                <button
                                    onClick={() =>
                                        setCurrentPage((prev) =>
                                            Math.min(prev + 1, lastPage)
                                        )
                                    }
                                    className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                                    disabled={currentPage === lastPage}
                                >
                                    <FiChevronRight
                                        size={16}
                                        className="text-gray-600"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ClientsList;
