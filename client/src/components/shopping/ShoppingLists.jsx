import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ShoppingCard from "./ShoppingCard";
import ShoppingListCreator from "./ShoppingListCreator";

const ShoppingLists = (props) => {
  const lists = useSelector((state) => state.list.lists);
  const dispatch = useDispatch();

  return (
    <div>
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