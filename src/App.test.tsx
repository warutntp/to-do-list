import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import App from "./App";
import { RootState } from "./store/reducers/rootReducer";

const mockStore = configureStore([]);

const initialState: RootState = {
  todos: [],
};

describe("App", () => {
  let store: ReturnType<typeof mockStore>;

  beforeEach(() => {
    store = mockStore(initialState);
  });

  it("should render App correctly", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(screen.getByText("To-do List App")).toBeInTheDocument();
    expect(screen.getByText("Add Todo")).toBeInTheDocument();
  });
});
