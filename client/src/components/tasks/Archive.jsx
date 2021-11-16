import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchArchived,
  addTask,
  deleteFromArchived,
} from "../../store/todoSlice";
import ArchivedTask from "./ArchivedTask";

const Archive = ({ setMoveFromArchive }) => {
  const [selectedForMove, setSelectedForMove] = useState([]);
  const archived = useSelector((state) => state.todo.archived);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArchived());
  }, [dispatch]);

  const handleMoveToTasks = (e) => {
    e.preventDefault();
    const incomplete = selectedForMove.map((task) => ({
      ...task,
      completed: false,
    }));
    dispatch(addTask(incomplete));
    dispatch(deleteFromArchived(selectedForMove));
    setMoveFromArchive(true);
  };

  const handleMoveToCompleted = (e) => {
    e.preventDefault();
    dispatch(addTask(selectedForMove));
    dispatch(deleteFromArchived(selectedForMove));
    setMoveFromArchive(true);
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
