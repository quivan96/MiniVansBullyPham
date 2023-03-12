import React from "react";
import ComingSoon from "../utils/comingSoon/ComingSoon";
import style from "./males.module.css";

function Males() {
  return (
    <div className="row">
      <div className="col-12">
        <div className={style.males} id="males">
          <ComingSoon />
        </div>
      </div>
    </div>
  );
}

export default Males;