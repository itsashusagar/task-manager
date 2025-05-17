import React from 'react';
import { GithubIcon, Info } from 'lucide-react';

const FooterInfo: React.FC = () => {
  return (
    <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
      <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500 dark:text-gray-400">
        <div className="flex items-center mb-3 sm:mb-0">
          <Info size={16} className="mr-1" />
          <span>Drag and drop tasks to reorder them</span>
        </div>
        <div className="flex items-center">
          <a 
            href="https://github.com/yourusername/task-manager" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
          >
            <GithubIcon size={16} className="mr-1" />
            <span>View Source</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterInfo;