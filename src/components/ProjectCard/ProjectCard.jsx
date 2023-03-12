import React from "react";
import Button from "../Button/Button"

const ProjectCard = () => {
  return (
    <div className="projectCard">
      <div className="projectCard__image-container"></div>
      <div className="projectCard__content-container">
        <div className="projectCard__content-language"></div>
        <div className="projectCard__content-title"></div>
        <div className="projectCard__content-info"></div>
      </div>
      <div className="projectCard__button-container">
        <Button buttonStyle="projectCode" text="Code"/>
        <Button buttonStyle="projectPreview" text="Preview"/>
      </div>
    </div>
  );
};

export default ProjectCard;
