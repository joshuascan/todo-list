import React from "react";

const Completed = (props) => {
  const handleClick = () => {
    props.markIncomplete(props.todo);
  };

  return (
    <div className={"task completed"}>
      <form>
        <input type="checkbox" onClick={handleClick} />
        <label>{props.todo.task}</label>
      </form>
    </div>
  );
};

export default Completed;
