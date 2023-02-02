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
      <Home />
      <Males />
      <Females />
      <Breedings />
      <Puppies />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
