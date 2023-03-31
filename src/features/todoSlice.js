import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodoItem: (state, { payload }) => {
      return {
        ...state,
        todoList: [payload, ...state.todoList],
      };
    },
    toggleIsEditing: (state, { payload: id }) => {
      const todo = state.todoList.find((todo) => todo.id === id);
      if (todo) {
        todo.isEditing = !todo.isEditing;
      }
    },
    updateTodoItem: (state, { payload }) => {
      const { id, task, isEditing } = payload;
      const todoItem = state.todoList.find((item) => item.id === id);

      if (todoItem) {
        todoItem.task = task;
        todoItem.isEditing = isEditing;
      }
    },
    deleteTodoItem: (state, { payload: id }) => {
      console.log(id, "delete");
      state.todoList = state.todoList.filter((item) => item.id !== id);
    },
    toggleCompleted: (state, { payload: id }) => {
      const todo = state.todoList.find((todo) => todo.id === id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteAllCompletedTodoItems: (state) => {
      state.todoList = state.todoList.filter((item) => !item.completed);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addTodoItem,
  toggleIsEditing,
  updateTodoItem,
  deleteTodoItem,
  toggleCompleted,
  deleteAllCompletedTodoItems,
} = todoSlice.actions;

export default todoSlice.reducer;
