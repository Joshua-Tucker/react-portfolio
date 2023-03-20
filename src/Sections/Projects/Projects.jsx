import React from "react";
import "./Projects.scss";
// import ProjectCard from "../../components/ProjectCard/ProjectCard";
import calculatorDImg from "../../styles/assets/images/darkmode.jpeg";
import calculatorLImg from "../../styles/assets/images/lightmode.jpeg";
import connect4Img from "../../styles/assets/images/connect-four.jpeg";
import punkImg from "../../styles/assets/images/punk.jpeg";
import Carousel from "../../components/Carousel/Carousel";

const Projects = () => {
  const projectArr = [
    connect4Img,punkImg,calculatorDImg,calculatorLImg
    // <ProjectCard
    //   type={"two"}
    //   title={"Calculator"}
    //   language={"JavaScript"}
    //   info={
    //     "This is my Calculator project. This was my first attempt at a project introducing JavaScript"
    //   }
    //   image={calculatorDImg}
    //   image2={calculatorLImg}
    // />,
    // <ProjectCard
    //   type={"one"}
    //   title={"Connect 4"}
    //   language={"JavaScript"}
    //   info={`This is my Game project. I decided to create Connect Four, if you fancy a game click "Preview". `}
    //   image={connect4Img}
    // />,
    // <ProjectCard
    //   type={"one"}
    //   title={"IPA Punk API"}
    //   language={"React"}
    //   info={
    //     "This was my first project using React and extracting data from an API."
    //   }
    //   image={punkImg}
    // />,
    // <ProjectCard
    //   type={"one"}
    //   title={"Client Project"}
    //   language={"React"}
    //   info={
    //     "This was my first introduction to a real-life coding working enviroment. We were peer-programming our way though tickets to deliver this impressive site in a small frame of time."
    //   }
    //   image={punkImg}
    // />,
  ];

  return (
    <div className="project-container">
      <div className="project-content">
        <div className="project-content__title-container">
          <h1 className="project-content__title">My Projects</h1>
        </div>
        <div className="project-content__card-container">
        <Carousel project={projectArr}/>

          {/* <ProjectCard />
          <ProjectCard /> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
