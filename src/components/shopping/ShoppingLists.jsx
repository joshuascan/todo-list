import React, { useState } from "react";
import ShoppingCard from "./ShoppingCard";
import ShoppingListCreator from "./ShoppingListCreator";

const ShoppingLists = (props) => {
  const [shoppingLists, setShoppingLists] = useState([]);

  const addShoppingList = (list) => {
    const newList = {
      name: list.name,
      tags: list.tags !== "" ? list.tags.split(/[ ,]+/) : "",
      id: Date.now(),
    };
    setShoppingLists([...shoppingLists, newList]);
  };

  return (
    <div>
      <ShoppingListCreator addShoppingList={addShoppingList} />
      <div className={"shopping-lists-container"}>
        {shoppingLists.map((list) => (
          <ShoppingCard key={list.id} list={list} />
        ))}
      </div>
    </div>
  );
};

export default ShoppingLists;
