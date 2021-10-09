import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createList } from "../../store/listSlice";

const initialFormValues = {
  name: "",
  tags: "",
  items: [],
};

const ShoppingListCreator = () => {
  const [newList, setNewList] = useState(initialFormValues);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setNewList({ ...newList, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createList({
        ...newList,
        tags: newList.tags !== "" ? newList.tags.split(/[ ,]+/) : [],
        id: Date.now(),
      })
    );
    setNewList(initialFormValues);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setNewList(initialFormValues);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>List Name</label>
        <input
          value={newList.name}
          onChange={handleChange}
          name="name"
          type="text"
        />
        <label>Tags</label>
        <input
          value={newList.tags}
          onChange={handleChange}
          name="tags"
          type="text"
        />
        <button type="submit">Submit</button>
        <button onClick={handleCancel}>Cancel</button>
      </form>
    </div>
  );
};

export default ShoppingListCreator;
