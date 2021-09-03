import React from "react";
import Task from "./Task";

const TodoList = ({ tasks }) => {
  return (
    <div>
      {tasks.map((todo) => (
        <Task key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
