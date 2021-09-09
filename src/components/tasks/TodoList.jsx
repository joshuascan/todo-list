import React from "react";
import Task from "./Task";

const TodoList = (props) => {
  return (
    <div>
      {props.tasks.map((todo) => (
        <Task key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
