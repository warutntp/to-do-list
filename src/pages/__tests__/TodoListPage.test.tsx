import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import TodoListPage from "../TodoListPage";
import { RootState } from "../../store/reducers/rootReducer";

const mockStore = configureStore([]);

const initialState: RootState = {
  todos: [
    {
      slug: "1",
      title: "Test Todo",
      description: "Test description",
      completed: false,
    },
  ],
};

describe("TodoListPage", () => {
  let store: ReturnType<typeof mockStore>;

  beforeEach(() => {
    store = mockStore(initialState);
  });

  it("should render TodoListPage correctly", () => {
    render(
      <Provider store={store}>
        <TodoListPage />
      </Provider>
    );

    expect(screen.getByText("To-do List App")).toBeInTheDocument();
    expect(screen.getByText("Description (Optional)")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Add Task/i })
    ).toBeInTheDocument();
    expect(screen.getByText("Test Todo")).toBeInTheDocument();
  });
});
