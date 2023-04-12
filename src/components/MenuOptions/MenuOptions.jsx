import React from "react";
import Button from "../Button/Button";
import "./MenuOptions.scss";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

const MenuOptions = () => {
  return (
    <div className="menu-options">
      <ScrollLink to="lang" spy={true} smooth={true} offset={0} duration={500}>
        <Button text="Technical Skills" />
      </ScrollLink>
      <ScrollLink
        to="about"
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
      >
        <Button text="About" />
      </ScrollLink>
      <ScrollLink
        to="projects"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        <Button text="Projects" />
      </ScrollLink>
      <RouterLink style={{ textDecoration: "none",color:"black"}} to={"/contact"}>
        <Button text="Get in touch" />
      </RouterLink>
    </div>
  );
};

export default MenuOptions;
