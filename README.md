# Task Manager App

A beautiful and feature-rich task management application built with React, TypeScript, and Tailwind CSS.

![Task Manager App Screenshot](https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)

## Features

- ✨ Beautiful, modern UI with dark/light mode
- 📱 Fully responsive design
- ✅ Add, complete, and delete tasks
- 🔄 Drag and drop to reorder tasks
- 🔍 Filter tasks by status (All, Completed, Pending)
- 📊 Real-time task statistics
- 💾 Persistent storage with localStorage
- 🎨 Smooth animations and transitions

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- react-beautiful-dnd
- Lucide React Icons
- Vite

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure

```
src/
├── components/         # React components
├── contexts/          # React context providers
├── hooks/             # Custom React hooks
├── types/             # TypeScript type definitions
├── App.tsx            # Main application component
└── main.tsx          # Application entry point
```

## Key Components

- `TaskForm`: Add new tasks
- `TaskList`: Display and manage tasks
- `TaskFilter`: Filter tasks by status
- `TaskStats`: Show task completion statistics
- `ThemeToggle`: Switch between light/dark mode

## Context Providers

- `TaskContext`: Manages task state and operations
- `ThemeContext`: Handles theme preferences

## Custom Hooks

- `useLocalStorage`: Persistent storage with localStorage
- `useTaskForm`: Form handling and validation

## Contributing

Feel free to submit issues and enhancement requests!

## License

MIT License - feel free to use this project for your own learning or as a starting point for your applications.