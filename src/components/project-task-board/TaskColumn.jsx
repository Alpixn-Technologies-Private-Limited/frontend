import React from 'react'

const TaskColumn = ({ title, count, color, tasks }) => {
  return (
    <div>
      {/* Column Header */}
      <div className={`py-2 px-3 rounded-t text-white text-sm font-medium mb-4 ${color}`}>
        {title} ({count} Tasks)
      </div>

      {/* Task Cards */}
      <div className="flex flex-col gap-4">
        {tasks.map((task, index) => (
          <div
            key={index}
            className="bg-white/80 dark:bg-white/5 dark:backdrop-blur-md
                       border border-gray-200 dark:border-white/20
                       rounded p-3 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <h3 className="font-semibold text-gray-800 dark:text-white mb-1">
              Task: {task.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
              Assignee: {task.assignee}
            </p>
            <p className="text-sm mb-1">
              <span className="font-medium">Priority:</span>{' '}
              <span
                className={
                  task.priority === 'High'
                    ? 'text-red-500'
                    : task.priority === 'Medium'
                    ? 'text-yellow-500'
                    : 'text-green-500'
                }
              >
                {task.priority}
              </span>
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">
              <span className="font-medium">Tags:</span> {task.tags.join(', ')}
            </p>
            {task.description && (
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 italic">
                {task.description}
              </p>
            )}
            <p className="text-sm text-right text-gray-500 dark:text-gray-400 mt-2">
              Due: {task.dueDate}
            </p>
          </div>
        ))}

        {/* Add Task Box */}
        <button
          className="bg-white/80 dark:bg-white/5 dark:backdrop-blur-md
                     border border-gray-200 dark:border-white/20
                     w-full py-2 text-center rounded text-sm
                     text-gray-600 dark:text-gray-300
                     transition hover:bg-gray-100/70 dark:hover:bg-white/10"
        >
          +
        </button>
      </div>
    </div>
  )
}

export default TaskColumn
