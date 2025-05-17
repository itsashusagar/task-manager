import React, { memo } from 'react';
import { CheckSquare } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center space-x-3">
        <CheckSquare size={28} className="text-primary-600 dark:text-primary-400" />
        <h1 className="text-2xl font-bold">Task Manager</h1>
      </div>
      <ThemeToggle />
    </div>
  );
};

export default memo(Header);