import React from "react";

const TaskNameColumn = ({ tasks }) => {
  return (
    <div className="w-[230px] border-r border-gray-300 py-4 px-4 bg-white">
      <div className="font-semibold text-2xl text-center mb-8">Task Name</div>
      <div className="flex flex-col">
        {tasks.map((task) => (
          <div key={task.id} className="py-2 text-sm font-medium text-gray-800">
            {task.name}
          </div>
        ))}
        <div className="mt-2 py-2 text-sm font-medium text-gray-800">
          Go Live
        </div>
      </div>
    </div>
  );
};

export default TaskNameColumn;