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

const fallbackClients = [
    {
        id: 1,
        name: "ABC Corporation",
        logo: "https://example.com/logo.png",
        email: "contact@abc.com",
        phone: "+1-555-0123",
        industry: "Technology",
        status: "active",
        active_projects: 3,
        last_interaction: "2024-07-07T14:30:00Z",
    },
    {
        id: 2,
        name: "Green Tech Solution Pvt. Ltd.",
        logo: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTymudOtuSRp49R_iW-5XtMrDKAPes61aSK2vgqxkYA2ILZ7WmI",
        email: "kankanasinha@gmail.com",
        phone: "999-000-768",
        industry: "Renewable Energy",
        status: "inactive",
        active_projects: 1,
        last_interaction: "2024-06-28T10:30:00Z",
    },
];

const ClientsList = () => {
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
                page: currentPage,
                limit: 10,
                filter: {
                    status: statusFilter !== "Select" ? statusFilter.toLowerCase() : "",
                    industry: industryFilter !== "Select" ? industryFilter.toLowerCase() : "",
                },
                sort: "name",
                order: "asc",
            });

            if (res.data.success) {
                setClients(res.data.data.clients || []);
                setLastPage(res.data.data.pagination.last_page || 1);
            }
        } catch (error) {
            console.warn("API not available. Using fallback data.");
            setClients(fallbackClients);
            setLastPage(1);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchClients();
    }, [currentPage, industryFilter, statusFilter]);

    const handleDeleteClient = async (id) => {
        const confirm = window.confirm("Are you sure you want to delete this client?");
        if (!confirm) return;

        try {
            const res = await axios.delete(`/api/clients/${id}`);
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
                    isActive ? "text-green-600 bg-green-100" : "text-red-600 bg-red-100"
                }`}
            >
                {status ? status.charAt(0).toUpperCase() + status.slice(1) : "N/A"}
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
        <div className="min-h-screen bg-gray-50 p-4">
            <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="text-sm text-gray-600">
                    <Link to="/dashboard/pm">Dashboard</Link> &gt;{" "}
                    <span className="text-blue-800">Clients</span>
                </div>

                <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2">
                        <label className="text-sm font-medium text-gray-700">Industry</label>
                        <select
                            value={industryFilter}
                            onChange={(e) => setIndustryFilter(e.target.value)}
                            className="px-2 py-1 border border-gray-300 rounded text-sm bg-white"
                        >
                            <option>Select</option>
                            <option>Technology</option>
                            <option>Healthcare</option>
                            <option>Finance</option>
                        </select>
                    </div>
                    <div className="flex items-center gap-2">
                        <label className="text-sm font-medium text-gray-700">Status</label>
                        <select
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            className="px-2 py-1 border border-gray-300 rounded text-sm bg-white"
                        >
                            <option>Select</option>
                            <option>Active</option>
                            <option>Inactive</option>
                        </select>
                    </div>
                    <Link
                        to="/clients/:id/edit-form"
                        className="flex items-center gap-1 bg-gradient-to-r from-purple-700 to-yellow-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition"
                    >
                        <FiPlus size={16} />
                        Add Project
                    </Link>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                <div className="p-4 sm:p-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Client List</h2>

                    {loading ? (
                        <div className="flex justify-center items-center py-10">
                            <HashLoader size={40} color="#6366F1" />
                        </div>
                    ) : clients.length === 0 ? (
                        <p className="text-center py-6 text-gray-500">No clients found.</p>
                    ) : (
                        <div className="overflow-x-auto border border-gray-300 rounded-lg">
                            <table className="w-full text-sm">
                                <thead className="bg-gray-50">
                                    <tr className="border-b border-gray-200">
                                        <th className="text-left py-3 px-4 font-medium text-gray-700">Client</th>
                                        <th className="text-left py-3 px-4 font-medium text-gray-700">Email</th>
                                        <th className="text-left py-3 px-4 font-medium text-gray-700">Industry</th>
                                        <th className="text-left py-3 px-4 font-medium text-gray-700">Projects</th>
                                        <th className="text-left py-3 px-4 font-medium text-gray-700">Last Interaction</th>
                                        <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                                        <th className="text-left py-3 px-4 font-medium text-gray-700">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {clients.map((client) => (
                                        <tr
                                            key={client.id}
                                            className="border-b border-gray-100 hover:bg-gray-50"
                                        >
                                            <td className="py-3 px-4 text-gray-900 font-medium">{client.name}</td>
                                            <td className="py-3 px-4 text-gray-700">{client.email || "N/A"}</td>
                                            <td className="py-3 px-4 text-gray-700">{client.industry || "N/A"}</td>
                                            <td className="py-3 px-4 text-gray-700">
                                                {client.active_projects ?? 0}
                                            </td>
                                            <td className="py-3 px-4 text-gray-700">
                                                {client.last_interaction
                                                    ? new Date(client.last_interaction).toLocaleDateString()
                                                    : "N/A"}
                                            </td>
                                            <td className="py-3 px-4">
                                                <StatusBadge status={client.status} />
                                            </td>
                                            <td className="py-3 px-4">
                                                <div className="flex items-center gap-2">
                                                    <ActionButton
                                                        icon={FiEye}
                                                        onClick={() => navigate(`/clients/${client.id}`)}
                                                    />
                                                    <ActionButton
                                                        icon={FiEdit}
                                                        onClick={() => navigate(`/clients/${client.id}/edit-form`)}
                                                    />
                                                    <ActionButton
                                                        icon={FiTrash2}
                                                        className="hover:bg-red-100"
                                                        onClick={() => handleDeleteClient(client.id)}
                                                    />
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {/* Pagination Controls */}
                    <div className="flex items-center justify-center mt-6 gap-2">
                        <button
                            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                            disabled={currentPage === 1}
                        >
                            <FiChevronLeft size={16} className="text-gray-600" />
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
                            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, lastPage))}
                            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                            disabled={currentPage === lastPage}
                        >
                            <FiChevronRight size={16} className="text-gray-600" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientsList;
