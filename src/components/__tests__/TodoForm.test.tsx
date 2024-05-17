import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import TodoForm from "../TodoForm";
import { addTodo } from "../../store/slices/todosSlice";

const mockStore = configureStore([]);

describe("TodoForm", () => {
  let store: ReturnType<typeof mockStore>;
  let mockDispatch: jest.Mock;

  beforeEach(() => {
    store = mockStore([]);
    mockDispatch = jest.fn();
    store.dispatch = mockDispatch;
  });

  it("should render TodoForm correctly", () => {
    render(
      <Provider store={store}>
        <TodoForm />
      </Provider>
    );

    expect(
      screen.getByPlaceholderText("Please enter todo title")
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Enter todo description")
    ).toBeInTheDocument();
    expect(screen.getByText("Add Task")).toBeInTheDocument();
  });

  it("should dispatch addTodo action when form is submitted", () => {
    render(
      <Provider store={store}>
        <TodoForm />
      </Provider>
    );

    fireEvent.change(screen.getByPlaceholderText("Please enter todo title"), {
      target: { value: "New Todo" },
    });
    fireEvent.change(screen.getByPlaceholderText("Enter todo description"), {
      target: { value: "Description" },
    });
    fireEvent.click(screen.getByText("Add Task"));

    expect(mockDispatch).toHaveBeenCalled();
    const action = mockDispatch.mock.calls[0][0];
    expect(action.type).toBe(addTodo.type);
    expect(action.payload).toEqual({
      slug: expect.any(String),
      title: "New Todo",
      description: "Description",
      completed: false,
    });

    expect(screen.getByPlaceholderText("Please enter todo title")).toHaveValue(
      ""
    );
    expect(screen.getByPlaceholderText("Enter todo description")).toHaveValue(
      ""
    );
  });
});
