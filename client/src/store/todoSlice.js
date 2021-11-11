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
    taskAdded: (todo, action) => {
      todo.tasks.push(action.payload);
    },
    toggleComplete: (todo, action) => {
      todo.tasks.map((task) => {
        if (task.id === action.payload) {
          return (task.completed = !task.completed);
        } else {
          return task;
        }
      });
    },
    archiveCompleted: (todo) => {
      todo.archived = todo.archived.concat(
        todo.tasks.filter((task) => task.completed === true)
      );
      todo.tasks = todo.tasks.filter((task) => task.completed === false);
    },
    toggleArchived: (todo) => {
      todo.showArchived = !todo.showArchived;
    },
    selectForMove: (todo, action) => {
      todo.archived = todo.archived.map((task) => {
        return task.id === action.payload.id ? action.payload : task;
      });
    },
    moveToTasks: (todo) => {
      todo.archived.forEach((todo) => {
        if (todo.moveFromArchive === true) {
          todo.moveFromArchive = false;
          todo.completed = false;
          todo.tasks.push(todo);
          todo.tasks.sort((a, b) => a.id - b.id);
          todo.archived = todo.archived.filter((task) => task.id !== todo.id);
        }
      });
    },
    moveToCompleted: (todo) => {
      todo.archived.forEach((todo) => {
        if (todo.moveFromArchive === true) {
          todo.moveFromArchive = false;
          todo.tasks.push(todo);
          todo.tasks.sort((a, b) => a.id - b.id);
          todo.archived = todo.archived.filter((task) => task.id !== todo.id);
        }
      });
    },
    clearArchive: (todo) => {
      todo.archived = [];
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

export const addTask = (newTask) => (dispatch) => {
  axiosWithAuth()
    .post("/api/tasks", newTask)
    .then((res) => {
      dispatch(taskAdded(res.data));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const {
  tasksFetched,
  taskAdded,
  toggleComplete,
  archiveCompleted,
  toggleArchived,
  selectForMove,
  moveToTasks,
  moveToCompleted,
  clearArchive,
} = todoSlice.actions;

export default todoSlice.reducer;
