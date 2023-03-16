import React from "react";
import "./ProjectCard.scss";
import Button from "../Button/Button";

const ProjectCard = ({ info, title, language, image }) => {
  return (
    <div className="projectCard">
      <div className="projectCard__image-container">
        <img src={image} alt={title} />
      </div>
      <div className="projectCard__content-container">
        <div className="projectCard__content-language">
          <h2>{language}</h2>
        </div>
        <div className="projectCard__content-title">
          <h1>{title}</h1>
        </div>
        <div className="projectCard__content-info">
          <p>{info}</p>
        </div>
      </div>
      <div className="projectCard__button-container">
        <Button buttonStyle="projectCode" text="Code" />
        <Button buttonStyle="projectPreview" text="Preview" />
      </div>
    </div>
  );
};

export default ProjectCard;
