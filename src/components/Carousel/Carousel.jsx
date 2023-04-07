import calculatorDImg from "../../styles/assets/images/darkmode.jpeg";
import calculatorLImg from "../../styles/assets/images/lightmode.jpeg";
import connect4Img from "../../styles/assets/images/connect-four.jpeg";
import punkImg from "../../styles/assets/images/punk.jpeg";
import CarouselImport from "react-elastic-carousel";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import clientImg from "../../styles/assets/images/clientProject.jpeg";

import "./Carousel.scss";

const Carousel = () => {
  const webLink = (url) => {
    return () => {
      window.open(url, "_blank");
    };
  };

  return (
    <>
      <CarouselImport>
        <ProjectCard
          type={"two"}
          title={"Calculator"}
          language={"JavaScript"}
          info={
            "This is my Calculator project. This was my first attempt at a project introducing JavaScript"
          }
          image={calculatorDImg}
          image2={calculatorLImg}
          code={webLink("https://github.com/Joshua-Tucker/Calculator")}
          preview={webLink("https://joshua-tucker.github.io/Calculator/")}
        />
        <ProjectCard
          type={"one"}
          title={"Connect 4"}
          language={"JavaScript"}
          info={`This is my Game project. I decided to create Connect Four, if you fancy a game click "Preview". `}
          image={connect4Img}
          code={webLink("https://github.com/Joshua-Tucker/project-game")}
          preview={webLink("https://joshua-tucker.github.io/project-game/")}
        />
        <ProjectCard
          type={"one"}
          title={"IPA Punk API"}
          language={"React"}
          info={
            "This was my first project using React and extracting data from an API."
          }
          image={clientImg}
          code={webLink("https://github.com/Joshua-Tucker/new-punk")}
          preview={webLink("https://joshua-tucker.github.io/new-punk/")}
        />
        <ProjectCard
          type={"one"}
          title={"Client Project"}
          language={"React"}
          info={
            "This was my first introduction to a real-life coding working enviroment. We were peer-programming our way though tickets to deliver this impressive site in a small frame of time."
          }
          image={punkImg}
          code={webLink("https://github.com/nology-tech/Sable-client-project")}
          preview={webLink("https://sable-client-project.web.app/")}
        />
        <ProjectCard
          type={"one"}
          title={"Full Stack Project"}
          language={"React/Java/SQL"}
          info={
            "The final project! Combining knowledge of front and back end to develop this Ski Resort Api."
          }
          image={punkImg}
          code={webLink("")}
          preview={webLink("")}
        />
      </CarouselImport>
    </>
  );
};

export default Carousel;
