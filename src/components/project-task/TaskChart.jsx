import React, { useMemo } from 'react';
import {
  parseISO,
  format,
  differenceInDays,
  eachDayOfInterval,
} from 'date-fns';

const getStatusColor = (status) => {
  switch (status) {
    case 'Done':
      return 'bg-green-600';
    case 'In Progress':
      return 'bg-green-400';
    case 'Pending':
      return 'bg-yellow-500';
    case 'Critical':
      return 'bg-red-600';
    default:
      return 'bg-gray-300';
  }
};

const TaskChart = () => {
  const chartStartDate = parseISO("2025-06-01");
  const chartEndDate = parseISO("2025-07-15");
  const totalChartDays = differenceInDays(chartEndDate, chartStartDate) + 1;

  const dailyHeaders = useMemo(() => {
    return eachDayOfInterval({ start: chartStartDate, end: chartEndDate });
  }, []);

  const monthBlocks = [
    { month: 'June', from: parseISO("2025-06-01"), to: parseISO("2025-06-30") },
    { month: 'July', from: parseISO("2025-07-01"), to: parseISO("2025-07-15") },
  ];

  const staticTasks = [
    { id: 1, status: 'Done', startDate: '2025-06-03', endDate: '2025-06-07' },
    { id: 2, status: 'In Progress', startDate: '2025-06-09', endDate: '2025-06-17' },
    { id: 3, status: 'Pending', startDate: '2025-06-18', endDate: '2025-06-22' },
    { id: 4, status: 'Pending', startDate: '2025-06-23', endDate: '2025-06-27' },
    { id: 5, status: 'Pending', startDate: '2025-06-28', endDate: '2025-06-30' },
    { id: 6, status: 'Critical', startDate: '2025-07-13', endDate: '2025-07-15' },
    { id: 7, status: 'Done', startDate: '2025-06-11', endDate: '2025-06-14' },
    { id: 8, status: 'In Progress', startDate: '2025-06-15', endDate: '2025-06-20' },
    { id: 9, status: 'Pending', startDate: '2025-07-04', endDate: '2025-07-07' },
    { id: 10, status: 'Critical', startDate: '2025-07-10', endDate: '2025-07-12' },
  ];

  const taskAnnotations = {
    1: { text: 'Milestones', color: 'text-green-600', position: 'top' },
    2: { text: 'blocked by client feedback', color: 'text-green-400', position: 'top' },
    4: { text: 'Depend on UI Completion', color: 'text-yellow-600', position: 'top' },
    6: { text: 'Milestones', color: 'text-red-600', position: 'top' },
    8: { text: 'Revising Screen based on feedback', color: 'text-green-600', position: 'top' },
    9: { text: 'Checklist & final files pending', color: 'text-yellow-600', position: 'top' },
    10: { text: 'File milestone, include insights log', color: 'text-red-600', position: 'top' },
  };

  return (
    <div className="flex-1">
      {/* Month Headers */}
      <div className="flex w-full border-b border-gray-300 bg-white sticky top-0 z-10">
        {monthBlocks.map(({ month, from, to }) => {
          const days = differenceInDays(to, from) + 1;
          const width = (days / totalChartDays) * 100;
          return (
            <div
              key={month}
              className="text-lg font-bold text-gray-800 py-2 border-r border-gray-300 text-center"
              style={{ flexBasis: `${width}%`, minWidth: `${width}%` }}
            >
              {month}
            </div>
          );
        })}
      </div>

      {/* Day Headers */}
      <div className="flex text-[10px] text-gray-500 border-b border-gray-300">
        {dailyHeaders.map((date, i) => {
          const width = (1 / totalChartDays) * 100;
          const isSunday = format(date, 'EEE') === 'Sun';
          return (
            <div
              key={i}
              className={`text-center py-1 border-r border-gray-200 flex flex-col items-center justify-center 
              ${isSunday ? 'bg-red-100 text-red-600 font-semibold' : ''} 
              ${((i + 1) % 3 === 0 && !isSunday) ? 'font-semibold text-black' : ''}`}
              style={{ flexBasis: `${width}%`, minWidth: `${width}%` }}
            >
              <div>{format(date, 'EEE')}</div>
              <div>{format(date, 'd')}</div>
            </div>
          );
        })}
      </div>

      {/* Task Bars */}
      <div className="relative z-0">
        {/* Vertical Grid Lines */}
        {dailyHeaders.map((_, idx) => (
          <div
            key={idx}
            className="absolute top-0 bottom-0 w-[1px] bg-gray-200 z-0"
            style={{ left: `${(idx / totalChartDays) * 100}%` }}
          />
        ))}

        {staticTasks.map((task) => {
          const start = parseISO(task.startDate);
          const end = parseISO(task.endDate);
          const offset = differenceInDays(start, chartStartDate);
          const duration = differenceInDays(end, start) + 1;

          const leftPercent = (offset / totalChartDays) * 100;
          const widthPercent = (duration / totalChartDays) * 100;
          const barColor = getStatusColor(task.status);
          const annotation = taskAnnotations[task.id];

          return (
            <div key={task.id} className="relative h-12 border-b border-gray-200 flex items-center">
              {/* Bar */}
              <div
                className={`absolute h-6 rounded-full px-2 flex items-center text-white text-xs font-medium z-10 truncate transition-all duration-300 ease-in-out transform hover:scale-[1.03] hover:brightness-110 ${barColor}`}
                style={{
                  left: `${leftPercent}%`,
                  width: `${widthPercent}%`,
                  justifyContent: 'flex-end',
                }}
              >
                {task.status}
              </div>

              {/* Annotation */}
              {annotation && (
                <div
                  className={`absolute text-[10px] font-semibold px-2 py-1 ${annotation.color}`}
                  style={{
                    top: '2px',
                    left:
                      task.status === 'Critical'
                        ? `calc(${leftPercent}% - 125px)`
                        : task.status === 'Pending'
                        ? `calc(${leftPercent}% + ${widthPercent}% + 6px)`
                        : `calc(${leftPercent}% + ${widthPercent}% + 6px)`,
                    maxWidth: '120px',
                    whiteSpace: 'nowrap',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {annotation.text}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TaskChart;