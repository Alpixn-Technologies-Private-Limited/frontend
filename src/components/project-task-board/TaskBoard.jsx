import React from 'react'
import TaskColumn from './TaskColumn'

const TaskBoard = () => {
  const todoTasks = [
    {
      title: 'Design login page UI',
      assignee: 'Aditi',
      priority: 'High',
      tags: ['UI', 'Frontend'],
      description: 'Split design by screen resolution',
      dueDate: 'Jul 16'
    },
    {
      title: 'Draft Q3 feature roadmap',
      assignee: 'Meera',
      priority: 'Medium',
      tags: ['Planning', 'Strategy'],
      dueDate: 'Jul 14'
    },
    {
      title: 'Research user personas',
      assignee: 'Rahul',
      priority: 'Low',
      tags: ['Testing', 'Backend'],
      dueDate: 'Jul 10'
    }
  ]

  const pendingTasks = [
    {
      title: 'Build onboarding form validation (In Progress)',
      assignee: 'Sandeep',
      priority: 'High',
      tags: ['Frontend', 'UX'],
      description: 'Validate email formats and password rules',
      dueDate: 'Jul 15'
    },
    {
      title: 'Conduct stakeholder interviews (In Progress)',
      assignee: 'Priya',
      priority: 'Medium',
      tags: ['Research', 'UX'],
      dueDate: 'Jul 14'
    },
    {
      title: 'Review UI mockups with client (In Review)',
      assignee: 'Neha',
      priority: 'Medium',
      tags: ['ClientFeedback', 'UI'],
      dueDate: 'Jul 10'
    },
    {
      title: 'Run QA tests for login module (Testing)',
      assignee: 'QA Team',
      priority: 'Low',
      tags: ['Testing', 'QA'],
      dueDate: 'Jul 12'
    },
    {
      title: 'Review sprint report draft (In Review)',
      assignee: 'Project Lead',
      priority: 'Medium',
      tags: ['Documentation'],
      dueDate: 'Jul 14'
    }
  ]

  const completedTasks = [
    {
      title: 'Integrate Google login',
      assignee: 'Sandeep',
      priority: 'Low',
      tags: ['Auth', 'Frontend'],
      dueDate: 'Jun 28'
    },
    {
      title: 'Set up CI/CD pipeline',
      assignee: 'Neha',
      priority: 'Low',
      tags: ['DevOps', 'Automation'],
      dueDate: 'Jul 12'
    }
  ]

  return (
    <div className="mt-9 bg-white px-4">
      {/* Heading */}
      <h2 className="text-3xl py-4 font-semibold text-gray-800 m-8">
        Project Task Board
      </h2>

      {/* Columns Row */}
      <div className="flex flex-col m-6 md:flex-row gap-6">
        
        {/* To Do Column Card */}
        <div className="bg-gray-100 rounded-lg p-4 shadow-sm min-h-[520px] md:w-1/3">
          <TaskColumn
            title="To Do"
            count={todoTasks.length}
            color="bg-[#845E36]"
            tasks={todoTasks}
          />
        </div>

        {/* Pending Column Card */}
        <div className="bg-gray-100 rounded-lg p-4 shadow-sm min-h-[520px] w-full md:w-1/3">
          <TaskColumn
            title="Pending"
            count={pendingTasks.length}
            color="bg-[#204060]"
            tasks={pendingTasks}
          />
        </div>

        {/* Completed Column Card */}
        <div className="bg-gray-100 rounded-lg p-4 shadow-sm min-h-[520px] w-full md:w-1/3">
          <TaskColumn
            title="Completed"
            count={completedTasks.length}
            color="bg-[#1B5E20]"
            tasks={completedTasks}
          />
        </div>

      </div>
    </div>
  )
}

export default TaskBoard
