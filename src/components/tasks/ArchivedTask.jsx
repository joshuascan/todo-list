import React from "react";

const ArchivedTask = (props) => {
  const handleChange = (e) => {
    props.todo.moveFromArchive = e.target.checked;
  };

  return (
    <div className="task completed">
      <input type="checkbox" name="moveFromArchive" onChange={handleChange} />
      <label>{props.todo.task}</label>
    </div>
  );
};

export default ArchivedTask;
