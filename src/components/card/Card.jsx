import React from "react";
import "./card.css";

export const Card = (props) => {
  return (
    <div className="card-container">
      <img
        alt="monster"
        src={`https://robohash.org/${props.monster.id}?set=set2&size=182x182`}
      />
      <h1>{props.monster.name}</h1>
      <h2>{props.monster.email}</h2>
    </div>
  );
};
