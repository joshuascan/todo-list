import React, { useState } from "react";

const ShoppingCard = ({ list }) => {
  const [listItem, setListItem] = useState("");
  const [items, setItems] = useState([]);

  const handleChange = (e) => {
    setListItem(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setItems([...items, { name: listItem, id: Date.now() }]);
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
        {items.map((item) => (
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
