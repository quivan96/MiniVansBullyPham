import React from "react";
import "../css/index.css";

function Icon(props) {
  return (
    <div>
      <img className="iconImg" src={props.img} alt="" />
    </div>
  );
}

export default Icon;
