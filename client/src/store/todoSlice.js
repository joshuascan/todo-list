import { createSlice } from "@reduxjs/toolkit";
import { axiosWithAuth } from "../auth/axiosWithAuth";

// const initialState = {
//   tasks: [
//     {
//       name: "Clean kitchen",
//       completed: false,
//       id: 1528817077286,
//       moveFromArchive: false,
//     },
//     {
//       name: "Update resume",
//       completed: false,
//       id: 1528817084358,
//       moveFromArchive: false,
//     },
//   ],
//   archived: [],
//   showArchived: false,
// };

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    tasks: [],
    archived: [],
    showArchived: false,
  },
  reducers: {
    tasksFetched: (todo, action) => {
      todo.tasks = action.payload;
    },
    addTask: (todo, action) => {
      todo.tasks.push(action.payload);
    },
    toggleComplete: (state, action) => {
      state.tasks.map((task) => {
        if (task.id === action.payload) {
          return (task.completed = !task.completed);
        } else {
          return task;
        }
      });
    },
    archiveCompleted: (state) => {
      state.archived = state.archived.concat(
        state.tasks.filter((task) => task.completed === true)
      );
      state.tasks = state.tasks.filter((task) => task.completed === false);
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
          state.tasks.sort((a, b) => a.id - b.id);
          state.archived = state.archived.filter((task) => task.id !== todo.id);
        }
      });
    },
    moveToCompleted: (state) => {
      state.archived.forEach((todo) => {
        if (todo.moveFromArchive === true) {
          todo.moveFromArchive = false;
          state.tasks.push(todo);
          state.tasks.sort((a, b) => a.id - b.id);
          state.archived = state.archived.filter((task) => task.id !== todo.id);
        }
      });
    },
    clearArchive: (state) => {
      state.archived = [];
    },
  },
});

export const fetchTasks = () => (dispatch) => {
  axiosWithAuth()
    .get("/api/tasks")
    .then((res) => {
      dispatch(tasksFetched(res.data));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const {
  tasksFetched,
  addTask,
  toggleComplete,
  archiveCompleted,
  toggleArchived,
  selectForMove,
  moveToTasks,
  moveToCompleted,
  clearArchive,
} = todoSlice.actions;

export default todoSlice.reducer;
