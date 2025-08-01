import React from "react";
import robot from '../../assets/robot.png'

const Access = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-200 via-purple-100 to-gray-300 p-4">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-6xl flex overflow-hidden">
        
        {/* Left Side */}
        <div className="w-[60%] flex flex-col justify-center items-center p-10 bg-white">
          <h1 className="text-3xl font-bold text-[#4F46E5] mb-2 text-center">
            Welcome to Our Community
          </h1>
          <p className="text-gray-600 text-center">
            A whole new project journey starts right here
          </p>
          <img
            src={robot}
            alt="Robot"
            className="w-80 mt-8"
          />
        </div>

        {/* Right Side */}
        <div className="w-[40%] bg-white px-10 py-14 flex flex-col justify-center">
          <input
            type="email"
            placeholder="Enter your email Address"
            className="mb-6 p-3 rounded-md bg-gray-100 w-full text-sm"
          />
          <input
            type="password"
            placeholder="Password"
            className="mb-2 p-3 rounded-md bg-gray-100 w-full text-sm"
          />

          <div className="flex justify-between items-center mb-6 text-sm text-black">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Keep me login
            </label>
            <span className="text-black font-semibold cursor-pointer">
              Forgot Password?
            </span>
          </div>

          <button className="bg-blue-700 text-white py-2 rounded-md font-semibold mb-6 hover:bg-blue-600 transition">
            SIGN IN
          </button>

          <div className="flex items-center mb-6">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-3 text-sm text-gray-500">or access with code</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <input
            type="text"
            placeholder="Enter your project code"
            className="mb-6 p-3 rounded-md bg-gray-100 w-full text-sm"
          />

          <button className="bg-blue-700 text-white py-2 rounded-md font-semibold mb-7 hover:bg-blue-600 transition">
            Access Project
          </button>

          <p className="text-center text-sm text-gray-500">
            <span className="font-medium text-black">Continue as Guest</span> <br />
            Limited view access to public project information
          </p>
        </div>
      </div>
    </div>
  );
};

export default Access;
