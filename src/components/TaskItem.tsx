import React, { memo } from 'react';
import { Check, Trash, Circle } from 'lucide-react';
import { Task } from '../types';
import { Draggable } from 'react-beautiful-dnd';

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  index: number;
  isDragDisabled?: boolean;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onDelete, index, isDragDisabled = false }) => {
  return (
    <Draggable draggableId={task.id} index={index} isDragDisabled={isDragDisabled}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`task-item ${snapshot.isDragging ? 'shadow-lg ring-2 ring-primary-300 dark:ring-primary-700' : ''} ${
            isDragDisabled ? 'cursor-default' : 'cursor-grab active:cursor-grabbing'
          }`}
          style={{
            ...provided.draggableProps.style,
          }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 flex-1">
              <button
                onClick={() => onToggle(task.id)}
                className={`flex items-center justify-center w-6 h-6 rounded-full border-2 ${
                  task.completed 
                    ? 'bg-success-500 border-success-500 hover:bg-success-600 hover:border-success-600' 
                    : 'border-gray-400 hover:border-primary-500 dark:border-gray-600 dark:hover:border-primary-400'
                } transition-colors duration-200`}
                aria-label={task.completed ? "Mark as incomplete" : "Mark as complete"}
              >
                {task.completed ? (
                  <Check size={16} className="text-white" />
                ) : (
                  <Circle size={16} className="text-transparent" />
                )}
              </button>
              <span 
                className={`text-lg ${
                  task.completed 
                    ? 'line-through text-gray-500 dark:text-gray-400' 
                    : 'text-gray-800 dark:text-gray-200'
                }`}
              >
                {task.text}
              </span>
            </div>

            <button
              onClick={() => onDelete(task.id)}
              className="p-2 text-gray-500 hover:text-error-500 dark:text-gray-400 dark:hover:text-error-400 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
              aria-label="Delete task"
            >
              <Trash size={18} />
            </button>
          </div>
          <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
            Added {new Date(task.createdAt).toLocaleString()}
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default memo(TaskItem);