import React from "react";
import "./AboutMe.scss";
import profilePicture from "../../styles/assets/images/Profile.png";
import { useState } from "react";
import Button from "../../components/Button/Button";
import Overlay from "../../components/Overlay/Overlay";
const AboutMe = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  };
  return (
    <div className="about-container">
      {showOverlay && <Overlay handleClick={toggleOverlay} />}
      <div className={isActive ? "about-content + active" : "about-content"}>
        <div className="about-content__title-container">
          <h1 className="about-content__title">About me</h1>
        </div>
        <div className="about-content__image-container">
          <img
            className="about-content__image"
            src={profilePicture}
            alt="Photo of me"
          />{" "}
        </div>
        <div className="about-content__text-container">
          <p className="about-content__text-upper">
            I’m choosing a career in Tech as this has been an industry that’s
            always sparked my curiosity but I always treated it as a daydream.
            </p>
            <p className="about-content__text-lower">
            The fact that its beginning to turn into reality is incredibly
            exciting. I’ve been fortunate enough to already have 1 successful
            career as a kitchen installer, which taught me many useful skills. I
            love a challenge and constantly push myself but more importantly, I
            want something that I can genuinely enjoy and help people on a
            larger scale.
          </p>
        </div>
      </div>

      <div className="about-content__button">
        <Button
          text={"Read More ..."}
          handleClick={toggleOverlay}
          buttonStyle="hasBorder"
        />
      </div>
    </div>
  );
};

export default AboutMe;
