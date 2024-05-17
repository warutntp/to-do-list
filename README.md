# Todo List Project

This is a simple Todo List application built with React, Redux, TypeScript, and Bootstrap.

## Features

- Add new tasks with title and optional description
- Mark tasks as completed
- Filter tasks by all, completed, and incomplete
- Delete tasks with confirmation
- Persist tasks in local storage

## Installation

1. Clone the repository

```bash
git clone https://github.com/your-username/todo-list.git
cd todo-list
```

2. Install dependencies

```bash
npm install
```

## Usage
Start the development server

```bash
npm install
```

Open your browser and navigate to http://localhost:3000 to see the application running.

## Running Tests
This project uses React Testing Library and Jest for unit testing.

Run tests with:

```bash
npm test
```

## Project Structure

```bash
src/
│
├── components/         # Reusable components
│   ├── TodoForm.tsx    # Form to add new todo items
│   ├── TodoItem.tsx    # Individual todo item
│   ├── TodoList.tsx    # List of todo items
│   └── TodoFilter.tsx  # Filter buttons for todo items
│
├── pages/              # Page components
│   └── TodoListPage.tsx # Main page displaying the todo list and form
│
├── store/              # Redux store setup
│   ├── slices/         # Redux slices
│   │   └── todosSlice.ts
│   ├── reducers/       # Root reducer
│   │   └── rootReducer.ts
│   └── store.ts        # Store configuration
│
├── types/              # TypeScript types
│   └── TodoItemModels.d.ts
│
├── utils/              # Utility functions
│   └── localStorage.ts
│
├── App.tsx             # Main App component
└── index.tsx           # Entry point
```