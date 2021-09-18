import React from "react";
import ArchivedTask from "./ArchivedTask";

const Archive = (props) => {
  const moveToTasks = (e) => {
    e.preventDefault();
    const newTasks = props.tasks;
    const newArchivedTasks = [];
    props.archived.forEach((todo) => {
      if (todo.moveFromArchive === true) {
        todo.moveFromArchive = false;
        todo.completed = false;
        newTasks.push(todo);
      } else {
        newArchivedTasks.push(todo);
      }
    });
    props.setTasks(newTasks);
    props.setArchived(newArchivedTasks);
  };

  const moveToCompleted = (e) => {
    e.preventDefault();
    const newCompletedTasks = props.completedTasks;
    const newArchivedTasks = [];
    props.archived.forEach((todo) => {
      if (todo.moveFromArchive === true) {
        todo.moveFromArchive = false;
        newCompletedTasks.push(todo);
      } else {
        newArchivedTasks.push(todo);
      }
    });
    props.setCompletedTasks(newCompletedTasks);
    props.setArchived(newArchivedTasks);
  };

  const clearArchive = () => {
    props.setArchived([]);
  };

  return (
    <div>
      <h2>Archived</h2>
      <form>
        {props.archived.map((todo) => (
          <ArchivedTask
            key={todo.id}
            todo={todo}
            setArchived={props.setArchived}
            setTasks={props.setTasks}
            setCompletedTasks={props.setCompletedTasks}
          />
        ))}

        <div>
          <button onClick={moveToTasks}>Move to Tasks</button>
          <button onClick={moveToCompleted}>Move to Completed</button>
        </div>
      </form>
      <button onClick={clearArchive}>Clear Archive</button>
    </div>
  );
};

export default Archive;
