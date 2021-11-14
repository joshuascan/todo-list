import React from "react";
import { useDispatch } from "react-redux";
import { editTask } from "../../store/todoSlice";

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(editTask(task.task_id, { ...task, completed: !task.completed }));
  };

  return (
    <div className={`task${task.completed ? " completed" : ""}`}>
      <form>
        <input
          type="checkbox"
          checked={task.completed ? true : false}
          onChange={handleChange}
        />
        <label>{task.name}</label>
      </form>
    </div>
  );
};

export default Task;
