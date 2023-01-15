import React from "react";
import PictureCard from "./PictureCard";
import Navbar from "./Navbar";
import black from "../images/logos/transparent_no_shade.png";
import Icon from "./Icon";

function App() {
  return (
    <div>
      <Navbar />
      <PictureCard name="Pepper" img={black} />
    </div>
  );
}

export default App;
