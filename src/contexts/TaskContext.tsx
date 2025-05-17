import React, { createContext, useContext, ReactNode, useMemo, useCallback, useEffect } from 'react';
import { Task, TaskContextType, TaskFilter } from '../types';
import { useLocalStorage } from '../hooks/useLocalStorage';

const TaskContext = createContext<TaskContextType | undefined>(undefined);

interface TaskProviderProps {
  children: ReactNode;
}

export const TaskProvider = ({ children }: TaskProviderProps) => {
  const [tasks, setTasks] = useLocalStorage<Task[]>('tasks', []);
  const [filter, setFilter] = useLocalStorage<TaskFilter>('taskFilter', 'all');

  // Memoized filtered tasks
  const filteredTasks = useMemo(() => {
    switch (filter) {
      case 'completed':
        return tasks.filter(task => task.completed);
      case 'pending':
        return tasks.filter(task => !task.completed);
      default:
        return tasks;
    }
  }, [tasks, filter]);

  // Task operations
  const addTask = useCallback((text: string) => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      text,
      completed: false,
      createdAt: Date.now()
    };
    setTasks(prevTasks => [newTask, ...prevTasks]);
  }, [setTasks]);

  const toggleTask = useCallback((id: string) => {
    setTasks(prevTasks => 
      prevTasks.map(task => 
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }, [setTasks]);

  const deleteTask = useCallback((id: string) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  }, [setTasks]);

  const reorderTasks = useCallback((startIndex: number, endIndex: number) => {
    setTasks(prevTasks => {
      const allTasks = Array.from(prevTasks);
      const filteredTaskIds = new Set(filteredTasks.map(task => task.id));
      
      // Find the actual indices in the full task list
      const actualStartIndex = allTasks.findIndex(task => task.id === filteredTasks[startIndex].id);
      const actualEndIndex = allTasks.findIndex(task => task.id === filteredTasks[endIndex].id);
      
      const [removed] = allTasks.splice(actualStartIndex, 1);
      allTasks.splice(actualEndIndex, 0, removed);
      
      return allTasks;
    });
  }, [setTasks, filteredTasks]);

  const value = useMemo(() => ({
    tasks,
    addTask,
    toggleTask,
    deleteTask,
    filter,
    setFilter,
    filteredTasks,
    reorderTasks
  }), [tasks, addTask, toggleTask, deleteTask, filter, setFilter, filteredTasks, reorderTasks]);

  return (
    <TaskContext.Provider value={value}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = (): TaskContextType => {
  const context = useContext(TaskContext);
  if (context === undefined) {
    throw new Error('useTasks must be used within a TaskProvider');
  }
  return context;
};