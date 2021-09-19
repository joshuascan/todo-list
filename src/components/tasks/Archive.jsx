import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  moveToTasks,
  moveToCompleted,
  clearArchive,
} from "../../store/todoSlice";
import ArchivedTask from "./ArchivedTask";

const Archive = () => {
  const archived = useSelector((state) => state.todo.archived);
  const dispatch = useDispatch();

  const handleMoveToTasks = (e) => {
    e.preventDefault();
    dispatch(moveToTasks());
  };

  const handleMoveToCompleted = (e) => {
    e.preventDefault();
    dispatch(moveToCompleted());
  };

  const handleClearArchive = () => {
    dispatch(clearArchive());
  };

  return (
    <div>
      <h2>Archived</h2>
      {archived.length > 0 ? (
        <div>
          {archived.map((task) => (
            <ArchivedTask key={task.id} task={task} />
          ))}

          <div>
            <button onClick={handleMoveToTasks}>Move to Tasks</button>
            <button onClick={handleMoveToCompleted}>Move to Completed</button>
          </div>

          <button onClick={handleClearArchive}>Clear Archive</button>
        </div>
      ) : (
        <h3>Nothing in Archive!</h3>
      )}
    </div>
  );
};

export default Archive;
