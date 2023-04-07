import React from "react";
import Button from "../../components/Button/Button";
import "./Footer.scss";
import { Link } from "react-scroll";

const Footer = () => {

  
  return (
    <div className="footer">
      {/* <Button text="Settings" /> */}
      <Link to="top" spy={true} smooth={true} offset={-50} duration={500}>
        <Button text="Return to top" />
      </Link>
      {/* <Button text="Get in touch" /> */}
    </div>
  );
};

export default Footer;
