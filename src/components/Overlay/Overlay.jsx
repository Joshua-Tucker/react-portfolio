import React from "react";
import "./Overlay.scss";
import whiteCross from "../../styles/assets/images/white-cross.png";
import photo1 from "../../styles/assets/images/porto1.jpg";
import photo2 from "../../styles/assets/images/porto2.jpg";
import photo3 from "../../styles/assets/images/kitchen.jpg";
import photoSki from "../../styles/assets/images/ski.jpg";
import Button from "../Button/Button";

const Overlay = ({ handleClick }) => {
  return (
    <div className="overlay-container">
      <div className="overlay">
        <div className="overlay__cross">
          <img onClick={handleClick} src={whiteCross} alt="cross" />
        </div>
        <h1 className="overlay__title">A bit more about me..</h1>

        <p className="overlay__text-upper">
          Hey there! I recently took a leap into the captivating realm of
          coding. Through an intensive 3-month bootcamp with _nology, I immersed
          myself in the intricacies of Java, React, and Spring Boot, acquiring
          valuable expertise along the way. But that's just the beginning.
          <br />
        </p>

        <p className="textBold">
          I've been fortunate enough to have had a successful career as a
          kitchen installer, which not only taught me essential skills but also
          instilled in me the love for challenges and continuous
          self-improvement.
        </p>
        <br />
        <br />
        <br />
        <p className="overlay__text-upper">
          Project managing kitchen installations and teaching apprentices from a
          young age has allowed me to develop strong leadership and
          communication skills, and I've always had a passion for helping others
          on a larger scale.
        </p>

        <p className="textBold">
          In my spare time, I've embraced a variety of hobbies, especially
          during the lockdown period.
        </p>
        <br />
        <br />
        <p className="overlay__text-middle">
          From climbing and skateboarding to playing the piano, kickboxing, and
          even learning Japanese, I've discovered the joy of exploring different
          passions.
          <br />
          <br />
        </p>
        <p className="textBold">
          However, my biggest love is skiing. The beauty of the mountains, the
          smell of the fresh forest air, flying down the slopes, and enjoying
          live music and a beer with like-minded people is simply the best.
        </p>
        <br />
        <br />
        <p className="overlay__text-middle">
          Currently, I'm embracing a new role as a live-in landlord, and I'm
          grateful for the transferable skills from my previous experience as a
          business owner.
          <br />
          <br />
        </p>
        <p className="textBold">
          {" "}
          This new yet familiar environment allows me to utilize my expertise in
          managing projects, problem-solving, and creating a positive living
          experience for tenants.
        </p>
        <br />
        <br />

        <p className="overlay__text-lower">
          With this diverse background, a drive for continuous learning, and a
          genuine desire to make a difference, I'm poised to contribute to the
          world of coding and innovation.
          <br />
          <br />
        </p>
        <p className="textBold">
          Are you ready to join forces with a versatile professional who's
          passionate about pushing boundaries?{" "}
        </p>

        <div className="overlay__button">
          <Button text="Return to page" handleClick={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default Overlay;
