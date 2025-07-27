import React from "react";
import ai_image from "../../assets/TeamWorkload_page_ai_image.png"
const TeamWorkload = () => {
  return (
    <div className="bg-white min-h-screen rounded-2xl shadow-lg m-5 p-6">
      <h1 className="text-[32px] font-bold text-gray-900">Team Workload</h1>
      <p className="text-[#6B7582] mt-1 mb-6">
        Visualize and manage team capacity and task allocation
      </p>

      <div className="flex border-b border-gray-200 mb-4">
        <button className="text-sm font-medium text-black border-b-2 border-black px-4 py-2">
          Timeline
        </button>
        <button className="text-sm font-medium text-gray-500 px-4 py-2">
          List
        </button>
      </div>

      <h2 className="text-[22px] font-bold text-gray-900 mb-3">Team Members</h2>
      <div className="w-full border border-gray-200 rounded-2xl overflow-hidden">
        <div className="grid grid-cols-4 text-[#121417] text-sm font-medium px-6 py-3">
          <div>Member</div>
          <div>Capacity</div>
          <div>Tasks</div>
          <div>Timeline</div>
        </div>
        {[
          {
            name: "Sophia Carter",
            capacity: "Available",
            tasks: "12 tasks",
            timeline: 75,
            timelineColor: "bg-black"
          },
          {
            name: "Ethan Bennett",
            capacity: "Fully Booked",
            tasks: "15 tasks",
            timeline: 100,
            timelineColor: "bg-black"
          },
          {
            name: "Olivia Hayes",
            capacity: "Over Capacity",
            tasks: "18 tasks",
            timeline: 120,
            timelineColor: "bg-black"
          },
          {
            name: "Liam Foster",
            capacity: "Available",
            tasks: "10 tasks",
            timeline: 60,
            timelineColor: "bg-black"
          },
          {
            name: "Ava Morgan",
            capacity: "Fully Booked",
            tasks: "14 tasks",
            timeline: 95,
            timelineColor: "bg-black"
          }
        ].map((member, index) => (
          <div
            key={index}
            className="grid grid-cols-4 items-center text-sm text-[#121417] border-t border-gray-200 px-6 py-4"
          >
            <div>{member.name}</div>
            <div className="text-[#6B7582]">{member.capacity}</div>
            <div className="text-[#6B7582]" >{member.tasks}</div>
            <div className="flex items-center gap-2">
              <div className="w-24 h-1 rounded-full bg-gray-200 relative">
                <div
                  className={`absolute top-0 left-0 h-1 rounded-full ${member.timelineColor}`}
                  style={{ width: `${Math.min(member.timeline, 120)}%` }}
                ></div>
              </div>
              <span className="pl-10">{member.timeline}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">AI Suggestions</h2>
        <div className="flex justify-between items-start py-2">
          <div>
            <h3 className="font-bold text-[1rem] text-gray-900 mb-1">
              Reallocate Tasks from Olivia Hayes
            </h3>
            <p className="text-[#6B7582] text-sm mb-4">
              Olivia is over capacity. Consider reallocating some tasks to Sophia Carter or Liam Foster.
            </p>
            <button className="text-sm font-medium text-gray-900 border border-gray-300 rounded-lg px-3 py-1 hover:bg-gray-100 bg-[#F2F2F5]">
              View Suggestions →
            </button>
          </div>
          <div className="mr-30">
            <img className="w-48 h-44 rounded-lg" src={ai_image}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamWorkload;
