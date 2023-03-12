import React from "react";
import "./Header.scss";
import Button from "../../components/Button/Button"

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-content">
        <div className="header-content__name-container">
          <h1 className="header-content__name">Josh Tucker</h1>
        </div>
        <div className="header-content__button-container">
          <Button text="Home"/>
          <Button text="About"/>
          <Button text="Projects"/>
          <Button text="Get in touch" buttonStyle="hasBorder"/>
        </div>
      </div>
    </div>
  );
};

export default Header;
