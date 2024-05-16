import { TodoItemModels } from "../types/TodoItemModels";

export function saveTodosToLocalStorage(state: TodoItemModels.TodoItemModel[]) {
  localStorage.setItem("todos", JSON.stringify(state));
}

export function loadTodosFromLocalStorage(): TodoItemModels.TodoItemModel[] {
  const data = localStorage.getItem("todos");
  if (data) {
    try {
      return JSON.parse(data);
    } catch {
      return [];
    }
  }
  return [];
}
