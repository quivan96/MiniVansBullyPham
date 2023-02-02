import React from "react";
import ComingSoon from "../utils/comingSoon/ComingSoon";
import style from "./breedings.module.css";

function Breedings() {
  return (
    <div className={style.breedings} id="breedings">
      <ComingSoon />
    </div>
  );
}

export default Breedings;
