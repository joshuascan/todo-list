import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchArchived,
  moveToTasks,
  moveToCompleted,
  deleteFromArchived,
} from "../../store/todoSlice";
import ArchivedTask from "./ArchivedTask";

const Archive = () => {
  const [selectedForMove, setSelectedForMove] = useState([]);
  const archived = useSelector((state) => state.todo.archived);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArchived());
  }, [dispatch]);

  const handleMoveToTasks = (e) => {
    e.preventDefault();
    // dispatch(moveToTasks());
    console.log(selectedForMove);
  };

  const handleMoveToCompleted = (e) => {
    e.preventDefault();
    dispatch(moveToCompleted());
  };

  const handleClearArchive = () => {
    dispatch(deleteFromArchived(archived));
  };

  return (
    <div>
      <h2>Archived</h2>
      {archived.length > 0 ? (
        <div>
          {archived.map((task) => (
            <ArchivedTask
              key={task.task_id}
              task={task}
              selectedForMove={selectedForMove}
              setSelectedForMove={setSelectedForMove}
            />
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
