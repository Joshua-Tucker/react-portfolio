import React from "react";
import "./AboutMe.scss";
import profilePicture from "../../styles/assets/images/Profile.png";
import Button from "../../components/Button/Button";
import Overlay from "../../components/Overlay/Overlay";
import { Link } from "react-scroll";
import { useState } from "react";

const AboutMe = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
    setIsActive(!isActive);
  };

  return (
    <>
      {showOverlay && <Overlay handleClick={toggleOverlay} />}

      <div
        id="about"
        className={isActive ? "about-container + active" : "about-container"}
      >
        <div className="about-content">
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
              Are you ready for an exhilarating adventure into the world of
              coding and innovation? Imagine the possibilities when artificial
              intelligence, neurocomputing, and robotics converge, shaping
              groundbreaking advancements.
            </p>
            <p className="about-content__text-lower">
              I'm on a mission to be part of this incredible journey. 🌟 Unlock
              the Power of Innovation | Click below to explore further 🌟
            </p>
            <p className="about-content__text-lower-hidden">
              I’ve been fortunate enough to already have 1 successful career as
              a kitchen installer, which taught me many useful skills. I love a
              challenge and constantly push myself but more importantly, I want
              something that I can genuinely enjoy and help people on a larger
              scale.
            </p>
          </div>
        </div>

        <div className="about-content__button">
          <Button
            text={"I've got more to tell..."}
            handleClick={toggleOverlay}
          />
        </div>
      </div>
    </>
  );
};

export default AboutMe;
