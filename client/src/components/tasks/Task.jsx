import React from "react";
import { useDispatch } from "react-redux";
import { markComplete } from "../../store/todoSlice";

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(markComplete(task));
  };

  return (
    <div className={`task${task.completed ? " completed" : ""}`}>
      <form>
        <input type="checkbox" defaultChecked={false} onChange={handleChange} />
        <label>{task.name}</label>
      </form>
    </div>
  );
};

export default Task;
