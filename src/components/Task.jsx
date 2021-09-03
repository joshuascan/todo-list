import React from "react";

const Task = (props) => {
  return (
    <div className={`task${props.todo.completed ? " completed" : ""}`}>
      <p>{props.todo.task}</p>
    </div>
  );
};

export default Task;
