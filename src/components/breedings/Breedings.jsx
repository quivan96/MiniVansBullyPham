import React from "react";
import ComingSoon from "../utils/comingSoon/ComingSoon";
import style from "./breedings.module.css";

function Breedings() {
  return (
    <div className="row">
      <div className="col-12">
        <section className={style.breedings} id="breedings">
          <ComingSoon />
        </section>
      </div>
    </div>
  );
}

export default Breedings;
