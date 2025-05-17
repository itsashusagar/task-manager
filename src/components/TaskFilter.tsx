import React, { memo } from 'react';
import { TaskFilter as FilterType } from '../types';
import { useTasks } from '../contexts/TaskContext';

const TaskFilter: React.FC = () => {
  const { filter, setFilter } = useTasks();

  const filters: { value: FilterType; label: string }[] = [
    { value: 'all', label: 'All' },
    { value: 'pending', label: 'Pending' },
    { value: 'completed', label: 'Completed' },
  ];

  return (
    <div className="flex justify-center mb-6">
      <div className="inline-flex bg-gray-200 dark:bg-gray-700 rounded-md p-1 animate-fade-in">
        {filters.map((filterOption) => (
          <button
            key={filterOption.value}
            onClick={() => setFilter(filterOption.value)}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
              filter === filterOption.value
                ? 'bg-white dark:bg-gray-800 text-primary-600 dark:text-primary-400 shadow-sm'
                : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            {filterOption.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default memo(TaskFilter);