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
    <div className="language-container">
      <div className="language-content">
        <div className="language-content__text-container">
          <div className="language-content__text-container-title">
            <h1>Technical Skills</h1>
          </div>
          <div className="language-content__text-container-intro">
            <p>
              During my time at _nology, I have begun my Coding journey learning
              the following skills below.
            </p>
          </div>
        </div>
        <div className="language-content__image-container">
          <img src={springBootLogo} alt="Springboot Logo"/>
          <img src={javaLogo} alt="Java Logo"/>
          <img src={reactLogo} alt="React Logo"/>
          <img src={bemLogo} alt="BEM Logo"/>
          <img src={scssLogo} alt="SCSS Logo"/>
          <img src={jscriptLogo} alt="JavaScript Logo"/>
          <img src={cssLogo} alt="CSS Logo"/>
          <img src={htmlLogo} alt="HTML Logo"/>
          <img src={gitLogo} alt="Git Logo"/>
        </div>
      </div>
    </div>
  );
};

export default Languages;
