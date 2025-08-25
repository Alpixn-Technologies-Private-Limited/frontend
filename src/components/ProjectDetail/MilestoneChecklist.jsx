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
  const mid = Math.ceil(milestones.length / 2);
  const left = milestones.slice(0, mid);
  const right = milestones.slice(mid);

  return (
    <div
      className="rounded-2xl p-6 mt-6 
                 bg-white/30 dark:bg-white/10
                 backdrop-blur-md 
                 border border-white/20 dark:border-white/10 
                 shadow-lg hover:shadow-xl
                 transition-all duration-300"
    >
      <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">
        Milestone Progress Checklist
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Left Column */}
        <ul className="space-y-3">
          {left.map((item, idx) => (
            <li key={idx} className="flex items-center gap-2">
              {item.completed ? (
                <MdCheckBox className="text-indigo-500 dark:text-indigo-400 text-xl" />
              ) : (
                <MdCheckBoxOutlineBlank className="text-gray-400 dark:text-gray-500 text-xl" />
              )}
              <span
                className={`text-sm ${
                  item.completed
                    ? "line-through text-indigo-500 dark:text-indigo-400"
                    : "text-black dark:text-gray-200"
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
                <MdCheckBox className="text-indigo-500 dark:text-indigo-400 text-xl" />
              ) : (
                <MdCheckBoxOutlineBlank className="text-gray-400 dark:text-gray-500 text-xl" />
              )}
              <span
                className={`text-sm ${
                  item.completed
                    ? "line-through text-indigo-500 dark:text-indigo-400"
                    : "text-black dark:text-gray-200"
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
