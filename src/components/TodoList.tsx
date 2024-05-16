import React from "react";
import { TodoItemModels } from "../types/TodoItemModels";
import TodoItem from "./TodoItem";

interface TodoListProps {
  filteredTodos: TodoItemModels.TodoItemModel[];
}

const TodoList: React.FC<TodoListProps> = ({ filteredTodos }) => {
  return (
    <div className="table-responsive">
      <table className="table table-hover table-striped">
        <thead>
          <tr>
            <th scope="col" className="col-1 text-center">
              {" "}
              #{" "}
            </th>
            <th scope="col" className="col-3 text-wrap-break">
              Title
            </th>
            <th scope="col" className="col-4 text-wrap-break">
              Description
            </th>
            <th scope="col" className="col-2 text-center">
              Completed
            </th>
            <th scope="col" className="col-2 text-center">
              Action
            </th>
          </tr>
        </thead>
        {filteredTodos && filteredTodos.length > 0 ? (
          <tbody>
            {filteredTodos.map(
              (todo: TodoItemModels.TodoItemModel, index: number) => (
                <TodoItem key={todo.slug} todo={todo} index={index} />
              )
            )}
          </tbody>
        ) : (
          <tbody>
            <tr>
              <td colSpan={5} className="text-center">
                No todos found
              </td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  );
};

export default TodoList;
