/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import facebook from "../images/icons/fb_icon.svg";
import instagram from "../images/icons/ig_icon.svg";
import logo from "../images/icons/logo_icon.svg";
import style from "./navbar.module.css"

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-brand" href="#home">
            <img className={style.imgIcon} src={logo} alt="" />
          </a>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#home">
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#males">
                MALES
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#females">
                FEMALES
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#breedings">
                BREEDINGS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#puppies">
                PUPPIES
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contactUs">
                CONTACT US
              </a>
            </li>
          </ul>
          <form className="d-flex">
            <a href="https://www.instagram.com/minivansbullypham/" target="_new">
              <img className={style.imgIcon} src={instagram} alt="" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100085013696911" target="_new">
              <img className={style.imgIcon} src={facebook} alt="" />
            </a>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
