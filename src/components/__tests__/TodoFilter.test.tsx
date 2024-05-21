import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import TodoFilter from "../TodoFilter";
import { FilterTodoType } from "../../types/Enums";

describe("TodoFilter", () => {
  it("should match snapshot", () => {
    const setFilter = jest.fn();
    const { asFragment } = render(
      <TodoFilter currentFilter={FilterTodoType.All} setFilter={setFilter} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should call setFilter with the correct argument when a button is clicked", () => {
    const setFilter = jest.fn();
    render(
      <TodoFilter currentFilter={FilterTodoType.All} setFilter={setFilter} />
    );

    fireEvent.click(screen.getByText("Incomplete"));
    expect(setFilter).toHaveBeenCalledWith("incomplete");

    fireEvent.click(screen.getByText("Completed"));
    expect(setFilter).toHaveBeenCalledWith("completed");
  });
});
