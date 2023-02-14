import React from "react";
import ComingSoon from "../utils/comingSoon/ComingSoon";
import style from "./contactUs.module.css";

function ContactUs() {
  return (
    <section className={style.contactUs} id="contactUs">
      <ComingSoon />
    </section>
  );
}

export default ContactUs;
