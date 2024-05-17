import React, { useState, useMemo } from "react";
import TodoForm from "../components/TodoForm";
import TodoFilter from "../components/TodoFilter";
import { useSelector } from "react-redux";
import { RootState } from "../store/reducers/rootReducer";
import TodoList from "../components/TodoList";
import { FilterTodoType } from "../types/Enums";

const TodoListPage: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos);
  const [filter, setFilter] = useState<FilterTodoType>(FilterTodoType.All);

  const filteredTodos = useMemo(() => {
    return todos.filter((todo) => {
      return filter === FilterTodoType.Completed
        ? todo.completed
        : filter === FilterTodoType.Incomplete
        ? !todo.completed
        : true;
    });
  }, [todos, filter]);

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-center mb-4">
        <h3>To-do List App</h3>
      </div>
      <div className="d-flex justify-content-center todo-list-form-container mb-4">
        <div className="todo-form-container">
          <TodoForm />
        </div>
      </div>
      <div className="d-flex justify-content-end align-items-center mb-4">
        <TodoFilter currentFilter={filter} setFilter={setFilter} />
      </div>
      <hr />
      <TodoList filteredTodos={filteredTodos} />
    </div>
  );
};

export default TodoListPage;
