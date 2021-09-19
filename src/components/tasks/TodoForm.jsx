import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../store/todoSlice";

const initialFormValues = {
  name: "",
  completed: false,
  moveFromArchive: false,
};

const TodoForm = () => {
  const [newTask, setNewTask] = useState(initialFormValues);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask({ ...newTask, id: Date.now() }));
    setNewTask(initialFormValues);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setNewTask(initialFormValues);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Add Task</label>
        <input
          value={newTask.name}
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
