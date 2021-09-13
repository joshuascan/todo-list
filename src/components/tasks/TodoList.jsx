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
    setTasks([...tasks, newTask]);
  };

  const toggleComplete = (id) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed,
        };
      } else {
        return task;
      }
    });

    setTasks(newTasks);
  };

  return (
    <div>
      <TodoForm addTask={addTask} />
      <div>
        {tasks.map((todo) => (
          <Task key={todo.id} todo={todo} toggleComplete={toggleComplete} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
