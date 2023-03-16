import React from "react";
import "./Projects.scss";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

const Projects = () => {
  return (
    <div className="project-container">
      <div className="project-content">
        <div className="project-content__title"></div>
        <div className="project-content__card-container">
          <ProjectCard
            title={"Calculator"}
            language={"JavaScript"}
            info={
              "This is my Calculator project. This was my first attempt at a project introducing JavaScript"
            }
          />
          <ProjectCard
            title={"Connect 4"}
            language={"JavaScript"}
            info={`This is my Game project. I decided to create Connect Four, if you fancy a game click "Preview". `}
          />
          <ProjectCard
            title={"IPA Punk API"}
            language={"React"}
            info={
              "This was my first project using React and extracting data from an API."
            }
          />
          <ProjectCard
            title={"Client Project"}
            language={"React"}
            info={
              "This was my first introduction to a real-life coding working enviroment. We were peer-programming our way though tickets to deliver this impressive site in a small frame of time."
            }
          />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </div>
  );
};

export default Projects;
