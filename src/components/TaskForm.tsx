import React, { memo } from 'react';
import { Plus } from 'lucide-react';
import { useTasks } from '../contexts/TaskContext';
import { useTaskForm } from '../hooks/useTaskForm';

const TaskForm: React.FC = () => {
  const { addTask } = useTasks();
  const { taskText, error, handleChange, handleSubmit, resetForm } = useTaskForm();

  return (
    <form 
      onSubmit={(e) => handleSubmit(e, addTask)}
      className="card p-4 mb-6 animate-scale-in"
    >
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1">
          <input
            type="text"
            value={taskText}
            onChange={handleChange}
            placeholder="Add a new task..."
            className="input"
            aria-label="Task description"
            autoFocus
          />
          {error && (
            <p className="mt-1 text-sm text-error-500 dark:text-error-400">
              {error}
            </p>
          )}
        </div>
        <button 
          type="submit"
          className="btn-primary flex items-center justify-center"
          aria-label="Add task"
        >
          <Plus size={20} className="mr-1" />
          <span>Add Task</span>
        </button>
      </div>
    </form>
  );
};

export default memo(TaskForm);