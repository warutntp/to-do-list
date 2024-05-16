import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { TodoItemModels } from "../../types/TodoItemModels";
import TodoItem from "../TodoItem";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);
const store = mockStore({});

const todo: TodoItemModels.TodoItemModel = {
  slug: "1",
  title: "Test Todo",
  description: "Test description",
  completed: false,
};

describe("TodoItem", () => {
  it("should render TodoItem correctly", () => {
    render(
      <Provider store={store}>
        <table>
          <tbody>
            <TodoItem todo={todo} index={0} />
          </tbody>
        </table>
      </Provider>
    );

    expect(screen.getByText("Test Todo")).toBeInTheDocument();
    expect(screen.getByText("Test description")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /delete/i })).toBeInTheDocument();
  });

  it("should open confirmation modal when delete button is clicked", () => {
    render(
      <Provider store={store}>
        <table>
          <tbody>
            <TodoItem todo={todo} index={0} />
          </tbody>
        </table>
      </Provider>
    );

    fireEvent.click(screen.getByRole("button", { name: /delete/i }));
    expect(
      screen.getByText(`Are you sure you want to delete "${todo.title}" item?`)
    ).toBeInTheDocument();
  });
});
