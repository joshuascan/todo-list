import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./todoSlice";
import listsReducer from "./listSlice";

export const store = configureStore({
  reducer: {
    todo: tasksReducer,
    list: listsReducer,
  },
});
