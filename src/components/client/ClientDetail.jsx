import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "../../utils/axios";
import { FaRegEdit, FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdKeyboardArrowDown } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { HashLoader } from "react-spinners";

const fallbackData = {
    name: "Green Tech Solution Pvt. Ltd.",
    status: "Active",
    logo: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTymudOtuSRp49R_iW-5XtMrDKAPes61aSK2vgqxkYA2ILZ7WmI",
    phone: "999-000-768",
    email: "kankanasinha@gmail.com",
    location: "Guwahati, Assam",
    industry: "Renewable Energy / SaaS",
    founded: "2015",
    headquarters: "Bengaluru, India",
    stats: {
        total: 5,
        active: 1,
        completed: 3,
        pending: 1,
    },
    recentActivity: [
        {
            text: "Project Apollo marked complete",
            sub: "Final milestone reached successfully",
            date: "30 June, 2025",
            color: "green",
        },
        {
            text: "Client Zenspace added",
            sub: "Client profile created in CRM",
            date: "10 June, 2025",
            color: "blue",
        },
        {
            text: "File uploaded to Project Vega",
            sub: "New document shared with the team",
            date: "9 June, 2025",
            color: "red",
        },
        {
            text: "Team member updated task status",
            sub: "New document shared with the team",
            date: "10 June, 2025",
            color: "yellow",
        },
    ],
};

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
                const res = await axios.get(`/api/clients/${id}`);
                const data = res.data?.response?.data;
                if (data) {
                    setClient(data.client);
                }
            } catch (error) {
                console.error("Error fetching client data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchClientData();
    }, [id]);

    const clientData = {
        name: client?.name || fallbackData.name,
        status: client?.status || fallbackData.status,
        logo: client?.logo || fallbackData.logo,
        phone: client?.phone || fallbackData.phone,
        email: client?.email || fallbackData.email,
        location:
            (client?.address?.city && client?.address?.state
                ? `${client.address.city}, ${client.address.state}`
                : null) || fallbackData.location,
        industry: client?.industry || fallbackData.industry,
        founded: client?.created_at?.slice(0, 4) || fallbackData.founded,
        headquarters:
            (client?.address?.city && client?.address?.country
                ? `${client.address.city}, ${client.address.country}`
                : null) || fallbackData.headquarters,
        stats: fallbackData.stats,
        recentActivity: fallbackData.recentActivity,
    };
    if (loading)
        return (
            <div className="flex justify-center items-center py-10">
                <HashLoader size={40} color="#6366F1" />
            </div>
        );
    return (
        <div className="p-2 w-full bg-gray-50 min-h-screen">
            <div className="text-sm text-gray-500 mb-2">
                <Link to={"/dashboard/pm"}>Dashboard</Link> &gt;{" "}
                <Link to={"/clients"}>Clients</Link> &gt;{" "}
                <span className="text-blue-800">Client Details</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-2">
                <h2 className="text-2xl font-semibold text-gray-800">
                    Client Details
                </h2>
                <Link to="/clients/:id/edit-form">
                    <button className="cursor-pointer flex items-center gap-2 border border-gray-300 rounded-lg py-1 px-3 text-xs hover:bg-gray-100 w-fit">
                        Edit Details <FaRegEdit />
                    </button>
                </Link>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-300 mb-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <img
                            src={clientData.logo}
                            alt="Logo"
                            className="rounded-full w-10 h-10 object-cover"
                        />
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                            <h3 className="text-lg font-semibold text-gray-800">
                                {clientData.name}
                            </h3>
                            <span className="text-green-600 border w-fit border-green-600 text-xs px-2 py-0.5 rounded-full">
                                {clientData.status}
                            </span>
                        </div>
                    </div>

                    <div className="text-sm text-gray-600 flex flex-col gap-1 md:items-end">
                        <div>
                            <FaPhoneAlt className="inline mr-1" />
                            {clientData.phone}
                        </div>
                        <div>
                            <MdEmail className="inline mr-1" />
                            {clientData.email}
                        </div>
                        <div>
                            <IoLocationSharp className="inline mr-1" />
                            {clientData.location}
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap justify-start sm:justify-around gap-2 mb-4">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        className={`px-4 py-2 rounded-full text-xs border ${
                            tab === "Overview"
                                ? "bg-purple-600 text-white"
                                : "border-gray-300 text-gray-600 hover:bg-gray-100"
                        }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                <div className="md:col-span-2 bg-white p-4 rounded-xl border border-gray-300">
                    <h4 className="text-lg font-semibold text-gray-700 mb-2">
                        {clientData.name}
                    </h4>
                    <p className="text-sm text-gray-600 mb-4">
                        GreenTech Solutions specializes in providing
                        eco-friendly energy management software for commercial
                        buildings, helping businesses reduce carbon footprints
                        and energy costs.
                    </p>
                    <div className="text-sm text-gray-600 space-y-2">
                        <p>
                            <span className="font-medium">Industry:</span>{" "}
                            {clientData.industry}
                        </p>
                        <p>
                            <span className="font-medium">Founded:</span>{" "}
                            {clientData.founded}
                        </p>
                        <p>
                            <span className="font-medium">Headquarters:</span>{" "}
                            {clientData.headquarters}
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    {Object.entries(clientData.stats).map(([key, value]) => {
                        const label =
                            key.charAt(0).toUpperCase() +
                            key.slice(1) +
                            " Projects";
                        const color =
                            key === "active"
                                ? "text-green-700"
                                : key === "completed"
                                ? "text-blue-700"
                                : key === "pending"
                                ? "text-yellow-700"
                                : "text-purple-700";

                        return (
                            <div
                                key={key}
                                className="p-4 border border-gray-300 rounded-lg"
                            >
                                <p className="text-sm text-gray-600">{label}</p>
                                <p
                                    className={`text-3xl font-semibold ${color}`}
                                >
                                    {value}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="bg-white py-4 rounded-2xl shadow px-4">
                <div className="flex justify-between items-center mb-2">
                    <h4 className="text-md font-bold text-gray-700">
                        Recent Activity
                    </h4>
                    <button
                        onClick={() => setShowAllActivities(!showAllActivities)}
                        className="text-sm text-blue-600 hover:underline flex items-center gap-1"
                    >
                        {showAllActivities ? "Collapse" : "View All"}{" "}
                        <MdKeyboardArrowDown className="inline text-xl" />
                    </button>
                </div>

                <div
                    className={`transition-all duration-300 space-y-1 border border-gray-300 rounded-lg ${
                        showAllActivities
                            ? "max-h-64 overflow-y-auto"
                            : "max-h-32 overflow-hidden"
                    }`}
                >
                    {clientData.recentActivity.map((item, index) => (
                        <div
                            key={index}
                            className="flex justify-between items-center p-3 hover:bg-gray-50"
                        >
                            <div className="flex items-center gap-3">
                                <div
                                    className={`w-3 h-3 rounded-full ${
                                        colorClassMap[item.color] ||
                                        "bg-gray-300"
                                    }`}
                                ></div>
                                <div>
                                    <p className="text-sm font-medium text-gray-700">
                                        {item.text}
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        {item.sub}
                                    </p>
                                </div>
                            </div>
                            <div className="text-xs text-gray-400 whitespace-nowrap">
                                {item.date}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ClientDetails;
