import React from "react";
import ComingSoon from "../utils/comingSoon/ComingSoon";
import style from "./puppies.module.css";

function Puppies() {
  return (
    <div className="row">
      <div className="col-12">
        <div className={style.puppies} id="puppies">
          <ComingSoon />
        </div>
      </div>
    </div>
  );
}

export default Puppies;
