import React from "react";
import ComingSoon from "../utils/comingSoon/ComingSoon";
import style from "./breedings.module.css";

function Breedings() {
  return (
    <section className={style.breedings} id="breedings">
      <ComingSoon />
    </section>
  );
}

export default Breedings;
