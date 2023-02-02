import React from "react";
import ComingSoon from "../utils/comingSoon/ComingSoon";
import style from "./puppies.module.css";

function Puppies() {
  return (
    <div className={style.puppies} id="puppies">
      <ComingSoon />
    </div>
  );
}

export default Puppies;
