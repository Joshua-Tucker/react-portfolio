import React from "react";
import "./Intro.scss";
import logo from "../../styles/assets/images/Logo.png";
import MenuOptions from "../../components/MenuOptions/MenuOptions";

const Intro = () => {
  return (
    <div className="intro-container">
      <div className="intro-content">
        <div className="intro-content__image-container">
          <img
            className="intro-content__image"
            src={logo}
            alt="Intro Picture"
          />
        </div>
        <div className="intro-content__intro-container">
          <h1 className="intro-content__top">Hi,<br/> I'm Josh</h1>
          <h2 className="intro-content__middle"> A Junior Software Engineer</h2>
          <h3 className="intro-content__lower">
            {" "}
            Welcome to my Journey so far
          </h3>
        </div>

        <div className="intro-content__menu">
          <MenuOptions />
        </div>
      </div>
    </div>
  );
};

export default Intro;
