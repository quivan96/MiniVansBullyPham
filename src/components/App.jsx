import React from "react";
import PictureCard from "./PictureCard";
import black from "../images/logos/black_no_shade.png";

console.log("this is the image:", black);

function App() {
  return (
    <div>
      <PictureCard name="Pepper" img={black} />
    </div>
  );
}

export default App;
