import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Males from "./Males"
import Females from "./Females";
import Breedings from "./Breedings"
import Puppies from "./Puppies"
import ContactUs from "./ContactUs"
import Footer from "./Footer"

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
