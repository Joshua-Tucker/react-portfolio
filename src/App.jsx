import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import AboutMe from "./Sections/AboutMe/AboutMe";
import Contact from "./Sections/Contact/Contact";
import Footer from "./Sections/Footer/Footer";
import Intro from "./Sections/Intro/Intro";
import Languages from "./Sections/Languages/Languages";
import Projects from "./Sections/Projects/Projects";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/contact" element={<Contact />}></Route>
          <Route
            path="/react-portfolio"
            element={
              <>
                <Intro />
                <AboutMe />
                <Projects />
                <Languages />
                <Footer />
              </>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
