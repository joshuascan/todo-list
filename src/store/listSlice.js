import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lists: [
    {
      name: "Electronics",
      tags: ["Digital", "Computers"],
      items: [
        { name: "PlayStation 5", completed: false },
        { name: "iPhone", completed: false },
        { name: "LG CX", completed: false },
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
  },
});

export const { createList } = listSlice.actions;

export default listSlice.reducer;
