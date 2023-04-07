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
        <div className="intro-content__text-container">
          <h1 className="intro-content__title">Hi,</h1>
          <h1 className="intro-content__top">I'm Joshua</h1>
          <h2 className="intro-content__middle">
            {" "}
            <br />
            I'm a Junior Software Engineer
          </h2>
          <h3 className="intro-content__lower">
            <br />
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
