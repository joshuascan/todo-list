import React from "react";

const ArchivedTask = ({
  task,
  selectedForMoveById,
  setSelectedForMoveById,
}) => {
  const handleSelectForMove = (e) => {
    if (e.target.checked === true) {
      setSelectedForMoveById([...selectedForMoveById, task.task_id]);
    } else {
      const filteredIds = selectedForMoveById.filter(
        (id) => id !== task.task_id
      );
      setSelectedForMoveById(filteredIds);
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
