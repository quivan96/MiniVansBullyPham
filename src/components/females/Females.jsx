import React from "react";
import dimSum1 from "../../images/dimSum/dim_sum1.PNG";
import dimSumPed from "../../images/dimSum/dim_sum_pedigree.PNG";
import abkcIcon from "../../images/icons/abkc.jpg"
import style from "./females.module.css";

function Females() {
  return (
    <div className={style.females} id="females">

      <div className={style.pics}>
        <img className={style.bodyImg} src={dimSum1}  alt="dim sum" />
        <img className={style.pedImg}  src={dimSumPed}  alt="pedigree" />
      </div>

      <div className={style.info}>
      <p> Great temperament with a championship pedigree from top to bottom.</p>

      <p><b>FEATURES</b></p>
      <ul>
        <li>15" EXTREME Pocket American Bully</li>
        <li>23" Head, 24" Neck, 70+ lbs. (still growing)</li>
        <li>Color Carrier: EmEm, Bb, dd, KBky, ayat, mm</li>
      </ul>

      <p><b>BLOODLINE</b></p>
        

      <p style={{color:"red"}}> <img className={style.abkcIcon} src={abkcIcon} alt="abkc logo" /> Grand Champion Rockomania</p>
      <p style={{color:"red"}}> <img className={style.abkcIcon} src={abkcIcon} alt="abkc logo" /> Grand Champion Chumper</p>
      <p style={{color:"red"}}> <img className={style.abkcIcon} src={abkcIcon} alt="abkc logo" /> Grand Champion Kaos</p>
      <p> <img className={style.abkcIcon} src={abkcIcon} alt="abkc logo" /> Champion Storm Shadow (littermate)</p>
      <p> <img className={style.abkcIcon} src={abkcIcon} alt="abkc logo" /> Champion Lauren London (mother)</p>
      <p> <img className={style.abkcIcon} src={abkcIcon} alt="abkc logo" /> Champion Grimm</p>



      </div>

    </div>
  );
}

export default Females;
