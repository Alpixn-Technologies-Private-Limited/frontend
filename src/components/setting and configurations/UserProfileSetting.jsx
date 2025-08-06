import React from "react";
import { FiEdit } from "react-icons/fi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const UserProfileSetting = () => {
    return (
        <div className="bg-gray-50 min-h-screen p-4 sm:p-6 space-y-8">
            {/* User Profile */}
            <section>
                <div className="text-2xl sm:text-3xl font-semibold mb-4 flex items-center">
                    User Profile
                    <MdOutlineKeyboardArrowRight className="text-3xl sm:text-4xl ml-2" />
                </div>
                <div className="flex flex-col sm:flex-row items-start gap-6">
                    {/* Profile Image */}
                    <div className="relative place-self-center">
                        <div className="w-24 h-24 rounded-full overflow-hidden">
                            <img
                                className="object-cover w-full h-full"
                                src="https://cdn-icons-png.freepik.com/512/6997/6997668.png?ga=GA1.1.530808846.1751615351"
                                alt="Profile"
                            />
                        </div>
                        <button className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-gray-100 text-xs px-3 py-1 rounded-full flex items-center border cursor-pointer mt-2">
                            Edit <FiEdit className="ml-1 text-blue-700" size={14} />
                        </button>
                    </div>

                    {/* Profile Details */}
                    <div className="flex-1 space-y-3 w-full">
                        {[
                            { label: "Full Name", value: "Designer abc" },
                            { label: "Contact Details", value: "+91 96XXXXXXXX" },
                            {
                                label: "Preferences",
                                value: "GMT+5:30 — IST | DD/MM/YYYY",
                            },
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="flex justify-between items-center bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm"
                            >
                                <span className="font-semibold">{item.label}</span>
                                <span className="text-gray-600 text-end">{item.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Notifications */}
            <section>
                <h2 className="text-2xl sm:text-3xl font-semibold mb-4 flex items-center">
                    Notifications
                    <MdOutlineKeyboardArrowRight className="text-3xl sm:text-4xl ml-2" />
                </h2>

                {[{
                    title: "Email Preferences",
                    items: ["New Project Assignment", "Task Deadline Reminder", "Weekly digest"],
                    allowed: [true, true, false],
                }, {
                    title: "Push Notifications",
                    items: ["Mentions in comments", "New file uploaded to your task", "Project archived"],
                    allowed: [true, true, false],
                }, {
                    title: "AI Task Suggestions",
                    items: ["Risk Predictions", "AI task suggestions", "Auto-priority changes"],
                    allowed: [true, true, false],
                }].map((section, idx) => (
                    <div key={idx} className="rounded-lg mb-6 bg-white border border-gray-300">
                        <div className="flex justify-between items-center px-4 py-2">
                            <h3 className="font-medium">{section.title}</h3>
                            <Toggle />
                        </div>

                        {/* Mobile layout (flex row) */}
                        <div className="divide-y border-t border-gray-200 sm:hidden">
                            {section.items.map((item, i) => (
                                <div
                                    key={i}
                                    className="flex justify-between items-center px-4 py-2 text-sm"
                                >
                                    <span className="font-semibold">{item}</span>
                                    <span
                                        className={
                                            section.allowed[i]
                                                ? "text-indigo-600 text-xs"
                                                : "text-gray-400 text-xs"
                                        }
                                    >
                                        {section.allowed[i] ? "Allowed" : "Not Allowed"}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Desktop layout (grid 3 cols) */}
                        <div className="hidden sm:grid sm:grid-cols-3 gap-4 text-sm font-semibold px-4 py-2 border-t border-gray-200">
                            {section.items.map((item, i) => (
                                <span key={i}>{item}</span>
                            ))}
                        </div>
                        <div className="hidden sm:grid sm:grid-cols-3 gap-4 text-xs px-4 pb-4 mt-2">
                            {section.allowed.map((allowed, i) => (
                                <span
                                    key={i}
                                    className={allowed ? "text-indigo-600" : "text-gray-400"}
                                >
                                    {allowed ? "Allowed" : "Not Allowed"}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </section>

            {/* Security Settings */}
            <section>
                <h2 className="text-2xl sm:text-3xl font-semibold mb-4 flex items-center">
                    Security Settings
                    <MdOutlineKeyboardArrowRight className="text-3xl sm:text-4xl ml-2" />
                </h2>

                {[{
                    label: "Change Password",
                    actions: (
                        <div className="space-x-2 text-sm text-gray-700">
                            <button className="hover:underline">Pin |</button>
                            <button className="hover:underline">Password</button>
                        </div>
                    ),
                }, {
                    label: "Two Factor Authentication",
                    actions: <Toggle />,
                }, {
                    label: "Session Management",
                    actions: (
                        <div className="space-x-2 text-sm text-gray-700">
                            <button className="hover:underline">Safari on iPhone |</button>
                            <button className="hover:underline">Chrome on Windows</button>
                        </div>
                    ),
                }].map((item, idx) => (
                    <div
                        key={idx}
                        className="flex  sm:flex-row justify-between items-start sm:items-center bg-white border border-gray-300 rounded-lg px-4 py-2 my-2 text-sm"
                    >
                        <span className="mb-2 sm:mb-0">{item.label}</span>
                        <div className="text-end">{item.actions}</div>
                    </div>
                ))}
            </section>
        </div>
    );
};

const Toggle = () => (
    <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" className="sr-only peer" defaultChecked />
        <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-blue-600 transition-colors duration-300" />
        <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow-md transform peer-checked:translate-x-5 transition-transform duration-300" />
    </label>
);

export default UserProfileSetting;
