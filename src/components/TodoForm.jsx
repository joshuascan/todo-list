import React, { useState } from "react";

const initialFormValues = {
  task: "",
  id: Date.now(),
  completed: false,
};

const TodoForm = ({ tasks }) => {
  const [newTask, setNewTask] = useState(initialFormValues);

  const handleChange = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    tasks.push(newTask);
    setNewTask(initialFormValues);
  };

  const handleCancel = () => {
    setNewTask(initialFormValues);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}></form>
      <label>Add Task</label>
      <input
        value={newTask.task}
        onChange={handleChange}
        name="task"
        type="text"
      />
      <button type="submit">Submit</button>
      <button onClick={handleCancel}>Cancel</button>
    </div>
  );
};

export default TodoForm;
