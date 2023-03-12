import React from "react";

const ProjectCard = () => {
  return (
    <div className="projectCard">
      <div className="projectCard__image-container"></div>
      <div className="projectCard__content-container">
        <div className="projectCard__content-language"></div>
        <div className="projectCard__content-title"></div>
        <div className="projectCard__content-info"></div>
      </div>
      <div className="projectCard__button-container"></div>
    </div>
  );
};

export default ProjectCard;
