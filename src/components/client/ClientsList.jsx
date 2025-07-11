import React, { useState } from "react";
import {
    FiEye,
    FiList,
    FiGrid,
    FiEdit,
    FiTrash2,
    FiPlus,
    FiChevronLeft,
    FiChevronRight,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const ClientsList = () => {
    const [industryFilter, setIndustryFilter] = useState("Select");
    const [statusFilter, setStatusFilter] = useState("Select");
    const [currentPage, setCurrentPage] = useState(1);

    const clients = [
        {
            id: 1,
            client: "Zenspace Technologies",
            contactPerson: "Priya Khanna",
            email: "priya@zenspace.in",
            projects: 3,
            lastInteraction: "21 June 2025",
            status: "Active",
        },
        {
            id: 2,
            client: "Greenleaf Pvt Ltd",
            contactPerson: "Rajesh Iyer",
            email: "rajesh.iyer@greenleaf.in",
            projects: 1,
            lastInteraction: "12 June 2025",
            status: "Inactive",
        },
        {
            id: 3,
            client: "PixelCraft Studios",
            contactPerson: "Meenal Deshmukh",
            email: "meenal@pixelcraft.com",
            projects: 5,
            lastInteraction: "24 June 2025",
            status: "Active",
        },
        {
            id: 4,
            client: "PixelCraft Studios",
            contactPerson: "Meenal Deshmukh",
            email: "meenal@pixelcraft.com",
            projects: 5,
            lastInteraction: "24 June 2025",
            status: "Active",
        },
        {
            id: 3,
            client: "PixelCraft Studios",
            contactPerson: "Meenal Deshmukh",
            email: "meenal@pixelcraft.com",
            projects: 5,
            lastInteraction: "24 June 2025",
            status: "Active",
        },
        {
            id: 3,
            client: "PixelCraft Studios",
            contactPerson: "Meenal Deshmukh",
            email: "meenal@pixelcraft.com",
            projects: 5,
            lastInteraction: "24 June 2025",
            status: "Active",
        },
        {
            id: 3,
            client: "PixelCraft Studios",
            contactPerson: "Meenal Deshmukh",
            email: "meenal@pixelcraft.com",
            projects: 5,
            lastInteraction: "24 June 2025",
            status: "Active",
        },
        {
            id: 3,
            client: "PixelCraft Studios",
            contactPerson: "Meenal Deshmukh",
            email: "meenal@pixelcraft.com",
            projects: 5,
            lastInteraction: "24 June 2025",
            status: "Active",
        },
        {
            id: 3,
            client: "PixelCraft Studios",
            contactPerson: "Meenal Deshmukh",
            email: "meenal@pixelcraft.com",
            projects: 5,
            lastInteraction: "24 June 2025",
            status: "Active",
        },
        {
            id: 3,
            client: "PixelCraft Studios",
            contactPerson: "Meenal Deshmukh",
            email: "meenal@pixelcraft.com",
            projects: 5,
            lastInteraction: "24 June 2025",
            status: "Active",
        },
    ];

    const StatusBadge = ({ status }) => {
        const isActive = status === "Active";
        return (
            <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                    isActive ? " text-green-600" : " text-red-600"
                }`}
            >
                {status}
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
            <div>
                <div className="mb-1 flex justify-between">
                    <div className="flex items-center text-sm text-gray-600 mb-4">
                        Dashboard&gt;Client List
                    </div>
                    <div className="flex items-center justify-between my-3 gap-10">
                        <div className="flex items-center gap-10">
                            <div className="flex items-center gap-2">
                                <label className="text-lg font-medium text-gray-700">
                                    Industry
                                </label>
                                <select
                                    value={industryFilter}
                                    onChange={(e) =>
                                        setIndustryFilter(e.target.value)
                                    }
                                    className="px-2 py-1 border border-gray-300 rounded-sm text-sm focus:outline-none bg-white "
                                >
                                    <option>Select</option>
                                    <option>Technology</option>
                                    <option>Healthcare</option>
                                    <option>Finance</option>
                                </select>
                            </div>
                            <div className="flex items-center gap-2">
                                <label className="text-lg font-medium text-gray-700">
                                    Status
                                </label>
                                <select
                                    value={statusFilter}
                                    onChange={(e) =>
                                        setStatusFilter(e.target.value)
                                    }
                                    className="px-4 py-1 bg-white border border-gray-300 rounded-sm text-sm focus:outline-none"
                                >
                                    <option>Select</option>
                                    <option>Active</option>
                                    <option>Inactive</option>
                                </select>
                            </div>
                            <div className="flex items-center bg-gray-100 rounded-md p-1 ml-2">
                                <button className="p-1 rounded-md hover:bg-white text-blue-500">
                                    <FiList size={18} />
                                </button>
                                <button className="p-1 rounded-md hover:bg-white text-gray-500">
                                    <FiGrid size={18} />
                                </button>
                            </div>
                        </div>
                        <button className="flex items-center gap-1 bg-gradient-to-r from-purple-700 to-yellow-500 text-white px-3 py-2 rounded-md text-sm font-medium hover:opacity-90 transition">
                            <FiPlus size={16} />
                            Add Project
                        </button>
                    </div>
                </div>
                <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                    <div className="p-6">
                        <h2 className="text-xl font-semibold text-gray-900 mb-6">
                            Client List
                        </h2>
                        <div className="overflow-x-auto border border-gray-300 rounded-lg">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-gray-200">
                                        <th className="text-left py-3 px-4 font-medium text-gray-700">
                                            Client
                                        </th>
                                        <th className="text-left py-3 px-4 font-medium text-gray-700">
                                            Contact Person
                                        </th>
                                        <th className="text-left py-3 px-4 font-medium text-gray-700">
                                            Email
                                        </th>
                                        <th className="text-left py-3 px-4 font-medium text-gray-700">
                                            Projects
                                        </th>
                                        <th className="text-left py-3 px-4 font-medium text-gray-700">
                                            Last Interaction
                                        </th>
                                        <th className="text-left py-3 px-4 font-medium text-gray-700">
                                            Status
                                        </th>
                                        <th className="text-left py-3 px-4 font-medium text-gray-700">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {clients.map((client) => (
                                        <tr
                                            key={client.id}
                                            className="border-b border-gray-100 hover:bg-gray-50"
                                        >
                                            <td className="py-4 px-4 text-gray-900">
                                                {client.client}
                                            </td>
                                            <td className="py-4 px-4 text-gray-700">
                                                {client.contactPerson}
                                            </td>
                                            <td className="py-4 px-4 text-gray-700">
                                                {client.email}
                                            </td>
                                            <td className="py-4 px-4 text-gray-700">
                                                {client.projects}
                                            </td>
                                            <td className="py-4 px-4 text-gray-700">
                                                {client.lastInteraction}
                                            </td>
                                            <td className="py-4 px-4">
                                                <StatusBadge
                                                    status={client.status}
                                                />
                                            </td>
                                            <td className="py-4 px-4">
                                                <div className="flex items-center gap-1">
                                                    <Link
                                                        to={
                                                            "/clients/client-detail"
                                                        }
                                                    >
                                                        <ActionButton className="cursor-pointer"
                                                            icon={FiEye}
                                                            onClick={() =>
                                                                console.log(
                                                                    "View",
                                                                    client.id
                                                                )
                                                            }
                                                        />
                                                    </Link>
                                                    <Link to={'/clients/edit-form'}>
                                                    <ActionButton
                                                        icon={FiEdit}
                                                        onClick={() =>
                                                            console.log(
                                                                "Edit",
                                                                client.id
                                                            )
                                                        }
                                                    />
                                                    </Link>
                                                    <ActionButton
                                                        icon={FiTrash2}
                                                        onClick={() =>
                                                            console.log(
                                                                "Delete",
                                                                client.id
                                                            )
                                                        }
                                                        className="hover:bg-red-50"
                                                    />
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
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

                            {[1, 2, 3].map((page) => (
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
                            ))}

                            <button
                                onClick={() =>
                                    setCurrentPage((prev) =>
                                        Math.min(prev + 1, 3)
                                    )
                                }
                                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                                disabled={currentPage === 3}
                            >
                                <FiChevronRight
                                    size={16}
                                    className="text-gray-600"
                                />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mt-8 text-center text-sm">
                    <div className="flex items-center justify-center gap-1 text-sm font-bold">
                        <span>Terms of Use</span>
                        <span>|</span>
                        <span>Browser and Display Compatibility</span>
                    </div>
                    <div className="mt-1">
                        Copyright © 2025 Alpixn Technologies Private Limited
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientsList;
