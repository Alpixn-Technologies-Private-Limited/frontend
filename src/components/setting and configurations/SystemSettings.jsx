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
        <div className="bg-gray-50 min-h-screen p-6">
            <section className="flex flex-col gap-3">
                <div className="text-3xl font-semibold mb-4 flex items-center">
                    General Setting{" "}
                    <MdOutlineKeyboardArrowRight className=" text-4xl" />
                </div>
                <div className="flex items-start space-x-4 w-full">
                    <div className="flex justify-between items-center bg-[#FFFFFF] border border-[#DDDDDD] rounded-lg px-4 py-2 w-full">
                        <span>Company Information</span>
                        <span className="text-[#535353] text-sm">
                            Company abc | companyabc@gmail.com | 95XXXXXXXX
                        </span>
                    </div>
                </div>
                <div className="flex items-start space-x-4 w-full">
                    <div className="flex justify-between items-center bg-[#FFFFFF] border border-[#DDDDDD] rounded-lg px-4 py-2 w-full">
                        <span>Timezone Configuration</span>
                        <span className="text-[#535353] text-sm">
                            GMT+5:30 — IST | 9AM - 6AM
                        </span>
                    </div>
                </div>
                <div className="flex items-start space-x-4 w-full">
                    <div className="flex justify-between items-center bg-[#FFFFFF] border border-[#DDDDDD] rounded-lg px-4 py-2 w-full">
                        <span>Language Preference</span>
                        <span className="text-[#535353] text-sm">
                            <select>
                                <option>English Default</option>
                                <option>Hindi</option>
                                <option>Tamil</option>
                                <option>Telgu</option>
                            </select>
                        </span>
                    </div>
                </div>
                <div className="text-3xl font-semibold mb-4 flex items-center mt-5">
                    User Management{" "}
                    <MdOutlineKeyboardArrowRight className=" text-4xl" />
                </div>
                <div className="rounded mb-6">
                    <div className="flex justify-between items-center px-4 py-2 border bg-[#FFFFFF] border-[#DDDDDD] rounded-lg">
                        <h3 className="font-medium">Role Definition</h3>
                        <button className="border text-white px-3 py-1 rounded-md bg-[#4F46E5]">
                            Add +
                        </button>
                    </div>
                    <div className="grid grid-cols-3 text-sm  px-4 py-2 border-b-1 border-[#535353] font-semibold">
                        <span>Name</span>
                        <span>Role Description</span>
                        <span>Access Type</span>
                    </div>
                    {roles && roles.length > 0 ? (
                        roles.map((role, idx) => (
                            <div
                                key={idx}
                                className="grid grid-cols-3 text-sm px-4 py-2 border-b border-gray-200"
                            >
                                <span>{role.name}</span>
                                <span>{role.description}</span>
                                <span>{role.accessType}</span>
                            </div>
                        ))
                    ) : (
                        <div className="px-4 py-2 text-sm text-gray-500">
                            No roles defined.
                        </div>
                    )}
                </div>
                <div className="rounded mb-6">
                    <div className="flex justify-between items-center px-4 py-2 border bg-[#FFFFFF] border-[#DDDDDD] rounded-lg">
                        <h3 className="font-medium">Permission Matrix</h3>
                        <button className="border text-white px-3 py-1 rounded-md bg-[#4F46E5]">
                            Add +
                        </button>
                    </div>
                    <div className="grid grid-cols-4 text-sm  px-4 py-2 border-b-1 border-[#535353] font-semibold">
                        <span>Module</span>
                        <span>View</span>
                        <span>Edit</span>
                        <span>Delete</span>
                    </div>
                    {permissionData.map((item, index) => (
                        <div
                            key={index}
                            className="grid grid-cols-4 text-sm px-4 py-2 border-b border-gray-200"
                        >
                            <span>{item.module}</span>
                            {["view", "edit", "delete"].map((perm) => (
                                <span key={perm} className="flex items-center">
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
                <div className="rounded mb-6">
                    <div className="flex justify-between items-center px-4 py-2 border bg-[#FFFFFF] border-[#DDDDDD] rounded-lg">
                        <h3 className="font-medium py-1">Access Control</h3>
                    </div>
                    <div className="flex justify-between items-center px-4 py-2 border-b border-[#DDDDDD] rounded-lg my-3">
                        <h3 className="text-sm">2FA Settings</h3>
                        <div className="text-blue-400 text-sm">
                            Enabled for All Admins
                        </div>
                    </div>
                    <div className="flex justify-between items-center px-4 py-2 border-b border-[#DDDDDD] rounded-lg my-3">
                        <h3 className="text-sm">Session Timeout</h3>
                        <div className="text-[#535353] text-sm">30 minutes</div>
                    </div>
                    <div className="flex justify-between items-center px-4 py-2 border-b border-[#DDDDDD] rounded-lg my-3">
                        <h3 className="text-sm">Account Lockout</h3>
                        <div className="text-[#535353] text-sm">
                            5 failed attempts
                        </div>
                    </div>
                </div>
                <div className="rounded mb-6">
                    <div className="flex justify-between items-center px-4 py-2 border bg-[#FFFFFF] border-[#DDDDDD] rounded-lg">
                        <h3 className="font-medium">Third Party Connections</h3>
                        <button className="border text-white px-3 py-1 rounded-md bg-[#4F46E5]">
                            Add +
                        </button>
                    </div>
                    <div className="grid grid-cols-3 text-sm  px-4 py-2 border-b-1 border-[#535353] font-semibold">
                        <span>Integration Name</span>
                        <span>Status </span>
                        <span>Description</span>
                    </div>
                    {integrations.map((integration, idx) => (
                        <div
                            key={idx}
                            className="grid grid-cols-3 text-sm px-4 py-2 border-b border-gray-200"
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
                <div className="rounded mb-6">
                    <div className="flex justify-between items-center px-4 py-2 border bg-[#FFFFFF] border-[#DDDDDD] rounded-lg">
                        <h3 className="font-medium py-1">API Configuration</h3>
                    </div>
                    <div className="flex justify-between items-center px-4 py-2 border-b border-[#DDDDDD] rounded-lg my-3">
                        <h3 className="text-sm">API Key</h3>
                        <div className="text-blue-400 text-sm">
                            sk_live_hcF12VJ8u8o4a...
                        </div>
                    </div>
                    <div className="flex justify-between items-center px-4 py-2 border-b border-[#DDDDDD] rounded-lg my-3">
                        <h3 className="text-sm">Expiry</h3>
                        <div className="text-[#535353] text-sm">25/08/2026</div>
                    </div>
                    <div className="flex justify-between items-center px-4 py-2 border-b border-[#DDDDDD] rounded-lg my-3">
                        <h3 className="text-sm">Rate Limit</h3>
                        <div className="text-[#535353] text-sm">
                            5000 requests/min
                        </div>
                    </div>
                </div>
                <div className="rounded mb-6">
                    <div className="flex justify-between items-center px-4 py-2 border bg-[#FFFFFF] border-[#DDDDDD] rounded-lg">
                        <h3 className="font-medium">Webhook Endpoints</h3>
                        <button className="border text-white px-3 py-1 rounded-md bg-[#4F46E5]">
                            Add +
                        </button>
                    </div>
                    <div className="grid grid-cols-3 text-sm  px-4 py-2 border-b-1 border-[#535353] font-semibold">
                        <span>URL</span>
                        <span>Trigger</span>
                        <span>Status</span>
                    </div>
                    {webhooks.map((hook, idx) => (
                        <div
                            key={idx}
                            className="grid grid-cols-3 text-sm px-4 py-2 border-b border-gray-200"
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
            </section>
        </div>
    );
};

export default SystemSettings;
