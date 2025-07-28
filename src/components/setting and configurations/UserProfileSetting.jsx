import React from "react";
import { FiEdit } from "react-icons/fi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const UserProfileSetting = () => {
    return (
        <div className="bg-gray-50 min-h-screen p-6 space-y-8">
            <section>
                <div className="text-3xl font-semibold mb-4 flex items-center">
                    User Profile{" "}
                    <MdOutlineKeyboardArrowRight className=" text-4xl" />
                </div>
                <div className="flex items-start space-x-4">
                    <div className="relative">
                        <div className="w-24 h-24 rounded-full">
                            <img src="https://cdn-icons-png.freepik.com/512/6997/6997668.png?ga=GA1.1.530808846.1751615351" />
                        </div>
                        <button className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-gray-100 text-sm px-2 py-0.5 rounded-full flex items-center border cursor-pointer">
                            Edit{" "}
                            <FiEdit className="ml-1 text-blue-700" size={14} />
                        </button>
                    </div>
                    <div className="flex-1 space-y-3">
                        <div className="flex justify-between items-center bg-[#FFFFFF] border border-[#DDDDDD] rounded-lg px-4 py-2">
                            <span>Full Name</span>
                            <span className="text-[#535353] text-sm">Designer abc</span>
                        </div>
                        <div className="flex justify-between items-center bg-[#FFFFFF] border border-[#DDDDDD] rounded-lg px-4 py-2">
                            <span>Contact Details</span>
                            <span className="text-[#535353] text-sm">
                                +91 96XXXXXXXX
                            </span>
                        </div>
                        <div className="flex justify-between items-center bg-[#FFFFFF] border border-[#DDDDDD] rounded-lg px-4 py-2">
                            <span>Preferences</span>
                            <span className="text-[#535353] text-sm">
                                GMT+5:30 — IST &nbsp;&nbsp;| DD/MM/YYYY
                            </span>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <h2 className="text-3xl font-semibold mb-4 flex">
                    Notifications{" "}
                    <MdOutlineKeyboardArrowRight className=" text-4xl" />
                </h2>

               
                <div className="rounded mb-6">
                    <div className="flex justify-between items-center px-4 py-2 border bg-[#FFFFFF] border-[#DDDDDD] rounded-lg">
                        <h3 className="font-medium">Email Preferences</h3>
                        <Toggle />
                    </div>
                    <div className="grid grid-cols-3 text-sm  px-4 py-2 border-b-1 border-[#535353] font-semibold">
                        <span>New Project Assignment</span>
                        <span>Task Deadline Reminder</span>
                        <span>Weekly digest</span>
                    </div>
                    <div className="grid grid-cols-3 text-xs text-[#4F46E5] px-4 pb-3 mt-3">
                        <span>Allowed</span>
                        <span>Allowed</span>
                        <span className="text-gray-400">Not Allowed</span>
                    </div>
                </div>

                {/* Push Notifications */}
                <div className="rounded-lg mb-6">
                    <div className="flex justify-between items-center px-4 py-2 border bg-[#FFFFFF] border-[#DDDDDD] rounded-lg">
                        <h3 className="font-medium">Push Notifications</h3>
                        <Toggle />
                    </div>
                    <div className="grid grid-cols-3 text-sm  px-4 py-2 border-b-1 font-semibold">
                        <span>Mentions in comments</span>
                        <span>New file uploaded to your task</span>
                        <span>Project archived</span>
                    </div>
                    <div className="grid grid-cols-3 text-xs text-[#4F46E5] px-4 pb-3 mt-3">
                        <span>Allowed</span>
                        <span>Allowed</span>
                        <span className="text-gray-400">Not Allowed</span>
                    </div>
                </div>

                {/* AI Task Suggestions */}
                <div className="rounded-lg">
                    <div className="flex justify-between items-center px-4 py-2 border bg-[#FFFFFF] border-[#DDDDDD] rounded-lg">
                        <h3 className="font-medium">AI Task Suggestions</h3>
                        <Toggle />
                    </div>
                    <div  className="grid grid-cols-3 text-sm  px-4 py-2 border-b-1 font-semibold">
                        <span>Risk Predictions</span>
                        <span>AI task suggestions</span>
                        <span>Auto-priority changes</span>
                    </div>
                    <div className="grid grid-cols-3 text-xs text-[#4F46E5] px-4 pb-3 mt-3">
                        <span>Allowed</span>
                        <span>Allowed</span>
                        <span className="text-gray-400">Not Allowed</span>
                    </div>
                </div>
            </section>

            {/* Security Settings */}
            <section>
                <h2 className="text-3xl font-semibold mb-4 flex">
                    Security Settings
                    <MdOutlineKeyboardArrowRight className=" text-4xl" />
                </h2>
                <div className="flex justify-between items-center bg-[#FFFFFF] border border-[#DDDDDD] rounded-lg px-4 py-1">
                    <span>Change Password</span>
                    <div className="space-x-2 text-sm">
                        <button className="text-gray-700 py-1  rounded">
                            Pin {"|"}
                        </button>
                        <button className="text-gray-700 py-1  rounded">
                            Password
                        </button>
                    </div>
                </div>
                <div className="flex justify-between items-center bg-[#FFFFFF] border border-[#DDDDDD] rounded-lg px-4 py-1 my-3">
                    <span>Two Factor Authentication</span>
                    <div className="space-x-2">
                        <Toggle/>
                    </div>
                </div>
                <div className="flex justify-between items-center bg-[#FFFFFF] border border-[#DDDDDD] rounded-lg px-4 py-1 my-3">
                    <span>Session Management</span>
                    <div className="space-x-2 text-sm">
                        <button className="text-gray-700 py-1  rounded">
                            Safari on Iphone {"|"}
                        </button>
                        <button className="text-gray-700 py-1 rounded">
                            Chrome on Windows
                        </button>
                    </div>
                </div>
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
