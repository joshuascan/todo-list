import React, { useState } from "react";

const Archived = (props) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleSelect = (e) => {
    // e.target.defaultChecked = !e.target.defaultChecked;
    console.log(e.target.checked);
    // props.archived.map((task) => console.log(e.target.checked));
  };

  return (
    <div>
      <h2>Archived</h2>
      <form>
        {props.archived.map((todo) => (
          <div className="task completed" key={todo.id}>
            <input type="checkbox" onChange={toggleSelect} />
            <label>{todo.task}</label>
          </div>
        ))}
        <div>
          <button>Move to Tasks</button>
          <button>Move to Completed</button>
        </div>
      </form>
      <button>Clear Archive</button>
    </div>
  );
};

export default Archived;
