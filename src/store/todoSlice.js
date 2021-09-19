import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    {
      name: "Clean kitchen",
      completed: false,
      id: 1528817077286,
      moveFromArchive: false,
    },
    {
      name: "Update resume",
      completed: false,
      id: 1528817084358,
      moveFromArchive: false,
    },
  ],
  completedTasks: [],
  archived: [],
  showArchived: false,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    markComplete: (state, action) => {
      state.completedTasks.push(action.payload);
      state.completedTasks.map((task) => {
        if (task.id === action.payload.id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      });
      state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
    },
    markIncomplete: (state, action) => {
      state.tasks.push(action.payload);
      state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          return { ...task, completed: false };
        } else {
          return task;
        }
      });
      state.completedTasks = state.completedTasks.filter(
        (task) => task.id !== action.payload.id
      );
    },
    archiveCompleted: (state) => {
      state.archived = state.archived.concat(state.completedTasks);
      state.completedTasks = [];
    },
    toggleArchived: (state) => {
      state.showArchived = !state.showArchived;
    },
    selectForMove: (state, action) => {
      state.archived = state.archived.map((task) => {
        return task.id === action.payload.id ? action.payload : task;
      });
    },
    moveToTasks: (state) => {
      state.archived.forEach((todo) => {
        if (todo.moveFromArchive === true) {
          todo.moveFromArchive = false;
          todo.completed = false;
          state.tasks.push(todo);
          state.archived = state.archived.filter((task) => task.id !== todo.id);
        }
      });
    },
    moveToCompleted: (state) => {
      state.archived.forEach((todo) => {
        if (todo.moveFromArchive === true) {
          todo.moveFromArchive = false;
          state.completedTasks.push(todo);
          state.archived = state.archived.filter((task) => task.id !== todo.id);
        }
      });
    },
    clearArchive: (state) => {
      state.archived = [];
    },
  },
});

export const {
  addTask,
  markComplete,
  markIncomplete,
  archiveCompleted,
  toggleArchived,
  selectForMove,
  moveToTasks,
  moveToCompleted,
  clearArchive,
} = todoSlice.actions;

export default todoSlice.reducer;
