import React from "react";
import "./AboutMe.scss";
import profilePicture from "../../styles/assets/images/Profile.png";

const AboutMe = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-content__title-container">
          <h1 className="about-content__title">About me</h1>
        </div>
        <div className="about-content__text-container">
          <p className="about-content__text">
            I’m choosing a career in Tech as this has been an industry that’s
            always sparked my curiosity but I always treated it as a daydream.
            The fact that its beginning to turn into reality is incredibly
            exciting. I’ve been fortunate enough to already have 1 successful
            career as a kitchen installer, which taught me many useful skills. I
            love a challenge and constantly push myself but more importantly, I
            want something that I can genuinely enjoy and help people on a
            larger scale.
          </p>
          <p className="about-content__text">
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
        </div>
      </div>
      <div className="about-content__image-container">
        <img className="about-content__image" src={profilePicture} alt="Photo of me" />
      </div>
    </div>
  );
};

export default AboutMe;
