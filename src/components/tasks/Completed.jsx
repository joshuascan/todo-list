import React from "react";

const Completed = (props) => {
  const handleChange = () => {
    props.markIncomplete(props.todo);
    console.log(props.todo);
  };

  return (
    <div className={"task completed"}>
      <form>
        <input type="checkbox" defaultChecked={true} onChange={handleChange} />
        <label>{props.todo.task}</label>
      </form>
    </div>
  );
};

export default Completed;
