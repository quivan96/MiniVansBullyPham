import React from "react";
import style from "./pictureCard.module.css";


function PictureCard(props) {
  return (
    <div className={style.pictureCard}>
      <img className={style.cardImg} src={props.img} alt="" />
    </div>
  );
}

export default PictureCard;
