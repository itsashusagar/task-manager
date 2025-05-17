export interface Task {
  id: string;
  text: string;
  completed: boolean;
  createdAt: number;
}

export type TaskFilter = 'all' | 'completed' | 'pending';

export interface TaskContextType {
  tasks: Task[];
  addTask: (text: string) => void;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
  filter: TaskFilter;
  setFilter: (filter: TaskFilter) => void;
  filteredTasks: Task[];
  reorderTasks: (startIndex: number, endIndex: number) => void;
}

export interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}