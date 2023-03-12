import React from "react";

const Footer = (props) => {
  return (
    <div className="row">
      <div className="col-12">
        <footer className="row">
          <div className="col-6 mx-auto">{props.children}</div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
