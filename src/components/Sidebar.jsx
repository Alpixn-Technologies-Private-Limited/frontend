import { ArrowLeft } from "lucide-react";
import { AiOutlineLogout } from "react-icons/ai";
import { FaGlobeAmericas } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { IoMdHome, IoMdSettings } from "react-icons/io";
import { MdAnalytics, MdAutoAwesome, MdGroups } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSidebar } from "../context/SidebarContext";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";
import { use } from "react";
import axiosInstance from "../utils/axios";

const Sidebar = () => {
  const { loadUser, user, loading } = useAuth();
  const location = useLocation();
  const { isSidebarOpen, closeSidebar } = useSidebar();

  const handleLogout = async () => {
    toast.success("Logged out successfully");
  };

  // 🔑 Define menus based on role
  const adminMenu = [
    { label: "Dashboard", icon: <IoMdHome />, path: "/dashboard/admin" },
    { label: "Clients", icon: <FaGlobeAmericas />, path: "/clients" },
    { label: "Projects", icon: <GrProjects />, path: "/projects" },
    { label: "Team Management", icon: <MdGroups />, path: "/team-management" },
    { label: "Analytics", icon: <MdAnalytics />, path: "/analytics" },
    { label: "AI Console", icon: <MdAutoAwesome />, path: "/ai-console" },
    { label: "Settings", icon: <IoMdSettings />, path: "/settings/system" },
  ];

  const projectManagerMenu = [
    { label: "Dashboard", icon: <IoMdHome />, path: "/dashboard/pm" },
    { label: "Projects", icon: <GrProjects />, path: "/projects" },
    { label: "Team Management", icon: <MdGroups />, path: "/team-management" },
    { label: "Project Analytics", icon: <MdAnalytics />, path: "/analytics" },
    { label: "AI Assistance", icon: <MdAutoAwesome />, path: "/ai-console" },
    { label: "Tasks & Workflow", icon: <GrProjects />, path: "/tasks" },
    { label: "Documents", icon: <GrProjects />, path: "/documents" },
    { label: "Settings", icon: <IoMdSettings />, path: "/settings/system" },
  ];

  const teamMemberMenu = [
    { label: "Dashboard", icon: <IoMdHome />, path: "/dashboard/team" },
    { label: "My Tasks", icon: <GrProjects />, path: "/my-tasks" },
    { label: "My Projects", icon: <GrProjects />, path: "/my-projects" },
    {
      label: "Team Space (Communication)",
      icon: <MdGroups />,
      path: "/team-space",
    },
    { label: "My Performance", icon: <MdAnalytics />, path: "/performance" },
    { label: "AI Assistance", icon: <MdAutoAwesome />, path: "/ai-console" },
    { label: "Documents", icon: <GrProjects />, path: "/documents" },
    { label: "Settings", icon: <IoMdSettings />, path: "/settings/system" },
  ];

  // Pick menu based on user role
  let menuItems = [];
  if (user?.role === "ADMIN") menuItems = adminMenu;
  else if (user?.role === "PROJECT_MANAGER") menuItems = projectManagerMenu;
  else if (user?.role === "TEAM_MEMBER") menuItems = teamMemberMenu;

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
    sm:fixed top-0 left-0 h-screen w-64 max-sm:w-56 bg-white dark:bg-gradient-to-br dark:from-[#282a5c] dark:via-[#091523] dark:to-[#34307d] dark:text-white border-r-2 dark:border-gray-500 shadow border-gray-300 py-6
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
                  className={`flex items-center space-x-3 px-2 py-3  my-1 font-medium text-[16px] cursor-pointer transition duration-200 ${
                    location.pathname.startsWith(item.path)
                      ? "border-[#4F46E5] border-l-4 text-[#4F46E5] dark:bg-white dark:border-white"
                      : "text-black hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  }`}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span>{item.label}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div
          className="mt-8 cursor-pointer hover:bg-gray-200 flex items-center justify-start gap-1 font-semibold p-2 rounded-md transition duration-200 dark:hover:bg-gray-700 md:p-3"
          onClick={handleLogout}
        >
          <span>
            <AiOutlineLogout />
          </span>
          <span>Log Out</span>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
