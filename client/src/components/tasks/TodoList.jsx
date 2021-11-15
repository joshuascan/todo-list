import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchTasks,
  archiveCompleted,
  toggleArchived,
} from "../../store/todoSlice";
import Task from "./Task";
import TodoForm from "./TodoForm";
import Archive from "./Archive";
import Navigation from "../Navigation";

const TodoList = () => {
  const { tasks, showArchived } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const handleArchiveCompleted = () => {
    dispatch(archiveCompleted());
  };

  const handleToggleArchived = () => {
    dispatch(toggleArchived());
  };

  //   tasks.sort((a, b) => a.id - b.id).map....

  return (
    <div>
      <Navigation />
      {!showArchived ? (
        <div>
          <TodoForm />
          <div>
            <h2>Tasks</h2>
            {tasks.map((task) => {
              if (task.completed === false) {
                return <Task key={task.task_id} task={task} />;
              } else {
                return null;
              }
            })}
          </div>
          <h2>Completed</h2>
          <div>
            {tasks.map((task) => {
              if (task.completed === true) {
                return <Task key={task.task_id} task={task} />;
              } else {
                return null;
              }
            })}
            <button onClick={handleArchiveCompleted}>Archive Completed</button>
          </div>
        </div>
      ) : (
        <Archive />
      )}
      <button onClick={handleToggleArchived}>
        {showArchived ? "Hide Archived" : "Show Archived"}
      </button>
    </div>
  );
};

export default TodoList;
