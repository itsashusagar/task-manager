import React, { memo, useMemo } from 'react';
import { useTasks } from '../contexts/TaskContext';

const TaskStats: React.FC = () => {
  const { tasks } = useTasks();
  
  const stats = useMemo(() => {
    const total = tasks.length;
    const completed = tasks.filter(task => task.completed).length;
    const pending = total - completed;
    const percentComplete = total > 0 
      ? Math.round((completed / total) * 100) 
      : 0;
    
    return { total, completed, pending, percentComplete };
  }, [tasks]);
  
  if (stats.total === 0) return null;
  
  return (
    <div className="mb-6 card p-4 animate-fade-in">
      <div className="grid grid-cols-3 gap-4 text-center">
        <div>
          <p className="text-xs uppercase text-gray-500 dark:text-gray-400">Total</p>
          <p className="text-2xl font-semibold">{stats.total}</p>
        </div>
        <div>
          <p className="text-xs uppercase text-gray-500 dark:text-gray-400">Completed</p>
          <p className="text-2xl font-semibold text-success-600 dark:text-success-400">{stats.completed}</p>
        </div>
        <div>
          <p className="text-xs uppercase text-gray-500 dark:text-gray-400">Pending</p>
          <p className="text-2xl font-semibold text-warning-600 dark:text-warning-400">{stats.pending}</p>
        </div>
      </div>
      
      <div className="mt-3">
        <div className="flex justify-between text-xs mb-1">
          <span>Progress</span>
          <span>{stats.percentComplete}%</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
          <div 
            className="bg-primary-600 h-2.5 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${stats.percentComplete}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default memo(TaskStats);