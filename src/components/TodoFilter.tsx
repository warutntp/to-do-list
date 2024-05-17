import React from "react";
import { FilterTodoType } from "../types/Enums";

interface FilterProps {
  currentFilter: string;
  setFilter: React.Dispatch<React.SetStateAction<FilterTodoType>>;
}

const TodoFilter: React.FC<FilterProps> = ({ currentFilter, setFilter }) => {
  const handleFilterChange = (filter: FilterTodoType) => () => {
    setFilter(filter);
  };

  return (
    <div className="btn-group">
      <button
        type="button"
        className={`btn ${
          currentFilter === FilterTodoType.All
            ? "btn-primary"
            : "btn-outline-primary"
        }`}
        onClick={handleFilterChange(FilterTodoType.All)}
      >
        All
      </button>
      <button
        type="button"
        className={`btn ${
          currentFilter === FilterTodoType.Incomplete
            ? "btn-primary"
            : "btn-outline-primary"
        }`}
        onClick={handleFilterChange(FilterTodoType.Incomplete)}
      >
        Incomplete
      </button>
      <button
        type="button"
        className={`btn ${
          currentFilter === FilterTodoType.Completed
            ? "btn-primary"
            : "btn-outline-primary"
        }`}
        onClick={handleFilterChange(FilterTodoType.Completed)}
      >
        Completed
      </button>
    </div>
  );
};

export default TodoFilter;
