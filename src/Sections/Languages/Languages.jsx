import React from "react";
import "./Languages.scss";
import springBootLogo from "../../styles/assets/images/Skill=Spring Boot.png";
import javaLogo from "../../styles/assets/images/Skill=Java.png";
import reactLogo from "../../styles/assets/images/Skill=React.png";
import bemLogo from "../../styles/assets/images/Skill=BEM.png";
import scssLogo from "../../styles/assets/images/Skill=SCSS.png";
import jscriptLogo from "../../styles/assets/images/Skill=JavaScript.png";
import cssLogo from "../../styles/assets/images/Skill=CSS3.png";
import htmlLogo from "../../styles/assets/images/Skill=HTML5.png";
import gitLogo from "../../styles/assets/images/Skill=Git.png";

const Languages = () => {
  return (
    <div id="lang" className="language-container">
      <div className="language-content">
        <div className="language-content__text-container">
          <div className="language-content__title-container">
            <h1 className="language-content__title">Technical Skills</h1>
          </div>
          <div className="language-content__intro-container">
            <p className="language-content__intro">
              During my time at _nology, I have begun my Coding journey learning
              the following skills below.
            </p>
          </div>
        </div>
        <div className="language-content__image-container">
          <img
            className="language-content__image"
            src={springBootLogo}
            alt="Springboot Logo"
          />
          <img
            className="language-content__image"
            src={javaLogo}
            alt="Java Logo"
          />
          <img
            className="language-content__image"
            src={reactLogo}
            alt="React Logo"
          />
          <img
            className="language-content__image"
            src={bemLogo}
            alt="BEM Logo"
          />
          <img
            className="language-content__image"
            src={scssLogo}
            alt="SCSS Logo"
          />
          <img
            className="language-content__image"
            src={jscriptLogo}
            alt="JavaScript Logo"
          />
          <img
            className="language-content__image"
            src={cssLogo}
            alt="CSS Logo"
          />
          <img
            className="language-content__image"
            src={htmlLogo}
            alt="HTML Logo"
          />
          <img
            className="language-content__image"
            src={gitLogo}
            alt="Git Logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Languages;
