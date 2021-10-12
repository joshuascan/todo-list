import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/listSlice";

const ShoppingCard = ({ list }) => {
  const [listItem, setListItem] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setListItem(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addItem({
        listId: list.id,
        newItem: { name: listItem, id: Date.now(), completed: false },
      })
    );
    setListItem("");
  };

  return (
    <div className={"shopping-card-container"}>
      <h3>{list.name}</h3>
      {list.tags.length > 0 ? (
        list.tags.map((tag) => (
          <span className={"shopping-list-tag"} key={tag}>
            {tag}
          </span>
        ))
      ) : (
        <span></span>
      )}
      <div className={"shopping-list-items"}>
        {list.items.map((item) => (
          <p className={"list-item"} key={item.id}>
            {item.name}
          </p>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Add item"
          value={listItem}
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default ShoppingCard;
