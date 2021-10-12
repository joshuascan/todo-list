import React from "react";
import { useDispatch } from "react-redux";
import { markComplete } from "../../store/listSlice";

const Item = ({ item, listId }) => {
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(markComplete({ itemId: item.id, listId: listId }));
  };

  return (
    <div className={"item"}>
      <form>
        <input type="checkbox" onChange={handleChange} />
        <label>{item.name}</label>
      </form>
    </div>
  );
};

export default Item;
