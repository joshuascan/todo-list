import React, { useState } from "react";

const initialFormValues = {
  task: "",
  completed: false,
};

const TodoForm = ({ tasks, addTask }) => {
  const [newTask, setNewTask] = useState(initialFormValues);

  const handleChange = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(newTask);
    setNewTask(initialFormValues);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setNewTask(initialFormValues);
    console.log(tasks);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Add Task</label>
        <input
          value={newTask.task}
          onChange={handleChange}
          name="task"
          type="text"
        />
        <button type="submit">Submit</button>
        <button onClick={handleCancel}>Cancel</button>
      </form>
    </div>
  );
};

export default TodoForm;
