import React from "react";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";

const milestones = [
  { text: "UX Research", completed: true },
  { text: "Field Research Phase 2", completed: true },
  { text: "LLM Development", completed: false },
  { text: "UI Component Making", completed: false },
  { text: "LLM Development", completed: false },
    { text: "UX Research", completed: false },
  { text: "Field Research Phase 2", completed: false },
  { text: "LLM Development", completed: false },
  { text: "UI Component Making", completed: false },
  { text: "LLM Development", completed: false },
];

const MilestoneChecklist = () => {
  // split milestones in two columns
  const mid = Math.ceil(milestones.length / 2);
  const left = milestones.slice(0, mid);
  const right = milestones.slice(mid);

  return (
    <div className="bg-white p-6 rounded-lg shadow mt-6">
      <h2 className="text-lg font-semibold mb-4">Milestone Progress Checklist</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Left Column */}
        <ul className="space-y-3">
          {left.map((item, idx) => (
            <li key={idx} className="flex items-center gap-2">
              {item.completed ? (
                <MdCheckBox className="text-indigo-600" />
              ) : (
                <MdCheckBoxOutlineBlank className="text-gray-400" />
              )}
              <span
                className={`text-sm ${
                  item.completed ? "line-through text-indigo-600" : "text-black"
                }`}
              >
                {item.text}
              </span>
            </li>
          ))}
        </ul>

        {/* Right Column */}
        <ul className="space-y-3">
          {right.map((item, idx) => (
            <li key={idx} className="flex items-center gap-2">
              {item.completed ? (
                <MdCheckBox className="text-indigo-600" />
              ) : (
                <MdCheckBoxOutlineBlank className="text-gray-400" />
              )}
              <span
                className={`text-sm ${
                  item.completed ? "line-through text-gray-400" : "text-black"
                }`}
              >
                {item.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MilestoneChecklist;