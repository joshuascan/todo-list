import React, { useState } from "react";
import Task from "./Task";
import Completed from "./Completed";
import TodoForm from "./TodoForm";
import Archive from "./Archive";

const initialTasks = [
  {
    task: "Clean kitchen",
    completed: false,
    id: 1528817077286,
    moveFromArchive: false,
  },
  {
    task: "Update resume",
    completed: false,
    id: 1528817084358,
    moveFromArchive: false,
  },
];

const TodoList = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [archived, setArchived] = useState([]);
  const [showArchived, setShowArchived] = useState(false);

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

  const markComplete = (todo) => {
    todo.completed = true;
    setCompletedTasks([...completedTasks, todo]);
    const newTasks = tasks.filter((task) => task.id !== todo.id);

    setTasks(newTasks);
  };

  const markIncomplete = (todo) => {
    todo.completed = false;
    setTasks([...tasks, todo]);
    const newCompletedTasks = completedTasks.filter(
      (task) => task.id !== todo.id
    );

    setCompletedTasks(newCompletedTasks);
  };

  const archiveTask = () => {
    setArchived(completedTasks);
    setCompletedTasks([]);
  };

  const toggleArchived = () => {
    setShowArchived(!showArchived);
  };

  return (
    <div>
      {!showArchived ? (
        <div>
          <TodoForm addTask={addTask} />
          <div>
            <h2>Tasks</h2>
            {tasks
              .sort((a, b) => a.id - b.id)
              .map((todo) => (
                <Task
                  key={todo.id}
                  todo={todo}
                  toggleComplete={toggleComplete}
                  markComplete={markComplete}
                />
              ))}
          </div>
          <h2>Completed</h2>
          <div>
            {completedTasks.map((todo) => (
              <Completed
                key={todo.id}
                todo={todo}
                markIncomplete={markIncomplete}
              />
            ))}
            <button onClick={archiveTask}>Archive Completed</button>
          </div>
        </div>
      ) : (
        <Archive
          archived={archived}
          setArchived={setArchived}
          tasks={tasks}
          setTasks={setTasks}
          completedTasks={completedTasks}
          setCompletedTasks={setCompletedTasks}
        />
      )}
      <button onClick={toggleArchived}>
        {showArchived ? "Hide Archived" : "Show Archived"}
      </button>
    </div>
  );
};

export default TodoList;
