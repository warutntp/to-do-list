import React, { useState, useMemo } from "react";
import TodoForm from "../components/TodoForm";
import TodoFilter from "../components/TodoFilter";
import { useSelector } from "react-redux";
import { RootState } from "../store/reducers/rootReducer";
import TodoList from "../components/TodoList";

const TodoListPage: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos);
  const [filter, setFilter] = useState("all");

  const filteredTodos = useMemo(() => {
    console.log("filterdTodos");
    return todos.filter((todo) => {
      return filter === "completed"
        ? todo.completed
        : filter === "incomplete"
        ? !todo.completed
        : true;
    });
  }, [todos, filter]);

  return (
    <div className="container mt-4">
      <div className="mb-4">
        <h3>Add Todo</h3>
        <hr />
      </div>
      <div className="d-flex justify-content-center mb-8">
        <TodoForm />
      </div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Todo List</h2>
        <TodoFilter currentFilter={filter} setFilter={setFilter} />
      </div>
      <hr />
      <TodoList filteredTodos={filteredTodos} />
    </div>
  );
};

export default TodoListPage;
