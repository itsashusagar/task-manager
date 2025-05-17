import React, { useMemo } from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import TaskItem from './TaskItem';
import { useTasks } from '../contexts/TaskContext';
import { ClipboardList } from 'lucide-react';

const TaskList: React.FC = () => {
  const { filteredTasks, toggleTask, deleteTask, reorderTasks, filter } = useTasks();

  const handleDragEnd = (result: DropResult) => {
    // Dropped outside the list or when viewing filtered tasks
    if (!result.destination || (filter !== 'all' && filteredTasks.length !== 1)) {
      return;
    }

    reorderTasks(result.source.index, result.destination.index);
  };

  const isDragDisabled = filter !== 'all';

  return (
    <div className="w-full">
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="taskList">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="space-y-3"
            >
              {filteredTasks.length > 0 ? (
                filteredTasks.map((task, index) => (
                  <TaskItem
                    key={task.id}
                    task={task}
                    onToggle={toggleTask}
                    onDelete={deleteTask}
                    index={index}
                    isDragDisabled={isDragDisabled}
                  />
                ))
              ) : (
                <div className="task-item flex flex-col items-center justify-center py-8 px-4 text-center animate-fade-in">
                  <ClipboardList size={48} className="text-gray-400 mb-3" />
                  <h3 className="text-lg font-medium text-gray-500 dark:text-gray-400">No tasks found</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">
                    {filteredTasks.length === 0 ? 'Add a new task to get started!' : 'No tasks match the current filter.'}
                  </p>
                </div>
              )}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default TaskList;