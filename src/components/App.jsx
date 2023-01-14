import React from "react";
import PictureCard from "./PictureCard";
import black from "../images/logos/transparent_no_shade.png";
import facebook from "../images/icons/facebook_icon.svg";
import youtube from "../images/icons/youtube_icon.svg";
import instagram from "../images/icons/instagram_icon.svg";
import logo from "../images/icons/logo_icon.svg";
import Icon from "./Icon";

function App() {
  return (
    <div>
      <Icon img={facebook} />
      <Icon img={youtube} />
      <Icon img={instagram} />
      <Icon img={logo} />
      <PictureCard name="Pepper" img={black} />
    </div>
  );
}

export default App;
