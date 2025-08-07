import React, { useState } from "react";
import {
  Calendar,
  Plus,
  User,
  Check,
  Search,
  PlusIcon,
  SearchCheckIcon,
} from "lucide-react";

export default function NewProject() {
  const [selectedTemplate, setSelectedTemplate] = useState(
    "website-development"
  );
  const [selectedTeamMembers, setSelectedTeamMembers] = useState([]);
  const [taskAutomation, setTaskAutomation] = useState(true);
  const [eventPrediction, setEventPrediction] = useState(true);
  const [riskPrediction, setRiskPrediction] = useState(true);
  const [suggestionSensitivity, setSuggestionSensitivity] = useState(75);

  const clients = [
    { id: 1, name: "Delta Inc", email: "delta@inc.com" },
    { id: 2, name: "Alpha Corp", email: "alpha@corp.com" },
    { id: 3, name: "Beta LLC", email: "beta@llc.com" },
    { id: 4, name: "Gamma Co", email: "gamma@co.com" },
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Catherine Tresa",
      avatar:
        "https://www.behindwoods.com/tamil-actress/catherine-tresa/catherine-tresa-stills-photos-pictures-1111.jpg",
    },
    {
      id: 2,
      name: "Rohit Sharma",
      avatar:
        "https://cdn.britannica.com/52/252752-050-2E120356/Cricketer-Rohit-Sharma-2023.jpg",
    },
    {
      id: 3,
      name: "Anushka Shetty",
      avatar:
        "https://m.media-amazon.com/images/M/MV5BODY0ZTBjMmMtYWFhYi00ZTkxLWI0OTItNTkxMmY1MDhhMWE2XkEyXkFqcGc@._V1_.jpg",
    },
    {
      id: 4,
      name: "Virat Kohli",
      avatar:
        "https://upload.wikimedia.org/wikipedia/commons/9/9b/Virat_Kohli_in_PMO_New_Delhi.jpg",
    },
    {
      id: 5,
      name: "Ellyse Perry",
      avatar:
        "https://femalecricket.com/wp-content/uploads/2019/11/Ellyse-Perry-Female-Cricketer-Century-1200x900.jpg",
    },
    {
      id: 6,
      name: "Jasprit Bumrah",
      avatar:
        "https://upload.wikimedia.org/wikipedia/commons/0/02/Jasprit_Bumrah_in_PMO_New_Delhi.jpg",
    },
  ];

  const toggleTeamMember = (memberId) => {
    setSelectedTeamMembers((prev) =>
      prev.includes(memberId)
        ? prev.filter((id) => id !== memberId)
        : [...prev, memberId]
    );
  };

  return (
    <div className="mx-auto px-2 py-4 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">
        New Project Details
      </h1>

      <div className="flex w-full gap-4 max-sm:flex-col">
        <div className="flex flex-col gap-6 mb-6 w-[40%] max-sm:w-full">
          {/* Basic Information */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Basic Information
            </h2>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Project Name
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 bg-slate-100 border border-gray-300 rounded-md focus:outline-none"
                  placeholder="Enter project name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  rows={4}
                  className="w-full px-3 py-2 bg-slate-100 border border-gray-300 rounded-md focus:outline-none resize-none"
                  placeholder="Enter project description"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category
                  </label>
                  <select className="w-full px-3 py-2 bg-slate-100 border border-gray-300 rounded-md focus:outline-none">
                    <option>Select</option>
                    <option>Development</option>
                    <option>Design</option>
                    <option>Marketing</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Priority
                  </label>
                  <select className="w-full px-3 py-2 bg-slate-100 border border-gray-300 rounded-md focus:outline-none">
                    <option>Select</option>
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          {/* Project Template Selection */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Project Template Selection
            </h2>

            <div className="relative my-6">
              <Search className="absolute left-2 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Find Template"
                className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-md focus:outline-none bg-slate-100"
              />
            </div>

            <div className="flex items-end gap-4 mt-4 max-sm:flex-col">
              <div className="space-y-1.5 border border-gray-300 rounded-lg p-4 flex-1">
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-medium">Website Development</h2>
                  <input
                    type="checkbox"
                    name="template"
                    id="website-development"
                    checked={true}
                    className="h-5 w-5 rounded-sm border-green-600 accent-white bg-green-400 ring-[1px] focus:ring-green-500"
                  />
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Creating Company website and landing pages
                </p>
              </div>

              <button className="min-w-48 h-fit px-4 py-2 flex gap-0 items-center bg-gradient-to-r from-indigo-600 to-yellow-600 text-white rounded-md transition-colors">
                <PlusIcon className="w-4 h-4 mr-1" /> Use this template
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 mb-6 w-[60%] max-sm:w-full">
          {/* Client Selection */}
          <div className="bg-white rounded-lg p-6 shadow-sm max-sm:p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900">
                Client Selection
              </h2>
            </div>

            <div>
              <span className="block text-sm font-medium text-gray-700 mb-1">
                Client
              </span>
              <div className="relative mb-4 flex items-center gap-2 max-sm:flex-col">
                <Search className="absolute left-3 text-gray-400 max-sm:top-2 max-sm:left-1.5" />
                <input
                  type="text"
                  name="client"
                  id="client"
                  placeholder="Search for clients..."
                  className="h-12 border border-gray-300 rounded-lg focus:outline-0 bg-slate-100 w-full pl-10 max-sm:pl-8 max-sm:h-10"
                />
                <button className="text-gray-500 flex min-w-fit items-center border border-gray-400 h-12 px-3 rounded-md bg-white hover:bg-gray-50 transition-colors max-sm:h-10 max-sm:ml-auto">
                  <Plus className="w-4 h-4" /> Add New Client
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-h-48 overflow-y-auto max-sm:border-[1px] max-sm:border-gray-300 max-sm:rounded-lg max-sm:p-1">
              {clients.map((client) => (
                <div
                  key={client.id}
                  className="flex items-center p-2 bg-gray-50 border-[1px] border-gray-300 hover:bg-gray-100 rounded-lg"
                >
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center mr-3">
                    <User className="w-4 h-4 text-gray-600" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-900">
                      {client.name}
                    </div>
                    <div className="text-xs text-gray-500">{client.email}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Team Assignment */}
          <div className="bg-white rounded-lg p-6 shadow-sm max-sm:p-4">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Team Assignment
            </h2>

            <div>
              <label
                htmlFor="team"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Select Team members
              </label>
              <select
                name="team"
                id="team"
                className="w-full px-3 h-12 bg-slate-100 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0 mb-4"
              >
                {teamMembers.map((member) => (
                  <option key={member.id} value={member.id}>
                    {member.name}
                  </option>
                ))}
              </select>
              <div className="flex flex-wrap gap-3">
                {teamMembers.map((member) => (
                  <button
                    key={member.id}
                    onClick={() => toggleTeamMember(member.id)}
                    className={`relative w-[4.5rem] h-[4.5rem] rounded-full text-2xl border-2 transition-all ${
                      selectedTeamMembers.includes(member.id)
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-600 hover:border-gray-400"
                    }`}
                    title={member.name}
                  >
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                    {selectedTeamMembers.includes(member.id) && (
                      <div className="absolute -top-1 -right-1 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                    )}
                    <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-700 rounded-full flex items-center justify-center" />
                  </button>
                ))}
              </div>
            </div>
          </div>
          {/* Timeline & Milestone */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4 max-sm:flex-col max-sm:items-start">
              <h2 className="text-xl max-sm:text-2xl font-semibold text-gray-900">
                Timeline & Milestone
              </h2>
              <button className="px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-yellow-600 text-base font-medium flex items-center text-white rounded-md hover:bg-blue-700 transition-colors max-sm:py-1.5 max-sm:w-full max-sm:justify-center max-sm:mt-2">
                <PlusIcon className="w-4 h-4 mr-0.5 font-medium" />
                Add Milestone
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Start Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    defaultValue="2024-07-07"
                    className="w-full px-3 py-2 h-12 border bg-slate-100 border-gray-300 rounded-md focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  End Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    defaultValue="2024-10-10"
                    className="w-full px-3 py-2 h-12 bg-slate-100 border border-gray-300 rounded-md focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full">
        {/* AI Configuration */}
        <div className="bg-white rounded-lg p-6 shadow-sm w-full">
          <h2 className="text-xl font-semibold text-gray-900 mb-7">
            AI Configuration
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-gray-900">
                    Enable Task Automation
                  </div>
                  {/* <div className="text-sm text-gray-500">
                    Automatically create and assign tasks
                  </div> */}
                </div>
                <button
                  onClick={() => setTaskAutomation(!taskAutomation)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    taskAutomation ? "bg-blue-600" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      taskAutomation ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-gray-900">
                    Enable risk prediction
                  </div>
                  {/* <div className="text-sm text-gray-500">
                    Predict potential project risks
                  </div> */}
                </div>
                <button
                  onClick={() => setRiskPrediction(!riskPrediction)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    riskPrediction ? "bg-blue-600" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      riskPrediction ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-gray-900">
                    Enable event prediction
                  </div>
                  {/* <div className="text-sm text-gray-500">
                    Predict upcoming events and deadlines
                  </div> */}
                </div>
                <button
                  onClick={() => setEventPrediction(!eventPrediction)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    eventPrediction ? "bg-blue-600" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      eventPrediction ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>

              <div>
                <div className="font-medium text-gray-900 mb-2">
                  Suggestion Sensitivity
                </div>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={suggestionSensitivity}
                    onChange={(e) => setSuggestionSensitivity(e.target.value)}
                    className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Low</span>
                    <span>Medium</span>
                    <span>High</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center gap-5 max-sm:gap-2 mt-6 max-sm:flex-wrap max-sm:justify-between">
        <button className="px-6 py-2 bg-white shadow-md cursor-pointer border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors max-sm:px-3 max-sm:py-1.5 max-sm:w-[48%]">
          Cancel
        </button>
        <button className="px-6 py-2 bg-white shadow-md cursor-pointer border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors max-sm:px-3 max-sm:py-1.5 max-sm:w-[48%]">
          Save as Draft
        </button>
        <button className="px-6 py-2 cursor-pointer shadow-md bg-gradient-to-r from-indigo-600 to-yellow-600 text-white rounded-md hover:bg-blue-700 transition-colors max-sm:px-3 max-sm:py-1.5 max-sm:w-full max-sm:mt-2">
          Create Project
        </button>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
        }

        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          border: none;
        }
      `}</style>
    </div>
  );
}
