import React, { useState } from "react";

const ShoppingCard = (props) => {
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
      <h3>{props.list.name}</h3>
      {props.list.tags.map((tag) => (
        <p key={tag}>{tag}</p>
      ))}
      <div>
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
