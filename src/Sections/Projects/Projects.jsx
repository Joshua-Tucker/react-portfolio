import React from "react";
import "./Projects.scss";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import calculatorDImg from "../../styles/assets/images/darkmode.jpeg";
import calculatorLImg from "../../styles/assets/images/lightmode.jpeg";
import connect4Img from "../../styles/assets/images/connect-four.jpeg";
import punkImg from "../../styles/assets/images/punk.jpeg";

const Projects = () => {
  return (
    <div className="project-container">
      <div className="project-content">
        <div className="project-content__title"></div>
        <div className="project-content__card-container">
          <ProjectCard
            type={"projectCard2"}
            title={"Calculator"}
            language={"JavaScript"}
            info={
              "This is my Calculator project. This was my first attempt at a project introducing JavaScript"
            }
            image={calculatorDImg}
            image2={calculatorLImg}
          />
          <ProjectCard
            type={"projectCard"}
            title={"Connect 4"}
            language={"JavaScript"}
            info={`This is my Game project. I decided to create Connect Four, if you fancy a game click "Preview". `}
            image={connect4Img}
          />
          <ProjectCard
            type={"projectCard"}
            title={"IPA Punk API"}
            language={"React"}
            info={
              "This was my first project using React and extracting data from an API."
            }
            image={punkImg}
          />
          <ProjectCard
            type={"projectCard"}
            title={"Client Project"}
            language={"React"}
            info={
              "This was my first introduction to a real-life coding working enviroment. We were peer-programming our way though tickets to deliver this impressive site in a small frame of time."
            }
            image={punkImg}

          />
          {/* <ProjectCard />
          <ProjectCard /> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
