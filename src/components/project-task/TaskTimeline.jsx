import React from "react";
import TaskNameColumn from "./TaskNameColumn";
import TaskChart from "./TaskChart";

const TaskTimeline = ({ tasks }) => {
  return (
    <div
      className="w-full mt-6 rounded-xl 
                 border border-gray-300 dark:border-white/50 
                 bg-white/60 dark:bg-white/10 
                 backdrop-blur-lg 
                 shadow-lg 
                 overflow-hidden 
                 transition-all"
    >
      <div className="flex min-h-[500px]">
        <TaskNameColumn tasks={tasks} />
        <TaskChart tasks={tasks} />
      </div>
    </div>
  );
};

export default TaskTimeline;
