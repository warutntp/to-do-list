import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoFilter from "../TodoFilter";

describe("TodoFilter", () => {
  it("should render TodoFilter correctly", () => {
    const setFilter = jest.fn();
    const { getByText } = render(
      <TodoFilter currentFilter="all" setFilter={setFilter} />
    );

    expect(getByText("All")).toBeInTheDocument();
    expect(getByText("Incomplete")).toBeInTheDocument();
    expect(getByText("Completed")).toBeInTheDocument();
  });

  it("should call setFilter with the correct argument when a button is clicked", () => {
    const setFilter = jest.fn();
    const { getByText } = render(
      <TodoFilter currentFilter="all" setFilter={setFilter} />
    );

    fireEvent.click(getByText("Incomplete"));
    expect(setFilter).toHaveBeenCalledWith("incomplete");

    fireEvent.click(getByText("Completed"));
    expect(setFilter).toHaveBeenCalledWith("completed");
  });
});
