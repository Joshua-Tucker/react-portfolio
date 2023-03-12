import React from "react";
import "./Projects.scss"
import ProjectCard from "../../components/ProjectCard/ProjectCard";

const Projects = () => {
  return (
    <div className="project-container">
      <div className="project-content">
        <div className="project-content__title"></div>
        <div className="project-content__card-container">
          <ProjectCard/>
        </div>
      </div>
    </div>
  );
};

export default Projects;
