import React from "react";
import "./ProjectCard.scss";
import Button from "../Button/Button";

const ProjectCard = ({ type, info, title, language, image, image2, toggleProject }) => {

  let cardType = "projectCard";
  cardType+= " "+type;

  const projectCardJSX = () => (
    <div className={cardType}>
      <div className="projectCard__image-container">
        <img className="projectCard__image" src={image} alt={title} />
      </div>
      <div className="projectCard__content-container">
        <div className="projectCard__content-language-container">
          <h3 className="projectCard__content-language">{language}</h3>
        </div>
        <div className="projectCard__content-title-container">
          <h1 className="projectCard__content-title">{title}</h1>
        </div>
        <div className="projectCard__content-info-container">
          <p className="projectCard__content-info">{info}</p>
        </div>
      </div>
      <div className="projectCard__button-container">
        <Button buttonStyle="projectCode" text="Code" />
        <Button buttonStyle="projectPreview" text="Preview" />
      </div>
    </div>
  );

  const projectCard2JSX = () => (
    <div className={cardType}>
      <div className="projectCard__image-container">
        <img className="projectCard__image" src={image} alt={title} />
        <img className="projectCard__image" src={image2} alt={title} />
      </div>
      <div className="projectCard__content-container">
        <div className="projectCard__content-language-container">
          <h3 className="projectCard__content-language">{language}</h3>
        </div>
        <div className="projectCard__content-title-container">
          <h1 className="projectCard__content-title">{title}</h1>
        </div>
        <div className="projectCard__content-info-container">
          <p className="projectCard__content-info">{info}</p>
        </div>
      </div>
      <div className="projectCard__button-container">
        <Button buttonStyle="projectCode" text="Code" />
        <Button buttonStyle="projectPreview" text="Preview" />
      </div>
    </div>
  );
  return (
    <>
      {type === "one"
        ? projectCardJSX()
        : type === "two"
        ? projectCard2JSX()
        : alert("Unknown Project Card Type")}
    </>
  );
};

export default ProjectCard;
