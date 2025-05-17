import React from 'react';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskFilter from './components/TaskFilter';
import TaskStats from './components/TaskStats';
import FooterInfo from './components/FooterInfo';
import { TaskProvider } from './contexts/TaskContext';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <TaskProvider>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200">
          <div className="container mx-auto max-w-2xl p-4 sm:p-6">
            <Header />
            <main>
              <TaskForm />
              <TaskStats />
              <TaskFilter />
              <TaskList />
              <FooterInfo />
            </main>
          </div>
        </div>
      </TaskProvider>
    </ThemeProvider>
  );
}

export default App;