import React from "react";

const ShoppingCard = (props) => {
  return (
    <div className={"shopping-card-container"}>
      <h3>{props.list.name}</h3>
      {props.list.tags.length > 0 && <p>Yes</p>}
    </div>
  );
};

export default ShoppingCard;
