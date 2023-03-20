import { useState } from "react";
import leftArrow from "../../styles/assets/images/left-arrow.png";
import rightArrow from "../../styles/assets/images/right-arrow.png";
import ProjectCard from "../ProjectCard/ProjectCard";
// import calculatorDImg from "../../styles/assets/images/darkmode.jpeg";
// import calculatorLImg from "../../styles/assets/images/lightmode.jpeg";
// import connect4Img from "../../styles/assets/images/connect-four.jpeg";
import punkImg from "../../styles/assets/images/punk.jpeg";

import "./Carousel.scss";

const Carousel = ({ project }) => {
  const [counter, setCounter] = useState(0);
  const [showProject, setShowProject] = useState(false);

  const handleIncrement = () => {
    if (counter === project.length - 1) {
      setCounter(0);
    } else {
      setCounter(counter + 1);
    }
  };

  const handleDecrement = () => {
    if (counter === 0) {
      setCounter(project.length - 1);
    } else {
      setCounter(counter - 1);
    }
  };

  const toggleProject = () => {
    setShowProject(!setShowProject);
  };

  return (
    <div className="carousel">
      {showProject && (
        <ProjectCard
          type={"one"}
          title={"Client Project"}
          language={"React"}
          info={
            "This was my first introduction to a real-life coding working enviroment. We were peer-programming our way though tickets to deliver this impressive site in a small frame of time."
          }
          image={punkImg}
          toggleProject={toggleProject}
        />
      )}
      <img
        src={leftArrow}
        alt="left arrow"
        onClick={handleDecrement}
        className="carousel__arrow carousel__arrow--left"
      />
      <img
        src={project[counter]}
        alt=""
        className="carousel__image"
        onClick={toggleProject}
      />
      <img
        src={rightArrow}
        alt="right arrow"
        onClick={handleIncrement}
        className="carousel__arrow carousel__arrow--right"
      />
    </div>
  );
};

export default Carousel;
