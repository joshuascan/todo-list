import React from "react";
import ArchivedTask from "./ArchivedTask";

const Archive = (props) => {
  const moveToTasks = (todo) => {};

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
          <button>Move to Tasks</button>
          <button>Move to Completed</button>
        </div>
      </form>
      <button>Clear Archive</button>
    </div>
  );
};

export default Archive;
