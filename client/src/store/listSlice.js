import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lists: [
    {
      name: "Electronics",
      id: 1264512343,
      tags: ["Digital", "Computers"],
      items: [
        { name: "PlayStation 5", id: 175830284, completed: false },
        { name: "iPhone", id: 175830285, completed: false },
        { name: "LG CX", id: 175830286, completed: false },
      ],
    },
  ],
};

export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    createList: (state, action) => {
      state.lists.push(action.payload);
    },
    addItem: (state, action) => {
      state.lists.forEach((list) => {
        if (list.id === action.payload.listId) {
          list.items.push(action.payload.newItem);
        }
      });
    },
    markComplete: (state, action) => {
      state.lists.forEach((list) => {
        if (list.id === action.payload.listId) {
          list.items = list.items.filter(
            (item) => item.id !== action.payload.itemId
          );
        }
      });
    },
  },
});

export const { createList, addItem, markComplete } = listSlice.actions;

export default listSlice.reducer;
