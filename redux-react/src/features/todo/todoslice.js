import { createSlice, nanoid } from "@reduxjs/toolkit";

export const initialState = {
  todos: [
    {
      id: 1,
      text: "hello",
      isCompleted: false,
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addtodo: (state, action) => {
      const text = action.payload.trim();
      if (!text) {
        return;
      }

      const todo = {
        id: nanoid(),
        text,
        isCompleted: false,
      };
      state.todos.push(todo);
    },
    removetodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updatetodo: (state, action) => {
      const todo = state.todos.find((item) => item.id === action.payload.id);
      if (todo) {
        const text = (action.payload.newText ?? action.payload.Newtext).trim();
        if (text) {
          todo.text = text;
        }
      }
    },
  },
});

export const { addtodo, removetodo, updatetodo } = todoSlice.actions;

export default todoSlice.reducer;
