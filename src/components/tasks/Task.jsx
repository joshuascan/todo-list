import React from "react";

const Task = (props) => {
  const handleChange = () => {
    props.markComplete(props.todo);
    console.log(props.todo);
  };

  return (
    <div className={`task${props.todo.completed ? " completed" : ""}`}>
      <form>
        <input type="checkbox" defaultChecked={false} onChange={handleChange} />
        <label>{props.todo.task}</label>
      </form>
    </div>
  );
};

export default Task;
