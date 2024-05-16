import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import TodoList from "../TodoList";
import { TodoItemModels } from "../../types/TodoItemModels";

const mockStore = configureStore([]);
const store = mockStore({
  todos: [
    {
      slug: "1",
      title: "Test Todo",
      description: "Test description",
      completed: false,
    },
  ],
});

const todos: TodoItemModels.TodoItemModel[] = [
  {
    slug: "1",
    title: "Test Todo",
    description: "Test description",
    completed: false,
  },
];

describe("TodoList", () => {
  it("should render TodoList correctly with todos", () => {
    render(
      <Provider store={store}>
        <TodoList filteredTodos={todos} />
      </Provider>
    );

    expect(screen.getByText("Test Todo")).toBeInTheDocument();
    expect(screen.getByText("Test description")).toBeInTheDocument();
  });

  it("should show 'No todos found' when no todos are available", () => {
    render(
      <Provider store={store}>
        <TodoList filteredTodos={[]} />
      </Provider>
    );

    expect(screen.getByText("No todos found")).toBeInTheDocument();
  });
});
