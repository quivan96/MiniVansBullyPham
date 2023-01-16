import React from "react";
import logo from "../images/logos/transparent_no_shade.png"
import "../css/styles.css";

function ComingSoon(props) {
  return (
    <div className="comingSoon">
      <h1>Coming Soon</h1>
      <img src={logo} alt="" />
    </div>
  );
}

export default ComingSoon;
