import React from "react";
import { render } from "@testing-library/react";
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
  it("should match snapshot", () => {
    const { asFragment } = render(
      <Provider store={store}>
        <TodoList filteredTodos={todos} />
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should match snapshot no have todo", () => {
    const { asFragment } = render(
      <Provider store={store}>
        <TodoList filteredTodos={[]} />
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
