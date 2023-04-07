import React from "react";
import Button from "../Button/Button";
import "./MenuOptions.scss";
import { Link } from "react-scroll";

const MenuOptions = () => {

  return (
    <div className="menu-options">
      <Link to="lang" spy={true} smooth={true} offset={0} duration={500}>
        <Button text="Technical Skills" />
      </Link>
      <Link to="about" spy={true} smooth={true} offset={-50} duration={500}>
        <Button text="About" />
      </Link>
      <Link to="projects" spy={true} smooth={true} offset={0} duration={500}>
        <Button text="Projects" />
      </Link>

      {/* <Button text="Get in touch" /> */}
    </div>
  );
};

export default MenuOptions;
