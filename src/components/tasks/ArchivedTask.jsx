import React from "react";
import { selectForMove } from "../../store/todoSlice";
import { useDispatch } from "react-redux";

const ArchivedTask = ({ task }) => {
  const dispatch = useDispatch();

  const handleSelectForMove = (e) => {
    dispatch(selectForMove({ ...task, moveFromArchive: e.target.checked }));
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
