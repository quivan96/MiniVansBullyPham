import React from "react";
import Navbar from "./navbar/Navbar";
import Home from "./home/Home";
import Males from "./males/Males";
import Females from "./females/Females";
import Breedings from "./breedings/Breedings";
import Puppies from "./puppies/Puppies";
import ContactUs from "./contactUs/ContactUs";
import Footer from "./footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Home />
        <Males />
        <Females />
        <Breedings />
        <Puppies />
      </div>
      <Footer>
        <ContactUs />
      </Footer>
      <div
        className="m-3 p-1"
        style={{
          color: "white",
          position: "fixed",
          bottom: "0",
          right: "0",
          fontSize: "2em",
          textDecoration: "none",
        }}
      >
        <a href="#home">scroll to top</a>
      </div>
    </div>
  );
}

export default App;
