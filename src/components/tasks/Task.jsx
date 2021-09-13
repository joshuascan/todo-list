import React from "react";

const Task = (props) => {
  const handleClick = () => {
    props.toggleComplete(props.todo.id);
  };

  const complete = () => {
    props.markComplete(props.todo);
  };

  return (
    <div className={`task${props.todo.completed ? " completed" : ""}`}>
      <form>
        <input type="checkbox" onClick={complete} />
        <label>{props.todo.task}</label>
      </form>
    </div>
  );
};

export default Task;
