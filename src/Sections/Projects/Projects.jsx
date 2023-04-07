import React from "react";
import "./Projects.scss";
import Carousel from "../../components/Carousel/Carousel";

const Projects = () => {
  return (
    <div id="projects" className="project-container">
      <div className="project-content">
        <div className="project-content__title-container">
          <h1 className="project-content__title">My Projects</h1>
        </div>
        <div className="project-content__card-container">
          <Carousel />
        </div>
      </div>
    </div>
  );
};

export default Projects;
