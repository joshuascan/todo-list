import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { archiveCompleted, toggleArchived } from "../../store/todoSlice";
import Task from "./Task";
import Completed from "./Completed";
import TodoForm from "./TodoForm";
import Archive from "./Archive";

const TodoList = () => {
  const tasks = useSelector((state) => state.todo.tasks);
  const completedTasks = useSelector((state) => state.todo.completedTasks);
  const showArchived = useSelector((state) => state.todo.showArchived);
  const dispatch = useDispatch();

  const handleArchiveCompleted = () => {
    dispatch(archiveCompleted());
  };

  const handleToggleArchived = () => {
    dispatch(toggleArchived());
  };

  //   tasks.sort((a, b) => a.id - b.id).map....

  return (
    <div>
      {!showArchived ? (
        <div>
          <TodoForm />
          <div>
            <h2>Tasks</h2>
            {tasks.map((task) => (
              <Task key={task.id} task={task} />
            ))}
          </div>
          <h2>Completed</h2>
          <div>
            {completedTasks.map((task) => (
              <Completed key={task.id} task={task} />
            ))}
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
