import React from "react";

const ArchivedTask = ({
  task,
  selectedForMoveById,
  setSelectedForMoveById,
}) => {
  const handleSelectForMove = (e) => {
    if (e.target.checked === true) {
      setSelectedForMoveById([...selectedForMoveById, task]);
    } else {
      const filteredTasks = selectedForMoveById.filter(
        (t) => t.task_id !== task.task_id
      );
      setSelectedForMoveById(filteredTasks);
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
