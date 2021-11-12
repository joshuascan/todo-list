import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { editTask, toggleComplete } from "../../store/todoSlice";

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(toggleComplete(task.task_id));
  };

  useEffect(() => {
    dispatch(editTask(task.task_id, task));
  }, [dispatch, task]);

  return (
    <div className={`task${task.completed ? " completed" : ""}`}>
      <form>
        <input
          type="checkbox"
          defaultChecked={task.completed ? true : false}
          onChange={handleChange}
        />
        <label>{task.name}</label>
        {/* <button onClick={handleClick}>click</button> */}
      </form>
    </div>
  );
};

export default Task;
