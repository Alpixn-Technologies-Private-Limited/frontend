import { ArrowLeft } from "lucide-react";
import { AiOutlineLogout } from "react-icons/ai";
import { FaGlobeAmericas } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { IoMdHome, IoMdSettings } from "react-icons/io";
import { MdAnalytics, MdAutoAwesome, MdGroups } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { useSidebar } from "../context/SidebarContext";

const menuItems = [
  { label: "Dashboard", icon: <IoMdHome />, path: "/dashboard" },
  { label: "Clients", icon: <FaGlobeAmericas />, path: "/clients" },
  { label: "Projects", icon: <GrProjects />, path: "/project" },
  { label: "Team Management", icon: <MdGroups />, path: "/team-management" },
  { label: "Analytics", icon: <MdAnalytics />, path: "/analytics" },
  { label: "AI Console", icon: <MdAutoAwesome />, path: "/ai-console" },
  { label: "Settings", icon: <IoMdSettings />, path: "/settings/system" },
];

const Sidebar = () => {
  const location = useLocation();
  const { isSidebarOpen, closeSidebar } = useSidebar();

  return (
    <>
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-[#00000095] bg-opacity-60 w-[100vw] transition-opacity duration-300 sm:hidden z-0 ease-in-out"
          onClick={closeSidebar}
        />
      )}
      <div
        className={`
    sm:fixed top-0 left-0 h-screen w-64 max-sm:w-56 bg-white border-r shadow border-gray-300 py-6
    flex flex-col justify-between font-[Segoe UI] z-50
    transform transition-all duration-500 sm:translate-x-0 sm:opacity-100
    ${
      isSidebarOpen
        ? "translate-x-0 opacity-100"
        : "-translate-x-full opacity-0"
    }
    sm:translate-x-0 max-sm:h-full max-sm:rounded-r-xl max-sm:shadow-lg max-sm:border-r-2 max-sm:z-50
  `}
      >
        <div>
          <div className="flex items-center justify-between px-4 mb-10 max-sm:px-2">
            <h3 className="text-2xl text-center mx-auto font-bold bg-clip-text text-transparent w-fit bg-gradient-to-r from-[#4F46E5] via-[#D6A700] to-[#B700FF]">
              Project Pilot
            </h3>
            <ArrowLeft
              className="cursor-pointer sm:hidden my-auto mr-3"
              onClick={closeSidebar}
            />
          </div>

          <div className="space-y-2">
            {menuItems.map((item, index) => (
              <Link to={item.path} key={index} onClick={closeSidebar}>
                <div
                  className={`flex items-center space-x-3 p-2 my-1 font-medium text-[16px] cursor-pointer transition duration-200 ${
                    location.pathname.startsWith(item.path)
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
          <span>
            <AiOutlineLogout />
          </span>
          <Link to={"/login"}>
            <span>Log Out</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
