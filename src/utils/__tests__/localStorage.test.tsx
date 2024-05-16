import {
  saveTodosToLocalStorage,
  loadTodosFromLocalStorage,
} from "../localStorage";
import { TodoItemModels } from "../../types/TodoItemModels";

const mockTodos: TodoItemModels.TodoItemModel[] = [
  {
    slug: "1",
    title: "Test Todo",
    description: "Test description",
    completed: false,
  },
];

describe("localStorage utils", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should save todos to localStorage", () => {
    saveTodosToLocalStorage(mockTodos);
    const savedTodos = localStorage.getItem("todos");
    expect(savedTodos).toBe(JSON.stringify(mockTodos));
  });

  it("should load todos from localStorage", () => {
    localStorage.setItem("todos", JSON.stringify(mockTodos));
    const loadedTodos = loadTodosFromLocalStorage();
    expect(loadedTodos).toEqual(mockTodos);
  });

  it("should return empty array if no todos in localStorage", () => {
    const loadedTodos = loadTodosFromLocalStorage();
    expect(loadedTodos).toEqual([]);
  });

  it("should return empty array if parsing fails", () => {
    localStorage.setItem("todos", "invalid JSON");
    const loadedTodos = loadTodosFromLocalStorage();
    expect(loadedTodos).toEqual([]);
  });
});
