import { createSlice } from "@reduxjs/toolkit";
import { axiosWithAuth } from "../auth/axiosWithAuth";

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
    taskEdited: (todo, action) => {
      todo.tasks = todo.tasks.map((task) => {
        return task.task_id === action.payload.task_id ? action.payload : task;
      });
    },
    taskDeleted: (todo, action) => {
      todo.tasks = todo.tasks.filter(
        (task) => task.task_id !== action.payload.task_id
      );
    },
    archivedFetched: (todo, action) => {
      todo.archived = action.payload;
    },
    completedCleared: (todo) => {
      todo.tasks = todo.tasks.filter((task) => task.completed === false);
    },
    completedArchived: (todo, action) => {
      todo.archived.push(action.payload);
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
    archivedDeleted: (todo) => {
      todo.archived = [];
    },
  },
});

export const fetchTasks = () => (dispatch) => {
  axiosWithAuth()
    .get("/api/tasks")
    .then((res) => {
      dispatch(tasksFetched(res.data));
    });
};

export const addTask = (newTask) => (dispatch) => {
  axiosWithAuth()
    .post("/api/tasks", newTask)
    .then((res) => {
      dispatch(taskAdded(res.data));
    });
};

export const editTask = (id, editedTask) => (dispatch) => {
  axiosWithAuth()
    .put(`/api/tasks/${id}`, editedTask)
    .then((res) => {
      dispatch(taskEdited(res.data));
    });
};

export const deleteTask = (id) => (dispatch) => {
  axiosWithAuth()
    .delete(`/api/tasks/${id}`)
    .then((res) => {
      dispatch(taskDeleted(res.data));
    });
};

export const fetchArchived = () => (dispatch) => {
  axiosWithAuth()
    .get("/api/tasks/archived")
    .then((res) => {
      dispatch(archivedFetched(res.data));
    });
};

export const archiveCompleted = () => (dispatch) => {
  axiosWithAuth()
    .delete("/api/tasks")
    .then((res) => {
      dispatch(completedCleared());
      axiosWithAuth()
        .post("/api/tasks/archived", res.data)
        .then((res) => {
          dispatch(completedArchived(res.data));
        });
    });
};

export const deleteArchived = () => (dispatch) => {
  axiosWithAuth()
    .delete("/api/tasks/archived")
    .then(() => {
      dispatch(archivedDeleted());
    });
};

export const {
  tasksFetched,
  taskAdded,
  taskEdited,
  taskDeleted,
  archivedFetched,
  completedCleared,
  completedArchived,
  toggleArchived,
  selectForMove,
  moveToTasks,
  moveToCompleted,
  archivedDeleted,
} = todoSlice.actions;

export default todoSlice.reducer;
