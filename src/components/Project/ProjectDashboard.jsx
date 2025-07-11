import React from 'react';
import ProjectStatsCard from './ProjectStatsCard';

const ProjectDashboard = () => {
  const stats = [
    {
      title: 'Active Projects',
      value: '12',
      subtitle: 'Projects',
      icon: '📁',
      change: '+3 this week',
      changeColor: 'text-green-600',
    },
    {
      title: 'Total Clients',
      value: '18',
      subtitle: 'Clients',
      icon: '👥',
      change: '+2 new',
      changeColor: 'text-green-600',
    },
    {
      title: 'Team Utilization',
      value: '78%',
      subtitle: '',
      icon: '📊',
      change: 'Stable',
      changeColor: 'text-yellow-600',
    },
    {
      title: 'This Month Revenue (in Lacs)',
      value: '₹4.30',
      subtitle: '',
      icon: '💰',
      change: '+15% from last month',
      changeColor: 'text-green-600',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
      {stats.map((item, idx) => (
        <ProjectStatsCard key={idx} {...item} />
      ))}
    </div>
  );
};

export default ProjectDashboard;
