import React from "react";

interface FilterProps {
  currentFilter: string;
  setFilter: (filter: string) => void;
}

const TodoFilter: React.FC<FilterProps> = ({ currentFilter, setFilter }) => {
  const handleFilterChange = (filter: string) => () => {
    setFilter(filter);
  };

  return (
    <div className="btn-group">
      <button
        type="button"
        className={`btn ${
          currentFilter === "all" ? "btn-primary" : "btn-outline-primary"
        }`}
        onClick={handleFilterChange("all")}
      >
        All
      </button>
      <button
        type="button"
        className={`btn ${
          currentFilter === "incomplete" ? "btn-primary" : "btn-outline-primary"
        }`}
        onClick={handleFilterChange("incomplete")}
      >
        Incomplete
      </button>
      <button
        type="button"
        className={`btn ${
          currentFilter === "completed" ? "btn-primary" : "btn-outline-primary"
        }`}
        onClick={handleFilterChange("completed")}
      >
        Completed
      </button>
    </div>
  );
};

export default TodoFilter;
