import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { TodoItemModels } from "../../types/TodoItemModels";
import {
  loadTodosFromLocalStorage,
  saveTodosToLocalStorage,
} from "../../utils/localStorage";

const initialState: TodoItemModels.TodoItemModel[] =
  loadTodosFromLocalStorage();

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoItemModels.TodoItemModel>) => {
      state.push(action.payload);
      let todosData = current(state);
      saveTodosToLocalStorage(todosData);
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      const newState = state.filter(
        (todo: TodoItemModels.TodoItemModel) => todo.slug !== action.payload
      );
      saveTodosToLocalStorage(newState);
      return newState;
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const newState = state.map((todo: TodoItemModels.TodoItemModel) =>
        todo.slug === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
      saveTodosToLocalStorage(newState);
      return newState;
    },
  },
});

export const { addTodo, removeTodo, toggleTodo } = todosSlice.actions;
export default todosSlice.reducer;
