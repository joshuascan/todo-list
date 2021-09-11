import React from "react";

const ShoppingCard = (props) => {
  return (
    <div className={"shopping-card-container"}>
      <h3>{props.list.name}</h3>
    </div>
  );
};

export default ShoppingCard;
