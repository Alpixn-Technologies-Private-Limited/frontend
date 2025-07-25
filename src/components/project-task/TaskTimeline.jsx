import React from "react";
import TaskNameColumn from "./TaskNameColumn";
import TaskChart from "./TaskChart";

const TaskTimeline = ({ tasks }) => {
  return (
    <div className="w-full mt-6 rounded-xl border bg-white border-gray-300 overflow-hidden">
      <div className="flex min-h-[500px]">
        <TaskNameColumn tasks={tasks} />
        <TaskChart tasks={tasks} />
      </div>
    </div>
  );
};

export default TaskTimeline;