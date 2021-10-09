import React from "react";
import { useDispatch } from "react-redux";
import { markIncomplete } from "../../store/todoSlice";

const Completed = ({ task }) => {
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(markIncomplete(task));
  };

  return (
    <div className={"task completed"}>
      <form>
        <input type="checkbox" defaultChecked={true} onChange={handleChange} />
        <label>{task.name}</label>
      </form>
    </div>
  );
};

export default Completed;
