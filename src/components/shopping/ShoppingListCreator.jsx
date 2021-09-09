import React, { useState } from "react";

const initialFormValues = {
  name: "",
  tags: "",
};

const ShoppingListCreator = ({ shoppingLists, addShoppingList }) => {
  const [newList, setNewList] = useState(initialFormValues);

  const handleChange = (e) => {
    setNewList({ ...newList, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addShoppingList(newList);
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
