import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./todoSlice";

export const store = configureStore({
  reducer: {
    todo: tasksReducer,
  },
});
