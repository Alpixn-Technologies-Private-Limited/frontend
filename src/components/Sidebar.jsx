import React from "react";
import { IoMdHome, IoMdSettings } from "react-icons/io";
import { FaGlobeAmericas } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { MdGroups, MdAnalytics, MdAutoAwesome } from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  { label: "Dashboard", icon: <IoMdHome />, path: "/dashboard/admin" },
  { label: "Clients", icon: <FaGlobeAmericas />, path: "/clients" },
  { label: "Projects", icon: <GrProjects />, path: "/projects" },
  { label: "Team Management", icon: <MdGroups />, path: "/team-management" },
  { label: "Analytics", icon: <MdAnalytics />, path: "/analytics" },
  { label: "AI Console", icon: <MdAutoAwesome />, path: "/ai-console" },
  { label: "Settings", icon: <IoMdSettings />, path: "/settings/system" },
];


const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="h-screen w-64 bg-white border-r shadow border-gray-300 py-6 flex flex-col justify-between font-[Segoe UI]">
      <div>
        <h3 className="text-2xl text-center mx-auto font-bold mb-10 bg-clip-text text-transparent w-fit bg-gradient-to-r from-[#4F46E5] via-[#D6A700] to-[#B700FF]">
          Project Pilot
        </h3>

        <div className="space-y-2">
          {menuItems.map((item, index) => (
            <Link to={item.path} key={index}>
              <div
                className={`flex items-center space-x-3 p-2 my-1 font-medium text-[16px] cursor-pointer transition duration-200 ${
                  location.pathname === item.path
                    ? "border-[#4F46E5] border-l-4 text-[#4F46E5]"
                    : "text-black hover:bg-gray-100"
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                <span>{item.label}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-8 cursor-pointer hover:bg-gray-200 flex items-center justify-start gap-1 font-semibold p-2 rounded-md transition duration-200">
        <span><AiOutlineLogout /></span>
       <Link to={"/login"}><span>Log Out</span></Link> 
      </div>
    </div>
  );
};

export default Sidebar;