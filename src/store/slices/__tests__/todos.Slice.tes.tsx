import todosSlice, { addTodo, removeTodo, toggleTodo } from "../todosSlice";
import { TodoItemModels } from "../../../types/TodoItemModels";

const initialState: TodoItemModels.TodoItemModel[] = [];

const mockTodo: TodoItemModels.TodoItemModel = {
  slug: "1",
  title: "Test Todo",
  description: "Test description",
  completed: false,
};

describe("todosSlice", () => {
  it("should return the initial state", () => {
    expect(todosSlice(undefined, { type: "unknown" })).toEqual(initialState);
  });

  it("should handle addTodo", () => {
    const action = addTodo(mockTodo);
    const newState = todosSlice(initialState, action);
    expect(newState).toHaveLength(1);
    expect(newState[0]).toEqual(mockTodo);
  });

  it("should handle removeTodo", () => {
    const stateWithTodo = [mockTodo];
    const action = removeTodo(mockTodo.slug);
    const newState = todosSlice(stateWithTodo, action);
    expect(newState).toHaveLength(0);
  });

  it("should handle toggleTodo", () => {
    const stateWithTodo = [mockTodo];
    const action = toggleTodo(mockTodo.slug);
    const newState = todosSlice(stateWithTodo, action);
    expect(newState[0].completed).toBe(true);
  });
});
