import React from "react";
import ComingSoon from "../utils/comingSoon/ComingSoon";
import style from "./contactUs.module.css";

function ContactUs() {
  return (
    <div className={style.contactUs} id="contactUs">
      <ComingSoon />
    </div>
  );
}

export default ContactUs;
