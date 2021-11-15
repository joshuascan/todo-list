import React from "react";

const ArchivedTask = ({ task, selectedForMove, setSelectedForMove }) => {
  const handleSelectForMove = (e) => {
    if (e.target.checked === true) {
      setSelectedForMove([...selectedForMove, task]);
    } else {
      const filteredTasks = selectedForMove.filter(
        (t) => t.task_id !== task.task_id
      );
      setSelectedForMove(filteredTasks);
    }
  };

  return (
    <div className="task completed">
      <form>
        <input
          type="checkbox"
          name="moveFromArchive"
          onChange={handleSelectForMove}
        />
        <label>{task.name}</label>
      </form>
    </div>
  );
};

export default ArchivedTask;
