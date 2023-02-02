import React from "react";
// import PictureCard from "../PictureCard";
// import img1 from "../images/dimSum/dim_sum1.PNG";
import ComingSoon from "../utils/comingSoon/ComingSoon";
import style from "./females.module.css";

function Females() {
  return (
    <div className={style.females} id="females">
      {/* <PictureCard img={img1} name="Dim Sum" registration="ABKC 123" /> */}
      <ComingSoon />
    </div>
  );
}

export default Females;
