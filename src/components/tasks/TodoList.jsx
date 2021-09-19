import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask } from "../../store/todoSlice";
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

  const task = useSelector((state) => state.todo.tasks);
  const dispatch = useDispatch();

  const addTasks = (newTask) => {
    dispatch(addTask(newTask));
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

  //   tasks.sort((a, b) => a.id - b.id).map....

  return (
    <div>
      {!showArchived ? (
        <div>
          <TodoForm addTask={addTasks} />
          <div>
            <h2>Tasks</h2>
            {task.map((todo) => (
              <Task key={todo.id} todo={todo} markComplete={markComplete} />
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
