import React from "react";
import "../css/index.css";

function PictureCard(props) {
  return (
    <div>
      <h2 className="nameTitle">{props.name}</h2>
      <img className="cardImg" src={props.img} alt="" />
    </div>
  );
}

export default PictureCard;
