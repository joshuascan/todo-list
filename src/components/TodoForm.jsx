import React, { useState } from "react";

const tasks = [
  {
    task: "Clean kitchen",
    id: 1528817077286,
    completed: false,
  },
  {
    task: "Update resume",
    id: 1528817084358,
    completed: false,
  },
];

const initialFormValues = {
  task: "",
  id: Date.now(),
  completed: false,
};

const TodoForm = () => {
  const [newTask, setNewTask] = useState(initialFormValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    tasks.push(newTask);
    setNewTask(initialFormValues);
  };

  return (
    <div>
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit}></form>
    </div>
  );
};

export default TodoForm;
