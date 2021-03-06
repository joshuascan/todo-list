import React from "react";
import { useSelector } from "react-redux";
import ShoppingCard from "./ShoppingCard";
import ShoppingListCreator from "./ShoppingListCreator";
import Navigation from "../Navigation";

const ShoppingLists = () => {
  const lists = useSelector((state) => state.list.lists);

  return (
    <div>
      <Navigation />
      <ShoppingListCreator />
      <div className={"shopping-lists-container"}>
        {lists.map((list) => (
          <ShoppingCard key={list.id} list={list} />
        ))}
      </div>
    </div>
  );
};

export default ShoppingLists;
