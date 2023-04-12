import React from "react";
import Button from "../../components/Button/Button";
import "./Footer.scss";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {

  
  return (
    <div className="footer">
      {/* <Button text="Settings" /> */}
      <ScrollLink to="top" spy={true} smooth={true} offset={-50} duration={500}>
        <Button text="Return to top" />
      </ScrollLink>
      <RouterLink style={{ textDecoration: "none",color:"black"}} to={"/contact"}>
        <Button text="Get in touch" />
      </RouterLink>
    </div>
  );
};

export default Footer;
