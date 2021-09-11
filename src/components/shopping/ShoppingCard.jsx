import React from "react";

const ShoppingCard = (props) => {
  return (
    <div className={"shopping-card-container"}>
      <h3>{props.list.name}</h3>
      {props.list.tags.map((tag, idx) => (
        <p key={idx}>{tag}</p>
      ))}
    </div>
  );
};

export default ShoppingCard;
