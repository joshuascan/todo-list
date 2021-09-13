import React from "react";

const Task = (props) => {
  const handleClick = () => {
    props.toggleComplete(props.todo.id);
  };

  return (
    <div className={`task${props.todo.completed ? " completed" : ""}`}>
      <form>
        <input type="checkbox" onClick={handleClick} />
        <label>{props.todo.task}</label>
      </form>
    </div>
  );
};

export default Task;
