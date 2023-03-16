import React from "react";
import "./Intro.scss";
import introPicture from "../../styles/assets/images/Picture.png";

const Intro = () => {
  return (
    <div className="intro-container">
      <div className="intro-content">
        <div className="intro-content__title-container">
          <h2 className="intro-content__title">
            Hey there! My name's Josh Tucker. Welcome to my Coding Portfolio!!
          </h2>
        </div>
        <div className="intro-content__intro-container">
          <h1 className="intro-content__intro">
            {" "}
            A Junior Software Developer based in the U.K.
          </h1>
        </div>
        <div className="intro-content__image-container">
          <img
            className="intro-content__image"
            src={introPicture}
            alt="Intro Picture"
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
