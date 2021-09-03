import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const initialTasks = [
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

function App() {
  const [tasks, setTasks] = useState(initialTasks);

  const addTask = (todo) => {
    const newTask = { ...todo, id: Date.now() };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="App">
      <h1>Todo-List</h1>
      <TodoForm tasks={tasks} addTask={addTask} />
      <TodoList tasks={tasks} />
    </div>
  );
}

export default App;
