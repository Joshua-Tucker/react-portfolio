import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import "./Contact.scss";
import insta from "../../styles/assets/images/insta1.png";
import github from "../../styles/assets/images/github.png";
import logo from "../../styles/assets/images/logoBig.png";
import home from "../../styles/assets/images/home.png";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="header">
        <div className="header__info">
          <h2 className="header__name">Joshua Tucker</h2>
          <img className="header__image" src={logo} alt="logo" />
        </div>
        <Link style={{ textDecoration: "none" }} to={"/react-portfolio"}>
          <img className="header__home" src={home} alt="home button" />
        </Link>
      </div>
      <div className="contact">
        <div className="contact__content">
          <div className="contact__title-container">
            <h1 className="contact__title">Let's get in touch</h1>
          </div>
          <div className="contact__tiles">
            <div className="contact__basics-container">
              <h3 className="contact__sub-title">Contact</h3>
              <p className="contact__text">joshuaatucker@hotmail.com</p>
            </div>
            <div className="contact__socials-container">
              <h3 className="contact__sub-title">Socials</h3>
              <div className="contact__socials-container">
                <a
                  href="https://www.instagram.com/joshtucker17/"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <div className="contact__info">
                    <img
                      src={insta}
                      alt="Instagram logo"
                      className="contact__image"
                    />
                    <p className="contact__text">joshtucker17</p>
                  </div>
                </a>
              </div>
              <a
                href="https://github.com/Joshua-Tucker"
                style={{ textDecoration: "none", color: "black" }}
              >
                <div className="contact__info">
                  <img
                    src={github}
                    alt="Github logo"
                    className="contact__image"
                  />
                  <p className="contact__text">
                    https://github.com/Joshua-Tucker
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className="contact__footer-container">
            <h3 className="contact__footer">
              Email would be the best way to get in touch but if you'd rather
              talk in person then ask through one of the above channels and I
              can give you a direct line.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
