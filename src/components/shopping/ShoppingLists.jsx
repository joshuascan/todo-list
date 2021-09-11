import React from "react";
import ShoppingCard from "./ShoppingCard";

const ShoppingLists = (props) => {
  return (
    <div className={"shopping-lists-container"}>
      {props.shoppingLists.map((list) => (
        <ShoppingCard key={list.id} list={list} />
      ))}
    </div>
  );
};

export default ShoppingLists;
