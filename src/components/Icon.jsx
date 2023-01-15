import React from "react";
import "../css/styles.css";

function Icon(props) {
  return (
    <div>
      <img className="iconImg" src={props.img} alt="" />
    </div>
  );
}

export default Icon;
