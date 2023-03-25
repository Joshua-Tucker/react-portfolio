import React from "react";
import "./Overlay.scss";
import whiteCross from "../../styles/assets/images/white-cross.png";

const Overlay = ({ handleClick }) => {
  return (
    <div className="overlay">
      <div className="overlay-content">
        <h1 className="overlay-title">A bit more about me..</h1>
        <p className="overlay__text">
            I’ve been project managing jobs and have been teaching apprentices
            since I was 21 years old. Each project required a high attention to
            detail, quick decision making, being able to work under pressure and
            most importantly clear communication to the members of my team and
            the customers themselves to ensure we all knew what was going on and
            was satisfied with the result. Other than a great starter exposure
            to many in demand languages that _nology have offered, I believe I’m
            well rounded with great communication and experienced to working in
            teams and being able to deliver projects to a high standard.
          </p>
          <p className="overlay__text">
            ​ I'm an ambitious individual who enjoys a challenge. I've had
            experience with running a business and am currently a live-in
            landlord so I’m experienced in communication, project management and
            connecting with those I interact with.​ Due to finish the _nology
            full stack course soon and have learnt a lot about myself and my
            capabilities in this time. I find it amazing what we have learnt in
            a short time and am incredibly excited to be a part of projects and
            make a difference to people in the real world .
          </p>
        <div className="overlay-cross">
          <img onClick={handleClick} src={whiteCross} alt="cross" />
        </div>
      </div>
    </div>
  );
};

export default Overlay;
