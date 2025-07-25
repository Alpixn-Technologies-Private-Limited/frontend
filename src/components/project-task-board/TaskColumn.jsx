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
          <div key={index} className="border rounded p-3 shadow-sm bg-white">
            <h3 className="font-semibold text-black mb-1">Task: {task.title}</h3>
            <p className="text-sm text-gray-600 mb-1">Assignee: {task.assignee}</p>
            <p className="text-sm mb-1">
              <span className="font-medium">Priority:</span>{' '}
              <span className={
                task.priority === 'High' ? 'text-red-500' :
                task.priority === 'Medium' ? 'text-yellow-600' :
                'text-green-600'
              }>
                {task.priority}
              </span>
            </p>
            <p className="text-sm text-gray-700 mb-1">
              <span className="font-medium">Tags:</span> {task.tags.join(', ')}
            </p>
            {task.description && (
              <p className="text-xs text-gray-500 mt-1 italic">{task.description}</p>
            )}
            <p className="text-sm text-right text-gray-500 mt-2">Due: {task.dueDate}</p>
          </div>
        ))}

        {/* Add Task Box */}
        <button className="border-none bg-white w-full py-2 text-center text-gray-600 rounded hover:bg-gray-100 text-sm">
          +
        </button>
      </div>
    </div>
  )
}

export default TaskColumn
