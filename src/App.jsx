import "./App.scss"
import AboutMe from './Sections/About me/AboutMe';
import Footer from './Sections/Footer/Footer';
import Header from './Sections/Header/Header';
import Intro from './Sections/Intro/Intro';
import Languages from './Sections/Languages/Languages';
import Projects from './Sections/Projects/Projects';

function App() {
  return (
    <div className="App">

      <Header/>
      <Intro/>
      <AboutMe/>
      <Languages/>
      <Projects/>
      <Footer/>


    </div>
  );
}

export default App;
