import React from "react";
import Icon from "./Icon";
import facebook from "../images/icons/fb_icon.svg";
import instagram from "../images/icons/ig_icon.svg";
import logo from "../images/icons/logo_icon.svg";
import "../css/styles.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar">
        <li>
          <a href="/">
            <img className="navbarHome" src={logo} alt="" />
          </a>
        </li>
        <li className="hover">
          <a href="/">MALES</a>
        </li>
        <li>
          <a href="/">FEMALES</a>
        </li>
        <li>
          <a href="/">BREEDINGS</a>
        </li>
        <li>
          <a href="/">PUPPIES</a>
        </li>
        <li>
          <a href="/">CONTACT US</a>
        </li>
      </ul>
      <ul className="navbar navbarIcons">
        <li>
          <a href="/">
            <Icon img={facebook} />
          </a>
        </li>
        <li>
          <a href="/">
            <Icon img={instagram} />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
