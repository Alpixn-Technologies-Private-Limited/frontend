import React from "react";
import robot from "../../assets/robot.png";
import bg from "../../assets/bg.png";

const Access = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center p-4">
      
      {/* 🔹 Background Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        {/* Overlay sirf light mode ke liye */}
        <div className="absolute inset-0 bg-white opacity-80 dark:opacity-0"></div>
      </div>

      {/* 🔹 Main Content - Glass Effect */}
      <div className="relative z-10 h-[80%] w-[80%] flex flex-col md:flex-row overflow-hidden 
                      rounded-xl shadow-lg 
                      bg-white/60 dark:bg-white/10 
                      backdrop-blur-md border border-white/20">
        
        {/* Left Side */}
        <div className="w-full md:w-[60%] flex flex-col justify-center items-center p-6 md:p-10">
          <h1 className="text-2xl md:text-2xl font-medium text-[#4F46E5] mb-2 text-center">
            Welcome to Our Community
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-center text-xs md:text-base">
            A whole new project journey starts right here
          </p>
          <img
            src={robot}
            alt="Robot"
            className="hidden md:block w-150 mt-8"
          />
        </div>

        {/* Right Side */}
        <div className="w-full md:w-[40%] px-6 md:px-10 py-8 md:py-14 flex flex-col justify-center">
          <input
            type="email"
            placeholder="Enter your email Address"
            className="mb-4 md:mb-6 p-3 rounded-md bg-gray-100 dark:bg-white/20 dark:text-white w-full text-sm"
          />
          <input
            type="password"
            placeholder="Password"
            className="mb-2 p-3 rounded-md bg-gray-100 dark:bg-white/20 dark:text-white w-full text-sm"
          />

          <div className="flex justify-between items-center mb-4 md:mb-6 text-xs md:text-sm text-black dark:text-gray-300">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Keep me login
            </label>
            <span className="font-semibold cursor-pointer">
              Forgot Password?
            </span>
          </div>

          <button className="bg-blue-700 text-white py-2 rounded-md font-semibold mb-4 md:mb-6 hover:bg-blue-600 transition">
            SIGN IN
          </button>

          <div className="flex items-center mb-4 md:mb-6">
            <hr className="flex-grow border-gray-300 dark:border-gray-600" />
            <span className="mx-2 md:mx-3 text-xs md:text-sm text-gray-500 dark:text-gray-400">
              or access with code
            </span>
            <hr className="flex-grow border-gray-300 dark:border-gray-600" />
          </div>

          <input
            type="text"
            placeholder="Enter your project code"
            className="mb-4 md:mb-6 p-3 rounded-md bg-gray-100 dark:bg-white/20 dark:text-white w-full text-sm"
          />

          <button className="bg-blue-700 text-white py-2 rounded-md font-semibold mb-5 md:mb-7 hover:bg-blue-600 transition">
            Access Project
          </button>

          <p className="text-center text-xs md:text-sm text-gray-500 dark:text-gray-300">
            <span className="font-medium text-black dark:text-white">
              Continue as Guest
            </span> <br />
            Limited view access to public project information
          </p>
        </div>
      </div>
    </div>
  );
};

export default Access;
