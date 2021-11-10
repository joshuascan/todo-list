import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./todoSlice";
import listsReducer from "./listSlice";
import usersReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    todo: tasksReducer,
    list: listsReducer,
    user: usersReducer,
  },
});
