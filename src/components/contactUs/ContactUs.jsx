import React from "react";
import whatsapp from "../../images/icons/whatsapp_icon.svg";
import facebook from "../../images/icons/fb_icon.svg";
import instagram from "../../images/icons/ig_icon.svg";
import style from "./contactUs.module.css";

function ContactUs() {
  return (
    <div className={style.contactUs} id="contactUs">
      <div className={style.icons}>
        <img className={style.imgIcon} src={whatsapp} alt="" />

        <a href="https://www.instagram.com/minivansbullypham/" target="_new">
          <img className={style.icon} src={instagram} alt="" />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100085013696911"
          target="_new"
        >
          <img className={style.icon} src={facebook} alt="" />
        </a>
      </div>
      <p className={style.contactNumber}>Message: 954-496-0613</p>
    </div>
  );
}

export default ContactUs;
