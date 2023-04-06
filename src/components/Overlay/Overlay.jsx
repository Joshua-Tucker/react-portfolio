import React from "react";
import "./Overlay.scss";
import whiteCross from "../../styles/assets/images/white-cross.png";
import photo1 from "../../styles/assets/images/porto1.jpg";
import photo2 from "../../styles/assets/images/porto2.jpg";
import photo3 from "../../styles/assets/images/kitchen.jpg";
import photoSki from "../../styles/assets/images/ski.jpg";

const Overlay = ({ handleClick }) => {
  return (
    <div className="overlay-container">
      <div className="overlay">
        <div className="overlay__cross">
          <img onClick={handleClick} src={whiteCross} alt="cross" />
        </div>
        <h1 className="overlay__title">A bit more about me..</h1>
        <p className="overlay__text-hidden">
          I’ve been fortunate enough to already have 1 successful career asa
          kitchen installer, which taught me many useful skills. I love a
          challenge and constantly push myself but more importantly, I want
          something that I can genuinely enjoy and help people on a larger
          scale.
        </p>
        <p className="overlay__text-upper">
          I’ve been project managing Kitchen Installations and teaching
          apprentices since I was 21 years old (See babyfaced photo below)
          <div className="overlay__image-container">
            <img className="overlay__image" src={photo3} alt="Photo of me" />
          </div>
          <br />
          <span className="textBold">
            Working under pressure came with each installation.
          </span>
          <br />
          <br />
          Not only were we judged for not having the experience necessary before
          we stepped in the front door, but I was also the third generation of
          kitchen installer within our family and had a name to live up to.
        </p>

        <p className="overlay__text-middle">
          <span className="textBold">
            Each job required a high attention to detail and quick decision
            making.
          </span>
          <br />
          <br />
          To ensure our customers was satisfied with the result, I had a system
          in place to ensure we would reach our goal.
          <br />
          <br />
          This involved:-
          <br />
          <br />
          <span className="textBold">
            -Clear communication, everyone knew what they had to do and a target
            to get it completed by to make sure it didn’t hold anyone else up.
          </span>
          <br />
          <br />
          -Structured plan, everyone had the roles to play to support each other
          if we were falling behind so we didn’t overrun.
          <br />
          <br />
          <span className="textBold">
            -Focus on quality, we were all competitive, so it was important to
            exercise this. Showboating was encouraged to show off to everyone
            else when a worktop join was flawless or an infill was perfectly
            scribed!
          </span>
          <br />
          <br />
          <div className="overlay__images2">
            <img className="overlay__image" src={photoSki} alt="Photo of me" />
          </div>
        </p>

        <p className="overlay__text-lower">
          In my spare time, I’ve picked up a variety of hobbies since lockdown.
          <br />
          <br />
          <span className="textBold">
            These include climbing, skateboarding, piano, kickboxing and
            learning Japanese. My biggest love is skiing but sadly haven’t been
            on a mountain in a few years now.{" "}
          </span>
          <br />
          <br />I enjoy adventure, so I like getting lost in the woods and
          exploring new cities by myself.
          <div className="overlay__images2">
            <img className="overlay__image" src={photo1} alt="Photo of me" />
          </div>
          I’m currently a live-in landlord and I’m thankful for having my
          previous experience as a business owner to transfer over skills to
          this new yet similar environment.
          <br />
          <br />
          <span className="textBold">
            Not everything was transferable however and this has been learnt the
            hard way.
          </span>
          <br />
          <br />
          It’s a role that I’m always learning from and adapting to, to make
          sure that those who live with me have a home to live in, not a room to
          rent.
          <div className="overlay__images">
            <img className="overlay__image" src={photo2} alt="Photo of me" />
          </div>
          Due to finish the _nology full stack course soon and have learnt a lot
          about myself and my capabilities in this time.
          <br />
          <br />
          <span className="textBold">
            I find it amazing what we have learnt in a short time and am
            incredibly excited to be a part of projects and make a difference to
            people in the real world.
          </span>
        </p>
      </div>
    </div>
  );
};

export default Overlay;
