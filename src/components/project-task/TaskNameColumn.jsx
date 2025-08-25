import React from "react";

const TaskNameColumn = ({ tasks }) => {
  return (
    <div
      className="w-[230px] border-r border-gray-300 dark:border-white/60 
                 py-4 px-4 
                 bg-white/60 dark:bg-white/10 
                 backdrop-blur-lg 
                 shadow-md 
                 transition-all"
    >
      {/* Header */}
      <div className="font-semibold text-2xl text-center mb-8 text-gray-800 dark:text-white">
        Task Name
      </div>

      {/* Task List */}
      <div className="flex flex-col">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="py-2 text-sm font-medium text-gray-800 dark:text-gray-200"
          >
            {task.name}
          </div>
        ))}

        {/* Static Item */}
        <div className="mt-2 py-2 text-sm font-medium text-gray-800 dark:text-gray-200">
          Go Live
        </div>
      </div>
    </div>
  );
};

export default TaskNameColumn;
