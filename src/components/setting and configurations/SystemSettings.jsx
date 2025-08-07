import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaCheck, FaTimes } from "react-icons/fa";

const SystemSettings = () => {
    const roles = [
        {
            name: "Admin",
            description: "Full access to all modules",
            accessType: "Full",
        },
        {
            name: "Editor",
            description: "Can edit content",
            accessType: "Limited",
        },
        { name: "Viewer", description: "Read-only access", accessType: "Read" },
    ];
    const permissionData = [
        {
            module: "Users",
            permissions: { view: true, edit: true, delete: true },
        },
        {
            module: "Roles",
            permissions: { view: true, edit: true, delete: false },
        },
        {
            module: "Settings",
            permissions: { view: true, edit: false, delete: false },
        },
    ];
    const integrations = [
        {
            name: "Google Calendar",
            status: "connected",
            description: "Syncs meeting events and availability",
        },
        {
            name: "Slack",
            status: "not_linked",
            description: "Receive real-time alerts in channels",
        },
        {
            name: "Zoom",
            status: "connected",
            description: "Schedule and join Zoom meetings",
        },
    ];
    const webhooks = [
        {
            url: "https://api.example.com/hooks/task",
            trigger: "New Task Created",
            status: "active",
        },
        {
            url: "https://api.example.com/hooks/error",
            trigger: "System Error",
            status: "inactive",
        },
    ];

    return (
        <div className="bg-gray-50 min-h-screen p-4 sm:p-6">
            <section className="flex flex-col gap-6">
                {/* General Settings */}
                <div className="text-2xl sm:text-3xl font-semibold flex items-center gap-2">
                    General Setting{" "}
                    <MdOutlineKeyboardArrowRight className="text-3xl sm:text-4xl" />
                </div>

                {/* Company Info, Timezone, Language */}
                {[
                    {
                        label: "Company Information",
                        value: "Company abc | companyabc@gmail.com | 95XXXXXXXX",
                    },
                    {
                        label: "Timezone Configuration",
                        value: "GMT+5:30 — IST | 9AM - 6AM",
                    },
                ].map((item, idx) => (
                    <div
                        key={idx}
                        className="bg-white border border-gray-300 rounded-lg px-4 py-3 flex flex-col sm:flex-row justify-between text-sm"
                    >
                        <span className="font-medium">{item.label}</span>
                        <span className="text-gray-600">{item.value}</span>
                    </div>
                ))}

                {/* Language */}
                <div className="bg-white border border-gray-300 rounded-lg px-4 py-3 flex flex-col sm:flex-row justify-between text-sm">
                    <span className="font-medium">Language Preference</span>
                    <select className="border border-gray-200 rounded p-1 text-sm mt-2 sm:mt-0">
                        <option>English Default</option>
                        <option>Hindi</option>
                        <option>Tamil</option>
                        <option>Telugu</option>
                    </select>
                </div>

                {/* User Management */}
                <div className="text-2xl sm:text-3xl font-semibold flex items-center gap-2 mt-5">
                    User Management{" "}
                    <MdOutlineKeyboardArrowRight className="text-3xl sm:text-4xl" />
                </div>

                {/* Role Definition */}
                <div className="bg-white border border-gray-300 rounded-lg">
                    <div className="flex justify-between items-center px-4 py-3">
                        <h3 className="font-medium">Role Definition</h3>
                        <button className="bg-indigo-600 text-white px-3 py-1 rounded">
                            Add +
                        </button>
                    </div>
                    <div className="overflow-x-auto">
                        <div className="grid grid-cols-3 min-w-[600px] text-sm font-semibold border-t border-b border-gray-200 px-4 py-2">
                            <span>Name</span>
                            <span>Role Description</span>
                            <span>Access Type</span>
                        </div>
                        {roles.map((role, idx) => (
                            <div
                                key={idx}
                                className="grid grid-cols-3 min-w-[600px] text-sm px-4 py-2 border-b border-gray-100"
                            >
                                <span>{role.name}</span>
                                <span>{role.description}</span>
                                <span>{role.accessType}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Permission Matrix */}
                <div className="bg-white border border-gray-300 rounded-lg overflow-x-auto">
                    <div className="flex justify-between items-center px-4 py-3">
                        <h3 className="font-medium">Permission Matrix</h3>
                        <button className="bg-indigo-600 text-white px-3 py-1 rounded">
                            Add +
                        </button>
                    </div>
                    <div className="overflow-x-auto">
                        <div className="grid grid-cols-4 min-w-[500px] text-sm font-semibold border-t border-b border-gray-200 px-4 py-2">
                            <span>Module</span>
                            <span>View</span>
                            <span>Edit</span>
                            <span>Delete</span>
                        </div>
                        {permissionData.map((item, index) => (
                            <div
                                key={index}
                                className="grid grid-cols-4 min-w-[500px] text-sm px-4 py-2 border-b border-gray-100"
                            >
                                <span>{item.module}</span>
                                {["view", "edit", "delete"].map((perm) => (
                                    <span
                                        key={perm}
                                        className="flex items-center"
                                    >
                                        {item.permissions[perm] ? (
                                            <FaCheck className="text-green-500" />
                                        ) : (
                                            <FaTimes className="text-red-500" />
                                        )}
                                    </span>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                {/* Access Control */}
                <div className="bg-white border border-gray-300 rounded-lg">
                    <div className="px-4 py-3 font-medium">Access Control</div>
                    {[
                        {
                            label: "2FA Settings",
                            value: "Enabled for All Admins",
                        },
                        { label: "Session Timeout", value: "30 minutes" },
                        {
                            label: "Account Lockout",
                            value: "5 failed attempts",
                        },
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className="flex justify-between px-4 py-2 text-sm border-t border-gray-200"
                        >
                            <span>{item.label}</span>
                            <span className="text-gray-600">{item.value}</span>
                        </div>
                    ))}
                </div>

                {/* Third Party Connections */}
                <div className="bg-white border border-gray-300 rounded-lg overflow-x-auto">
                    <div className="flex justify-between items-center px-4 py-3">
                        <h3 className="font-medium">Third Party Connections</h3>
                        <button className="bg-indigo-600 text-white px-3 py-1 rounded">
                            Add +
                        </button>
                    </div>
                    <div className="overflow-x-auto">
                        <div className="grid grid-cols-3 min-w-[600px] text-sm font-semibold border-t border-b border-gray-200 px-4 py-2">
                            <span>Integration Name</span>
                            <span>Status</span>
                            <span>Description</span>
                        </div>
                        {integrations.map((integration, idx) => (
                            <div
                                key={idx}
                                className="grid grid-cols-3 min-w-[600px] text-sm px-4 py-2 border-b border-gray-100"
                            >
                                <span>{integration.name}</span>
                                <span
                                    className={
                                        integration.status === "connected"
                                            ? "text-green-600 font-medium"
                                            : "text-red-500 font-medium"
                                    }
                                >
                                    {integration.status === "connected"
                                        ? "Connected"
                                        : "Not Linked"}
                                </span>
                                <span>{integration.description}</span>
                            </div>
                        ))}
                    </div>
                </div>
                {/* API Configuration */}
                <div className="bg-white border border-gray-300 rounded-lg">
                    <div className="px-4 py-3 font-medium">
                        API Configuration
                    </div>
                    {[
                        { label: "API Key", value: "sk_live_hcF12VJ8u8o4a..." },
                        { label: "Expiry", value: "25/08/2026" },
                        { label: "Rate Limit", value: "5000 requests/min" },
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className="flex justify-between px-4 py-2 text-sm border-t border-gray-200"
                        >
                            <span>{item.label}</span>
                            <span className="text-gray-600">{item.value}</span>
                        </div>
                    ))}
                </div>

                {/* Webhook Endpoints */}
                <div className="bg-white border border-gray-300 rounded-lg overflow-x-auto">
                    <div className="flex justify-between items-center px-4 py-3">
                        <h3 className="font-medium">Webhook Endpoints</h3>
                        <button className="bg-indigo-600 text-white px-3 py-1 rounded">
                            Add +
                        </button>
                    </div>
                    <div className="overflow-x-auto">
                        <div className="grid grid-cols-3 min-w-[600px] text-sm font-semibold border-t border-b border-gray-200 px-4 py-2">
                            <span>URL</span>
                            <span>Trigger</span>
                            <span>Status</span>
                        </div>
                        {webhooks.map((hook, idx) => (
                            <div
                                key={idx}
                                className="grid grid-cols-3 min-w-[600px] text-sm px-4 py-2 border-b border-gray-100"
                            >
                                <span className="truncate">{hook.url}</span>
                                <span>{hook.trigger}</span>
                                <span
                                    className={
                                        hook.status === "active"
                                            ? "text-green-600 font-medium"
                                            : "text-red-500 font-medium"
                                    }
                                >
                                    {hook.status === "active"
                                        ? "Active"
                                        : "Inactive"}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SystemSettings;
