import React, { useState } from "react";
import Task from "./Task";
import TodoForm from "./TodoForm";

const initialTasks = [
  {
    task: "Clean kitchen",
    completed: false,
    id: 1528817077286,
  },
  {
    task: "Update resume",
    completed: false,
    id: 1528817084358,
  },
];

const TodoList = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const addTask = (newTask) => {
    // const newTask = { ...todo, id: Date.now() };
    console.log(tasks);
    setTasks([...tasks, newTask]);
  };

  return (
    <div>
      <TodoForm addTask={addTask} />
      <div>
        {tasks.map((todo) => (
          <Task key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
