import React from "react";
// import style from "./pictureCard.module.css";


function PictureCard(props) {
  return (
    <div className="pictureCard">
      <img className="cardImg" src={props.img} alt="" />
      <div className="container">
        <div className="row row-cols-2">
          <div className="col">Name</div>
          <div className="col">{props.name}</div>
          <div className="col">Registration</div>
          <div className="col">{props.registration}</div>
          <div className="col">DOB</div>
          <div className="col">{props.dob}</div>
          <div className="col">Weight</div>
          <div className="col">{props.weight}</div>
          <div className="col">Height</div>
          <div className="col">{props.height}</div>
          <div className="col">Neck</div>
          <div className="col">{props.neck}</div>
          <div className="col">Head</div>
          <div className="col">{props.head}</div>
          <div className="col">Color</div>
          <div className="col">{props.color}</div>
        </div>
      </div>
    </div>
  );
}

export default PictureCard;
