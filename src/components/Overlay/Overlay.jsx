import React from "react";
import "./Overlay.scss";
import whiteCross from "../../styles/assets/images/white-cross.png";


const Overlay = ({ handleClick }) => {


  return (
    <div className="overlay-container">
      <div className="overlay">
      <div className="overlay__cross">
          <img onClick={handleClick} src={whiteCross} alt="cross" />
        </div>
        <h1 className="overlay__title">A bit more about me..</h1>
        <p className="overlay__text-upper">
          I’ve been project managing jobs and have been teaching apprentices
          since I was 21 years old.
          <br />
          <br />
          Each project required a high attention to detail and quick decision
          making.
          <br />
          <br />
          Working under pressure came with each project. To ensure our customer
          was satisfied with the result we had to have clear communication
          within the team and with them to reach our goal.
        </p>
        <p className="overlay__text-middle">
          Other than a great starter exposure to many in demand languages that
          _nology have offered, I believe I’m well rounded with great
          communication and experienced to working in teams and being able to
          deliver projects to a high standard.
          <br />
          <br/>
          ​ I'm an ambitious individual who enjoys a challenge.
          <br />
          <br/>
          I've had experience with running a business and am currently a live-in
          landlord so I’m experienced in communication, project management and
          connecting with those I interact with.​
        </p>

        <p className="overlay__text-lower">
          {" "}
          Due to finish the _nology full stack course soon and have learnt a lot
          about myself and my capabilities in this time. I find it amazing what
          we have learnt in a short time and am incredibly excited to be a part
          of projects and make a difference to people in the real world .
        </p>
   
      </div>
    </div>
  );
};

export default Overlay;
